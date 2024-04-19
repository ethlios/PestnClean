import BlogOthers from '~/components/Home/BlogsOrther';
import Certification from '~/components/Home/Certification';
import ImageWork from '~/components/Home/ImgWork';
import ProductOthers from '~/components/Home/ProductOther';
import ServiceAds from '~/components/Home/ServiceOrther';
import WhyChooseMe from '~/components/Home/WhyChoseMe';
import BannerHomePage from '~/components/Home/banner';

export default function Home() {
    return (
        <main className="cpmount">
            <div
                style={{
                    overflowX: 'hidden',
                }}
            >
                <BannerHomePage />
            </div>
            <div className={'container'}>
                <ServiceAds />
                <WhyChooseMe />
                <ImageWork />
                <Certification />
                <ProductOthers />
                <BlogOthers />
            </div>
        </main>
    );
}
