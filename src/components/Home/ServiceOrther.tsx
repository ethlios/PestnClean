'use client';

import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { fadeIn } from '~/libs/orthers/animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useSize from '~/libs/hooks/useSize';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(styles);

export interface IAppProps {}

const otherService = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713837564/person-disinfecting-dangerous-area-while-wearing-protective-suit_wj8knz.jpg',
        title: 'Kiểm Soát côn trùng',
        description: `Việc tìm được một công ty kiểm soát côn trùng hiệu quả cho nhà ở, các cơ sở, đơn vị kinh doanh là hết sức cần thiết. PestnClean tự hào là một đơn vị có nhiều năm kinh nghiệm trong lĩnh vực kiểm soát côn trùng. Chúng tôi với đội ngũ nhân viên lành nghề, được đào tạo kỹ càng về nhiều mặt (chuyên môn và thái độ phục vụ) cam kết sẽ cung cấp tới Quý khách hàng một dịch vụ chất lượng nhất.`,
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844497/everdrop-gmbh-SqOMDOQb3ws-unsplash_cwbn5u.jpg',
        title: 'Dịch vụ vệ sinh',
        description: `PestnClean là công ty dịch vụ vệ sinh chuyên nghiệp, cung cấp các dịch vụ vệ sinh công nghiệp và vệ sinh dân dụng chất lượng cao, được thiết kế linh hoạt nhằm đáp ứng tối ưu yêu cầu của khách hàng, góp phần nâng cao chất lượng môi trường sống và làm việc, đáp ứng đầy đủ các điều kiện pháp lý và tiêu chuẩn ngành để đảm bảo quá trình kinh doanh hiệu quả, nâng cao danh tiếng thương hiệu.`,
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879055/vases-candles-blurred-background-home-interior_q2b1zw.jpg',
        title: 'Giải pháp vệ sinh',
        description: `PestnClean cung cấp giải pháp vệ sinh chuyên sâu cho các doanh nghiệp, nhà hàng, khách sạn... đảm bảo rằng các loại vi sinh vật và nấm mốc được loại bỏ, mang đến môi trường sạch khuẩn, hương thơm thư giãn và bảo vệ an toàn sức khỏe con người. Các nghiên cứu đã chứng minh rằng mùi hương dễ chịu có thể tăng cường sự sáng tạo và tinh thần, thậm chí có thể giảm căng thẳng cho con người.`,
    },
];

export default function ServiceAds(props: IAppProps) {
    const serviceOther = useRef<any>();
    const { sizeX } = useSize();

    const [currentService, setCurrentService] = useState<number>(-1);

    // useEffect(() => {
    //     gsap.fromTo(serviceOther.current, fadeIn(serviceOther.current)[0], fadeIn(serviceOther.current)[1]);
    // }, []);

    return (
        <div className={'mt-12'} ref={serviceOther}>
            <h1
                className={
                    'font-bold underline underline-offset-2 text-2xl uppercase text-center decoration-2'
                }
                style={{
                    fontSize: sizeX < 550 ? '18px' : '24px',
                }}
            >
                CÁC DỊCH VỤ CỦA CHÚNG TÔI
            </h1>
            <div className={'grid grid-cols-12 mt-8 gap-6'}>
                {otherService.map((item, index) => {
                    return (
                        <Link
                            href={`/dichvu/${nameToLink(item.title)}`}
                            key={index}
                            className={`${cx('service-item')} col-span-12 md:col-span-4`}
                            onMouseOver={() => setCurrentService(index)}
                            onMouseOut={() => setCurrentService(-1)}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className={cx('blogs-img')}
                                style={{
                                    height: '100%',
                                }}
                            />
                            <div
                                style={{
                                    opacity: currentService === index ? 1 : 0,
                                    transition: 'all ease .5s',
                                    backgroundColor:
                                        currentService === 0
                                            ? 'var(--secondary-dark)'
                                            : currentService === 1
                                            ? 'var(--primary)'
                                            : currentService === 2
                                            ? 'var(--secondary)'
                                            : '',
                                }}
                                className={cx('service-description')}
                            >
                                <p>{item.description}</p>
                                <p>
                                    Xem thêm
                                    <EastOutlinedIcon />
                                </p>
                            </div>
                            <div
                                className={cx('service-title')}
                                style={{
                                    opacity: currentService === index ? 0 : 1,
                                    transition: 'all ease .5s',
                                }}
                            >
                                <p>{item.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
