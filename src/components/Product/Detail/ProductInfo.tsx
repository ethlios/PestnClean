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
import { useState } from 'react';
import styles from './product_detail.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductInfo(props: IAppProps) {
    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return (
        <div className={cx('product-info')}>
            <p className={cx('sale')}>Đang giảm giá</p>
            <h1 className={cx('name')}>Tinh dầu chanh viet oils</h1>
            <p className={cx('rating')}>1 Đánh giá</p>
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
                <IconButton>
                    <RemoveIcon />
                </IconButton>
                <p
                    className={cx('text')}
                    style={{
                        fontSize: '16px',
                        fontWeight: '600',
                    }}
                >
                    1
                </p>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
            <h1 className={cx('price')}>1.900.000đ</h1>
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
                <button className={cx('btn-add')}>Thêm vào giỏ hàng</button>
                <button className={cx('btn-buy')}>Mua ngay</button>
            </div>
        </div>
    );
}
