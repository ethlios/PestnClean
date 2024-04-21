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
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 2,
        name: 'Kiểm soát mối',
        path: 'dichvu/dich-vu-diet-moi-tan-goc-tai-nha',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 3,
        name: 'Kiểm soát chuột',
        path: 'dichvu/dich-vu-diet-chuot-uy-tin',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 4,
        name: 'Kiểm soát ruồi',
        path: 'dichvu/dich-vu-diet-ruoi-an-toan-hieu-qua',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 5,
        name: 'Kiểm soát muỗi',
        path: 'dichvu/dich-vu-diet-muoi-an-toan-chuyen-nghiep',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 6,
        name: 'Kiểm soát kiến',
        path: 'dichvu/dich-vu-diet-kien-tan-goc-tai-nha-hieu-qua',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 7,
        name: 'Kiểm soát gián',
        path: 'dichvu/dich-vu-diet-gian-duc',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 8,
        name: 'Dịch vụ khử khuẩn',
        path: 'dichvu/dich-vu-phun-khu-khuan-tai-nha',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    },
    {
        id: 9,
        name: 'Dịch vụ đào tạo nhận thức',
        path: 'dichvu/dao-tao-nhan-thuc-kiem-soat-con-trung',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
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
        title: 'Văn phòng, tòa nhà',
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
        title: 'Nhà hát, rạp chiếu phim ',
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
        <div className={'container cpmount'}>
            <ServiceBanner />
            <ParagraphAlignLeft>
                <h1 className={cx('title')}>Dịch vụ kiểm soát côn trùng tại PetnClean</h1>
                <p className={cx('text-common')}>
                    Việc tìm được một công ty kiểm soát côn trùng hiệu quả cho nhà ở, các cơ sở, đơn vị kinh
                    doanh là hết sức cần thiết. PestnClean tự hào là một đơn vị có nhiều năm kinh nghiệm trong
                    lĩnh vực kiểm soát côn trùng. Chúng tôi với đội ngũ nhân viên lành nghề, được đào tạo kỹ
                    càng về nhiều mặt (chuyên môn và thái độ phục vụ) cam kết sẽ cung cấp tới Quý khách hàng
                    một dịch vụ chất lượng nhất.
                </p>
            </ParagraphAlignLeft>
            <div style={{ width: '100%', height: '450px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                <video
                    style={{ width: '100%', height: '100%' }}
                    controls
                    preload="none"
                    draggable={false}
                    title="Dịch vụ kiểm soát côn trùng tại PetnClean."
                >
                    <source
                        src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713528846/Termite_bw08jg.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <ParagraphAlignRight>
                <h1 className={`${cx('title')} text-right`}>Báo cáo phân tích chuẩn BRC, HACCP, ISO</h1>
                <p className={cx('text-common')}>
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
            <h1 className={`${cx('content-title')} text-center`}>Dịch vụ kiểm soát côn trùng chuyên biệt</h1>
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
