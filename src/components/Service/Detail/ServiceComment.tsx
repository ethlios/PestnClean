'use client';

import React, { useState } from 'react';
import styles from './ServiceDetail.module.scss';
import classNames from 'classnames/bind';
import ButtonCommon from '~/components/Orther/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useSize from '~/libs/hooks/useSize';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addBlogComment, deleteBlogComment } from '~/redux/actions';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from 'next/image';
import { RootState } from '~/redux/provider/store';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {
    blog: any;
}

export default function ServiceComment({ blog }: IAppProps) {
    const { sizeX } = useSize();
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cmts = useSelector((state: RootState) => state.main.blogCmt);
    const [showToast, setShowToast] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<any>();

    const onSubmit = (data: any) => {
        const cmts = {
            ...data,
            blogName: blog[0].title,
            name: !!session?.user ? session.user.name : data.name,
            email: !!session?.user ? session.user.email : data.email,
            img: !!session?.user ? session.user.image : '',
            userId: !!session?.user ? session.user.id : '',
            authorId: '104399638902286280553',
            // type: ''
        };

        if (!!cmts.message && !!cmts.name && !!cmts.email) {
            dispatch(
                addBlogComment({
                    ...cmts,
                }),
            );

            reset();
        } else {
            setShowToast(true);
        }
    };

    const handleDeleteFeedBack = (id: number) => {
        if (confirm('Bạn có chắc chắn muốn xóa lời góp ý này?')) {
            dispatch(deleteBlogComment(id));
        }
    };

    return (
        <>
            <Toast
                showToast={showToast}
                setShowToast={setShowToast}
                text="Vui lòng nhập nội dung."
                rule="normal"
            />
            <div
                className={cx('comment-wrapper')}
                style={{
                    width: sizeX < 810 ? '100%' : sizeX < 960 ? '50%' : '45%',
                    marginBottom: sizeX < 810 ? '20px' : '',
                }}
            >
                <h1 id="comment-blogs">ĐÁNH GIÁ</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {!session?.user && (
                        <div className={cx('input-list')}>
                            <input type="text" placeholder="Tên..." {...register('name')} />

                            <input type="email" placeholder="Email..." {...register('email')} />
                        </div>
                    )}
                    <textarea
                        spellCheck={false}
                        placeholder="Nhập góp ý của bạn..."
                        className={cx('textarea')}
                        {...register('message')}
                    />
                    <button className={cx('cmt-btn')} type="submit">
                        Đánh giá
                    </button>
                </form>

                {/* Comment */}
                <div className={cx('all-comment')}>
                    {cmts.length > 0 ? (
                        cmts.map((cmt, ind) => {
                            return (
                                <div className={cx('person-comment')} key={ind}>
                                    <div className={cx('avatar')}>
                                        {cmt.img ? (
                                            <Image src={cmt.img} alt={'Avatar'} width={1000} height={1000} />
                                        ) : (
                                            cmt.name.charAt(0).toUpperCase()
                                        )}
                                    </div>
                                    <div className={cx('comment-content')}>
                                        <p className={cx('person-name')}>{cmt.name}</p>
                                        <p className={cx('person-cmt')}>{cmt.message}</p>
                                        <p className={cx('person-created')}>
                                            <AccessTimeIcon />
                                            {cmt.createdAt
                                                ? new Date(cmt.createdAt).toLocaleDateString()
                                                : new Date(Date.now()).toLocaleDateString()}
                                        </p>
                                    </div>
                                    {session?.user.id === cmt.userId ? (
                                        <div
                                            className={cx('delete-cmt')}
                                            onClick={() => handleDeleteFeedBack(cmt.id)}
                                        >
                                            <CloseOutlinedIcon />
                                        </div>
                                    ) : session?.user.rule === 'admin' ? (
                                        <div
                                            className={cx('delete-cmt')}
                                            onClick={() => handleDeleteFeedBack(cmt.id)}
                                        >
                                            <CloseOutlinedIcon />
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <p style={{ fontSize: '14.5px', fontWeight: 600, letterSpacing: '-.1px' }}>
                            Chưa có đánh giá nào.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
