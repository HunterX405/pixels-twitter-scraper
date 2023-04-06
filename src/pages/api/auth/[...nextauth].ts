import TwitterProvider from "next-auth/providers/twitter"
import NextAuth, { NextAuthOptions, Session, User } from "next-auth"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_ID!,
            clientSecret: process.env.TWITTER_SECRET!,
        }),
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
    },
}

export default NextAuth(authOptions)