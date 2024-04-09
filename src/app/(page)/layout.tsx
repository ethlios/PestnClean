import 'tippy.js/dist/tippy.css';
import Header from '~/common/Header/header';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}
