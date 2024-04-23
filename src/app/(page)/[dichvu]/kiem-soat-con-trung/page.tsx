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

const cx = classNames.bind(styles);

export interface IAppProps {}

const links = [
    {
        id: 1,
        name: 'Kiểm soát côn trùng tích hợp',
        path: '/blogs/dich-vu-kiem-soat-con-trung-toan-dien',
        description: `Nếu bạn đang bị quấy rối bởi côn trùng và gặp khó khăn trong việc giải quyết chúng. Một dịch vụ kiểm soát côn trùng toàn diện là một điều cần thiết.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874790/people-disinfecting-biohazard-area_1_yk8d7i.jpg',
    },
    {
        id: 2,
        name: 'Kiểm soát mối',
        path: '/blogs/dich-vu-diet-moi-tan-goc-tai-nha',
        description: `Mối đang là vấn đề của bạn? Đừng lo dịch vụ diệt mối PestnClean là giải pháp tối ưu cho việc loại bỏ tận gốc mối ra khỏi không gian sống và làm việc của bạn.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874939/morten-jakob-pedersen-nvpiA6WS3zU-unsplash_ukveyd.jpg',
    },
    {
        id: 3,
        name: 'Kiểm soát chuột',
        path: '/blogs/dich-vu-diet-chuot-uy-tin',
        description: `Bạn muốn tiêu diệt lũ chuột phá hoại trong nhà của mình nhưng vẫn đang gặp khó khăn? Một dịch vụ diệt chuột là điều mà bạn cần, cùng tìm hiểu về dịch vụ này nhé.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874921/joshua-j-cotten-QxW15BmJxOQ-unsplash_elegw0.jpg',
    },
    {
        id: 4,
        name: 'Kiểm soát ruồi',
        path: '/blogs/dich-vu-diet-ruoi-an-toan-hieu-qua',
        description: `Dịch vụ diệt ruồi và kiểm soát ruồi được định nghĩa là thế nào? Làm sao để hạn chế ruồi xâm nhập đến nơi mình đang sống, học tập hoặc làm việc.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874875/jin-yeong-kim-f98dJ8VkuTk-unsplash_pwfpin.jpg',
    },
    {
        id: 5,
        name: 'Kiểm soát muỗi',
        path: '/blogs/dich-vu-diet-muoi-an-toan-chuyen-nghiep',
        description: `Muỗi là nguồn gốc của nhiều căn bệnh vô cùng nguy hiểm mà chúng ta không thể không đề phòng, sau đây hãy cùng tìm hiểu dịch vụ diệt muỗi uy tín, chất lượng.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874904/syed-ali-80a3A_BFeic-unsplash_evnnnh.jpg',
    },
    {
        id: 6,
        name: 'Kiểm soát kiến',
        path: '/blogs/dich-vu-diet-kien-tan-goc-tai-nha-hieu-qua',
        description: `Kiến là loài côn trùng tưởng chừng như vô hại nhưng lại là mối phiền toái của nhiều người, vì thế cần tìm một dịch vụ diệt kiến hiệu quả để có thể xử lý chúng.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874888/peter-f-wolf-Xtdqunzk17Y-unsplash_yqsl7t.jpg',
    },
    {
        id: 7,
        name: 'Kiểm soát gián',
        path: '/blogs/dich-vu-diet-gian-duc',
        description: `PestnClean là công ty hàng đầu có nhiều năm kinh nghiệm trong lĩnh vực kiểm soát gián và một số loại côn trùng khác, đặc biệt là dịch vụ diệt gián Đức.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874895/erik-karits-CAgEXn8iFZc-unsplash_k8q8gb.jpg',
    },
    {
        id: 8,
        name: 'Dịch vụ khử khuẩn',
        path: '/blogs/dich-vu-phun-khu-khuan-tai-nha',
        description: `Dịch vụ phun khử khuẩn là một giải pháp hiệu quả để đảm bảo môi trường sống và làm việc của bạn được bảo vệ khỏi vi khuẩn. Hãy cùng tìm hiểu.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874882/fusion-medical-animation-rnr8D3FNUNY-unsplash_ibmxg7.jpg',
    },
    {
        id: 9,
        name: 'Dịch vụ đào tạo nhận thức',
        path: '/blogs/dao-tao-nhan-thuc-kiem-soat-con-trung',
        description: `Đào tạo nhận thức kiểm soát côn trùng có vai trò quan trọng như thế nào trong cuộc sống của chúng ta? Hãy cùng tìm hiểu vấn đề này nhé!`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713874865/andrew-neel-cckf4TsHAuw-unsplash_zjueph.jpg',
    },
];

