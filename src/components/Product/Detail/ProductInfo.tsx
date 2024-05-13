'use client';

import AddIcon from '@mui/icons-material/Add';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
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
import formatter from '~/libs/orthers/formatMoney';
import {
    FacebookIcon,
    LinkedinIcon,
    XIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductInfo({ product }: IAppProps) {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(1);
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();
    const [url, setUrl] = useState<string>('');
    const comments = useSelector((state: RootState) => state.main.feedback);
    const [openToast, setOpenToast] = useState<boolean>(false);

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
        const localCart = localStorage.getItem('cart'); //Get cart from local storage
        let cart: any[] = [];
        if (localCart) {
            cart = JSON.parse(localCart);
        }
        const productIndex = cart.findIndex((item) => item.id === product[0].id); //Find product in cart
        //If product exist in cart, increase quantity
        if (productIndex !== -1) {
            cart[productIndex].quantity += amount;
        } else {
            //If product not exist in cart, add new product
            cart.push({
                id: product[0].id,
                title: product[0].title,
                img: product[0].Image[0],
                description: product[0].description,
                quantity: amount,
                price: product[0].price,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart)); //Save to local storage
        setOpenToast(true);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return (
        <>
            <Toast
                text="Thêm vào giỏ hàng thành công."
                rule="normal"
                setShowToast={setOpenToast}
                showToast={openToast}
            />
            <div
                className={cx('product-info')}
                style={{
                    top: wheel ? '-180px' : '-120px',
                    width: sizeX < 768 ? '100%' : sizeX < 950 ? '55%' : '',
                }}
            >
                <p className={cx('sale')}>
                    {product[0].status === 'sale'
                        ? 'Đang giảm giá'
                        : product[0].status === 'hot'
                          ? 'Đang bán chạy'
                          : product[0].status
                            ? 'Sản phẩm mới'
                            : product[0].category1}
                </p>
                <h1
                    className={cx('name')}
                    style={{
                        fontSize: sizeX < 600 ? '28px' : '',
                    }}
                >
                    {product[0].title}
                </h1>
                <p className={cx('rating')} onClick={handleClick}>
                    {comments.length} Đánh giá
                </p>
                <div className={cx('decoration')} />
                <ul className={cx('summary')}>
                    {product[0].description
                        ? product[0].description
                              .split('\n')
                              .map((item: string, index: number) => <li key={index}>{item}</li>)
                        : ''}
                </ul>
                <div className={cx('decoration')} />
                <div className={cx('share')}>
                    <p className={cx('text')}>Chia sẻ:</p>
                    <FacebookShareButton url={url} hashtag="#Pestnclean">
                        <FacebookIcon size={28} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={url}>
                        <XIcon size={28} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={url}>
                        <LinkedinIcon size={28} round={true} />
                    </LinkedinShareButton>
                </div>
                {product[0].categoryMain.length > 0 && (
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
                                {product[0].categoryMain.map((value: string, index: number) => {
                                    return (
                                        <MenuItem value={value} key={index}>
                                            {value.toUpperCase()}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                )}
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
                <h1 className={cx('price')}>
                    {formatter.format(+product[0].priceSales || +product[0].price)}
                </h1>
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
                    <button className={cx('btn-add')} onClick={handleAddToCart}>
                        Thêm vào giỏ hàng
                    </button>
                    <button className={cx('btn-buy')}>Mua ngay</button>
                </div>
            </div>
        </>
    );
}
