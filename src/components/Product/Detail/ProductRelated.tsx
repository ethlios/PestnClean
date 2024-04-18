import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductRelated(props: IAppProps) {
    return (
        <div className={cx('product-related')}>
            <p className={cx('related-title')}>Sản phẩm liên quan</p>
            <div className={cx('horizontal-decor')} />
            <div className={cx('product-item')}>
                {Array.from({ length: 4 }).map((_, index) => {
                    return (
                        <div className={cx('content-item')} key={index}>
                            <div className={cx('item-img')}>
                                <div className={cx('item-event-hot')}>
                                    <p>Hot</p>
                                </div>
                            </div>
                            <p className={cx('item-category')}>SẢN PHẨM GIẢI PHÁP VỆ SINH</p>
                            <p className={cx('item-name')}>Tinh dầu Chanh Viet Oils</p>
                            <p className={cx('item-price')}>
                                1.100.000 <u>đ</u>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
