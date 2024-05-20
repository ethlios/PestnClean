import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '~/components/Faq/faq.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ThanhToan(props: IAppProps) {
    return (
        <div className="container mt-16 flex justify-center">
            <div
                className="w-full md:w-5/6 lg:w-3/4"
                style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--text-black)',
                    letterSpacing: '-.5px',
                    textAlign: 'justify',
                }}
            >
                <h1
                    style={{
                        fontSize: '18.5px',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        textDecoration: '2px underline',
                    }}
                >
                    Chính sách thanh toán, hướng dẫn mua hàng và thanh toán:
                </h1>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    1. Hướng dẫn mua hàng và thanh toán
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Bước 1: Tìm Kiếm Sản Phẩm:
                </b>
                <p>Sử dụng thanh tìm kiếm hoặc duyệt danh mục sản phẩm để tìm kiếm sản phẩm bạn muốn mua.</p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Bước 2: Thêm Vào Giỏ Hàng:
                </b>
                <p>
                    Nhấn nút {`"Thêm vào giỏ hàng"`} trên trang sản phẩm để đưa sản phẩm vào giỏ hàng của bạn.
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Bước 3: Đặt Hàng:
                </b>
                <p
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Chọn {`"Thanh toán"`} và nhập thông tin giao hàng và thanh toán.
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Bước 4: Xác Nhận Đơn Hàng:
                </b>
                <p>
                    Xem lại đơn hàng của bạn, chọn phương thức thanh toán và xác nhận đơn hàng để hoàn tất quy
                    trình mua hàng.
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Hỗ Trợ và Tư Vấn:
                </b>{' '}
                <p>
                    Liên hệ qua email sales@pestnclean.vn hoặc gọi đến số hotline 0868 36 36 00 nếu bạn cần hỗ
                    trợ hoặc có câu hỏi
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    2. Các hình thức thanh toán Các Phương Thức Thanh Toán:
                </p>
                <br />
                <p>Chuyển khoản ngân hàng, thanh toán khi nhận hàng (COD), ví điện tử Momo,...</p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Hướng Dẫn Thanh Toán:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        Thanh Toán Khi Nhận Hàng (COD): Thanh toán cho nhân viên giao hàng khi nhận được hàng.
                    </li>
                    <br />
                    <li>
                        Chuyển Khoản Ngân Hàng: Cung cấp thông tin tài khoản ngân hàng để chuyển khoản sau khi
                        đặt hàng.
                    </li>
                </ul>
                <div className="mt-10">
                    <div className="flex justify-end">
                        <div
                            className={'p-8 rounded-lg'}
                            style={{
                                backgroundColor: '#79b4614e',
                                color: 'var(--secondary)',
                            }}
                        >
                            <h3 style={{ fontWeight: 'bold' }}>Vẫn chưa giúp được bạn?</h3>
                            <Link href="/lienhe" className={`${cx('link-hover')} flex justify-between mt-4`}>
                                <p className={cx('contact-link')}>Liên hệ</p>
                                <ArrowForwardIcon />
                            </Link>
                            <div className={cx('card-decor')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
