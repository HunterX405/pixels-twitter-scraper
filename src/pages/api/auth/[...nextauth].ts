import TwitterProvider from "next-auth/providers/twitter"
import NextAuth, { NextAuthOptions } from "next-auth"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_ID!,
            clientSecret: process.env.TWITTER_SECRET!,
            version: "2.0",
        }),
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
              token.accessToken = account.access_token
            }
            return token
          },
          async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.

            return session
          },
          async signIn({ user, account, profile, email, credentials }) {
              const isAllowedToSignIn = true
              if (isAllowedToSignIn) {
                return true
              } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
              }
            }
    },
}

export default NextAuth(authOptions)