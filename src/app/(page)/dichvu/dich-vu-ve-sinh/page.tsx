import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function DichVu3Page(props: IAppProps) {
    return (
        <div className={'container'}>
            <ServiceBanner />
            <ParagraphAlignLeft>
                <h1 className={cx('title')}>Công ty dịch vụ vệ sinh PetnClean</h1>
                <p className={cx('text-common')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </ParagraphAlignLeft>
            <ServiceBanner />
            <TextImageImage />
            <p className={cx('content-title')}>Dịch vụ vệ sinh chuyên biệt</p>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <Card key={index} src={''} alt={''} title={'vệ sinh nhà xưởng'} />
                ))}
            </BundleCard>
        </div>
    );
}
