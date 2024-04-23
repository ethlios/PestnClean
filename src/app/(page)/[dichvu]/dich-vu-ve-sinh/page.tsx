import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';
import Video from '~/components/Service/Video';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const links = [
    {
        id: 1,
        name: 'Vệ sinh nhà xưởng',
        path: 'dichvu/dich-vu-ve-sinh-nha-xuong',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 2,
        name: 'Vệ sinh tòa nhà, building',
        path: 'dichvu/dich-vu-ve-sinh-toa-nha',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 3,
        name: 'Vệ sinh văn phòng',
        path: 'dichvu/dich-vu-ve-sinh-van-phong',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 4,
        name: 'Vệ sinh sau xây dựng',
        path: 'dichvu/dich-vu-ve-sinh-sau-xay-dung',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 5,
        name: 'Vệ sinh thảm',
        path: 'dichvu/dich-vu-giat-tham-cua-pestnclean',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 6,
        name: 'Vệ sinh trần, sàn',
        path: 'dichvu/dich-vu-ve-sinh-tran-san-nha-pestnclean',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 7,
        name: 'Vệ sinh sofa',
        path: 'dichvu/phuong-phap-dich-vu-ve-sinh-sofa',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 8,
        name: 'Vệ sinh máy lạnh',
        path: 'dichvu/dich-vu-ve-sinh-may-lanh-uy-tin-chuyen-nghiep',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 9,
        name: 'Dọn dẹp nhà cửa',
        path: 'dichvu/loi-ich-cua-dich-vu-don-dep-nha-cua',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
];

export default function DichVu3Page(props: IAppProps) {
    return (
        <div className={'container cpmount'}>
            <ServiceBanner />
            <ParagraphAlignLeft>
                <h1 className={cx('title')}>Công ty dịch vụ vệ sinh PetnClean</h1>
                <p className={`${cx('text-common')}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </ParagraphAlignLeft>
            <TextImageImage />
            <Video title="Dịch vụ vệ sinh công nghiệp tại PetnClean."
                   src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713531630/Ve%CC%A3%CC%82_Sinh_Co%CC%82ng_Nghie%CC%A3%CC%82p_yqfytu.mp4" />
            <h1 className={`${cx('content-title')} text-center`}>Dịch vụ vệ sinh chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {links.map((item, index) => (
                    <Card
                        key={index}
                        src={''}
                        alt={''}
                        title={item.name}
                        path={item.path}
                        description={item.description}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
