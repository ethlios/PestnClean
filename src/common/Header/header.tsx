'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../../public/img/logo.png';
import styles from './header.module.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Services from './service';
import MoreBtn from './More';
import useScroll from '~/libs/hooks/useScroll';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { headerMenu } from '~/constants/menu';
import useSize from '~/libs/hooks/useSize';
import { signOut, useSession } from 'next-auth/react';
import Tippy from '@tippyjs/react/headless';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import ShoppingCart from '~/common/Header/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import { socket } from '~/websocket/socket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { clearMessage, getAllNotificationsById } from '~/redux/actions';
import Toast from '~/components/Orther/Toast';
import useConnectSocket from '~/libs/hooks/useConnectSocket';
import { calculateTimeDifference } from '~/libs/orthers/formatDate';
const cx = classNames.bind(styles);

export interface HeaderProps {}
interface ShowToast {
    message: string;
    status: boolean;
}
export default function Header(props: HeaderProps) {
    const path = usePathname();
    const [scrollToTop, setScrollToTop] = useState<number>(0);
    const [openService, setOpenService] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();
    const {isConnected} = useConnectSocket();
    const { data: session } = useSession();
    const [openAcc, setOpenAcc] = useState<boolean>(false);
    const [openNotifications, setOpenNotifications] = useState<boolean>(false);
    const [listNotifications, setListNotifications] = useState<any[]>([]);
    const [isShowToast, setShowToast] = useState<ShowToast>({
        message: '',
        status: false,
    });
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);

    // XỬ LÝ GỬI THÔNG TIN QUERY CHO PAGE KẾT QUẢ TÌM KIẾM
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchValue !== '') {
            const encodedSearchQuery = encodeURI(searchValue);
            router.push(`/search?q=${encodedSearchQuery}`);
        }
    };
    
    // HÀM TÌM ID TRONG MẢNG
    function findIdInArray(array: any[], id: string): string | undefined {
        const foundId = array.find((element) => element.id === id);
        return foundId;
    }

    useEffect(() => {
        if (session?.user.id) {
            dispatch(getAllNotificationsById({ id: session.user.id }));
        }
    }, [dispatch, session]);

    useEffect(() => {
        if (selector.message === 'Get All Notifications By Id Success') {
            setListNotifications(selector.notificationAll);
            dispatch(clearMessage());
        }
    }, [dispatch, selector.message, selector.notificationAll]);

    useEffect(() => {
        if (isConnected && session?.user.id) {
            socket.on('respMessageAddNotify', (value: any) => {
                const notifyUser = () => {
                    const shortenedMessage = value.title.substring(0, 37) + '...';
                    setShowToast({
                        message: 'Bạn vừa nhận được thông báo mới: ' + shortenedMessage,
                        status: true,
                    });
                    dispatch(getAllNotificationsById({ id: session.user.id }));
                };
                if (!Array.isArray(value.recipientId)) {
                    notifyUser();
                } else {
                    const result = findIdInArray(value.recipientId, session?.user.id);
                    if (result !== undefined) {
                        notifyUser();
                    }
                }
            });
        }
    }, [dispatch, isConnected, session?.user.id]);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };
        const handleScroll = () => {
            const scrollTopValue = window.scrollY || document.documentElement.scrollTop;
            if (scrollTopValue > 33) {
                setOpenNotifications(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (wheel) {
            setOpenSearch(false);
            setOpenAcc(false);
        }
    }, [wheel]);
    return (
        <>
            <Toast
                text={isShowToast.message}
                showToast={isShowToast.status}
                setShowToast={setShowToast}
                rule="normal"
            />
            <Services setOpenService={setOpenService} openService={openService} />
            <MoreBtn />
            <div
                style={{
                    padding:
                        sizeX < 768
                            ? '0 20px'
                            : sizeX < 1100
                              ? '0 50px'
                              : sizeX < 1280
                                ? '0 80px'
                                : '0 100px',
                    backgroundColor: scrollToTop > 0 ? '#fff' : 'transparent',
                    boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
                    opacity: scrollToTop === 0 ? 1 : !wheel ? 1 : 0,
                    height: '70px',
                }}
                className={cx('header')}
            >
                <div
                    className={cx({
                        searchFill: true,
                        searchFillOpen: openSearch,
                        searchFillClose: !openSearch,
                    })}
                >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                    <div className={cx('search-btn-fill')} onClick={() => setOpenSearch(false)}>
                        <div>
                            <CloseOutlinedIcon />
                        </div>
                    </div>
                </div>
                <Link href={'/'}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} priority />
                </Link>
                <div className={'flex items-center'}>
                    <ul className={cx('link')}>
                        {headerMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    {!!item.pathname ? (
                                        <Link
                                            href={item.pathname}
                                            style={{
                                                color: path === item.pathname ? 'var(--primary)' : '',
                                                textDecoration: path === item.pathname ? '2px underline' : '',
                                                textUnderlineOffset: path === item.pathname ? '5px' : '',
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <p onClick={() => setOpenService(true)}>{item.title}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div
                    className={'flex items-center justify-center'}
                    style={{
                        gap: '9px',
                    }}
                >
                    <SearchOutlinedIcon
                        sx={{
                            position: 'relative',
                            top: '2px',
                        }}
                        className="icon-hover"
                        onClick={() => setOpenSearch(true)}
                    />
                    <ShoppingCart />
                    {session && session.user.rule !== 'admin' && (
                        <Tippy
                            visible={openNotifications}
                            onClickOutside={() => {
                                setOpenNotifications(false);
                                // setChangeColor(false);
                            }}
                            appendTo={document.body}
                            interactive
                            placement="auto"
                            offset={[-10, 10]}
                            zIndex={2000}
                            render={(attrs) => (
                                <div tabIndex={-1} {...attrs} className={cx('tippy-boxNotifications', '')}>
                                    <div
                                        className={cx(
                                            'flex items-center justify-between',
                                            'tippy-boxNotifications-header',
                                        )}
                                    >
                                        <p className="font-semibold">Thông báo</p>
                                        <SettingsIcon />
                                    </div>
                                    <div className={cx('tippy-boxNotifications-scroll')}>
                                        {listNotifications.length > 0 ? (
                                            listNotifications.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cx(
                                                            'flex items-center justify-between',
                                                            'tippy-boxNotifications-content',
                                                        )}
                                                    >
                                                        <div className={cx('tippy-boxNotifications-title')}>
                                                            <p
                                                                className={cx(
                                                                    'font-medium',
                                                                    'tippy-boxNotifications-content-title',
                                                                )}
                                                            >
                                                                {item.title}
                                                            </p>
                                                            <p></p>
                                                            <p
                                                                className={cx(
                                                                    'tippy-boxNotifications-content-message',
                                                                )}
                                                            >
                                                                {item.message}
                                                            </p>
                                                        </div>
                                                        <p
                                                            className={cx(
                                                                'tippy-boxNotifications-content-createdAt',
                                                            )}
                                                        >
                                                            {calculateTimeDifference(item.createdAt)}
                                                        </p>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <p
                                                style={{
                                                    padding: '15px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '-.2px',
                                                }}
                                            >
                                                Chưa có thông báo nào!
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        >
                            <NotificationsNoneIcon onClick={() => setOpenNotifications(!openNotifications)} />
                        </Tippy>
                    )}
                    {session ? (
                        <Tippy
                            visible={openAcc}
                            onClickOutside={() => {
                                setOpenAcc(false);
                                // setChangeColor(false);
                            }}
                            appendTo={document.body}
                            interactive
                            placement="auto"
                            offset={[-10, 10]}
                            zIndex={2000}
                            render={(attrs) => (
                                <div tabIndex={-1} {...attrs} className={cx('tippy-box')}>
                                    {session.user.rule === 'admin' ? (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link href={'/admin'} aria-label="admin">
                                                Dashboard
                                            </Link>
                                        </div>
                                    ) : (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link href={`/profile/${session.user.id}`} aria-label="account">
                                                Quản lý tài khoản
                                            </Link>
                                        </div>
                                    )}
                                    {session.user.rule !== 'admin' && (
                                        <div onClick={() => setOpenAcc(false)}>
                                            <Link
                                                href={`/profile/${session.user.id}?q=order`}
                                                aria-label="order"
                                            >
                                                Kiểm tra đơn hàng
                                            </Link>
                                        </div>
                                    )}
                                    <div onClick={() => signOut()}>
                                        <InputOutlinedIcon />
                                        Đăng xuất
                                    </div>
                                </div>
                            )}
                        >
                            <div className={cx('avatar')} onClick={() => setOpenAcc(!openAcc)}>
                                {session.user.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt={'Avatar'}
                                        width={1000}
                                        height={1000}
                                    />
                                ) : (
                                    session.user.name.charAt(0).toUpperCase()
                                )}
                            </div>
                        </Tippy>
                    ) : (
                        <Link href="/login" className="icon-hover" aria-label="login">
                            <AccountCircleOutlinedIcon />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
