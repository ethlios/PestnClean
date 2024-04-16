import FaqCPPage from '~/components/Faq/Faq';
import Image from 'next/image';

export interface IAppProps {
}

export default function FaqPage(props: IAppProps) {
    return (
        <>
            <div className={'w-full'}>
                <Image src={''} alt={'Banner FAQs'} width={1980} className={'bg-gray-200 h-auto md:h-80'} />
            </div>
            <FaqCPPage />
        </>

    );
}