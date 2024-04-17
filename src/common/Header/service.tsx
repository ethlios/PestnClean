import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Link from 'next/link';

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
                    right: openService ? '0' : '-400px',
                }}
            >
                <div className={cx('all-service')}>
                    {/* Dich vu 1 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/kiem-soat-con-trung"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <h1>KIỂM SOÁT CÔN TRÙNG</h1>
                            <EastOutlinedIcon />
                        </Link>
                        <div className={cx('service-list')}>
                            <p>
                                <AdjustOutlinedIcon />
                                Nhà hàng / Chuỗi bán lẻ
                            </p>
                            <p>
                                <AdjustOutlinedIcon />
                                Văn phòng, cơ sở công nghiệp
                            </p>
                            <p>
                                <AdjustOutlinedIcon />
                                Khách sạn & Resort
                            </p>
                            <p>
                                <AdjustOutlinedIcon />
                                Nhà máy, cơ sở chế biến thực phẩm
                            </p>
                            <p>
                                <AdjustOutlinedIcon />
                                Nhà hát, Rạp chiếu film
                            </p>
                            <p>
                                <AdjustOutlinedIcon />
                                Kho vận và chuỗi cung ứng
                            </p>
                        </div>
                    </div>

                    {/* Dich vu 2 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/dich-vu-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <h1>Dịch vụ vệ sinh</h1>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <h1>Vệ sinh công nghiệp</h1>
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
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh văn phòng
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh nhà xưởng
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh sau xây dựng
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh tòa nhà, building
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={cx('service-title-item')}>
                                <h1>Vệ sinh nhà ở</h1>
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
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh thảm
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh trần, sàn
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh sofa
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Vệ sinh máy lạnh
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Dọn dẹp nhà cửa
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dich vu 3 */}
                    <div className={cx('service-item')}>
                        <Link
                            href="/giai-phap-ve-sinh"
                            className={cx('service-title')}
                            onClick={() => setOpenService(false)}
                        >
                            <h1>Giải pháp vệ sinh</h1>
                            <EastOutlinedIcon />
                        </Link>
                        <div style={{ marginTop: '5px' }}>
                            <div className={cx('service-title-item')}>
                                <h1>Giải pháp vệ sinh</h1>
                            </div>
                            <div className={cx('service-list')}></div>
                        </div>
                        <div>
                            <div className={cx('service-title-item')}>
                                <h1>Giải pháp mùi hương</h1>
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
                                <p>
                                    <AdjustOutlinedIcon />
                                    Khách sạn & Resort
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Trung tâm thương mại
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Không gian gia đình
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Phòng gym
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Tòa nhà / Văn phòng
                                </p>
                                <p>
                                    <AdjustOutlinedIcon />
                                    Spa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
