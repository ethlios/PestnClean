'use client';

import { useEffect, useRef } from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import useSize from '~/libs/hooks/useSize';
import styles from './home.module.scss';
import logo2 from '../../../public/img/logo2.png';
import { gsap } from 'gsap';
import { slideFromX, slideFromY, rotate } from '~/libs/orthers/animation';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SpeedIcon from '@mui/icons-material/Speed';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

const solutions = [
    {
        id: 1,
        title: 'HỖ TRỢ 24/7',
        icon: 'ContactSupportIcon',
        img: '',
        description:
            'Hotline tư vấn và chăm sóc khách hàng hoạt động 24/7. Tiến hành cấp dịch vụ theo khung thời gian theo yêu cầu của khách hàng 24/7',
    },
    {
        id: 2,
        title: 'ĐỘI NGŨ GIÀU KINH NGHIỆM',
        icon: 'ThumbUpAltIcon',
        img: '',
        description:
            'Đội ngũ chuyên gia tư vấn giàu kinh nghiệm, am hiểu sâu sắc về ngành, đảm bảo cung cấp đến khách hàng dịch vụ với tiêu chuẩn tốt nhất',
    },
    {
        id: 3,
        title: 'PHÂN TÍCH CHUẨN BRC, HACCP',
        icon: 'QueryStatsIcon',
        img: '',
        description:
            'Pestnclean sẵn sàng hỗ trợ các doanh nghiệp có yêu cầu tuân thủ các tiêu chuẩn: BRC, HACCP, ISO,… cùng các dịch vụ báo cáo.',
    },
    {
        id: 4,
        title: 'TRIỂN KHAI DỊCH VỤ NHANH',
        icon: 'SpeedIcon',
        img: '',
        description:
            'Với đội ngũ nhân viên được đào tạo chuyên sâu, PestnClean luôn sẵn sàng đáp ứng nhanh chóng và kịp thời với mọi yêu cầu từ khách hàng.',
    },
];

