import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductImage(props: IAppProps) {
    return (
        <div className={cx('product-img')}>
            <div className={cx('thumbnail')}>
                <Image src={''} alt={''} width={300} height={300} className={'bg-gray-200'} />
                <Image src={''} alt={''} width={300} height={300} className={'bg-gray-200'} />
            </div>
            <div className={cx('img')}>
                <Image src={''} alt={''} width={1000} height={1000} className={'bg-gray-200'} />
                <Image src={''} alt={''} width={1000} height={1000} className={'bg-gray-200'} />
            </div>
        </div>
    );
}