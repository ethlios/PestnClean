import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function SummaryProduct(props: IAppProps) {
    return (
        <div className={'flex mt-5'}>
            <Image src={''} alt={''} width={70} height={90} className={'bg-gray-100'} />
            <div className={`${cx('product-detail')} flex flex-col justify-center ml-2`}>
                <p className={cx('product-name')}>Tinh dầu chanh Viet Oils</p>
                <div className="flex">
                    <p>1.100.000 đ</p>
                    <p className={'ml-2'}>x{``}</p>
                    <p className={'ml-2'}>2</p>
                </div>
            </div>
        </div>
    );
}
