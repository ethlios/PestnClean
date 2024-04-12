import BannerHomePage from '~/components/Home/banner';
import TextImage from '~/components/Sections/TextImage/TextImage';

export default function Home() {
    return (
        <main>
            {/*<BannerHomePage />*/}
            <TextImage />
            <div
                style={{
                    height: '1000px',
                }}
            ></div>
        </main>
    );
}
