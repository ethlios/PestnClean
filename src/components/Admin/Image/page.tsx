import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import AdminAddImage from './AddImage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useDebounce } from '@react-hooks-library/core';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import TableImgWork from './TableImgWork';
export interface IAppProps {}
const cx = classNames.bind(styles);
export default function AdminImage(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [openAddImage, setOpenAddImage] = useState<boolean>(false);
    let imgWorks: any = useSelector((state: RootState) => state.main.imageWork);
    const dispatch = useDispatch();
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const debouncedText = useDebounce(searchValue, 200);

    if (debouncedText) {
        imgWorks = imgWorks.filter((product: any) => {
            return (
                removeVietnameseTones(product.title)
                    .toLowerCase()
                    .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
            );
        });
    }

    const handleUpdate = (props: any) => {
        setOpenAddImage(true);
        setUpdateProduct(props)
    };

    return (
        <>
            {openAddImage && (
                <AdminAddImage
                    isOpen={openAddImage}
                    isClose={(e: boolean) => setOpenAddImage(e)}
                    valueUpdate={updateProduct}
                />
            )}
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setOpenAddImage(true)}>
                        Thêm hình ảnh
                    </button>
                </div>
                <p className={cx('common-title')}>Images: {imgWorks.length}</p>
                <input
                    type="text"
                    placeholder="Search product..."
                    className={cx('common-inp')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <div className={cx('common-item-wrapper')}></div>
            </div>
            <TableImgWork arrImgWork={imgWorks} updateImageWork={(e: any) => handleUpdate(e)} />
        </>
    );
}
