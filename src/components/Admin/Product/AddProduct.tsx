'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import dynamic from 'next/dynamic';
import UploadImgProduct from './UploadImg';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { uid } from '~/libs/orthers/generatedCode';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct as update } from '~/redux/actions';
import { arrToStr, removeImg } from '~/libs/orthers/removeImg';

const cx = classNames.bind(styles);

export interface IAppProps {
    setAddProduct: any;
    updateProduct: any;
    setUpdateProduct: any;
}

const status = [
    {
        id: 1,
        value: 'Sắp ra mắt',
    },
    {
        id: 2,
        value: 'HOT',
    },
    {
        id: 3,
        value: 'SALE',
    },
    {
        id: 4,
        value: 'Hết hàng',
    },
];

export default function AdminAddProduct({ setAddProduct, updateProduct, setUpdateProduct }: IAppProps) {
    const [detail, setDetail] = useState<string>('');
    const [statusValue, setStatusValue] = useState<string>('');
    const [isNew, setIsNew] = useState<boolean>(false);
    const [imageList, setImageList] = useState<string[]>([]);
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<any>();

    const QuillEditor = useMemo(() => {
        return dynamic(() => import('~/components/Orther/quii'), {
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
            setValue('price', updateProduct.price);
            setDetail(updateProduct.detail);
            setStatusValue(updateProduct.status);
            setImageList(updateProduct.Image);
            setValue('category1', updateProduct.category1);
            setValue('category2', updateProduct.category2);
            setValue('category3', updateProduct.category3);
            setValue('priceSales', updateProduct.priceSales);
            setValue('weight', updateProduct.weight);
            setValue('box', updateProduct.box);
            setValue('package', updateProduct.package);
            setValue('pieces', updateProduct.pieces);
            setValue('bag', updateProduct.bag);
            setValue('plate', updateProduct.plate);
            setValue('quantity', +updateProduct.quantity);
            setIsNew(updateProduct.new);
        }
    }, [isUpdate, setValue, updateProduct]);

    const onSubmit = (data: any) => {
        const product = {
            ...data,
            authorId: session?.user.id,
            detail,
            image: imageList,
            code: uid(),
            price: +data.price,
            priceSales: +data.priceSales,
            status: statusValue,
            new: isNew,
            quantity: +data.quantity,
        };

        if (!isUpdate) {
            dispatch(addProduct(product));
        } else {
            dispatch(update({ ...product, id: updateProduct.id, code: updateProduct.code }));
        }

        setAddProduct(false);
    };

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('add-header')}>
                    <p>{isUpdate ? 'CHỈNH SỬA SẢN PHẨM' : 'THÊM SẢN PHẨM'}</p>
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
                            placeholder="Tên sản phẩm..."
                            className={cx('add-inp')}
                            {...register('title')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Mô tả..."
                            className={cx('add-inp')}
                            {...register('desHead')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Price..."
                            className={cx('add-inp')}
                            {...register('price')}
                        ></input>
                        <div className={cx('all-status')}>
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

                        {statusValue === 'SALE' && (
                            <input
                                type="text"
                                placeholder="New price..."
                                className={cx('add-inp')}
                                {...register('priceSales')}
                            ></input>
                        )}
                        <UploadImgProduct imageList={imageList} setImageList={setImageList} />
                        <input
                            type="text"
                            placeholder="Danh mục chính..."
                            className={cx('add-inp')}
                            {...register('category1')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Danh mục phụ..."
                            className={cx('add-inp')}
                            {...register('category2')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Danh mục con..."
                            className={cx('add-inp')}
                            {...register('category3')}
                        ></input>
                        <div className={cx('all-status')}>
                            <div className={cx('product-status')} onClick={() => setIsNew(!isNew)}>
                                <div
                                    style={{
                                        backgroundColor: isNew ? 'var(--primary)' : '',
                                    }}
                                ></div>
                                <p>Sản phẩm mới</p>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Số lượng..."
                            className={cx('add-inp')}
                            {...register('quantity')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Dung tích..."
                            className={cx('add-inp')}
                            {...register('weight')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Gói..."
                            className={cx('add-inp')}
                            {...register('package')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Hộp..."
                            className={cx('add-inp')}
                            {...register('box')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Miếng..."
                            className={cx('add-inp')}
                            {...register('pieces')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Túi..."
                            className={cx('add-inp')}
                            {...register('bag')}
                        ></input>
                        <input
                            type="text"
                            placeholder="Tấm..."
                            className={cx('add-inp')}
                            {...register('plate')}
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
                            {isUpdate ? 'CHỈNH SỬA SẢN PHẨM' : 'THÊM SẢN PHẨM'}
                        </button>
                    </div>
                    <div className={cx('add-body-2')}>
                        <QuillEditor cb={setDetail} value={detail} />
                    </div>
                </form>
            </div>
        </div>
    );
}
