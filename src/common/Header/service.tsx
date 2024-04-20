import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Link from 'next/link';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const cx = classNames.bind(styles);

export interface IAppProps {
    setOpenService: any;
    openService: boolean;
}

export default function Services({ setOpenService, openService }: IAppProps) {
    const [currentService, setCurrentSurvice] = useState<number>(-1);

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
                    right: openService ? '0' : '-450px',
                }}
            >
                <div
                    className={cx('close-btn')}
                    style={{
                        right: openService ? '400px' : '-50px',
                    }}
                    onClick={() => setOpenService(false)}
                >
                    <ClearOutlinedIcon />
                </div>

                <div className={cx('all-service')}>
                    {/* Dich vu 1 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/dichvu/kiem-soat-con-trung"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <p>KIỂM SOÁT CÔN TRÙNG</p>
                            <EastOutlinedIcon />
                        </Link>
                        <div className={cx('service-list')}>
                            <Link
                                href="/dichvu/kiem-soat-con-trung-tai-nha-hang-chuoi-ban-le"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Nhà hàng / Chuỗi bán lẻ
                            </Link>
                            <Link
                                href="/dichvu/kiem-soat-con-trung-o-van-phong-co-so-cong-nghiep"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Văn phòng, cơ sở công nghiệp
                            </Link>
                            <Link
                                href="/dichvu/kiem-soat-con-trung-tai-khach-san-resort"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Khách sạn & Resort
                            </Link>
                            <Link
                                href="/dichvu/kiem-soat-con-trung-trong-co-so-che-bien-thuc-pham"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Nhà máy, cơ sở chế biến thực phẩm
                            </Link>
                            <Link
                                href="/dichvu/quy-trinh-kiem-soat-con-trung-nha-hat-rap-chieu-phim"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Nhà hát, Rạp chiếu film
                            </Link>
                            <Link
                                href="/dichvu/tai-sao-can-kiem-soat-con-trung-trong-chuoi-cung-ung"
                                onClick={() => setOpenService(false)}
                            >
                                <AdjustOutlinedIcon />
                                Kho vận và chuỗi cung ứng
                            </Link>
                        </div>
                    </div>

                    {/* Dich vu 2 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/dichvu/dich-vu-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <p>Dịch vụ vệ sinh</p>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/dichvu/ve-sinh-cong-nghiep"
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
                                }}
                            >
                                <Link
                                    href={'/dichvu/dich-vu-ve-sinh-van-phong'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh văn phòng
                                </Link>
                                <Link
                                    href={'/dichvu/dich-vu-ve-sinh-nha-xuong'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh nhà xưởng
                                </Link>
                                <Link
                                    href={'/dichvu/dich-vu-ve-sinh-sau-xay-dung'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh sau xây dựng
                                </Link>
                                <Link
                                    href={'/dichvu/dich-vu-ve-sinh-toa-nha'}
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh tòa nhà, building
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/dichvu/dich-vu-ve-sinh-nha-o"
                                    onClick={() => setOpenService(false)}
                                >
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
                                }}
                            >
                                <Link
                                    href="/dichvu/dich-vu-giat-tham-cua-pestnclean"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh thảm
                                </Link>
                                <Link
                                    href="/dichvu/dich-vu-ve-sinh-tran-san-nha-pestnclean"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh trần, sàn
                                </Link>
                                <Link
                                    href="/dichvu/phuong-phap-dich-vu-ve-sinh-sofa"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh sofa
                                </Link>
                                <Link
                                    href="/dichvu/dich-vu-ve-sinh-may-lanh-uy-tin-chuyen-nghiep"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Vệ sinh máy lạnh
                                </Link>
                                <Link
                                    href="/dichvu/loi-ich-cua-dich-vu-don-dep-nha-cua"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Dọn dẹp nhà cửa
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Dich vu 3 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/dichvu/giai-phap-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <p>Giải pháp vệ sinh</p>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <Link
                                    href="/dichvu/giai-phap-ve-sinh-pestnclean-hieu-qua"
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
                                    href="/dichvu/giai-phap-mui-huong-cho-doanh-nghiep"
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
                                }}
                            >
                                <Link
                                    href="/dichvu/giai-phap-mui-huong-cho-khach-san-resort"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Khách sạn & Resort
                                </Link>
                                <Link
                                    href="/dichvu/giai-phap-mui-huong-cho-trung-tam-thuong-mai"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Trung tâm thương mại
                                </Link>
                                <Link
                                    href="/dichvu/giai-phap-mui-huong-cho-khong-gian-gia-dinh"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Không gian gia đình
                                </Link>
                                <Link
                                    href="/dichvu/tai-sao-can-co-giai-phap-mui-huong-cho-phong-gym"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Phòng gym
                                </Link>
                                <Link
                                    href="/dichvu/giai-phap-mui-huong-cho-toa-nha-van-phong"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
                                    Tòa nhà / Văn phòng
                                </Link>
                                <Link
                                    href="/dichvu/giai-phap-mui-huong-cho-spa-tham-my-vien"
                                    onClick={() => setOpenService(false)}
                                >
                                    <AdjustOutlinedIcon />
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
