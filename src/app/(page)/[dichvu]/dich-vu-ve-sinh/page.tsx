'use client';

import classNames from 'classnames/bind';
import styles from '~/components/Service/service.module.scss';
import ServiceBanner from '~/components/Service/Banner';
import ParagraphAlignLeft from '~/components/Service/ParagraphAlignLeft';
import BundleCard from '~/components/Service/BundleCard';
import Card from '~/components/Service/Card';
import TextImageImage from '~/components/Service/TextImageImage';
import Video from '~/components/Service/Video';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

const links = [
    {
        id: 1,
        name: 'Vệ sinh nhà xưởng',
        path: 'dich-vu-ve-sinh-nha-xuong',
        description: `Dịch vụ vệ sinh nhà xưởng là dịch vụ thường được khách hàng lựa chọn vì trong môi trường nhà xưởng, máy móc hoạt động lâu dài dễ tích tụ bụi bẩn và vi khuẩn.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847489/ant-rozetsky-SLIFI67jv5k-unsplash_pfgkne.jpg',
    },
    {
        id: 2,
        name: 'Vệ sinh tòa nhà, building',
        path: 'dich-vu-ve-sinh-toa-nha',
        description: `Dịch vụ vệ sinh tòa nhà là gì? Nó có thực sự cần thiết không? Hãy cùng PestnClean tìm hiểu về loại dịch vụ vệ sinh này, thông qua bài viết sau đây nhé.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847488/nuno-silva-Rcsa_Rg77Tc-unsplash_zacpto.jpg',
    },
    {
        id: 3,
        name: 'Vệ sinh văn phòng',
        path: 'dich-vu-ve-sinh-van-phong',
        description: `Việc tìm dịch vụ vệ sinh văn phòng chuyên nghiệp làm vệ sinh văn phòng sạch sẽ và gọn gàng tạo sự hứng khởi nơi làm việc, tăng cao hiệu suất làm việc.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847479/benjamin-child-GWe0dlVD9e0-unsplash_g6cbuh.jpg',
    },
    {
        id: 4,
        name: 'Vệ sinh sau xây dựng',
        path: 'dich-vu-ve-sinh-sau-xay-dung',
        description: `Dịch vụ vệ sinh sau xây dựng là gì? Nó có thật sự cần thiết trong đời sống không? Hãy cùng PestnClean tìm hiểu về dịch vụ này thông qua bài viết sau nhé.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847477/omer-haktan-bulut-ce2r9sPR_9E-unsplash_zrqtvb.jpg',
    },
    {
        id: 5,
        name: 'Vệ sinh thảm',
        path: 'dich-vu-giat-tham-cua-pestnclean',
        description: `Liên hệ ngay dịch vụ giặt thảm PestnClean, loại bỏ những chiếc thảm không được vệ sinh thường xuyên vì chúng sẽ gây nên những tác hại đến sức khỏe.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847388/no-revisions-uSFYHjmqPAE-unsplash_mo6di3.jpg',
    },
    {
        id: 6,
        name: 'Vệ sinh trần, sàn',
        path: 'dich-vu-ve-sinh-tran-san-nha-pestnclean',
        description: `Dịch vụ vệ sinh trần, sàn nhà của chúng tôi sẽ là một lựa chọn hoàn hảo giúp khôi phục lại vẻ sạch sẽ và tươi mới cho không gian sống, đặc biệt là sàn, trần.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847384/towfiqu-barbhuiya-ho-p7qLBewk-unsplash_kaf20o.jpg',
    },
    {
        id: 7,
        name: 'Vệ sinh sofa',
        path: 'phuong-phap-dich-vu-ve-sinh-sofa',
        description: `Sofa không được vệ sinh sạch thường xuyên sẽ tiềm tàng vô cùng nhiều vấn đề nguy hại. Một dịch vụ vệ sinh sofa chất lượng sẽ giải quyết được điều đó cho bạn.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847382/man-doing-professional-home-cleaning-service_optimized_qo4dll.jpg',
    },
    {
        id: 8,
        name: 'Vệ sinh máy lạnh',
        path: 'dich-vu-ve-sinh-may-lanh-uy-tin-chuyen-nghiep',
        description: `Một chiếc máy lạnh lâu ngày không vệ sinh sẽ mang lại những nguy hiểm tiềm tàng, sử dụng ngay dịch vụ vệ sinh máy lạnh uy tín là một điều cực kỳ cần thiết.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847382/vladislav-nikonov-JBw9IlbHhVY-unsplash_lzmypv.jpg',
    },
    {
        id: 9,
        name: 'Dọn dẹp nhà cửa',
        path: 'loi-ich-cua-dich-vu-don-dep-nha-cua',
        description: `Chọn ngay dịch vụ dọn dẹp nhà cửa của chúng tôi nếu bạn không có thời gian làm điều đó, dịch vụ vừa giúp bạn tiết kiệm thời gian mà chi phí lại hợp lý.`,
        src: 'https://res.cloudinary.com/dj2jarcxk/image/upload/v1713847497/person-taking-care-office-cleaning_nffmqy.jpg',
    },
];

export default function DichVu3Page(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'container cpmount'}>
            <ServiceBanner
                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1713844497/everdrop-gmbh-SqOMDOQb3ws-unsplash_cwbn5u.jpg"
                alt="Công ty dịch vụ vệ sinh PetnClean"
            />
            <ParagraphAlignLeft>
                <h1
                    className={cx('title')}
                    style={{
                        fontSize: sizeX < 560 ? '25px' : sizeX < 768 ? '30px' : '',
                    }}
                >
                    Công ty dịch vụ vệ sinh PetnClean
                </h1>
                <p
                    className={`${cx('text-common')}`}
                    style={{
                        textAlign: sizeX < 768 ? 'justify' : 'left',
                    }}
                >
                    PestnClean là công ty dịch vụ vệ sinh chuyên nghiệp, cung cấp các dịch vụ vệ sinh công
                    nghiệp và vệ sinh dân dụng chất lượng cao, được thiết kế linh hoạt nhằm đáp ứng tối ưu yêu
                    cầu của khách hàng, góp phần nâng cao chất lượng môi trường sống và làm việc, đáp ứng đầy
                    đủ các điều kiện pháp lý và tiêu chuẩn ngành để đảm bảo quá trình kinh doanh hiệu quả,
                    nâng cao danh tiếng thương hiệu.
                </p>
            </ParagraphAlignLeft>
            <TextImageImage />
            <Video
                title="Dịch vụ vệ sinh công nghiệp tại PetnClean."
                src="https://res.cloudinary.com/dj2jarcxk/video/upload/v1713531630/Ve%CC%A3%CC%82_Sinh_Co%CC%82ng_Nghie%CC%A3%CC%82p_yqfytu.mp4"
            />
            <h1 className={`${cx('content-title')} text-center`}>Dịch vụ vệ sinh chuyên biệt</h1>
            <BundleCard className={'rounded-xl bg-gray-200 p-10'}>
                {links.map((item, index) => (
                    <Card
                        key={index}
                        src={item.src}
                        alt={item.name + 'tại Pestnclean'}
                        title={item.name}
                        path={item.path}
                        description={item.description}
                    />
                ))}
            </BundleCard>
        </div>
    );
}
