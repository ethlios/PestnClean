'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';
import { useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
// import { useSelector } from 'react-redux';
// import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

interface ProductOrderProps {
    products?: any;
    setProducts?: any;
}

export default function ProductOrder({ products, setProducts }: ProductOrderProps) {
    // let allProducts: any = useSelector((state: RootState) => state.main.products);
    const [editListProduct, setEditListProduct] = useState<boolean>(false);

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={cx('panel')}>
                <button className={cx('commom-button')} onClick={() => setEditListProduct((prev) => !prev)}>
                    {editListProduct ? 'Xong' : 'Sửa'}
                </button>
            </div>
            <div className={`p-2 ${editListProduct ? 'border' : ''}`}>
                {products.length > 0 && (
                    <>
                        {products.map((item: any) => (
                            <ProductItem
                                item={item}
                                key={item.id}
                                products={products}
                                editListProduct={editListProduct}
                                setProducts={setProducts}
                            />
                        ))}
                        {/*{editListProduct && (*/}
                        {/*    <div className={'flex justify-center my-1'}>*/}
                        {/*        <button className={cx('commom-button')} onClick={() => {}}>*/}
                        {/*            Thêm sản phẩm*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        <div className={'flex justify-end my-2'}>
                            <p className={cx('total-price')}>
                                Tổng tiền:{' '}
                                {formatter.format(
                                    products.reduce(
                                        (acc: number, item: any) => acc + +item.price * +item.quantity,
                                        0,
                                    ),
                                )}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

interface ProductItemProps {
    item: any;
    editListProduct?: boolean;
    products?: any;
    setProducts?: any;
}

export function ProductItem({ item, editListProduct, products, setProducts }: ProductItemProps) {
    const [amount, setAmount] = useState<number>(item.quantity);

    const onAmountChange = (value: number) => {
        setAmount(value);
        if (amount > 1) {
            const newProducts = products.map((product: any) => {
                if (product.id === item.id) {
                    return { ...product, quantity: value };
                }
                return product;
            });
            setProducts(newProducts);
        } else {
            const newProducts = products.filter((product: any) => product.id !== item.id);
            setProducts(newProducts);
        }
    };

    return (
        <div className={'flex mt-5 justify-between'}>
            <div className={'flex'}>
                <Image src={item.img} alt={item.title} width={70} height={90} />
                <div className={`${cx('product-detail')} flex flex-col justify-center ml-2`}>
                    <p className={cx('product-name')}>{item.title}</p>
                    <div className="flex">
                        <span>{amount}</span>
                        <span className={'mx-1'}>x</span>
                        <span>{formatter.format(+item.price)}</span>
                    </div>
                </div>
            </div>
            {editListProduct && (
                <div className={'flex flex-col'}>
                    <IconButton onClick={() => onAmountChange(amount + 1)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => onAmountChange(amount - 1)}>
                        <RemoveIcon />
                    </IconButton>
                </div>
            )}
        </div>
    );
}
