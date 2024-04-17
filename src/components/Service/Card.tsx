import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    title?: string;
}

export default function Card({ src, alt, width = 1680, height = 1050, title }: IAppProps) {
    return (
        <div className={cx('card')}>
            <Image src={src} alt={alt} width={width} height={height}
                   className={'w-full rounded-xl bg-white mb-2'} />
            <h3 className={cx('card-title')}>{title}</h3>
            <Button variant={'contained'}>Xem Thêm</Button>
        </div>
    );
}