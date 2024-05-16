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
                    Chính sách giao nhận hàng:
                </h1>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    1. Kiểm tra trạng thái đơn hàng
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Cách Thức Kiểm Tra:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Truy cập Website: Khách hàng có thể truy cập trực tiếp vào trang website của
                        PestnClean và sử dụng tính năng "Kiểm Tra Đơn Hàng”.`}
                    </li>
                    <br />
                    <li>
                        Liên Hệ Trực Tiếp: Nếu cần hỗ trợ thêm, khách hàng có thể liên hệ với bộ phận chăm sóc
                        khách hàng qua hotline hoặc email để được cập nhật trạng thái đơn hàng một cách nhanh
                        chóng.
                    </li>
                </ul>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Thông Tin Cung Cấp:
                </b>
                <br />
                <br />
                <p>
                    Thông tin về trạng thái đơn hàng sẽ bao gồm: Trạng thái hiện tại (đang xử lý, đã gửi, đang
                    vận chuyển, đã giao), ước tính thời gian giao hàng, và bất kỳ thông tin hữu ích nào khác
                    liên quan đến quá trình giao nhận.
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    2. Phí vận chuyển
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Cách Tính Phí Vận Chuyển:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Phí vận chuyển được tính dựa trên trọng lượng của đơn hàng và khoảng cách từ kho của chúng tôi đến địa chỉ giao hàng.`}
                    </li>
                    <br />
                    <li>
                        Đối với các đơn hàng đủ điều kiện nhất định, chúng tôi cung cấp dịch vụ giao hàng miễn
                        phí hoặc với mức phí ưu đãi.
                    </li>
                </ul>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Chế Độ Giao Hàng Miễn Phí:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Đơn hàng với giá trị từ một ngưỡng nhất định sẽ được hưởng chính sách giao hàng miễn phí. Ngưỡng giá trị này sẽ được thông báo cụ thể trên website của chúng tôi.`}
                    </li>
                    <br />
                    <li>
                        Chính sách giao hàng miễn phí chỉ áp dụng cho các khu vực nằm trong phạm vi phục vụ
                        của chúng tôi.
                    </li>
                </ul>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Thông Báo Phí Vận Chuyển:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Trước khi hoàn tất đơn hàng, bạn sẽ được cung cấp thông tin chi tiết về phí vận chuyển.`}
                    </li>
                    <br />
                    <li>
                        Chúng tôi cam kết không có bất kỳ khoản phí ẩn nào, đảm bảo bạn luôn biết chính xác số
                        tiền cần thanh toán.
                    </li>
                </ul>
                <br />
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    3. Bao lâu tôi nhận được hàng?
                </p>
                <br />
                <p>
                    Thời Gian Giao Hàng Ước Tính: Dự kiến từ 2-5 ngày làm việc cho các đơn hàng trong nội
                    thành và 5-10 ngày làm việc cho các đơn hàng ngoại thành.
                </p>
                <div className="mt-20">
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
