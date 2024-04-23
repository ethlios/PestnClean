'use client';

import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import $ from 'jquery';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './product_detail.module.scss';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonCommon from '~/components/Orther/Button';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ProductDescript(props: IAppProps) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const { sizeX } = useSize();

    useEffect(() => {
        $('#dropbox-1').hide();
        $('#dropbox-2').hide();
        $('#dropbox-3').hide();
    }, []);

    const handleShowContent1 = () => {
        setIsOpen1(!isOpen1);

        $('#dropbox-1').slideToggle();
    };

    const handleShowContent2 = () => {
        setIsOpen2(!isOpen2);

        $('#dropbox-2').slideToggle();
    };

    const handleShowContent3 = () => {
        setIsOpen3(!isOpen3);

        $('#dropbox-3').slideToggle();
    };

    return (
        <div className={cx('product-descript')}>
            <div
                className={cx('tab-group')}
                style={{
                    width: sizeX < 768 ? '100%' : sizeX < 1024 ? '80%' : '',
                }}
            >
                {/*  */}
                <div className={cx('tab-item')}>
                    <div className={cx('tab-title')} onClick={handleShowContent1}>
                        <p>Mô tả chi tiết</p>
                        <IconButton>{isOpen1 ? <RemoveIcon /> : <AddIcon />}</IconButton>
                    </div>
                    <div className={cx('tab-content')} id="dropbox-1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ac nisl
                            ultricies tincidunt. Nunc sit amet turpis nec nisl luctus ultricies. Nullam
                            ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                            nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                            ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                            nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                            ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                            nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus.
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className={cx('tab-item')}>
                    <div className={cx('tab-title')} onClick={handleShowContent2}>
                        <p>Đánh giá (3)</p>
                        <IconButton>{isOpen2 ? <RemoveIcon /> : <AddIcon />}</IconButton>
                    </div>
                    <div className={cx('tab-content-2')} id="dropbox-2">
                        <div
                            className={cx('comment-wrapper')}
                            style={{
                                padding: sizeX < 560 ? '20px 15px' : '',
                            }}
                        >
                            <div className={cx('input-list')} id="comment-blogs">
                                <input type="text" placeholder="Tên..." />
                                <input type="email" placeholder="Email..." />
                            </div>
                            <textarea
                                spellCheck={false}
                                placeholder="Nhập góp ý của bạn..."
                                className={cx('textarea')}
                            />
                            <button className={cx('cmt-btn')}>Đánh giá</button>

                            {/* Comment */}
                            <div className={cx('all-comment')}>
                                <div className={cx('person-comment')}>
                                    <div className={cx('avatar')}></div>
                                    <div className={cx('comment-content')}>
                                        <p className={cx('person-name')}>VÕ THẾ LỢI</p>
                                        <p
                                            className={cx('person-cmt')}
                                        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.`}</p>
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
                                        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.`}</p>
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
                                        >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.`}</p>
                                        <p className={cx('person-created')}>
                                            <AccessTimeIcon />
                                            09 Tháng 4, 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className={cx('tab-item')}>
                    <div className={cx('tab-title')} onClick={handleShowContent3}>
                        <p>FAQs</p>
                        <IconButton>{isOpen3 ? <RemoveIcon /> : <AddIcon />}</IconButton>
                    </div>
                    <div className={cx('tab-content')} id="dropbox-3">
                        <Link
                            href="/hoidap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx('faqs-btn')}
                        >
                            <p>
                                Giải đáp tất cả <u>thắc mắc</u> của bạn!
                            </p>
                            <ArrowRightAltOutlinedIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
