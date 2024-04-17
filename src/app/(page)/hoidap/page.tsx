import FaqCPPage from '~/components/Faq/Faq';
import Image from 'next/image';
import { Suspense } from 'react';

export interface IAppProps {}

export default function FaqPage(props: IAppProps) {
    return (
        <Suspense>
            <div className={'w-full'}>
                <Image
                    src={
                        'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713270511/question-mark-query-information-support-service-graphic_lhkaqg.jpg'
                    }
                    alt={'Banner FAQs'}
                    height={2000}
                    width={1980}
                    className={'bg-gray-200 h-auto md:h-80'}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </div>
            <FaqCPPage />
        </Suspense>
    );
}
