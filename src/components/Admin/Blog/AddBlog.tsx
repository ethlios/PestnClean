'use client';

import classNames from 'classnames/bind';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBlog, updateBlog as update } from '~/redux/actions';
import styles from '../admin.module.scss';
import CategoryMain from './CategoryMain';
import HastagList from './Hastag';
import UploadImgProduct from './UploadImg';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {
    setAddBlog: any;
    updateBlog: any;
    setUpdateBlog: any;
    blogs: any;
}

const status = [
    {
        id: 1,
        value: 'Đời sống',
    },
    {
        id: 2,
        value: 'Dịch vụ',
    },
];

export default function AdminAddBlog({ setAddBlog, updateBlog, setUpdateBlog, blogs }: IAppProps) {
    const [detail, setDetail] = useState<string>('');
    const [statusValue, setStatusValue] = useState<string>(''); //category
    const [isNew, setIsNew] = useState<boolean>(false);
    const [imageList, setImageList] = useState<string>('');
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [hastagList, setHastagList] = useState<any[]>([]); //menu
    const [hastag, setHastag] = useState<string>('');
    const [phanloaiList, setPhanloaiList] = useState<any[]>([]); //key
    const [phanloai, setPhanloai] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<any>();

    const CKEditor = useMemo(() => {
        return dynamic(() => import('~/components/Orther/CKeditor'), {
            loading: () => <p>loading...</p>,
            ssr: false,
        });
    }, []);

    useEffect(() => {
        if (!!updateBlog.id) {
            setIsUpdate(true);
        } else {
            setIsUpdate(false);
        }
    }, [updateBlog]);

    useEffect(() => {
        if (isUpdate) {
            setValue('title', updateBlog.title);
            setValue('desHead', updateBlog.desHead);
            setDetail(updateBlog.detail);
            setStatusValue(updateBlog.category);
            setImageList(updateBlog.img);
            setValue('description', updateBlog.description);
            setHastagList(updateBlog.menu);
            setPhanloaiList(updateBlog.key);
            setValue('path', updateBlog.path);
        }
    }, [isUpdate, setValue, updateBlog]);

    const isPathExists = (path: string) => {
        if (updateBlog) {
            return blogs.some((blog: any) => blog.id !== updateBlog?.id && blog.path === path);
        } else {
            return blogs.some((blog: any) => blog.path === path);
        }
    };

    const onSubmit = (data: any) => {
        if (isPathExists(data.path)) return setShowToast(true);

        const blog = {
            ...data,
            authorId: session?.user.id,
            detail: detail,
            img: imageList,
            category: statusValue,
            menu: hastagList,
            key: phanloaiList,
            path: data.path,
        };

        if (!isUpdate) {
            dispatch(addBlog(blog));
        } else {
            dispatch(update({ ...blog, id: updateBlog.id, createdAt: updateBlog.createdAt }));
        }

        setAddBlog(false);
    };

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <Toast
                text={'Đường dẫn đã tồn tại'}
                showToast={showToast}
                setShowToast={setShowToast}
                rule="error"
            />
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('add-header')}>
                    <p>{isUpdate ? 'CHỈNH SỬA BÀI VIẾT' : 'THÊM BÀI VIẾT'}</p>
                    <button
                        onClick={() => {
                            setAddBlog(false);
                            setUpdateBlog({});
                        }}
                        className={cx('commom-button')}
                    >
                        EXIT
                    </button>
                </div>
                <form className={cx('add-body')} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('add-body-1')}>
                        <input
                            type="text"
                            placeholder="Tiêu đề..."
                            className={cx('add-inp')}
                            {...register('title')}
                            onChange={(e) => !isUpdate && setValue('path', nameToLink(e.target.value))}
                        ></input>
                        <input
                            type="text"
                            placeholder="Mô tả..."
                            className={cx('add-inp')}
                            {...register('desHead')}
                        ></input>
                        <textarea
                            className={cx('textarea')}
                            spellCheck={false}
                            placeholder="Chi tiết..."
                            {...register('description')}
                        />

                        <div
                            className={cx('all-status')}
                            style={{
                                justifyContent: 'flex-start',
                                gap: '30px',
                            }}
                        >
                            {status.map((status, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cx('product-status')}
                                        onClick={() =>
                                            status.value === statusValue
                                                ? setStatusValue('')
                                                : setStatusValue(status.value)
                                        }
                                    >
                                        <div
                                            style={{
                                                backgroundColor:
                                                    statusValue === status.value ? 'var(--primary)' : '',
                                            }}
                                        ></div>
                                        <p>{status.value}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <UploadImgProduct imageList={imageList} setImageList={setImageList} />
                        <HastagList
                            hastag={hastag}
                            setHastag={setHastag}
                            hastagList={hastagList}
                            setHastagList={setHastagList}
                        />
                        <CategoryMain
                            hastag={phanloai}
                            setHastag={setPhanloai}
                            hastagList={phanloaiList}
                            setHastagList={setPhanloaiList}
                        />
                        <input
                            type="text"
                            placeholder="Đường dẫn..."
                            className={cx('add-inp')}
                            {...register('path')}
                        ></input>

                        <button
                            className={cx('commom-button')}
                            type="submit"
                            style={{
                                backgroundColor: 'var(--primary)',
                                height: '42px',
                                color: '#fff',
                                fontSize: '13px',
                                letterSpacing: '-.2px',
                            }}
                        >
                            {isUpdate ? 'CHỈNH SỬA BÀI VIẾT' : 'THÊM BÀI VIẾT'}
                        </button>
                    </div>
                    <div className={cx('add-body-2')}>
                        <CKEditor value={detail} cb={setDetail} />
                    </div>
                </form>
            </div>
        </div>
    );
}
