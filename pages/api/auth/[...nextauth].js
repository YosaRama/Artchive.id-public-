import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "app/helpers/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials, req) {
        //? Check email or username
        //TODO: Insert Query for get user from database
        const user = {
          message: "GET email or username from database",
          password: "This is the password",
        };

        //? Condition where user not found
        if (!user) {
          throw new Error("User not found");
        }

        //? Check user password
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        //? Password not Valid
        if (!isValid) {
          throw new Error("Incorrect username and password");
        }

        return { message: "Successfully Login", email: user.email };
      },
    }),
    Providers.Google({
      clientId: "GET from Google API",
      clientSecret: "GET from Google API",
      authorizationUrl: "GET from Google API",
    }),
    Providers.Facebook({
      clientId: "GET from Facebook API",
      clientSecret: "GET from Facebook API",
    }),
  ],
  callbacks: {
    //* Setting for SignIn Fucntion
    async signIn(user, account, profile) {
      if (account.provider == "google" || account.provider == "facebook") {
        //? Function for handling someone login with Google or Facebook
        return;
      }
    },
    //* Setting JWT Token
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      token = {
        email: token.email,
      };
      return token;
    },
    //* Setting Session
    async session(session, token) {
      session.accessToken = token.accessToken;
      //? Get Data from database and parsing to session
      session.user = {
        id: "User ID",
        role: "User Role",
      };
    },
  },
});
