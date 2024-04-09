import { Height } from '@mui/icons-material';
import { headers } from 'next/headers';
import Image from 'next/image';
import BannerHomePage from '~/components/Home/banner';

export default function Home() {
    return (
        <main>
            <BannerHomePage />
            <div
                style={{
                    height: '1000px',
                }}
            ></div>
        </main>
    );
}
