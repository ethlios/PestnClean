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
                    Chính Sách Bảo Hành - Đổi trả
                </h1>
                <br />
                <div>
                    Chào mừng bạn đến với Công Ty TNHH TM DV XNK NGUYỄN DUY (PestnClean).
                    <br />
                    <br /> Chúng tôi cam kết cung cấp các sản phẩm chất lượng và dịch vụ tốt nhất cho khách
                    hàng của chúng tôi. Chính sách bảo hành đổi trả này mô tả các điều kiện và điều khoản áp
                    dụng cho việc bảo hành, đổi trả sản phẩm của bạn khi mua hàng từ chúng tôi.
                    <br />
                    <br /> Để đảm bảo quyền lợi của Quý khách trong việc đổi trả hàng và bảo hành sản phẩm,
                    vui lòng kiểm tra hàng hoá, đối chiếu với chứng từ và phiếu bảo hành (nếu có) trước khi
                    nhận hàng. Ngoài ra, vui lòng liên hệ với bộ phận bảo hành để biết thêm thông tin chi tiết
                    về quy định bảo hành của sản phẩm:
                    <br />
                    <br />{' '}
                    <Link href="mailto:info@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                        <b>
                            <u>Email: info@pestnclean.vn</u>
                        </b>
                    </Link>{' '}
                    <br />
                    <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                        <b>
                            <u>Hotline: 0868 36 36 00</u>
                        </b>
                    </Link>
                </div>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    1. Trường Hợp Được Bảo Hành
                </p>
                <br />
                <p>
                    - Nếu sự cố được xác định là do nhà sản xuất gây ra và vẫn còn thời hạn bảo hành
                    <br /> - Không có dấu hiệu can thiệp của bên thứ 03 (sửa chữa ngoài) trên sản phẩm.
                    <br /> - Số sản phẩm, tem niêm phong và phiếu bảo hành của sản phẩm phải chính xác, không
                    bị mất hoặc rách.
                    <br /> - Hàng hóa không bị ảnh hưởng bởi các yếu tố môi trường như nước, hóa chất ăn mòn
                    và nhiệt gây biến dạng.
                </p>

                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    2. Trường Hợp Không Được Bảo Hành
                </p>
                <br />
                <p>
                    - Những sản phẩm, mặt hàng không thể xác định được nguồn gốc. PestnClean có quyền từ chối
                    bảo hành.
                    <br />
                    - Phiếu bảo hành của sản phẩm không còn hoặc đã hết hạn.
                    <br />
                    - Phiếu bảo hành bị rách, không còn, bị dán đè hoặc bị sửa đổi.
                    <br />
                    - Phiếu bảo hành không bao gồm số serial và ngày xảy ra sự kiện.
                    <br />
                    - Số serial trên máy và phiếu bảo hành không trùng khớp nhau hoặc không thể tìm thấy.
                    <br />
                    - Sản phẩm bị hư hỏng do các tác động cơ học như rơi, vỡ, va đập, trầy xước, móp méo, ẩm
                    ướt, hoen rỉ hoặc do hỏa hoạn, thiên tai
                    <br />
                    - Sản phẩm có dấu hiệu hư hỏng do côn trùng hoặc chuột bọ gây ra.
                    <br />
                    - Sản phẩm bị hư hỏng do sử dụng sách hướng dẫn không đúng hoặc sử dụng điện áp không phù
                    hợp với quy định.
                    <br />
                    - Các phụ kiện kèm theo, chẳng hạn như điều khiển từ xa, pin điều khiển, dây nguồn, dây
                    tín hiệu, đèn tín hiệu, tai nghe, quạt trên thiết bị, có thể bị hỏng và gây cháy.
                    <br />
                    - Tự ý tháo dỡ, thay đổi cấu trúc sản phẩm, sử dụng hướng dẫn sai hoặc sử dụng linh kiện
                    không phù hợp.
                    <br />
                    - Nếu các sản phẩm được mua tại PestnClean quá hạn bảo hành, Quý khách có thể được công ty
                    chúng tôi sửa chữa với chi phí khác.
                    <br />
                </p>

                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    3. Quy Trình Bảo Hành
                </p>
                <br />
                <p>
                    - Vui lòng liên hệ với PestnClean qua các phương tiện được cung cấp trên trang web của
                    chúng tôi nếu bạn đang gặp bất kỳ lỗi hỏng hóc nào nằm trong Trường Hợp Được Bảo Hành sản
                    phẩm.
                    <br />
                    - Để thực hiện quy trình bảo hành, bạn cần cung cấp hóa đơn hoặc biên nhận để chứng minh
                    nguồn hàng từ PestnClean, giấy bảo hành liên quan đến sản phẩm.
                    <br />
                    - Sau khi kiểm tra và xác nhận rằng sản phẩm thuộc Trường Hợp Bảo Hành, chúng tôi sẽ tiến
                    hành theo chính sách chúng tôi đã cung cấp.
                    <br />
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    4. Trường Hợp Được Đổi Trả
                </p>
                <br />
                <p>
                    - Sản phẩm cần phải ở trong tình trạng ban đầu và không bị hỏng hoặc sử dụng.
                    <br />
                    - Một số sản phẩm có thể không được đổi trả hoặc có các điều kiện đặc biệt, vui lòng kiểm
                    tra chi tiết trên trang web của chúng tôi hoặc liên hệ với PestnClean để biết thêm thông
                    tin chi tiết.
                    <br />
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    5. Quy Trình Đổi Trả
                </p>
                <br />
                <p>
                    - Nếu bạn phát hiện bất kỳ lỗi hoặc hỏng hóc nào trong sản phẩm, vui lòng liên hệ với
                    chúng tôi qua phương tiện liên lạc được cung cấp trên trang web của chúng tôi.
                    <br />
                    - Để thực hiện quy trình đổi trả, bạn có thể cần cung cấp chứng minh mua hàng như hóa đơn
                    hoặc biên nhận.
                    <br />
                    - Sau khi kiểm tra và xác nhận lỗi của sản phẩm, chúng tôi sẽ tiến hành đổi trả hoặc sửa
                    chữa theo quyết định của chúng tôi và trong phạm vi của chính sách bảo hành của chúng tôi.
                    <br />
                    <br />
                    Cảm ơn Quý khách đã tin tưởng sử dụng dịch vụ của PestnClean!
                </p>
                <br />
                <p
                    style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#000',
                    }}
                >
                    6. Hoàn trả và hoàn tiền
                </p>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Điều Kiện Hoàn Trả:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Sản phẩm phải còn trong tình trạng ban đầu và không có dấu hiệu đã được sử dụng hoặc cải tạo.`}
                    </li>
                    <br />
                    <li>Yêu cầu hoàn trả phải được thực hiện trong vòng 14 ngày kể từ ngày mua hàng.</li>
                    <br />
                    <li>Khách hàng cần cung cấp hóa đơn mua hàng, và mô tả rõ lý do hoàn trả.</li>
                </ul>
                <br />
                <b
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Quy Trình Hoàn Tiền:
                </b>
                <br />
                <br />
                <ul style={{ listStyleType: 'initial', marginLeft: '13px' }}>
                    <li>
                        {`Sau khi nhận được yêu cầu và xác minh thông tin, PestnClean sẽ tiến hành kiểm tra và đánh giá điều kiện hoàn trả của sản phẩm.`}
                    </li>
                    <br />
                    <li>
                        Nếu đủ điều kiện, chúng tôi sẽ thực hiện hoàn tiền qua phương thức thanh toán ban đầu
                        của khách hàng trong vòng 7 ngày làm việc.
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
