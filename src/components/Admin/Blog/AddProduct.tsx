'use client';

import classNames from 'classnames/bind';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBlog, updateBlog as update } from '~/redux/actions';
import styles from '../admin.module.scss';
import CategoryMain from './CategoryMain';
import HastagList from './Hastag';
import UploadImgProduct from './UploadImg';

const cx = classNames.bind(styles);

export interface IAppProps {
    setAddProduct: any;
    updateProduct: any;
    setUpdateProduct: any;
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

export default function AdminAddProduct({ setAddProduct, updateProduct, setUpdateProduct }: IAppProps) {
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
        if (!!updateProduct.id) {
            setIsUpdate(true);
        } else {
            setIsUpdate(false);
        }
    }, [updateProduct]);

    useEffect(() => {
        if (isUpdate) {
            setValue('title', updateProduct.title);
            setValue('desHead', updateProduct.desHead);
            setDetail(updateProduct.detail);
            setStatusValue(updateProduct.category);
            setImageList(updateProduct.img);
            setValue('description', updateProduct.description);
            setHastagList(updateProduct.menu);
            setPhanloaiList(updateProduct.key);
            setValue('path', updateProduct.path);
        }
    }, [isUpdate, setValue, updateProduct]);

    const onSubmit = (data: any) => {
        const blog = {
            ...data,
            authorId: session?.user.id,
            detail: detail,
            img: imageList,
            category: statusValue,
            menu: hastagList,
            key: phanloaiList,
        };

        if (!isUpdate) {
            dispatch(addBlog(blog));
        } else {
            dispatch(update({ ...blog, id: updateProduct.id, createdAt: updateProduct.createdAt }));
        }

        setAddProduct(false);
    };

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('add-header')}>
                    <p>{isUpdate ? 'CHỈNH SỬA BÀI VIẾT' : 'THÊM BÀI VIẾT'}</p>
                    <button
                        onClick={() => {
                            setAddProduct(false);
                            setUpdateProduct({});
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
                            placeholder="Path..."
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
