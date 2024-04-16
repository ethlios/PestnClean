import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function SummaryProduct(props: IAppProps) {
    return (
        <div className={'my-2'}>
            <div className={'flex'}>
                <Image src={''} alt={'product'} width={70} height={90} className={'bg-gray-200'} />
                <div className={'flex flex-col justify-center ml-2'}>
                    <b>Tinh dầu chanh Viet Oils</b>
                    <div className="flex">
                        <p>1</p>
                        <p className={'ml-2'}>x</p>
                        <p className={'ml-2'}>1.100.000 đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}