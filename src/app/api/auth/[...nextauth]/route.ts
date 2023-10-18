import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-cool-username-or-email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      // @ts-ignore
      async authorize(credentials) {
        const user = {
          id: 1,
          name: "John Doe",
          email: "quanva2521@gmail.com",
          username: "quanva2521",
          password: "123456",
          role: "admin",
        };
        if (
          (user.email === credentials?.username ||
            user.username === credentials?.username) &&
          user.password === credentials?.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
