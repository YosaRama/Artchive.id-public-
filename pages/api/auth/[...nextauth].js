import NextAuth from "next-auth";

// Provider
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// Helper
import { verifyPassword } from "app/helpers/auth";

// Query
import { GET_USER_BY_EMAIL } from "app/database/query/user";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: "DJBSMhV4ynvoQNjVFJpzmAvxyyLQeDPZjfPzzplNPJc=",
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
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

        return { message: "Successfully Login", user: userFound };
      },
    }),
    GoogleProvider({
      clientId: "GET from Google API",
      clientSecret: "GET from Google API",
      authorizationUrl: "GET from Google API",
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
    },
    //* Setting JWT Token
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.user = user; // Insert user to token for access on session
      }
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
