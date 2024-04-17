import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import ParagraphAlignRight from '~/components/Service/ParagraphAlignRight';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import CardHover from '~/components/Service/CardHover';

const cx = classNames.bind(styles);

export interface IAppProps {}

const links = [
    {
        id: 1,
        name: 'Kiểm soát côn trùng tích hợp',
        path: 'dichvu/dich-vu-kiem-soat-con-trung-toan-dien',
    },
    {
        id: 2,
        name: 'Kiểm soát mối',
        path: 'dichvu/dich-vu-diet-moi-tan-goc-tai-nha',
    },
    {
        id: 3,
        name: 'Kiểm soát chuột',
        path: 'dichvu/dich-vu-diet-chuot-uy-tin',
    },
    {
        id: 4,
        name: 'Kiểm soát ruồi',
        path: 'dichvu/dich-vu-diet-ruoi-an-toan-hieu-qua',
    },
    {
        id: 5,
        name: 'Kiểm soát muỗi',
        path: 'dichvu/dich-vu-diet-muoi-an-toan-chuyen-nghiep',
    },
    {
        id: 6,
        name: 'Kiểm soát kiến',
        path: 'dichvu/dich-vu-diet-kien-tan-goc-tai-nha-hieu-qua',
    },
    {
        id: 7,
        name: 'Kiểm soát gián',
        path: 'dichvu/dich-vu-diet-gian-duc',
    },
    {
        id: 8,
        name: 'Dịch vụ khử khuẩn',
        path: 'dichvu/dich-vu-phun-khu-khuan-tai-nha',
    },
    {
        id: 9,
        name: 'Dịch vụ đào tạo nhận thức',
        path: 'dichvu/dao-tao-nhan-thuc-kiem-soat-con-trung',
    },
];

const cards = [
    {
        id: 1,
        title: 'Nhà hàng & chuỗi bán lẻ',
        description:
            'Cung cấp giải pháp kiểm soát côn trùng toàn diện cho các nhà hàng, cơ sở dịch vụ ăn uống, chuỗi bán lẻ, siêu thị … đảm bảo nâng cao sự hài lòng của khách hàng và danh tiếng thương hiệu.',
        path: 'dichvu/kiem-soat-con-trung-tai-nha-hang-chuoi-ban-le/',
    },
    {
        id: 2,
        title: 'Văn phòng, building, cơ sở công nghiệp',
        description:
            'Cung cấp các dịch vụ kiểm soát côn trùng hiệu quả, tiết kiệm, an toàn cho sức khoẻ và bảo vệ tài sản cho các cơ sở công nghiệp và sản xuất, các văn phòng, nhà máy, trường học, v.v.',
        path: 'dichvu/kiem-soat-con-trung-o-van-phong-co-so-cong-nghiep',
    },
    {
        id: 3,
        title: 'Khách sạn & Resorts',
        description:
            'Chương trình kiểm soát côn trùng toàn diện giúp các khách sạn & resorts đáp ứng các yêu cầu pháp lý và tiêu chuẩn ngành, đồng thời tránh những tác động tiêu cực đến hoạt động kinh doanh và danh tiếng.',
        path: 'dichvu/kiem-soat-con-trung-tai-khach-san-resort',
    },
    {
        id: 4,
        title: 'Cơ sở chế biến thực phẩm',
        description:
            'Các giải pháp kiểm soát côn trùng đáp ứng nghiêm ngặt các tiêu chuẩn ngành (BRC, HACCP, GFIS), giúp doanh nghiệp chủ động quản lý rủi ro và đảm bảo an toàn thực phẩm - cốt lõi trong hoạt động kinh doanh.',
        path: 'dichvu/kiem-soat-con-trung-trong-co-so-che-bien-thuc-pham',
    },
    {
        id: 5,
        title: 'Nhà hát, rạp phim, trung tâm hội nghị ',
        description:
            'Cung cấp các giải pháp kiểm soát côn trùng và dịch hại toàn diện cho các rạp chiếu phim, nhà hát, sân khấu … đảm bảo các tiêu chuẩn về an toàn và sức khỏe.',
        path: 'dichvu/quy-trinh-kiem-soat-con-trung-nha-hat-rap-chieu-phim',
    },
    {
        id: 6,
        title: 'Kho bãi & chuỗi cung ứng',
        description:
            'Chương trình kiểm soát côn trùng và sinh vật gây hại toàn diện, tích hợp và thông minh phù hợp với từng địa điểm trong chuỗi cung ứng và kho bãi.',
        path: 'dichvu/tai-sao-can-kiem-soat-con-trung-trong-chuoi-cung-ung',
    },
];

export default function DichVu1Page(props: IAppProps) {
    return (
        <div className={'container'}>
            <ServiceBanner />
            <ParagraphAlignLeft>
                <h1 className={cx('title')}>Dịch vụ kiểm soát côn trùng tại PetnClean</h1>
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
            <ParagraphAlignRight>
                <p className={cx('text-common')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </ParagraphAlignRight>
            <BundleCard>
                {cards.map((item, index) => (
                    <CardHover
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        path={item.path}
                    />
                ))}
            </BundleCard>
            <p className={cx('content-title')}>Dịch vụ kiểm soát côn trùng chuyên biệt</p>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {links.map((item, index) => (
                    <Card key={index} src={''} alt={''} title={item.name} path={item.path} />
                ))}
            </BundleCard>
        </div>
    );
}
