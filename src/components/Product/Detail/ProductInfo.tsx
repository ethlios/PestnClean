'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CachedIcon from '@mui/icons-material/Cached';

const cx = classNames.bind(styles);

export interface IAppProps {
}

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
                <li><b>Thương hiệu: </b>Viet oil</li>
                <li><b>Không gian phù hợp: </b>Quán cafe,Buồng phòng khách sạn, Văn phòng, Spa,Gym, Nhà ở</li>
                <li><b>Đặc tính mùi: </b>Thanh mát, khử khuẩn, thư giãn, ngọt dịu</li>
                <li><b>Hương: </b>Chanh</li>
                <li><b>Dung tích: </b>500m, 1000ml</li>
            </ul>
            <div className={cx('decoration')} />
            <div className={cx('share')}>
                <p className={cx('text')}>Chia sẻ:</p>
                <FacebookIcon />
                <InstagramIcon />
            </div>
            <div className={'type'}>
                <p className={cx('text')}>Phân loại</p>
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
                <p className={cx('text')}>1</p>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
            <h1 className={cx('price')}>1.900.000đ</h1>
            <div className={cx('other')}>
                <div>
                    <LocalShippingIcon />
                    <p>Giao hàng nhanh chóng, an toàn, tiết kiệm</p>
                </div>
                <div>
                    <CachedIcon />
                    <p>Quay lại mua hàng</p>
                </div>
            </div>
            <div className={cx('button-group')}>
                <Button variant="outlined" color="inherit" size={'large'}>Thêm vào giỏ hàng</Button>
                <Button variant="contained" color="primary" size={'large'}>Mua ngay</Button>
            </div>
        </div>
    );
}