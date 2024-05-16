'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import classNames from 'classnames/bind';
import Image from 'next/image';
import useSize from '~/libs/hooks/useSize';
import smoothScroll from '~/libs/orthers/smoothScroll';
import logo from '../../../../public/img/logo.png';
import styles from './blogDetail.module.scss';
import {
    FacebookIcon,
    LinkedinIcon,
    XIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export interface IAppProps {
    blogs: any[];
}

export default function BlogDetails({ blogs }: IAppProps) {
    const { sizeX } = useSize();
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return blogs.length > 0 ? (
        <div className={cx('blogs-detail')}>
            <div
                className={cx('blogs-decor')}
                style={{
                    width: sizeX < 810 ? '100%' : ' ',
                }}
            ></div>
            <div
                className={cx('main-content')}
                style={{
                    flexDirection: sizeX < 810 ? 'column' : 'row',
                }}
            >
                <div
                    className={cx('menu')}
                    style={{
                        width: sizeX < 810 ? '100%' : ' ',
                        backgroundColor: '#fff',
                        position: sizeX < 810 ? 'relative' : 'sticky',
                        top: sizeX < 810 ? '0' : '',
                        marginBottom: sizeX < 810 ? '30px' : '',
                    }}
                >
                    <h1>MỤC LỤC</h1>
                    {blogs[0].menu.map((item: any, index: number) => {
                        return (
                            <p
                                key={index}
                                onClick={() => {
                                    const headers = document.querySelectorAll('.ql-editor h2');
                                    headers[index].scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                                    });
                                }}
                            >
                                {`0${index + 1}. ${item}`}
                            </p>
                        );
                    })}
                    <div className={cx('hr-decor')}></div>
                    <div className={cx('list-icon')}>
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
                    className={cx('detail')}
                    style={{
                        width: sizeX < 810 ? '100%' : '',
                        padding: sizeX < 500 ? '15px' : '',
                    }}
                >
                    <p className={cx('detail-category')}>{blogs[0].category}</p>
                    <p className={cx('detail-title')}>{blogs[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {new Date(blogs[0].createdAt).toLocaleDateString() !== 'Invalid Date'
                            ? `${
                                  new Date(blogs[0].createdAt).getDate() < 10
                                      ? '0' + new Date(blogs[0].createdAt).getDate()
                                      : new Date(blogs[0].createdAt).getDate()
                              } tháng ${
                                  new Date(blogs[0].createdAt).getMonth() < 10
                                      ? '0' + `${new Date(blogs[0].createdAt).getMonth() + 1}`
                                      : `${new Date(blogs[0].createdAt).getMonth() + 1}`
                              }, ${new Date(blogs[0].createdAt).getFullYear()}`
                            : blogs[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{blogs[0].description}</p>
                    <div dangerouslySetInnerHTML={{ __html: blogs[0].detail }} className="ql-editor"></div>
                </div>
            </div>
        </div>
    ) : (
        <div className="loader cpmount">
            <Image src={logo.src} alt="logo pestnclean png" width={200} height={200} />
        </div>
    );
}
