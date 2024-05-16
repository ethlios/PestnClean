'use client';

import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();

    useEffect(() => {
        if (!session?.user || session?.user.rule !== 'admin') {
            return notFound();
        }
    });

    return children;
}
