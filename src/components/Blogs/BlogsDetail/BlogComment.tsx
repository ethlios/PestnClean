'use client';

import * as React from 'react';
import styles from './blogDetail.module.scss';
import classNames from 'classnames/bind';
import ButtonCommon from '~/components/Orther/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogComment(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        sizeX >= 780 && (
            <div
                className={cx('comment-wrapper')}
                style={{
                    width: sizeX < 900 ? '50%' : '',
                }}
            >
                <h1>ĐÁNH GIÁ</h1>
                <div className={cx('input-list')} id="comment-blogs">
                    <input type="text" placeholder="Tên..." />
                    <input type="email" placeholder="Email..." />
                </div>
                <textarea spellCheck={false} placeholder="Nhập góp ý của bạn..." className={cx('textarea')} />
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
        )
    );
}
