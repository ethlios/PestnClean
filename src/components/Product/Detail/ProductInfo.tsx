'use client';

import AddIcon from '@mui/icons-material/Add';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './product_detail.module.scss';
import useScroll from '~/libs/hooks/useScroll';
import smoothScroll from '~/libs/orthers/smoothScroll';
import $ from 'jquery';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductInfo({ product }: IAppProps) {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(1);
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const handleClick = () => {
        $('#dropbox-2').show();
        smoothScroll('#dropbox-2');
    };

    const handleAdd = () => {
        setAmount(amount + 1);
    };

    const handleSub = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleAddToCart = () => {
        const localCart = localStorage.getItem('cart');
        let cart: any[] = [];
        if (localCart) {
            cart = JSON.parse(localCart);
        }
        const productIndex = cart.findIndex((item) => item.id === product[0].id);
        if (productIndex !== -1) {
            cart[productIndex].quantity += amount;
        } else {
            cart.push({
                id: product[0].id,
                name: product[0].name,
                quantity: amount,
                price: product[0].price,
                currency: product[0].currency,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div
            className={cx('product-info')}
            style={{
                top: wheel ? '-180px' : '-120px',
                width: sizeX < 768 ? '100%' : sizeX < 950 ? '55%' : '',
            }}
        >
            <p className={cx('sale')}>Đang giảm giá</p>
            <h1
                className={cx('name')}
                style={{
                    fontSize: sizeX < 600 ? '28px' : '',
                }}
            >
                {product[0].name}
            </h1>
            <p className={cx('rating')} onClick={handleClick}>
                3 Đánh giá
            </p>
            <div className={cx('decoration')} />
            <ul className={cx('summary')}>
                <li>
                    <b>Thương hiệu: </b>Viet oil
                </li>
                <li>
                    <b>Không gian phù hợp: </b>Quán cafe,Buồng phòng khách sạn, Văn phòng, Spa,Gym, Nhà ở
                </li>
                <li>
                    <b>Đặc tính mùi: </b>Thanh mát, khử khuẩn, thư giãn, ngọt dịu
                </li>
                <li>
                    <b>Hương: </b>Chanh
                </li>
                <li>
                    <b>Dung tích: </b>500m, 1000ml
                </li>
            </ul>
            <div className={cx('decoration')} />
            <div className={cx('share')}>
                <p className={cx('text')}>Chia sẻ:</p>
                <FacebookIcon />
                <InstagramIcon />
            </div>
            <div className={'type'}>
                <p
                    className={cx('text')}
                    style={{
                        marginBottom: '15px',
                    }}
                >
                    Phân loại:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Loại</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Loại"
                        onChange={handleChange}
                    >
                        <MenuItem value={'1l'}>1L</MenuItem>
                        <MenuItem value={'2l'}>2L</MenuItem>
                        <MenuItem value={'3l'}>3L</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={cx('quantity')}>
                <IconButton onClick={handleSub}>
                    <RemoveIcon />
                </IconButton>
                <p
                    className={cx('text')}
                    style={{
                        fontSize: '16px',
                        fontWeight: '600',
                    }}
                >
                    {amount}
                </p>
                <IconButton onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
            </div>
            <h1 className={cx('price')}>{product[0].price}{product[0].currency}</h1>
            <div className={cx('other')}>
                <div>
                    <ElectricRickshawOutlinedIcon />
                    <p>Giao hàng nhanh chóng, an toàn, tiết kiệm</p>
                </div>
                <div>
                    <KeyboardBackspaceOutlinedIcon />
                    <Link href="/sanpham">Quay lại mua hàng</Link>
                </div>
            </div>
            <div className={cx('button-group')}>
                <button className={cx('btn-add')} onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                <button className={cx('btn-buy')}>Mua ngay</button>
            </div>
        </div>
    );
}
