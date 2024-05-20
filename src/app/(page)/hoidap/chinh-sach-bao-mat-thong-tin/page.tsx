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
                    Chính Sách Bảo Mật Thông Tin
                </h1>
                <br />
                <p>
                    Chào mừng bạn đến với Công Ty TNHH TM DV XNK NGUYỄN DUY (PestnClean)! Chúng tôi rất trân
                    trọng sự tin tưởng của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách bảo mật
                    này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử
                    dụng trang web của chúng tôi và các quy định của pháp luật Việt Nam. Cụ thể:
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    1. Thông Tin Thu Thập
                </p>
                <br />
                <p>
                    Khi bạn tạo tài khoản hoặc mua hàng trên trang web của chúng tôi, chúng tôi có thể thu
                    thập các thông tin cá nhân sau đây:
                </p>
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '30px' }}>
                    <li>{`Tên của bạn`}</li>
                    <li>Địa chỉ email</li>
                    <li>Địa chỉ giao hàng</li>
                    <li>Thông tin thanh toán</li>
                </ul>
                <br />
                <p>
                    Chúng tôi cũng có thể tự động thu thập một số thông tin không cá nhân về việc bạn sử dụng
                    trang web của chúng tôi, bao gồm địa chỉ IP, loại trình duyệt, thời gian truy cập và trang
                    web bạn đã truy cập trước khi đến với chúng tôi.
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    2. Sử Dụng Thông Tin
                </p>
                <br />
                <p>Chúng tôi sử dụng thông tin mà bạn cung cấp để:</p>
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '30px' }}>
                    <li>Cung cấp dịch vụ cho bạn và xử lý đơn hàng của bạn</li>
                    <li>Gửi thông tin về sản phẩm, khuyến mãi và sự kiện</li>
                    <li>Cải thiện và nâng cấp website của chúng tôi</li>
                </ul>
                <br />
                <p>
                    Chúng tôi cam kết không bán, chia sẻ hoặc trao đổi thông tin cá nhân của bạn với bên thứ
                    ba mà không có sự đồng ý của bạn, trừ khi cần thiết để cung cấp dịch vụ cho bạn hoặc tuân
                    thủ theo yêu cầu pháp luật.
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    3. Bảo Mật Thông Tin
                </p>
                <br />
                <p>
                    Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và đã triển khai các biện pháp an ninh
                    phù hợp để bảo vệ thông tin đó khỏi lạm dụng, mất mát hoặc truy cập trái phép. Tuy nhiên,
                    không có phương pháp truyền tải thông tin trên Internet hoặc lưu trữ điện tử nào là 100%
                    an toàn.
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    4. Quyền Lợi của Bạn
                </p>
                <br />
                <p>
                    Bạn có quyền truy cập, sửa đổi hoặc xóa bất kỳ thông tin cá nhân nào chúng tôi đã thu thập
                    về bạn. Bạn cũng có quyền phản đối việc sử dụng thông tin của bạn cho mục đích tiếp thị
                    hoặc liên hệ trực tiếp với chúng tôi để biết thêm thông tin.
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    5. Liên Hệ Chúng Tôi
                </p>
                <br />
                <div>
                    Nếu bạn có bất kỳ câu hỏi hoặc ý kiến ​​nào về Chính Sách Bảo Mật của chúng tôi, vui lòng
                    liên hệ với chúng tôi <br />
                    <br />
                    <Link
                        href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Callary/@10.7867988,106.6823308,17z/data=!4m6!3m5!1s0x31752f2c53afffff:0xf831d8aaee883f90!8m2!3d10.7867988!4d106.6849057!16s%2Fg%2F11j00srjjz?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>
                            <u>
                                Trụ sở chính: Lầu 8, 123 Lý Chính Thắng, P. Võ Thị Sáu, Quận 3, Tp. HCM, Viet
                                Nam.
                            </u>
                        </b>
                    </Link>
                    <br />
                    <Link href="mailto:info@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                        <b>
                            <u>Email: info@pestnclean.vn</u>
                        </b>
                    </Link>
                    <br />
                    <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                        <b>
                            <u>Hotline: 0868 36 36 00.</u>
                        </b>
                    </Link>
                    <br />
                    <br />
                    Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của PestnClean!
                </div>
                <br />
                <br />
                <h1
                    style={{
                        fontSize: '18.5px',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        textDecoration: '2px underline',
                    }}
                >
                    Những người hoặc tổ chức có thể được tiếp cận với thông tin đó
                </h1>
                <div style={{ color: 'var(--primary)', fontSize: '16px' }}>
                    <br />
                    – Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên quan đến thực hiện đơn hàng và
                    chỉ giới hạn trong phạm vi thông tin cần thiết cũng như áp dụng các quy định đảm bảo an
                    ninh, bảo mật các thông tin cá nhân.
                    <br />
                    <br />
                    – Chúng tôi sử dụng dịch vụ từ một nhà cung cấp dịch vụ là bên thứ ba để thực hiện một số
                    hoạt động liên quan đến website amall.vn. Khi đó, bên thứ ba có thể truy cập hoặc xử lý
                    các thông tin cá nhân trong quá trình cung cấp các dịch vụ đó. Chúng tôi yêu cầu các bên
                    thứ ba này tuân thủ mọi luật lệ về bảo vệ thông tin cá nhân liên quan và các yêu cầu về an
                    ninh liên quan đến thông tin cá nhân.
                    <br />
                    <br />
                    – Các chương trình có tính liên kết, đồng thực hiện, thuê ngoài cho các mục đích được nêu
                    tại Mục 1 và luôn áp dụng các yêu cầu bảo mật thông tin cá nhân.
                    <br />
                    <br />
                    – Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp
                    yêu cầu và việc tiết lộ như vậy là cần thiết một cách hợp lý để tuân thủ các quy trình
                    pháp lý.
                    <br />
                    <br />– Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc
                    một phần với công ty khác, người mua sẽ có quyền truy cập thông tin được chúng tôi lưu
                    trữ, duy trì trong đó bao gồm cả thông tin cá nhân.
                </div>
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
