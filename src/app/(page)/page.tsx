import { Height } from '@mui/icons-material';
import { headers } from 'next/headers';
import Image from 'next/image';
import BannerHomePage from '~/components/Home/banner';
import ButtonCommon from '~/components/Orther/Button';
import TextImage from '~/components/Home/TextImage';

export default function Home() {
    return (
        <main>
            {/* <BannerHomePage /> */}
            {/* <TextImage /> */}
            <div
                style={{
                    height: '1000px',
                    paddingTop: '500px',
                }}
            ></div>
        </main>
    );
}
