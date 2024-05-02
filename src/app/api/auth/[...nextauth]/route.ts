import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import prisma from '~/libs/orthers/prisma';
import { signJwtAccessToken } from '~/libs/orthers/jwt';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
        }),
    ],
    session: {
        maxAge: 604800, //--> Lưu đăng nhập trong vòng 30 ngày
    },
    callbacks: {
        async jwt({ token, user, trigger, session, account }) {
            if (trigger === 'update') {
                if (session.info) {
                    return { ...token, ...user, ...session.info };
                }
            }
            if (account?.provider === 'google') {
                const res = await prisma.user.findFirst({
                    where: { id: user.id },
                });
                if (res) {
                    const { ...userWithoutPass } = res;
                    const accessToken = signJwtAccessToken(userWithoutPass);
                    return { ...token, ...user, ...res, accessToken };
                } else {
                    const defaultSession = {
                        name: 'ABC',
                    };
                    const accessToken = signJwtAccessToken(defaultSession);
                    return { ...token, ...user, accessToken };
                }
            } else if (account?.provider === 'facebook') {
                const res = await prisma.user.findFirst({
                    where: { id: user.id },
                });
                if (res) {
                    const { ...userWithoutPass } = res;
                    const accessToken = signJwtAccessToken(userWithoutPass);
                    return { ...token, ...user, ...res, accessToken };
                } else {
                    const defaultSession = {
                        name: 'ABC',
                    };
                    const accessToken = signJwtAccessToken(defaultSession);
                    return { ...token, ...user, accessToken };
                }
            }

            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/',
    },
});

export { handler as GET, handler as POST };
