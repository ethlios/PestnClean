import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Link from 'next/link';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import LightOutlinedIcon from '@mui/icons-material/LightOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import FoundationIcon from '@mui/icons-material/Foundation';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    setOpenService: any;
    openService: boolean;
}

export default function Services({ setOpenService, openService }: IAppProps) {
    const [currentService, setCurrentSurvice] = useState<number>(-1);
    const { sizeX } = useSize();

    return (
        <div>
            <div
                className={`${cx('dialog-wrapper')} cpmount`}
                onClick={() => setOpenService(false)}
                style={{
                    display: openService ? 'flex' : 'none',
                }}
            ></div>
            <div
                className={cx('service')}
                onClick={(e) => e.stopPropagation()}
                style={{
                    right: openService ? '0' : sizeX < 420 ? '-350px' : sizeX < 500 ? '-380px' : '-450px',
                    width: sizeX < 420 ? '350px' : sizeX < 500 ? '380px' : '',
                }}
            >
                <div
                    className={cx('close-btn')}
                    style={{
                        right:
                            openService && sizeX < 420
                                ? '350px'
                                : openService && sizeX < 500
                                  ? '380px'
                                  : openService
                                    ? '400px'
                                    : '-50px',
                    }}
                    onClick={() => setOpenService(false)}
                >
                    <ClearOutlinedIcon />
                </div>

                <div className={cx('all-service')}>
                    {/* Dich vu 1 */}
                    <div
                        className={cx('service-item')}
                        style={{
                            color: 'var(--secondary-dark)',
                        }}
                    >
                        <Link
                            href="/dichvu/kiem-soat-con-trung"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <p>
                                <PestControlOutlinedIcon /> KIỂM SOÁT CÔN TRÙNG
                            </p>
                            <EastOutlinedIcon />
                        </Link>
                        <div className={cx('service-list')}>
                            <Link
                                href="/kiem-soat-con-trung-tai-nha-hang-chuoi-ban-le"
                                onClick={() => setOpenService(false)}
                            >
                                <StorefrontOutlinedIcon />
                                Nhà hàng / Chuỗi bán lẻ
                            </Link>
                            <Link
                                href="/kiem-soat-con-trung-o-van-phong-co-so-cong-nghiep"
                                onClick={() => setOpenService(false)}
                            >
                                <EmojiTransportationOutlinedIcon />
                                Văn phòng, cơ sở công nghiệp
                            </Link>
                            <Link
                                href="/kiem-soat-con-trung-tai-khach-san-resort"
                                onClick={() => setOpenService(false)}
                            >
                                <HotelOutlinedIcon />
                                Khách sạn & Resort
                            </Link>
                            <Link
                                href="/kiem-soat-con-trung-trong-co-so-che-bien-thuc-pham"
                                onClick={() => setOpenService(false)}
                            >
                                <FactoryOutlinedIcon />
                                Nhà máy, cơ sở chế biến thực phẩm
                            </Link>
                            <Link
                                href="/quy-trinh-kiem-soat-con-trung-nha-hat-rap-chieu-phim"
                                onClick={() => setOpenService(false)}
                            >
                                <TheatersOutlinedIcon />
                                Nhà hát, Rạp chiếu film
                            </Link>
                            <Link
                                href="/tai-sao-can-kiem-soat-con-trung-trong-chuoi-cung-ung"
                                onClick={() => setOpenService(false)}
                            >
                                <RepeatOutlinedIcon />
                                Kho vận và chuỗi cung ứng
                            </Link>
                        </div>
                    </div>

                    {/* Dich vu 2 */}
                    <div
                        className={cx('service-item')}
                        style={{
                            color: 'var(--primary)',
                        }}
                    >
                        <Link
                            href="/dichvu/dich-vu-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                            style={{
                                borderColor: 'var(--primary)',
                            }}
                        >
                            <p>
                                <CleaningServicesOutlinedIcon />
                                Dịch vụ vệ sinh
                            </p>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/dich-vu-ve-sinh-cong-nghiep"
                                    onClick={() => setOpenService(false)}
                                >
                                    Vệ sinh công nghiệp
                                </Link>
                                {currentService !== 1 ? (
                                    <AddCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(1)} />
                                ) : (
                                    <RemoveCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(-1)} />
                                )}
                            </div>

                            <div
                                className={cx('service-list')}
                                style={{
                                    height: currentService === 1 ? '120px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all ease .5s',
                                    color: 'var(--primary)',
                                }}
                            >
                                <Link
                                    href={'/dich-vu-ve-sinh-van-phong'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <EmojiTransportationOutlinedIcon />
                                    Vệ sinh văn phòng
                                </Link>
                                <Link
                                    href={'/dich-vu-ve-sinh-nha-xuong'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <FactoryOutlinedIcon />
                                    Vệ sinh nhà xưởng
                                </Link>
                                <Link
                                    href={'/dich-vu-ve-sinh-sau-xay-dung'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <FoundationIcon />
                                    Vệ sinh sau xây dựng
                                </Link>
                                <Link href={'/dich-vu-ve-sinh-toa-nha'} onClick={() => setOpenService(false)}>
                                    <CorporateFareOutlinedIcon />
                                    Vệ sinh tòa nhà, building
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className={cx('service-title-item')}>
                                <Link href="/dich-vu-ve-sinh-nha-o" onClick={() => setOpenService(false)}>
                                    Vệ sinh nhà ở
                                </Link>
                                {currentService !== 2 ? (
                                    <AddCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(2)} />
                                ) : (
                                    <RemoveCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(-1)} />
                                )}
                            </div>
                            <div
                                className={cx('service-list')}
                                style={{
                                    height: currentService === 2 ? '145px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all ease .5s',
                                    color: 'var(--primary)',
                                }}
                            >
                                <Link
                                    href="/dich-vu-giat-tham-cua-pestnclean"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh thảm
                                </Link>
                                <Link
                                    href="/dich-vu-ve-sinh-tran-san-nha-pestnclean"
                                    onClick={() => setOpenService(false)}
                                >
                                    <LightOutlinedIcon />
                                    Vệ sinh trần, sàn
                                </Link>
                                <Link
                                    href="/phuong-phap-dich-vu-ve-sinh-sofa"
                                    onClick={() => setOpenService(false)}
                                >
                                    <ChairOutlinedIcon />
                                    Vệ sinh sofa
                                </Link>
                                <Link
                                    href="/dich-vu-ve-sinh-may-lanh-uy-tin-chuyen-nghiep"
                                    onClick={() => setOpenService(false)}
                                >
                                    <HeatPumpOutlinedIcon />
                                    Vệ sinh máy lạnh
                                </Link>
                                <Link
                                    href="/loi-ich-cua-dich-vu-don-dep-nha-cua"
                                    onClick={() => setOpenService(false)}
                                >
                                    <OtherHousesOutlinedIcon />
                                    Dọn dẹp nhà cửa
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Dich vu 3 */}
                    <div
                        className={cx('service-item')}
                        style={{
                            color: 'var(--secondary)',
                        }}
                    >
                        <Link
                            href="/dichvu/giai-phap-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                            style={{
                                borderColor: 'var(--secondary)',
                            }}
                        >
                            <p>
                                <EmojiObjectsOutlinedIcon />
                                Giải pháp vệ sinh
                            </p>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/giai-phap-ve-sinh-pestnclean-hieu-qua"
                                    onClick={() => setOpenService(false)}
                                >
                                    Giải pháp vệ sinh
                                </Link>
                            </div>
                            <div className={cx('service-list')}></div>
                        </div>
                        <div>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/giai-phap-mui-huong-cho-doanh-nghiep"
                                    onClick={() => setOpenService(false)}
                                >
                                    Giải pháp mùi hương
                                </Link>
                                {currentService !== 3 ? (
                                    <AddCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(3)} />
                                ) : (
                                    <RemoveCircleOutlineOutlinedIcon onClick={() => setCurrentSurvice(-1)} />
                                )}
                            </div>
                            <div
                                className={cx('service-list')}
                                style={{
                                    height: currentService === 3 ? '145px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all ease .5s',
                                    color: 'var(--secondary)',
                                }}
                            >
                                <Link
                                    href="/giai-phap-mui-huong-cho-khach-san-resort"
                                    onClick={() => setOpenService(false)}
                                >
                                    <HotelOutlinedIcon />
                                    Khách sạn & Resort
                                </Link>
                                <Link
                                    href="/giai-phap-mui-huong-cho-trung-tam-thuong-mai"
                                    onClick={() => setOpenService(false)}
                                >
                                    <LocalMallOutlinedIcon />
                                    Trung tâm thương mại
                                </Link>
                                <Link
                                    href="/giai-phap-mui-huong-cho-khong-gian-gia-dinh"
                                    onClick={() => setOpenService(false)}
                                >
                                    <CleanHandsOutlinedIcon />
                                    Không gian gia đình
                                </Link>
                                <Link
                                    href="/tai-sao-can-co-giai-phap-mui-huong-cho-phong-gym"
                                    onClick={() => setOpenService(false)}
                                >
                                    <FitnessCenterOutlinedIcon />
                                    Phòng gym
                                </Link>
                                <Link
                                    href="/giai-phap-mui-huong-cho-toa-nha-van-phong"
                                    onClick={() => setOpenService(false)}
                                >
                                    <CorporateFareOutlinedIcon />
                                    Tòa nhà / Văn phòng
                                </Link>
                                <Link
                                    href="/giai-phap-mui-huong-cho-spa-tham-my-vien"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AutoFixHighOutlinedIcon />
                                    Spa
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
