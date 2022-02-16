import NextAuth from "next-auth";

// Provider
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// Helper
import { verifyPassword } from "app/helpers/auth";
import { slugParse } from "app/helpers/slugParse";

// Query
import { GET_USER_BY_EMAIL, CREATE_USER, CHECK_USER_BY_SLUG } from "app/database/query/user";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: "TVmJCqoONdD1T1QFuIF3IPzGuvGXWdpyyStjXqydcWI=",
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        //? Check email or username
        const userFound = await GET_USER_BY_EMAIL({ email: userCredentials?.email });

        if (!userFound.status) {
          throw Error("INACTIVE");
        }

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

        return { message: "Successfully Login", user: userFound };
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
      clientId: "GET from Facebook API",
      clientSecret: "GET from Facebook API",
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
      if (account.provider === "google") {
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
              role: "ARTIST", //TODO : Create Modal Choosing role
            });
          }

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // * ====================================== * //
    },
    //* Setting JWT Token
    async jwt({ token, user, account, profile, isNewUser }) {
      //? ============== Handle Token Credentials Login ============= ?//
      if (account.provider === "credentials") {
        token.user = user; // Insert user to token for access on session
      }
      // * ====================================== * //
      //? ============== Handle Token Google Login ============= ?//
      if (account.provider === "google") {
        token.user = user;
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
      return session;
    },
  },
});
