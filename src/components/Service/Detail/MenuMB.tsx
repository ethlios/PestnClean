'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ButtonCommon from '~/components/Orther/Button';
import useSize from '~/libs/hooks/useSize';
import smoothScroll from '~/libs/orthers/smoothScroll';
import styles from './ServiceDetail.module.scss';

import {
    FacebookIcon,
    LinkedinIcon,
    XIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';

const cx = classNames.bind(styles);

export interface IAppProps {
    blogs: any;
    isOpen: boolean;
    setOpen: any;
}

export default function MenuMB({ blogs, isOpen, setOpen }: IAppProps) {
    const { sizeX } = useSize();
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return (
        blogs.length > 0 && (
            <>
                <div
                    className={`${cx('mmb-wrapper')} cpmount`}
                    onClick={() => setOpen(false)}
                    style={{
                        display: isOpen ? 'flex' : 'none',
                    }}
                ></div>
                <div
                    className={cx('mmb-menu')}
                    style={{
                        right: isOpen ? '0' : sizeX < 420 ? '-350px' : sizeX < 500 ? '-380px' : '-400px',
                        width: sizeX < 420 ? '350px' : sizeX < 500 ? '380px' : '',
                    }}
                >
                    {/* Btn */}
                    <div
                        className={cx('btn-show-wp')}
                        style={{
                            right: isOpen ? '0' : sizeX < 420 ? '-350px' : sizeX < 500 ? '-380px' : '-400px',
                            width: sizeX < 420 ? '350px' : sizeX < 500 ? '380px' : '',
                        }}
                    >
                        <div
                            className={cx('btn-show')}
                            onClick={() => setOpen(!isOpen)}
                            style={{
                                backgroundColor: isOpen ? '#fff' : 'var(--primary)',
                                transition: 'all ease .5s',
                                color: isOpen ? 'var(--text-black)' : '#fff',
                            }}
                        >
                            <ArrowBackOutlinedIcon
                                sx={{
                                    transition: 'all ease .5s',
                                    rotate: isOpen ? '180deg' : '360deg',
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className={cx('menu-moblie')}
                        style={{
                            width: '100%',
                        }}
                    >
                        <h1>MỤC LỤC</h1>
                        {blogs[0].menu.map((item: any, index: number) => {
                            return (
                                <p
                                    key={index}
                                    onClick={() => {
                                        smoothScroll(`#header${index + 1}`);
                                        setOpen(false);
                                    }}
                                >
                                    {`0${index + 1}. ${item}`}
                                </p>
                            );
                        })}
                        <div className={cx('hr-decor')}></div>
                        <div className={cx('list-icon')}>
                            <FavoriteBorderIcon />
                            <ChatOutlinedIcon onClick={() => smoothScroll('#comment-blogs')} />
                            <FacebookShareButton url={url} hashtag="#Pestnclean">
                                <FacebookIcon size={24} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={url}>
                                <XIcon size={24} round={true} />
                            </TwitterShareButton>
                            <LinkedinShareButton url={url}>
                                <LinkedinIcon size={24} round={true} />
                            </LinkedinShareButton>
                        </div>
                    </div>

                    <div
                        className={cx('comment-wrapper')}
                        style={{
                            width: '100%',
                        }}
                    >
                        <h1>ĐÁNH GIÁ</h1>
                        <div className={cx('input-list')} id="comment-blogs">
                            <input type="text" placeholder="Tên..." />
                            <input type="email" placeholder="Email..." />
                        </div>
                        <textarea
                            spellCheck={false}
                            placeholder="Nhập góp ý của bạn..."
                            className={cx('textarea')}
                        />
                        <ButtonCommon text="ĐÁNH GIÁ" />

                        {/* Comment */}
                        <div className={cx('all-comment')}>
                            <div className={cx('person-comment')}>
                                <div className={cx('avatar')}></div>
                                <div className={cx('comment-content')}>
                                    <p className={cx('person-name')}>VÕ THẾ LỢI</p>
                                    <p
                                        className={cx('person-cmt')}
                                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                                    <p className={cx('person-created')}>
                                        <AccessTimeIcon />
                                        09 Tháng 4, 2024
                                    </p>
                                </div>
                            </div>
                            <div className={cx('person-comment')}>
                                <div className={cx('avatar')}></div>
                                <div className={cx('comment-content')}>
                                    <p className={cx('person-name')}>VÕ THẾ LỢI</p>
                                    <p
                                        className={cx('person-cmt')}
                                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                                    <p className={cx('person-created')}>
                                        <AccessTimeIcon />
                                        09 Tháng 4, 2024
                                    </p>
                                </div>
                            </div>
                            <div className={cx('person-comment')}>
                                <div className={cx('avatar')}></div>
                                <div className={cx('comment-content')}>
                                    <p className={cx('person-name')}>VÕ THẾ LỢI</p>
                                    <p
                                        className={cx('person-cmt')}
                                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                                    <p className={cx('person-created')}>
                                        <AccessTimeIcon />
                                        09 Tháng 4, 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
