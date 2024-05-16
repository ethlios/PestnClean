import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            accessToken: string;
            refreshRoken: string;
            picture: string;
            image: string;
            rule: string;
            address: string;
            phone: string;
            ward: string;
            city: string;
            district: string;
        };
    }
}
