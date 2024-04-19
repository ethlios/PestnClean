'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';
import ButtonCommon from '../Orther/Button';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

const imgList = [
    {
        id: 1,
        src: '',
        alt: 'Các dịch vụ của pestnclean',
        color: 'var(--primary)',
        title: 'Nâng cao chất lượng cuộc sống',
        path: 'blogs',
        description:
            'Bằng tất cả những gì mình có, PESTNCLEAN hứa hẹn sẽ mang đến cho quý khách hàng những trải nghiệm về dịch vụ chưa từng có. Lấy đam mê nhiệt huyết làm nguồn sức mạnh, và lấy nụ cười của khách hàng làm mục tiêu theo đuổi, PESTNCLEAN đã và đang không ngừng hoàn thiện bản thân cho hiện tại và tương lai. "Nụ cười của quý khách hàng - là tất cả đối với chúng tôi!"',
    },
    {
        id: 2,
        src: '',
        alt: 'Dịch vụ kiểm soát côn trùng của PESTNCLEAN',
        color: 'var(--primary)',
        title: 'Dịch vụ kiểm soát côn trùng',
        path: 'dichvu/kiem-soat-con-trung',
        description:
            'Việc tìm được một công ty kiểm soát côn trùng hiệu quả cho nhà ở, các cơ sở, đơn vị kinh doanh là hết sức cần thiết. PestnClean tự hào là một đơn vị có nhiều năm kinh nghiệm trong lĩnh vực kiểm soát côn trùng. Chúng tôi với đội ngũ nhân viên lành nghề, được đào tạo kỹ càng về nhiều mặt (chuyên môn và thái độ phục vụ) cam kết sẽ cung cấp tới Quý khách hàng một dịch vụ chất lượng nhất.',
    },
    {
        id: 3,
        src: '',
        alt: 'Dịch vụ vệ sinh côn trùng',
        color: 'var(--secondary)',
        title: 'Dịch vụ vệ sinh côn trùng',
        path: 'dichvu/dich-vu-ve-sinh',
        description:
            'PestnClean là công ty dịch vụ vệ sinh chuyên nghiệp, cung cấp các dịch vụ vệ sinh công nghiệp và vệ sinh dân dụng chất lượng cao, được thiết kế linh hoạt nhằm đáp ứng tối ưu yêu cầu của khách hàng, góp phần nâng cao chất lượng môi trường sống và làm việc, đáp ứng đầy đủ các điều kiện pháp lý và tiêu chuẩn ngành để đảm bảo quá trình kinh doanh hiệu quả, nâng cao danh tiếng thương hiệu.',
    },
    {
        id: 4,
        src: '',
        alt: 'Dịch vụ Giải pháp vệ sinh',
        color: 'var(--secondary-dark)',
        title: 'Dịch vụ Giải pháp vệ sinh',
        path: 'dichvu/giai-phap-ve-sinh',
        description:
            'PestnClean cung cấp giải pháp vệ sinh chuyên sâu cho các doanh nghiệp, nhà hàng, khách sạn... đảm bảo rằng các loại vi sinh vật và nấm mốc được loại bỏ, mang đến môi trường sạch khuẩn, hương thơm thư giãn và bảo vệ an toàn sức khỏe con người. Các nghiên cứu đã chứng minh rằng mùi hương dễ chịu có thể tăng cường sự sáng tạo và tinh thần, thậm chí có thể giảm căng thẳng cho con người.',
    },
];

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
};

export default function BannerHomePage(props: IAppProps) {
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {imgList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    style={{
                                        padding: '100px 100px',
                                        // backgroundImage: `url('${banner1.src}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <h1
                                        style={{
                                            width: '450px',
                                            fontSize: '34px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            marginBottom: '5px',
                                            letterSpacing: '-.5px',
                                        }}
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        style={{
                                            width: '450px',
                                            fontSize: '14.6px',
                                            fontWeight: '600',
                                            letterSpacing: '-.5px',
                                            color: 'var(--text-black)',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    <ButtonCommon text={'XEM THÊM'} path={item.path}></ButtonCommon>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
