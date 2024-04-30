'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
            <div className={cx('main-content')}>
                {sizeX >= 810 && (
                    <div className={cx('menu')}>
                        <h1>MỤC LỤC</h1>
                        {blogs[0].menu.map((item: any, index: number) => {
                            return (
                                <p key={index} onClick={() => smoothScroll(`#header${index + 1}`)}>
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
                )}
                <div
                    className={cx('detail')}
                    style={{
                        width: sizeX < 810 ? '100%' : '',
                    }}
                >
                    <p className={cx('detail-category')}>{blogs[0].category}</p>
                    <p className={cx('detail-title')}>{blogs[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {blogs[0].createdAt}
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
