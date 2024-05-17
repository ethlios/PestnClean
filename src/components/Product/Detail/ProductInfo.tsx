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
import { useRouter } from 'next/navigation';
import generateId from '~/libs/orthers/generateId';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductInfo({ product }: IAppProps) {
    const categoryMain = JSON.parse(product[0]?.categoryMain);
    const [type, setType] = useState('');
    const [price, setPrice] = useState(product[0].price);
    const [amount, setAmount] = useState(1);
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();
    const router = useRouter();
    const [url, setUrl] = useState<string>('');
    const comments = useSelector((state: RootState) => state.main.feedback);
    const [openToast, setOpenToast] = useState<boolean>(false);
    const [openToast2, setOpenToast2] = useState<boolean>(false);

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
        const category = categoryMain.find((item: any) => item.type === event.target.value);
        setPrice(category.price);
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
        if (!type && categoryMain.length > 0) return setOpenToast2(true);
        const localCart = localStorage.getItem('cart'); //Get cart from local storage
        let cart: any[] = [];
        if (localCart) {
            cart = JSON.parse(localCart);
        }
        //Find product in cart
        const productIndex = cart.findIndex((item) => item.productId === product[0].id && item.type === type);
        //If product exist in cart, increase quantity
        if (productIndex !== -1) {
            cart[productIndex].quantity += amount;
        } else {
            //If product not exist in cart, add new product
            cart.push({
                id: generateId(),
                productId: product[0].id,
                title: product[0].title,
                img: product[0].Image[0],
                description: product[0].description,
                quantity: amount,
                price: price,
                priceSales: product[0].priceSales,
                type: type,
                checked: false,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart)); //Save to local storage
        setOpenToast(true);
    };

    const handleBuyNow = () => {
        if (!type && categoryMain.length > 0) return setOpenToast2(true);
        let cartOrder = [];
        cartOrder.push({
            productId: product[0].id,
            title: product[0].title,
            img: product[0].Image[0],
            description: product[0].description,
            quantity: amount,
            price: price,
            priceSales: product[0].priceSales,
            type: type,
            checked: true,
        });
        localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
        router.push('/giohang/thanhtoan');
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
            <Toast
                text="Hãy chọn loại sản phẩm."
                rule="error"
                setShowToast={setOpenToast2}
                showToast={openToast2}
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
                {categoryMain.length > 0 && (
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
                            <InputLabel>Loại</InputLabel>
                            <Select value={type} label="Loại" onChange={handleChange}>
                                {categoryMain.map((value: any, index: number) => {
                                    return (
                                        <MenuItem value={value.type} key={index}>
                                            {value.type.toUpperCase()}
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
                <div className={'flex flex-col gap-1'}>
                    {categoryMain.length > 1 && !type ? (
                        <h1 className={cx('price')}>
                            {formatter.format(categoryMain[0].price)}-
                            {formatter.format(categoryMain.slice(-1)[0].price)}
                        </h1>
                    ) : (
                        <div className={'flex'}>
                            <h1 className={cx(`${product[0].priceSales > 0 ? 'price-sale' : 'price'}`)}>
                                {formatter.format(+price * (1 - product[0].priceSales / 100) * amount)}
                            </h1>
                            {product[0].priceSales > 0 && (
                                <p className={cx('sale-percent')}>-{product[0].priceSales}%</p>
                            )}
                        </div>
                    )}
                </div>
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
                    <button className={cx('btn-buy')} onClick={handleBuyNow}>
                        Mua ngay
                    </button>
                </div>
            </div>
        </>
    );
}
