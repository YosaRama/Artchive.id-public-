import NextAuth from "next-auth";
import moment from "moment";

// Provider
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// Helper
import { verifyPassword } from "app/helpers/auth";
import { slugParse } from "app/helpers/slugParse";

// Query
import {
  GET_USER_BY_EMAIL,
  CREATE_USER,
  CHECK_USER_BY_SLUG,
  GET_USER_BY_PHONE_NUMBER,
} from "app/database/query/user";
import { GET_AUCTION_DETAILS_USER_LIST } from "app/database/query/auction";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 100 * 24 * 60 * 60, // 1 Days
  },
  jwt: {
    maxAge: 100 * 24 * 60 * 60, // 1 Days
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const loginMethod = credentials?.type;
        const auctionId = credentials?.auctionId;

        //#region Login method by mail
        if (loginMethod === "mail") {
          const userCredentials = {
            email: credentials.email,
            password: credentials.password,
          };
          //? Check email or username
          const userFound = await GET_USER_BY_EMAIL({ email: userCredentials?.email });
          //? Condition where user not found
          if (!userFound) {
            throw new Error("User account doesn't exist. Enter a different account!");
          }
          //? Check user password
          const isValid = await verifyPassword(userCredentials.password, userFound.password);
          //? Password not Valid
          if (!isValid) {
            throw new Error("Incorrect username and password!");
          }
          //? Check user status
          if (!userFound.status) {
            throw Error("INACTIVE");
          }
          return { message: "Successfully Login", user: userFound };
        }
        //#endregion

        // #region Login method by phone
        if (loginMethod === "phone") {
          const userFound = await GET_USER_BY_PHONE_NUMBER({
            phoneNumber: credentials.phone,
          });
          const currentTime = moment();
          const tokenExpired = userFound.otp_expired_date;
          const isValid =
            currentTime.isBefore(moment(tokenExpired)) && credentials.otp === userFound.otp_code;

          if (isValid) {
            return { message: "Successfully Login", user: userFound };
          }

          if (!isValid) {
            throw new Error("Your OTP is not valid, Please resend and try it again!");
          }
        }
        //#endregion

        //#region Login method for Auction
        if (auctionId && loginMethod === "auction") {
          const userFound = await GET_AUCTION_DETAILS_USER_LIST({
            auctionId: auctionId,
            phoneNumber: credentials.phone,
          });
          const isValid = userFound?.result?.length !== 0;

          if (isValid) {
            return {
              message: "Successfully Login",
              user: {
                ...userFound?.result?.[0],
                role: "auction-participant",
                auction_id: auctionId,
                full_name: userFound?.result?.[0]?.name,
              },
            };
          }

          if (!isValid) {
            throw new Error("Sorry your phone number is not registered!");
          }
        }
        //#endregion
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_AUTH_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_AUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    //* Setting for SignIn Fucntion
    async signIn({ user, account, profile, email, credentials }) {
      //#region  Handle Credentials Login
      if (account.provider == "credentials") {
        return true;
      }
      //#endregion

      //#region Handle Google Login
      if (account.provider === "google" || account.provider === "facebook") {
        try {
          // Check existing user
          const existsUser = await GET_USER_BY_EMAIL({ email: user.email });

          // Create User if user exists
          if (!existsUser) {
            const userSlug = await slugParse({
              slugData: user.name,
              checkSlugFunc: CHECK_USER_BY_SLUG,
            });
            const newUser = await CREATE_USER({
              email: user.email,
              fullName: user.name,
              slug: userSlug,
              provider: account.provider.toUpperCase(),
              password: null,
              role: null,
            });
          }

          return true;
        } catch (error) {
          return false;
        }
      }
      //#endregion
    },
    //* Setting JWT Token
    async jwt({ token, user, account, profile, isNewUser }) {
      //#region Handle Token Credentials Login
      if (account?.provider === "credentials") {
        token.user = user; // Insert user to token for access on session
      }
      //#endregion

      //#region Handle Token Google Login
      if (account?.provider === "google" || account?.provider === "facebook") {
        // Get user with email
        const existsUser = await GET_USER_BY_EMAIL({ email: user.email });
        token.user = { user: existsUser };
      }
      //#endregion
      return token;
    },

    //* Setting Session
    async session({ session, user, token }) {
      // Setup Session with data from token
      session.user.id = token.user.user?.id || null;
      session.user.email = token.user.user?.email || null;
      session.user.full_name = token.user.user?.full_name || null;
      session.user.phone_number = token.user.user?.phone_number || null;
      session.user.role = token.user.user?.role || null;
      session.user.image = token.user.user.profile?.url || null;
      session.user.auction_id = token.user.user?.auction_id || null;

      return session;
    },
  },
});
