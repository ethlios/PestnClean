import FaqCPPage from '~/components/Faq/Faq';
import Image from 'next/image';
import { Suspense } from 'react';

export interface IAppProps {}

export default function FaqPage(props: IAppProps) {
    return (
        <Suspense>
            <FaqCPPage />
        </Suspense>
    );
}
