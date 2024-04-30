'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
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
    blog: any[];
}

export default function ServiceDetails({ blog }: IAppProps) {
    const { sizeX } = useSize();
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return (
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
                        {blog[0].menu.map((item: any, index: number) => {
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
                    <p className={cx('detail-title')}>{blog[0].title}</p>
                    <p className={cx('detail-create')}>
                        <AccessTimeIcon />
                        {blog[0].createdAt}
                    </p>
                    <p className={cx('detail-description')}>{blog[0].description}</p>
                    <div dangerouslySetInnerHTML={{ __html: blog[0].detail }} className="ql-editor"></div>
                </div>
            </div>
        </div>
    );
}
