'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';
import Video from '~/components/Service/Video';
import useSize from '~/libs/hooks/useSize';
import { linkDichVuVeSinh } from '~/constants/links';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function DichVu3Page(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            className={'cpmount'}
            style={{
                overflowX: 'hidden',
                padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px',
            }}
        >
            <ServiceBanner
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844497/everdrop-gmbh-SqOMDOQb3ws-unsplash_cwbn5u.jpg"
                alt="Công ty dịch vụ vệ sinh PetnClean"
            />
            <ParagraphAlignLeft>
                <h1
                    className={cx('title')}
                    style={{
                        fontSize: sizeX < 560 ? '25px' : sizeX < 768 ? '30px' : '',
                    }}
                >
                    Công ty dịch vụ vệ sinh PetnClean
                </h1>
                <p
                    className={`${cx('text-common')}`}
                    style={{
                        textAlign: sizeX < 768 ? 'justify' : 'left',
                    }}
                >
                    PestnClean là công ty dịch vụ vệ sinh chuyên nghiệp, cung cấp các dịch vụ vệ sinh công
                    nghiệp và vệ sinh dân dụng chất lượng cao, được thiết kế linh hoạt nhằm đáp ứng tối ưu yêu
                    cầu của khách hàng, góp phần nâng cao chất lượng môi trường sống và làm việc, đáp ứng đầy
                    đủ các điều kiện pháp lý và tiêu chuẩn ngành để đảm bảo quá trình kinh doanh hiệu quả,
                    nâng cao danh tiếng thương hiệu.
                </p>
            </ParagraphAlignLeft>
            <TextImageImage />
            <Video
                title="Dịch vụ vệ sinh công nghiệp tại PetnClean."
                src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713531630/Ve%CC%A3%CC%82_Sinh_Co%CC%82ng_Nghie%CC%A3%CC%82p_yqfytu.mp4"
            />
            <h1 className={`${cx('content-title')} text-center`}>Dịch vụ vệ sinh chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {linkDichVuVeSinh.map((item, index) => (
                    <Card
                        key={index}
                        src={item.src}
                        alt={item.name + 'tại Pestnclean'}
                        title={item.name}
                        path={item.path}
                        description={item.description}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
