import Link from 'next/link';

export interface IAppProps {}

export default function App(props: IAppProps) {
    return (
        <main
            className="grid min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="text-center"
                style={{
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    transition: 'all ease 0.5s',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '70px',
                    borderRadius: '10px',
                }}
            >
                <p
                    className="text-base font-semibold text-indigo-600"
                    style={{ color: 'var(--primary)', fontWeight: '700' }}
                >
                    404
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>
                <p
                    className="mt-6 text-base leading-7 text-gray-600"
                    style={{ fontWeight: 600, color: '#fff' }}
                >
                    Xin lỗi, chúng tôi không tìm thấy trang bạn yêu cầu.
                </p>
                <div className="mt-7 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="opacity rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
                    >
                        Trở lại trang chủ
                    </Link>
                    <Link href="/lienhe" className="text-sm font-semibold text-gray-900 opacity">
                        Liên hệ <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
