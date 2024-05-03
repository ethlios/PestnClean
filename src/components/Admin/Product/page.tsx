import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import AdminAddProduct from './AddProduct';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminProduct(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [addProduct, setAddProduct] = useState<boolean>(false);

    return (
        <>
            {addProduct && <AdminAddProduct setAddProduct={setAddProduct} />}
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setAddProduct(true)}>
                        Thêm sản phẩm
                    </button>
                </div>
                <p className={cx('common-title')}>Products: </p>
                <input
                    type="text"
                    placeholder="Search product..."
                    className={cx('common-inp')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <div className={cx('common-item-wrapper')}></div>
            </div>
        </>
    );
}
