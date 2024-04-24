import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import BundleCard from '~/components/Service/BundleCard';
import CardHover from '~/components/Service/CardHover';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';
import Video from '~/components/Service/Video';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const links = [
    {
        id: 1,
        name: 'Khách sạn & Resort',
        path: '/giai-phap-mui-huong-cho-khach-san-resort',
        description: `Giải pháp mùi hương cho khách sạn & resort là cách nâng giá trị dịch vụ mà khu nghỉ dưỡng mang lại cho khách hàng.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878246/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_zyfak2.jpg',
    },

    {
        id: 2,
        name: 'Trung tâm thương mại',
        path: '/giai-phap-mui-huong-cho-trung-tam-thuong-mai',
        description: `Giải pháp mùi hương cho trung tâm thương mại là dịch vụ vô cùng cần thiết giúp cho không gian luôn thơm mát, sạch sẽ.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878283/igor-karimov-vbpn6xykoC8-unsplash_cz1scu.jpg',
    },
    {
        id: 5,
        name: 'Tòa nhà / Văn phòng',
        path: '/giai-phap-mui-huong-cho-toa-nha-van-phong',
        description: `Giải pháp mùi hương cho tòa nhà, văn phòng là lựa chọn đúng đắn nếu bạn muốn có nơi sinh hoạt, làm việc mang lại cảm giác dễ chịu.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878224/kaleb-tapp-1deQbU6DhBg-unsplash_at6snx.jpg',
    },
    {
        id: 3,
        name: 'Không gian gia đình',
        path: '/giai-phap-mui-huong-cho-khong-gian-gia-dinh',
        description: `Khám phá giải pháp mùi hương cho không gian gia đình của PestnClean để có thể tạo ra một môi trường sống đẹp và đầy ấm áp, làm thăng hoa mọi giác quan của bạn.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878267/dan-gold-4HG3Ca3EzWw-unsplash_lfjgzb.jpg',
    },

    {
        id: 4,
        name: 'Phòng gym',
        path: '/tai-sao-can-co-giai-phap-mui-huong-cho-phong-gym',
        description: `Giải pháp mùi hương cho phòng GYM là một điều vô cùng cần thiết. Điều này góp phần giúp cho đơn vị kinh doanh thu hút khách hàng, cùng tìm hiểu bài viết nhé!`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878232/risen-wang-20jX9b35r_M-unsplash_euamvl.jpg',
    },
    {
        id: 6,
        name: 'Spa',
        path: '/giai-phap-mui-huong-cho-spa-tham-my-vien',
        description: `Giải pháp mùi hương Spa, thẩm mỹ viện đã và đang trở thành phương pháp được khá nhiều chủ Spa, thẩm mỹ áp dụng nhằm thu hút và níu giữ chân khách hàng của mình.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878216/atikah-akhtar-6xlyKFFvufg-unsplash_uxwand.jpg',
    },
    {
        id: 7,
        name: 'Vệ sinh PestnClean Hiệu quả',
        path: '/giai-phap-ve-sinh-pestnclean-hieu-qua',
        description: `Áp lực từ thị trường bắt buộc công ty chuyên nghiệp phải tuân thủ những yêu cầu nghiêm ngặt và đây là lúc các giải pháp vệ sinh đa dạng của PestnClean ra đời.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879102/2150700358_1_tzqpqe.jpg',
    },
    {
        id: 8,
        name: 'Giải pháp mùi hương cho doanh nghiệp',
        path: '/giai-phap-mui-huong-cho-doanh-nghiep',
        description: `Môi trường làm việc không thơm tho sẽ ảnh hưởng xấu đến sức khỏe và tinh thần làm việc của nhân viên. Hãy sử dụng ngay giải pháp mùi hương của chúng tôi.`,
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879088/still-life-with-aroma-diffuser-humidify-air-interior-decor-details-scandinavian-style_qgnsf1.jpg',
    },
];

// giải pháp vệ sinh và giải pháp mùi hương
// {
//     id: 4,
//     name: 'Giải pháp vệ sinh PestnClean Hiệu quả',
//     description: `Áp lực từ thị trường bắt buộc công ty chuyên nghiệp phải tuân thủ những yêu cầu nghiêm ngặt và đây là lúc các giải pháp vệ sinh đa dạng của PestnClean ra đời.`,
//     img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879102/2150700358_1_tzqpqe.jpg',
// },
// {
//     id: 6,
//     name: 'Giải pháp mùi hương cho doanh nghiệp',
//     description: `Môi trường làm việc không thơm tho sẽ ảnh hưởng xấu đến sức khỏe và tinh thần làm việc của nhân viên. Hãy sử dụng ngay giải pháp mùi hương của chúng tôi.`,
//     img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879088/still-life-with-aroma-diffuser-humidify-air-interior-decor-details-scandinavian-style_qgnsf1.jpg',
// },

const cards = [
    {
        id: 1,
        title: 'Sản phẩm, thiết bị vệ sinh khử khuẩn',
        description:
            'Hơn 50+ sản phẩm xà phòng khử khuẩn và các thiết bị vệ sinh hiện đại cho các không gian khác nhau.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878275/clay-banks-kBaf0DwBPbE-unsplash_mbzs4j.jpg',
    },
    {
        id: 2,
        title: 'Máy khuếch tán tinh dầu, thiết bị tạo hương',
        description:
            'Các dòng máy chuyên dụng, đáp ứng cho mọi loại hình kinh doanh, diện tích không gian và mục đích sử dụng.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878553/jopeel-quimpo-FBpBzKtf3-4-unsplash_zm6zcf.jpg',
    },
    {
        id: 3,
        title: 'Bộ sưu tập tinh dầu hương thơm độc quyền',
        description:
            'Với hơn 1000 tinh dầu nước hoa từ thương hiệu xuất xứ Nhật Bản và hơn 100 mùi hương tinh dầu thiên nhiên.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878605/tron-le-62oEg-UL4Sg-unsplash_p12xmk.jpg',
    },
    {
        id: 4,
        title: 'Dịch vụ cho thuê trọn gói 24/7',
        description:
            'Cung cấp giải pháp hương thơm chuyên nghiệp với hình thức cho thuê giúp tiết kiệm chi phí, thời gian và công sức vận hành.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878360/satisfied-customer-handshaking-with-female-mechanic-auto-repair-shop_optimized_gev6ec.jpg',
    },
    {
        id: 5,
        title: 'Dịch vụ tiếp thị mùi hương',
        description:
            'Tư vấn và cung cấp dịch vụ Scent Marketing độc quyền cho các doanh nghiệp trong nhiều lĩnh vực.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878258/beautiful-still-life-with-herbal-medicine_tmftt8.jpg',
    },
    {
        id: 6,
        title: 'Giải pháp vệ sinh tích hợp',
        description: 'Dịch vụ toàn diện, chi phí hợp lý, linh hoạt được tư vấn cụ thể theo nhu cầu.',
        img: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713878463/still-life-cleaning-tools_kzwekh.jpg',
    },
];

export default function DichVu3Page(props: IAppProps) {
    return (
        <div className={'container cpmount'}>
            <ServiceBanner
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713879055/vases-candles-blurred-background-home-interior_q2b1zw.jpg"
                alt="Các giải pháp vệ sinh tại PetnClean"
            />
            <h1 className={'text-center ' + cx('content-title-fix')}>Các giải pháp vệ sinh tại PetnClean</h1>
            <BundleCard>
                {cards.map((item, index) => (
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
