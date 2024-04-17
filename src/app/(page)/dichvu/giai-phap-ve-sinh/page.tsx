import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import BundleCard from '~/components/Service/BundleCard';
import CardHover from '~/components/Service/CardHover';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';


const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function DichVu3Page(props: IAppProps) {
    return (
        <div className={'container'}>
            <ServiceBanner />
            <p className={'text-center ' + cx('content-title')}>Các giải pháp vệ sinh tại PetnClean</p>
            <BundleCard>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CardHover key={index} />
                ))}
            </BundleCard>
            <TextImageImage />
            <ServiceBanner />
            <p className={cx('content-title')}>Giải pháp theo ngành hàng</p>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <Card key={index} src={''} alt={''} title={'vệ sinh nhà xưởng'} />
                ))}
            </BundleCard>
        </div>
    );
}
