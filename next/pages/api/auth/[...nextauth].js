import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import ZohoProvider from "next-auth/providers/zoho";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '2db48aab0372fd4fcb5f',
            clientSecret: 'efec2c86bc62980f5238df6209f79088b3f731d9',
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true // false == 403
        }
    },
    // pages: { signIn: '/auth/signin' }
}

export default NextAuth(authOptions)