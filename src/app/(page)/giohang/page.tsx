import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '../../../components/Cart/cart.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BuyItem from '~/components/Cart/BuyItem';
import CheckoutPanel from '~/components/Cart/CheckoutPanel';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CartPage(props: IAppProps) {
    return (
        <div className={'container cpmount'}>
            {/*Header title*/}
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/cart">Giỏ hàng</Link>
            </div>
            <div className={cx('decoration')}></div>
            {/*Main*/}
            <div className={'grid grid-cols-12 gap-6 mb-20'}>
                {/*Visual Content*/}
                <div className={'col-span-12 md:col-span-8 gap-3 flex flex-col'}>
                    {/*Item*/}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <BuyItem key={index} />
                    ))}
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    {/*Checkout panel*/}
                    <CheckoutPanel />
                </div>
            </div>
            {/*Back to shop*/}
            <div className={'my-20'}>
                <Link href={'/sanpham'} className={'inline-flex items-center'}>
                    <ArrowBackIosIcon />
                    <h1 className={'font-bold'}>Trở lại mua sắm</h1>
                </Link>
            </div>
        </div>
    );
}
