import 'tippy.js/dist/tippy.css';
import Header from '~/common/Header/header';
import Footer from '~/common/Footer/footer';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}
