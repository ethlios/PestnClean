'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {}

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
                <div className={'grid grid-cols-6 gap-4'}>
                    <div className={'col-span-1 p-4'}>
                        <Image src={''} alt={''} width={1000} className={'bg-gray-200 h-auto md:h-32'} />
                    </div>
                    <div className={'col-span-2 py-4'}>
                        <div className={`flex flex-col justify-between md:h-32 w-max`}>
                            <div>
                                <p className={cx('product-category')}>Sản phẩm giải pháp vệ sinh</p>
                                <p className={cx('product-name')}>Tinh dầu chanh Viet Oils</p>
                            </div>
                            <span className={cx('price')}>
                                <p>Tổng: 2.200.000 đ</p>
                                <p className={cx('price-default')}>(1.100.000 đ)</p>
                            </span>
                        </div>
                    </div>
                    <div className={'col-span-1 col-start-6'}>
                        <div className={'grid grid-cols-2 h-full'}>
                            <div className={'grid justify-items-end content-end py-2'}>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <div className={'flex-col h-full text-center'}>
                                <div className={'h-1/3 border-l-2 flex items-center justify-center'}>
                                    <IconButton onClick={handleAdd}>
                                        <AddIcon />
                                    </IconButton>
                                </div>
                                <div
                                    className={'h-1/3 border-l-2 border-y-2 flex items-center justify-center'}
                                >
                                    <p>{quantity}</p>
                                </div>
                                <div className={'h-1/3 border-l-2 flex items-center justify-center'}>
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
