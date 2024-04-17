import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import BundleCard from '~/components/Service/BundleCard';
import CardHover from '~/components/Service/CardHover';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';

const cx = classNames.bind(styles);

export interface IAppProps {}

const links = [
    {
        id: 1,
        name: 'Khách sạn & Resort',
        path: 'dichvu/giai-phap-mui-huong-cho-khach-san-resort',
    },
    {
        id: 2,
        name: 'Trung tâm thương mại',
        path: 'dichvu/giai-phap-mui-huong-cho-trung-tam-thuong-mai',
    },
    {
        id: 3,
        name: 'Không gian gia đình',
        path: 'dichvu/giai-phap-mui-huong-cho-khong-gian-gia-dinh',
    },
    {
        id: 4,
        name: 'Phòng gym',
        path: 'dichvu/tai-sao-can-co-giai-phap-mui-huong-cho-phong-gym',
    },
    {
        id: 5,
        name: 'Tòa nhà / Văn phòng',
        path: 'dichvu/giai-phap-mui-huong-cho-toa-nha-van-phong',
    },
    {
        id: 6,
        name: 'Spa',
        path: 'dichvu/giai-phap-mui-huong-cho-spa-tham-my-vien',
    },
];

const cards = [
    {
        id: 1,
        title: 'Sản phẩm, thiết bị vệ sinh khử khuẩn',
        description:
            'Hơn 50+ sản phẩm xà phòng khử khuẩn và các thiết bị vệ sinh hiện đại cho các không gian khác nhau.',
    },
    {
        id: 2,
        title: 'Máy khuếch tán tinh dầu, thiết bị tạo hương',
        description:
            'Các dòng máy chuyên dụng, đáp ứng cho mọi loại hình kinh doanh, diện tích không gian và mục đích sử dụng.',
    },
    {
        id: 3,
        title: 'Bộ sưu tập tinh dầu hương thơm độc quyền',
        description:
            'Với hơn 1000 tinh dầu nước hoa từ thương hiệu xuất xứ Nhật Bản và hơn 100 mùi hương tinh dầu thiên nhiên.',
    },
    {
        id: 4,
        title: 'Dịch vụ cho thuê trọn gói 24/7',
        description:
            'Cung cấp giải pháp hương thơm chuyên nghiệp với hình thức cho thuê giúp tiết kiệm chi phí, thời gian và công sức vận hành.',
    },
    {
        id: 5,
        title: 'Dịch vụ tiếp thị mùi hương',
        description:
            'Tư vấn và cung cấp dịch vụ Scent Marketing độc quyền cho các doanh nghiệp trong nhiều lĩnh vực.',
    },
    {
        id: 6,
        title: 'Giải pháp vệ sinh tích hợp',
        description: 'Dịch vụ toàn diện, chi phí hợp lý, linh hoạt được tư vấn cụ thể theo nhu cầu.',
    },
];

export default function DichVu3Page(props: IAppProps) {
    return (
        <div className={'container'}>
            <ServiceBanner />
            <p className={'text-center ' + cx('content-title-fix')}>Các giải pháp vệ sinh tại PetnClean</p>
            <BundleCard>
                {cards.map((item, index) => (
                    <CardHover key={index} id={item.id} title={item.title} description={item.description} />
                ))}
            </BundleCard>
            <TextImageImage />
            <ServiceBanner />
            <p className={cx('content-title')}>Giải pháp theo ngành hàng</p>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {links.map((item, index) => (
                    <Card key={index} src={''} alt={''} title={item.name} path={item.path} />
                ))}
            </BundleCard>
        </div>
    );
}
