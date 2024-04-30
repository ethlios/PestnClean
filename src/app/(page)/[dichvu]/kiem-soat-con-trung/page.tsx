'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import ParagraphAlignRight from '~/components/Service/ParagraphAlignRight';
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
                alt="Dịch vụ kiểm soát côn trùng chuyên nghiệp tại pestnclean"
            />
            <ParagraphAlignLeft>
                <h1
                    className={cx('title')}
                    style={{
                        fontSize: sizeX < 560 ? '25px' : sizeX < 768 ? '30px' : '',
                    }}
                >
                    Dịch vụ kiểm soát côn trùng tại PetnClean
                </h1>
                <p
                    className={cx('text-common')}
                    style={{
                        textAlign: sizeX < 768 ? 'justify' : 'left',
                    }}
                >
                    Việc tìm được một công ty kiểm soát côn trùng hiệu quả cho nhà ở, các cơ sở, đơn vị kinh
                    doanh là hết sức cần thiết. PestnClean tự hào là một đơn vị có nhiều năm kinh nghiệm trong
                    lĩnh vực kiểm soát côn trùng. Chúng tôi với đội ngũ nhân viên lành nghề, được đào tạo kỹ
                    càng về nhiều mặt (chuyên môn và thái độ phục vụ) cam kết sẽ cung cấp tới Quý khách hàng
                    một dịch vụ chất lượng nhất.
                </p>
            </ParagraphAlignLeft>
            <Video
                title="Dịch vụ kiểm soát côn trùng tại PetnClean."
                src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713528846/Termite_bw08jg.mp4"
            />
            <ParagraphAlignRight>
                <h1
                    className={`${cx('title')}`}
                    style={{
                        fontSize: sizeX < 560 ? '25px' : sizeX < 768 ? '30px' : '',
                        textAlign: sizeX < 768 ? 'left' : 'right',
                    }}
                >
                    Báo cáo phân tích chuẩn BRC, HACCP, ISO
                </h1>
                <p
                    className={cx('text-common')}
                    style={{
                        textAlign: sizeX < 768 ? 'justify' : 'right',
                    }}
                >
                    PestnClean hỗ trợ các doanh nghiệp có yêu cầu tuân thủ các tiêu chuẩn: BRC, HACCP, ISO,…
                    cùng các dịch vụ báo cáo phân tích chuyên sâu. Hệ thống báo cáo kỹ thật số của chúng tôi
                    là một công cụ để theo dõi báo cáo thông tin về chương trình kiểm soát côn trùng, bao gồm
                    tất cả thông tin về phương pháp, thiết bị và sản phẩm sử dụng trong chương trình kiểm soát
                    côn trùng. Đây là một cách để PestnClean đơn giản hóa việc kiểm soát côn trùng cho khách
                    hàng. Chúng tôi cam kết liên tục theo dõi & điều chỉnh chương trình kiểm soát côn trùng
                    khi cần thiết.
                </p>
            </ParagraphAlignRight>
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
            <h1 className={`${cx('content-title')} text-center`}>Dịch vụ kiểm soát côn trùng chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {linkKiemSoatConTrung.map((item, index) => (
                    <Card
                        key={index}
                        src={item.img}
                        alt={`${item.name} tại Pestnclean`}
                        title={item.name}
                        path={item.path}
                        description={item.description}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
