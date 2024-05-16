import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';

const cx = classNames.bind(styles);

export interface IAppProps {
    item: any;
}

export default function SummaryProduct({ item }: IAppProps) {
    return (
        <div className={'flex mt-5'}>
            <Image src={item.img} alt={''} width={70} height={90} />
            <div className={`${cx('product-detail')} flex flex-col justify-center ml-2`}>
                <p className={cx('product-name')}>{item.title}</p>
                <div className="flex">
                    <p>{formatter.format(+item.priceSales || +item.price)}</p>
                    <p className={'ml-2'}>x{``}</p>
                    <p className={'ml-2'}>{item.quantity}</p>
                </div>
            </div>
        </div>
    );
}
