import classNames from 'classnames/bind';
import styles from './cart.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function DiscountCode(props: IAppProps) {
    return (
        <div className="my-3">
            <p className={cx('title')}>Mã khuyến mãi</p>
            <p className={cx('description')}>Nhập mã khuyến mãi để được giảm giá!</p>
            <div className={cx('input-code')}>
                <input type="text"></input>
                <button>Gửi</button>
            </div>
        </div>
    );
}