const cards = [
    {
        id: 1,
        title: 'Nhà hàng & chuỗi bán lẻ',
        description:
            'Cung cấp giải pháp kiểm soát côn trùng toàn diện cho các nhà hàng, cơ sở dịch vụ ăn uống, chuỗi bán lẻ, siêu thị … đảm bảo nâng cao sự hài lòng của khách hàng và danh tiếng thương hiệu.',
        path: 'kiem-soat-con-trung-tai-nha-hang-chuoi-ban-le/',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838241/jason-leung-poI7DelFiVA-unsplash_d95nt0.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Nhà hàng & chuỗi bán lẻ',
    },
    {
        id: 2,
        title: 'Văn phòng, tòa nhà',
        description:
            'Cung cấp các dịch vụ kiểm soát côn trùng hiệu quả, tiết kiệm, an toàn cho sức khoẻ và bảo vệ tài sản cho các cơ sở công nghiệp và sản xuất, các văn phòng, nhà máy, trường học, v.v.',
        path: 'kiem-soat-con-trung-o-van-phong-co-so-cong-nghiep',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838158/nastuh-abootalebi-eHD8Y1Znfpk-unsplash_ppcawq.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Văn phòng, tòa nhà',
    },
    {
        id: 3,
        title: 'Khách sạn & Resorts',
        description:
            'Chương trình kiểm soát côn trùng toàn diện giúp các khách sạn & resorts đáp ứng các yêu cầu pháp lý và tiêu chuẩn ngành.',
        path: 'kiem-soat-con-trung-tai-khach-san-resort',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838167/verne-ho-MwW-zrkYSIU-unsplash_h7a2ki.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Khách sạn & Resorts',
    },
    {
        id: 4,
        title: 'Cơ sở chế biến thực phẩm',
        description:
            'Các giải pháp kiểm soát côn trùng đáp ứng nghiêm ngặt các tiêu chuẩn ngành (BRC, HACCP, GFIS), giúp doanh nghiệp chủ động quản lý rủi ro và đảm bảo an toàn thực phẩm.',
        path: 'kiem-soat-con-trung-trong-co-so-che-bien-thuc-pham',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838672/technologist-make-set-up-production-line-while-standing-near-digital-screen-department-dairy-factory-min_vodohk.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Cơ sở chế biến thực phẩm ',
    },
    {
        id: 5,
        title: 'Nhà hát, rạp chiếu phim',
        description:
            'Cung cấp các giải pháp kiểm soát côn trùng và dịch hại toàn diện cho các rạp chiếu phim, nhà hát, sân khấu … đảm bảo các tiêu chuẩn về an toàn và sức khỏe.',
        path: 'quy-trinh-kiem-soat-con-trung-nha-hat-rap-chieu-phim',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838162/wesley-pribadi-dyJq7vzPeU8-unsplash_zlrbcw.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Nhà hát, rạp chiếu phim',
    },
    {
        id: 6,
        title: 'Kho bãi & chuỗi cung ứng',
        description:
            'Chương trình kiểm soát côn trùng và sinh vật gây hại toàn diện, tích hợp và thông minh phù hợp với từng địa điểm trong chuỗi cung ứng và kho bãi.',
        path: 'tai-sao-can-kiem-soat-con-trung-trong-chuoi-cung-ung',
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713838156/reproductive-health-supplies-coalition-i2I0_u98Rh4-unsplash_iswarv.jpg',
        alt: 'Dịch vụ kiểm soát côn trùng tại Kho bãi & chuỗi cung ứng',
    },
];

export default function DichVu1Page(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'container cpmount'}>
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
                {cards.map((item, index) => (
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
                {links.map((item, index) => (
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
