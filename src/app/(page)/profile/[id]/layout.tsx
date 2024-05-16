'use client';

import { useSession } from 'next-auth/react';
import { notFound, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const { data: session } = useSession();

    useEffect(() => {
        if (!session?.user || session?.user.id !== params.id) {
            return notFound();
        }
    });

    return children;
}