export default function WhyChooseMe() {
    const chooseText = useRef<any>();
    const chooseImg = useRef<any>();
    const logoCompany = useRef<any>();
    const { sizeX } = useSize();
    const iconComponents = {
        ContactSupportIcon: <ContactSupportIcon />,
        ThumbUpAltIcon: <ThumbUpAltIcon />,
        QueryStatsIcon: <QueryStatsIcon />,
        SpeedIcon: <SpeedIcon />,
    };

    useEffect(() => {
        gsap.fromTo(
            chooseText.current,
            slideFromX(chooseText.current, -500)[0],
            slideFromX(chooseText.current, -500)[1],
        );
        gsap.fromTo(
            chooseImg.current,
            slideFromX(chooseImg.current, 2000)[0],
            slideFromX(chooseImg.current, 2000)[1],
        );

        gsap.fromTo(logoCompany.current, rotate(logoCompany.current)[0], rotate(logoCompany.current)[1]);
    }, []);

    return (
        <div>
            <div
                className={cx('choose-content-1')}
                style={{
                    flexDirection: sizeX < 900 ? 'column' : 'row',
                }}
            >
                <div
                    className={cx('choose-text')}
                    style={sizeX < 900 ? { width: '100%' } : { width: '60%' }}
                    ref={chooseText}
                >
                    <div className={cx('choose-text-main')}>
                        <h1
                            className={
                                'font-bold underline underline-offset-2 text-2xl uppercase decoration-2'
                            }
                            style={{
                                fontSize: sizeX < 550 ? '18px' : '24px',
                            }}
                        >
                            <HelpOutlineOutlinedIcon
                                sx={{
                                    fontSize: sizeX < 550 ? '25px' : '35px',
                                }}
                            />
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
                                    <div
                                        className={cx('chose-content')}
                                        style={{
                                            padding: sizeX < 550 ? '10px' : '',
                                        }}
                                    >
                                        <div
                                            className={cx('choose-title')}
                                            style={{
                                                fontSize: sizeX < 550 ? '15px' : '',
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {iconComponents[item.icon as keyof typeof iconComponents]}
                                            <p>{item.title}</p>
                                        </div>
                                        <p
                                            className={cx('choose-description')}
                                            style={{
                                                marginBottom: '15px',
                                                fontSize: sizeX < 550 ? '12.5px' : '',
                                                textAlign: 'justify',
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
                <div
                    className={cx('choose-content-img')}
                    style={sizeX < 900 ? { width: '100%' } : { width: '30%' }}
                    ref={chooseImg}
                >
                    {/* <Image/> */}
                    <Image
                        src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713699714/l%C3%B4go-mockup_optimized_gnftec.png"
                        alt="Hình ảnh trang chủ Pestnclean"
                        width={1000}
                        height={1000}
                        style={{
                            height: sizeX < 900 ? '300px' : '',
                        }}
                    />
                    <Link
                        href={'/gioithieu'}
                        className={cx('choose-link')}
                        style={sizeX < 900 ? { left: '0' } : { left: '-60px' }}
                    >
                        <p>
                            Giới thiệu
                            <ArrowRightAltOutlinedIcon />
                        </p>
                    </Link>
                </div>
            </div>
            <div
                className={cx('number-wrapper')}
                style={{
                    padding: sizeX < 550 ? '15px' : '',
                }}
            >
                <div
                    className={'flex'}
                    style={{
                        flexDirection: sizeX < 1024 ? 'column-reverse' : 'row',
                    }}
                >
                    <p
                        className={cx('committed-text')}
                        style={{
                            width: '100%',
                            marginTop: sizeX < 1024 ? '20px' : '',
                            fontSize:
                                sizeX < 500 ? '14px' : sizeX < 768 ? '16px' : sizeX < 1024 ? '17px' : '',
                            textAlign: 'justify',
                            paddingLeft: sizeX < 500 ? '10px' : '',
                        }}
                    >
                        Bằng tất cả những gì mình có, PESTNCLEAN hứa hẹn sẽ mang đến cho quý khách hàng những
                        trải nghiệm về dịch vụ chưa từng có. Lấy đam mê nhiệt huyết làm nguồn sức mạnh, và lấy
                        nụ cười của khách hàng làm mục tiêu theo đuổi, PESTNCLEAN đã và đang không ngừng hoàn
                        thiện bản thân cho hiện tại và tương lai.{' '}
                        <b>
                            Một tập thể vững mạnh không có nghĩa là một tập thể xuất sắc hay một cá nhân vượt
                            trội, mà nó còn được khẳng định bằng việc đã mang lại được gì cho cộng đồng!{' '}
                        </b>
                    </p>
                    <div
                        className={'flex justify-center items-center'}
                        style={{
                            width: sizeX < 1024 ? '100%' : '70%',
                        }}
                        ref={logoCompany}
                    >
                        <Image
                            src={logo2.src}
                            alt="Logo đơn của Pestnclean"
                            width={sizeX < 600 ? 100 : sizeX < 1024 ? 140 : 173}
                            height={216}
                        />
                    </div>
                </div>
                <div
                    className={`${cx('committed-wrapper-2')}`}
                    style={{
                        flexDirection: sizeX < 1024 ? 'column' : 'row',
                        gap: sizeX < 1024 ? '15px' : '60px',
                    }}
                >
                    <div className={'flex flex-row gap-5'} style={sizeX <= 768 ? { flexWrap: 'wrap' } : {}}>
                        <div>
                            <h1
                                className={cx('committed-number')}
                                style={{
                                    fontSize: sizeX < 500 ? '45px' : sizeX < 768 ? '60px' : '',
                                }}
                            >
                                3+
                            </h1>
                            <p
                                className={cx('committed-des')}
                                style={{
                                    fontSize: sizeX < 500 ? '8.5px' : '',
                                }}
                            >
                                Năm hoạt động
                            </p>
                        </div>
                        <div className={cx('committed-item')}>
                            <h1
                                className={cx('committed-number')}
                                style={{
                                    fontSize: sizeX < 500 ? '45px' : sizeX < 768 ? '60px' : '',
                                }}
                            >
                                29+
                            </h1>
                            <p
                                className={cx('committed-des')}
                                style={{
                                    fontSize: sizeX < 500 ? '8.5px' : '',
                                }}
                            >
                                Đối tác kinh doanh
                            </p>
                        </div>
                        <div className={cx('committed-item')}>
                            <h1
                                className={cx('committed-number')}
                                style={{
                                    fontSize: sizeX < 500 ? '45px' : sizeX < 768 ? '60px' : '',
                                }}
                            >
                                199+
                            </h1>
                            <p
                                className={cx('committed-des')}
                                style={{
                                    fontSize: sizeX < 500 ? '8.5px' : '',
                                }}
                            >
                                Tổng dự án hoàn thành
                            </p>
                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: sizeX < 768 ? '11.5px' : '13.5px',
                            fontWeight: '600',
                            letterSpacing: '-.5px',
                            color: 'rgba(0,0,0,0.7)',
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
