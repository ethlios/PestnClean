'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import CardHover from '~/components/Service/CardHover';
import Video from '~/components/Service/Video';
import useSize from '~/libs/hooks/useSize';
import { linkKiemSoatConTrung } from '~/constants/links';
import { cardKiemSoatConTrung } from '~/constants/card';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function DichVu1Page(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            className={'cpmount'}
            style={{
                overflowX: 'hidden',
                padding:
                    sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px',
            }}
        >
            <ServiceBanner
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713837564/person-disinfecting-dangerous-area-while-wearing-protective-suit_wj8knz.jpg"
                alt="Dịch vụ kiểm soát côn trùng chuyên nghiệp tại PESTNCLEAN"
            />
            <div className={'mb-10'}>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        gap: '30px',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '45%',
                        }}
                    >
                        <h1
                            className={cx('title')}
                            style={{
                                color: '#000',
                                textAlign: 'left',
                            }}
                        >
                            Dịch vụ kiểm soát côn trùng tại PESTNCLEAN
                        </h1>
                        <p className={cx('text-common')}>
                            Việc tìm được một công ty kiểm soát côn trùng hiệu quả cho nhà ở, các cơ sở, đơn
                            vị kinh doanh là hết sức cần thiết. PESTNCLEAN tự hào là một đơn vị có nhiều năm
                            kinh nghiệm trong lĩnh vực kiểm soát côn trùng. Chúng tôi với đội ngũ nhân viên
                            lành nghề, được đào tạo kỹ càng về nhiều mặt (chuyên môn và thái độ phục vụ) cam
                            kết sẽ cung cấp tới Quý khách hàng một dịch vụ chất lượng nhất.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '55%',
                        }}
                    >
                        <Video
                            title="Dịch vụ kiểm soát côn trùng tại PetnClean."
                            src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713528846/Termite_bw08jg.mp4"
                            orther
                        />
                    </div>
                </div>
            </div>

            <div className={'mb-16'}>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        gap: '30px',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '55%',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            height: '400px',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '45%',
                        }}
                    >
                        <h1
                            className={cx('title')}
                            style={{
                                color: '#000',
                                textAlign: 'right',
                            }}
                        >
                            Báo cáo phân tích chuẩn BRC, HACCP, ISO
                        </h1>
                        <p className={cx('text-common')}>
                            PESTNCLEAN hỗ trợ các doanh nghiệp có yêu cầu tuân thủ các tiêu chuẩn: BRC, HACCP,
                            ISO,… cùng các dịch vụ báo cáo phân tích chuyên sâu. Hệ thống báo cáo kỹ thật số
                            của chúng tôi là một công cụ để theo dõi báo cáo thông tin về chương trình kiểm
                            soát côn trùng, bao gồm tất cả thông tin về phương pháp, thiết bị và sản phẩm sử
                            dụng trong chương trình kiểm soát côn trùng. Đây là một cách để PESTNCLEAN đơn
                            giản hóa việc kiểm soát côn trùng cho khách hàng. Chúng tôi cam kết liên tục theo
                            dõi & điều chỉnh chương trình kiểm soát côn trùng khi cần thiết.
                        </p>
                    </div>
                </div>
            </div>
            <BundleCard>
                {cardKiemSoatConTrung.map((item, index) => (
                    <CardHover
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        path={item.path}
                        src={item.src}
                        alt={item.alt}
                    />
                ))}
            </BundleCard>
            <h1 className={cx('content-title')}>Dịch vụ kiểm soát côn trùng chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {linkKiemSoatConTrung.map((item, index) => (
                    <Card
                        key={index}
                        src={item.img}
                        alt={`${item.name} tại PESTNCLEAN`}
                        title={item.name}
                        path={item.path}
                        description={item.description}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
