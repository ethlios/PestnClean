import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import ParagraphAlignRight from '~/components/Service/ParagraphAlignRight';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import CardHover from '~/components/Service/CardHover';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function DichVu1Page(props: IAppProps) {
    return (
        <div className={'container'}>
            <ServiceBanner />
            <ParagraphAlignLeft>
                <h1 className={cx('title')}>Dịch vụ kiểm soát côn trùng tại PetnClean</h1>
                <p className={cx('text-common')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
            </ParagraphAlignLeft>
            <ServiceBanner />
            <ParagraphAlignRight>
                <p className={cx('text-common')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
            </ParagraphAlignRight>
            <BundleCard>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CardHover key={index} />
                ))}
            </BundleCard>
            <h1 className={cx('title')}>Dịch vụ kiểm soát côn trùng chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-20'}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <Card
                        key={index}
                        src={''}
                        alt={''}
                        title={'kiểm soát côn trùng tích hợp'}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
