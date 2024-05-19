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
import HastagList from './Hastag';
import CategoryMain from './CategoryMain';
import { filterMenu as categories } from '~/constants/productFilter';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {
    setAddProduct: any;
    updateProduct: any;
    setUpdateProduct: any;
    products: any;
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

export default function AdminAddProduct({
    setAddProduct,
    updateProduct,
    setUpdateProduct,
    products,
}: IAppProps) {
    const [detail, setDetail] = useState<string>('');
    const [statusValue, setStatusValue] = useState<string>('');
    const [isNew, setIsNew] = useState<boolean>(false);
    const [imageList, setImageList] = useState<string[]>([]);
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [hastagList, setHastagList] = useState<any[]>([]);
    const [hastag, setHastag] = useState<string>('');
    const [phanloaiList, setPhanloaiList] = useState<any[]>([]);
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
            setValue('path', updateProduct.path);
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
            setValue('description', updateProduct.description);
            setHastagList(updateProduct.hastags);
            setPhanloaiList(JSON.parse(updateProduct.categoryMain));
        }
    }, [isUpdate, setValue, updateProduct]);

    const onSubmit = (data: any) => {
        const isPathExists = products.some((product: any) => product.path === data.path);
        if (isPathExists) return setShowToast(true);

        const product = {
            ...data,
            authorId: session?.user.id,
            detail: detail,
            image: imageList,
            code: uid(),
            path: data.path,
            price: +data.price,
            priceSales: +data.priceSales,
            status: statusValue,
            new: isNew,
            quantity: +data.quantity,
            hastags: hastagList,
            categoryMain: JSON.stringify(phanloaiList),
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
            <Toast
                text={'Đường dẫn đã tồn tại'}
                showToast={showToast}
                setShowToast={setShowToast}
                rule="error"
            />
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
                        <input
                            type="text"
                            placeholder="Đường dẫn..."
                            className={cx('add-inp')}
                            {...register('path')}
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
                            <>
                                <input
                                    type="text"
                                    placeholder="New price..."
                                    className={cx('add-inp')}
                                    {...register('priceSales')}
                                ></input>
                                <p>Phần trăm giảm giá (nhỏ hơn 100)</p>
                            </>
                        )}
                        <UploadImgProduct imageList={imageList} setImageList={setImageList} />
                        <HastagList
                            hastag={hastag}
                            setHastag={setHastag}
                            hastagList={hastagList}
                            setHastagList={setHastagList}
                        />
                        <CategoryMain
                            phanloai={phanloai}
                            setPhanloai={setPhanloai}
                            phanloaiList={phanloaiList}
                            setPhanloaiList={setPhanloaiList}
                        />
                        <FormControl>
                            <InputLabel
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    marginBottom: '10px',
                                }}
                            >
                                Danh mục chính
                            </InputLabel>
                            <Select defaultValue={''} {...register('category1')} label="Danh mục chính">
                                {categories.map((item: any) => (
                                    <MenuItem key={item.title} value={item.title}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    marginBottom: '10px',
                                }}
                            >
                                Danh mục phụ
                            </InputLabel>
                            <Select defaultValue={''} {...register('category2')} label="Danh mục phụ">
                                {categories
                                    .find((item: any) => item.title === watch('category1'))
                                    ?.subMenu?.map((item: any) => (
                                        <MenuItem key={item.title} value={item.title}>
                                            {item.title}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    marginBottom: '10px',
                                }}
                            >
                                Danh mục con
                            </InputLabel>
                            <Select defaultValue={''} {...register('category3')} label="Danh mục con">
                                {categories
                                    .find((item: any) => item.title === watch('category1'))
                                    ?.subMenu?.find((item: any) => item.title === watch('category2'))
                                    ?.subMenu?.map((item: any) => (
                                        <MenuItem key={item.title} value={item.title}>
                                            {item.title}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
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
                        <CKEditor cb={setDetail} value={detail} />
                    </div>
                </form>
            </div>
        </div>
    );
}
