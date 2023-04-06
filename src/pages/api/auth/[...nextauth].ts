import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET!
        }),
    ],
    callbacks: {
        session({ session, token, user }) {
          return session // The return type will match the one returned in `useSession()`
        }
    },
    secret: process.env.NEXTAUTH_SECRET
});