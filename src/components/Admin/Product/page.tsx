import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import AdminAddProduct from './AddProduct';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { removeProduct } from '~/redux/actions';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';
import { useDebounce } from '@react-hooks-library/core';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminProduct(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [addProduct, setAddProduct] = useState<boolean>(false);
    let products: any = useSelector((state: RootState) => state.main.products);
    const dispatch = useDispatch();
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const debouncedText = useDebounce(searchValue, 200);

    const handleDeleteProduct = (id: number) => {
        dispatch(removeProduct(id));
    };

    if (debouncedText) {
        products = products.filter((product: any) => {
            return (
                removeVietnameseTones(product.title)
                    .toLowerCase()
                    .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
            );
        });
    }

    return (
        <>
            {addProduct && (
                <AdminAddProduct
                    setAddProduct={setAddProduct}
                    updateProduct={updateProduct}
                    setUpdateProduct={setUpdateProduct}
                />
            )}
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setAddProduct(true)}>
                        Thêm sản phẩm
                    </button>
                </div>
                <p className={cx('common-title')}>Products: {products.length}</p>
                <input
                    type="text"
                    placeholder="Search product..."
                    className={cx('common-inp')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <div className={cx('common-item-wrapper')}>
                    {products.length > 0 ? (
                        <div className={cx('product-wrapper')}>
                            {products.map((product: any, index: number) => {
                                return (
                                    <div key={index} className={cx('product-item')}>
                                        <div className={cx('product-img')}>
                                            {product.Image ? (
                                                <Image
                                                    src={!!product.Image ? product.Image[0] : ''}
                                                    alt={product.title}
                                                    width={1000}
                                                    height={1000}
                                                />
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>{product.title}</p>
                                            <p className={cx('product-des')}>{product.desHead}</p>
                                            <p className={cx('product-price')}>
                                                {formatter.format(+product.price)}
                                            </p>
                                        </div>
                                        <div className={cx('product-btn')}>
                                            <div
                                                onClick={() => {
                                                    setUpdateProduct(product);
                                                    setAddProduct(true);
                                                }}
                                            >
                                                <DriveFileRenameOutlineOutlinedIcon />
                                            </div>
                                            <div
                                                onClick={() => {
                                                    if (confirm('Bạn có chắc chắn muốn xóa?')) {
                                                        handleDeleteProduct(product.id);
                                                    }
                                                }}
                                            >
                                                <DeleteOutlinedIcon />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className={cx('common-p')}>Không có sản phẩm nào!</p>
                    )}
                </div>
            </div>
        </>
    );
}
