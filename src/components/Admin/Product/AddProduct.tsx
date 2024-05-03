'use client';

import React, { useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import dynamic from 'next/dynamic';
import UploadImgProduct from './UploadImg';

const cx = classNames.bind(styles);

export interface IAppProps {
    setAddProduct: any;
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

export default function AdminAddProduct({ setAddProduct }: IAppProps) {
    const [content, setContent] = useState<string>('');
    const [statusValue, setStatusValue] = useState<string>('');
    const [isNew, setIsNew] = useState<boolean>(false);
    const [imageList, setImageList] = useState<string[]>([]);

    const QuillEditor = useMemo(() => {
        return dynamic(() => import('~/components/Orther/quii'), {
            loading: () => <p>loading...</p>,

            ssr: false,
        });
    }, []);

    return (
        <div className={`${cx('add-wrapper')} cpmount`}>
            <div className={cx('add-content')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('add-header')}>
                    <p>THÊM SẢN PHẨM</p>
                    <button onClick={() => setAddProduct(false)} className={cx('commom-button')}>
                        EXIT
                    </button>
                </div>
                <div className={cx('add-body')}>
                    <div className={cx('add-body-1')}>
                        <input type="text" placeholder="Tên sản phẩm..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Mô tả..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Price..." className={cx('add-inp')}></input>
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
                        <UploadImgProduct imageList={imageList} setImageList={setImageList} />
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
                        {statusValue === 'SALE' && (
                            <input type="text" placeholder="New price..." className={cx('add-inp')}></input>
                        )}
                        <input type="text" placeholder="Số lượng..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Dung tích..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Gói..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Hộp..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Miếng..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Túi..." className={cx('add-inp')}></input>
                        <input type="text" placeholder="Tấm..." className={cx('add-inp')}></input>
                    </div>
                    <div className={cx('add-body-2')}>
                        <QuillEditor cb={setContent} value={content} />
                    </div>
                </div>
            </div>
        </div>
    );
}
