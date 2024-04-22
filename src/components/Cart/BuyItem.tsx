'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function BuyItem(props: IAppProps) {
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            setShowToast(true);
        }
    };

    return (
        <>
            <Toast
                text={'Số lượng không thể nhỏ hơn 0'}
                rule={'error'}
                showToast={showToast}
                setShowToast={setShowToast}
            />
            <div className={'shadow-lg rounded-md mb-3'}>
                <div className={'grid grid-cols-6'}>
                    <div className={'col-span-2 md:col-span-2 lg:col-span-1 p-4'}>
                        <Image src={''} alt={''} width={1000} height={1500} className={'h-auto'} />
                    </div>
                    <div className={'col-span-4 md:col-span-4 lg:col-span-2 py-4'}>
                        <div className={`flex flex-col justify-between w-full h-full`}>
                            <div>
                                <p className={cx('product-category')}>Sản phẩm giải pháp vệ sinh</p>
                                <p className={cx('product-name')}>Tinh dầu chanh Viet Oils</p>
                            </div>
                            <span className={cx('price')}>
                                <p className={'mr-2'}>Tổng: 2.200.000 đ</p>
                                <p className={cx('price-default')}>(1.100.000 đ)</p>
                            </span>
                        </div>
                    </div>
                    <div className={'col-span-6 lg:col-span-1 lg:col-start-6'}>
                        <div className={'flex justify-between lg:grid lg:grid-cols-2 lg:h-full'}>
                            <div className={'lg:grid lg:justify-items-end lg:content-end lg:py-2'}>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <div
                                className={'flex lg:flex-col lg:h-full *:flex *:items-center *:justify-center *:lg:h-1/3'}>
                                <div className={'lg:border-l-2'}>
                                    <IconButton onClick={handleAdd}>
                                        <AddIcon />
                                    </IconButton>
                                </div>
                                <div className={'lg:border-l-2 lg:border-y-2'}>
                                    <p>{quantity}</p>
                                </div>
                                <div className={'lg:border-l-2'}>
                                    <IconButton onClick={handleRemove}>
                                        <RemoveIcon color={'inherit'} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
