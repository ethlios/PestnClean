'use client';

import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import useSize from '~/libs/hooks/useSize';
import styles from './home.module.scss';
import logo2 from '../../../public/img/logo2.png';

const cx = classNames.bind(styles);

const solutions = [
    {
        id: 1,
        title: 'HỖ TRỢ 24/7',
        img: '',
        description:
            'Hotline tư vấn và chăm sóc khách hàng hoạt động 24/7. Tiến hành cấp dịch vụ theo khung thời gian theo yêu cầu của khách hàng 24/7',
    },
    {
        id: 2,
        title: 'ĐỘI NGŨ GIÀU KINH NGHIỆM',
        img: '',
        description:
            'Đội ngũ chuyên gia tư vấn giàu kinh nghiệm, am hiểu sâu sắc về ngành, đảm bảo cung cấp đến khách hàng dịch vụ với tiêu chuẩn tốt nhất',
    },
    {
        id: 3,
        title: 'PHÂN TÍCH CHUẨN BRC, HACCP',
        img: '',
        description:
            'Pestnclean Care sẵn sàng hỗ trợ các doanh nghiệp có yêu cầu tuân thủ các tiêu chuẩn: BRC, HACCP, ISO,… cùng các dịch vụ báo cáo.',
    },
    {
        id: 4,
        title: 'PHÂN TÍCH CHUẨN BRC, HACCP',
        img: '',
        description:
            'Pestnclean Care sẵn sàng hỗ trợ các doanh nghiệp có yêu cầu tuân thủ các tiêu chuẩn: BRC, HACCP, ISO,… cùng các dịch vụ báo cáo.',
    },
];

export default function WhyChooseMe() {
    const { sizeX } = useSize();

    return (
        <div>
            <div className={cx('choose-content-1')}>
                <div className={cx('choose-text')} style={sizeX < 768 ? { width: '100%' } : { width: '60%' }}>
                    <div className={cx('choose-text-main')}>
                        <h1
                            className={
                                'font-bold underline underline-offset-2 text-2xl uppercase decoration-2'
                            }
                        >
                            <HelpOutlineOutlinedIcon />
                            Vì sao chọn chúng tôi?
                        </h1>
                    </div>
                    <div className={cx('choose-wrapper')}>
                        {solutions.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx('choose-item')}
                                    style={{
                                        borderBottomRightRadius: index === 0 ? '30px' : 0,
                                        borderBottomLeftRadius: index === 1 ? '30px' : 0,
                                        borderTopLeftRadius: index === 3 ? '30px' : 0,
                                        borderTopRightRadius: index === 2 ? '30px' : 0,
                                    }}
                                >
                                    <div className={cx('chose-content')}>
                                        <p className={cx('choose-title')}>{item.title}</p>
                                        <p
                                            className={cx('choose-description')}
                                            style={{
                                                marginBottom: '15px',
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('choose-content-img')} style={sizeX < 768 ? { width: '100%' } : { width: '30%' }}>
                    {/* <Image/> */}
                    <Image
                        src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713699714/l%C3%B4go-mockup_optimized_gnftec.png"
                        alt="Hình ảnh trang chủ Pestnclean"
                        width={1000}
                        height={1000}
                    />
                    <Link href={'/gioithieu'} className={cx('choose-link')}
                          style={sizeX < 768 ? { left: '0' } : { left: '-60px' }}>
                        <p>
                            Giới thiệu
                            <ArrowRightAltOutlinedIcon />
                        </p>
                    </Link>
                </div>
            </div>
            <div className={cx('number-wrapper')}>
                <div className={'flex flex-wrap'}>
                    <p className={cx('committed-text')} style={sizeX < 768 ? { width: '100%' } : { width: '70%' }}>
                        Bằng tất cả những gì mình có, PESTNCLEAN hứa hẹn sẽ mang đến cho quý khách hàng những
                        trải nghiệm về dịch vụ chưa từng có. Lấy đam mê nhiệt huyết làm nguồn sức mạnh, và lấy
                        nụ cười của khách hàng làm mục tiêu theo đuổi, PESTNCLEAN đã và đang không ngừng hoàn
                        thiện bản thân cho hiện tại và tương lai.{' '}
                        <b>
                            Một tập thể vững mạnh không có nghĩa là một tập thể xuất sắc hay một cá nhân vượt
                            trội, mà nó còn được khẳng định bằng việc đã mang lại được gì cho cộng đồng!{' '}
                        </b>
                    </p>
                    <div className={'flex justify-center items-center'}
                         style={sizeX < 768 ? { width: '100%' } : { width: '30%' }}>
                        <Image src={logo2.src} alt="Logo đơn của Pestnclean" width={173} height={216} />
                    </div>
                </div>
                <div className={`${cx('committed-wrapper-2')} ${sizeX < 768 ? 'flex-wrap' : ''} `}>
                    <div className={'flex flex-row gap-5'}
                         style={sizeX <= 768 ? { flexWrap: 'wrap' } : {}}>
                        <div>
                            <h1 className={cx('committed-number')}>3+</h1>
                            <p className={cx('committed-des')}>Năm hoạt động</p>
                        </div>
                        <div className={cx('committed-item')}>
                            <h1 className={cx('committed-number')}>29+</h1>
                            <p className={cx('committed-des')}>Đối tác kinh doanh</p>
                        </div>
                        <div className={cx('committed-item')}>
                            <h1 className={cx('committed-number')}>199+</h1>
                            <p className={cx('committed-des')}>Tổng dự án hoàn thành</p>
                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: '12.7px',
                            fontWeight: '500',
                            letterSpacing: '-.5px',
                            color: 'rgba(0,0,0,0.5)',
                            textAlign: 'justify',
                            borderTop: 'solid 3px var(--secondary)',
                            paddingTop: '20px',
                        }}
                    >
                        Chúng tôi đảm bảo với quý khách hàng rằng, mọi loại hình dịch vụ mà chúng tôi cung
                        cấp, nhằm mang lại sự hài lòng của quý khách hàng. Đây không chỉ là một cảm kết mà còn
                        phản ánh sự cống hiến sâu sắc của chúng tôi nhằm đảm bảo sự hài lòng của quý khách
                        hàng là ưu tiên hàng đầu của chúng tôi.
                    </p>
                </div>
            </div>
        </div>
    );
}
