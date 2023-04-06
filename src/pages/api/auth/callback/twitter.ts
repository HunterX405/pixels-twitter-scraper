import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

const options = {
  providers: [
    TwitterProvider({
        clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET!
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default async function callback(req: any, res: any) {
    try {
      await NextAuth(req, res, options);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" })
    }
  }