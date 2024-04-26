import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import BundleCard from '~/components/Service/BundleCard';
import CardHover from '~/components/Service/CardHover';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';
import Video from '~/components/Service/Video';
import { linkGiaiPhapVeSinh } from '~/constants/links';
import { cardGiaiPhapVeSinh } from '~/constants/card';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function DichVu3Page(props: IAppProps) {
    return (
        <div
            className={'container cpmount'}
            style={{
                overflowX: 'hidden',
            }}
        >
            <ServiceBanner
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879055/vases-candles-blurred-background-home-interior_q2b1zw.jpg"
                alt="Các giải pháp vệ sinh tại PetnClean"
            />
            <h1 className={'text-center ' + cx('content-title-fix')}>Các giải pháp vệ sinh tại PetnClean</h1>
            <BundleCard>
                {cardGiaiPhapVeSinh.map((item, index) => (
                    <CardHover
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        src={item.img}
                        alt={item.title}
                    />
                ))}
            </BundleCard>
            <Video
                title="Các giải pháp mùi hương tại PetnClean."
                src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713531625/Gia%CC%89i_Pha%CC%81p_Mu%CC%80i_Hu%CC%9Bo%CC%9Bng_dm989a.mp4"
            />
            <TextImageImage />
            <h1 className={`${cx('content-title')} text-center`}>Giải pháp theo ngành hàng</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {linkGiaiPhapVeSinh.map((item, index) => (
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
