import { Provider } from "next-auth/providers";
import TwitterProvider from "next-auth/providers/twitter"
import { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { NextAuthOptions, Session, User } from "next-auth"

const options: NextAuthOptions = {
    providers: [
        TwitterProvider({
            clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET!
        }),
    ],
    callbacks: {
        async signIn(params) {
            const { user, account, profile } = params;
            // your code here
            return true;
        },
        async session(params) {
            const { session, user } = params;
            // your code here
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default (req: any, res: any) => NextAuth(req, res, options)