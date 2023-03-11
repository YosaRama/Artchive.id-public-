import NextAuth from "next-auth";

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
import { sendOtpMessage } from "app/utils/whatsapp";
import { generateOtp } from "app/utils/otp-generator";

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

        if (loginMethod === "phone") {
          const userPhone = {
            phone: credentials.phoneNumber,
          };
          const userFound = await GET_USER_BY_PHONE_NUMBER({ phoneNumber: userPhone.phone });
          sendOtpMessage({
            phoneNumber: credentials.phoneNumber,
            fullName: userFound.full_name,
            otpCode: generateOtp(),
          });
          if (!userFound) {
            throw new Error("User account doesn't exist. Enter a different account!");
          }
          if (!userFound.status) {
            throw Error("INACTIVE");
          }
          return { message: "Successfully Login", user: userFound };
        }
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
      //? ============== Handle Credentials Login ============= ?//
      if (account.provider == "credentials") {
        return true;
      }
      // * ====================================== * //

      //? ============== Handle Google Login ============= ?//
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
      // * ====================================== * //
    },
    //* Setting JWT Token
    async jwt({ token, user, account, profile, isNewUser }) {
      //? ============== Handle Token Credentials Login ============= ?//
      if (account?.provider === "credentials") {
        token.user = user; // Insert user to token for access on session
      }
      // * ====================================== * //
      //? ============== Handle Token Google Login ============= ?//
      if (account?.provider === "google" || account?.provider === "facebook") {
        // Get user with email
        const existsUser = await GET_USER_BY_EMAIL({ email: user.email });
        token.user = { user: existsUser };
      }
      // * ====================================== * //
      return token;
    },
    //* Setting Session
    async session({ session, user, token }) {
      // Setup Session with data from token
      session.user.id = token.user.user.id;
      session.user.email = token.user.user.email;
      session.user.full_name = token.user.user.full_name;
      session.user.role = token.user.user.role;
      session.user.image = token.user.user.profile?.url || null;

      return session;
    },
  },
});
