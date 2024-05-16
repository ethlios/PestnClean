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
import useSize from '~/libs/hooks/useSize';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback, deleteFeedback } from '~/redux/actions';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { RootState } from '~/redux/provider/store';

const cx = classNames.bind(styles);

export interface IAppProps {
    product: any[];
}

export default function ProductDescript({ product }: IAppProps) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const { sizeX } = useSize();
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.main.feedback);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<any>();

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

    const onSubmit = (data: any) => {
        const cmts = {
            ...data,
            productId: product[0].id,
            name: !!session?.user ? session.user.name : data.name,
            email: !!session?.user ? session.user.email : data.email,
            img: !!session?.user ? session.user.image : '',
        };

        if (!!cmts) {
            dispatch(
                addFeedback({
                    ...cmts,
                }),
            );

            reset();
        }
    };

    const handleDeleteFeedBack = (id: number) => {
        if (confirm('Bạn có chắc chắn muốn xóa lời góp ý này?')) {
            dispatch(deleteFeedback(id));
        }
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
                        {product.length > 0 && (
                            <div
                                dangerouslySetInnerHTML={{ __html: product[0].detail }}
                                className="ql-editor"
                            />
                        )}
                    </div>
                </div>
                {/*  */}
                <div className={cx('tab-item')}>
                    <div className={cx('tab-title')} onClick={handleShowContent2}>
                        <p>Đánh giá ({comments.length})</p>
                        <IconButton>{isOpen2 ? <RemoveIcon /> : <AddIcon />}</IconButton>
                    </div>
                    <div className={cx('tab-content-2')} id="dropbox-2">
                        <div
                            className={cx('comment-wrapper')}
                            style={{
                                padding: sizeX < 560 ? '20px 15px' : '',
                            }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {!session?.user && (
                                    <div className={cx('input-list')} id="comment-blogs">
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
                                {comments.length > 0 ? (
                                    comments.map((cmt, ind) => {
                                        return (
                                            <div className={cx('person-comment')} key={ind}>
                                                <div className={cx('avatar')}>
                                                    {cmt.img ? (
                                                        <Image
                                                            src={cmt.img}
                                                            alt={'Avatar'}
                                                            width={1000}
                                                            height={1000}
                                                        />
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
                                                {session?.user.email === cmt.email && (
                                                    <div
                                                        className={cx('delete-cmt')}
                                                        onClick={() => handleDeleteFeedBack(cmt.id)}
                                                    >
                                                        <CloseOutlinedIcon />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>Chưa có đánh giá nào.</p>
                                )}
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
