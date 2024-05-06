import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import AdminAddImage from './AddImage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import TableImgWork from './TableImgWork';
import DialogDelete from './DialogDelete';
import Toast from '~/components/Orther/Toast';
export interface IAppProps {}
const cx = classNames.bind(styles);

export interface showToast {
    message: string,
    status: boolean
}
export default function AdminImage(props: IAppProps) {
    const [openAddImage, setOpenAddImage] = useState<boolean>(false);
    let imgWorks: any = useSelector((state: RootState) => state.main.imageWork);
    const dispatch = useDispatch();
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const [openDialogDelete, setOpenDiaLogDelete] = useState<boolean>(false);
    const [valueDelete, setValueDelete] = useState<any>({});
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false
    });

    const handleUpdate = (props: any) => {
        if (props) {
            setOpenAddImage(true);
            setUpdateProduct(props);
        }
    };

    const handleDelete = (props: any) => {
        if (props) {
            setOpenDiaLogDelete(true);
            setValueDelete(props);
        }
    };

    return (
        <>
            <Toast
                text= {showToast.message}
                showToast={showToast.status}
                setShowToast={setShowToast}
                rule="normal"
            />
            <AdminAddImage
                isOpen={openAddImage}
                isClose={(e: boolean) => {
                    setOpenAddImage(e)
                    setUpdateProduct({})
                }}
                valueUpdate={updateProduct}
            />
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setOpenAddImage(true)}>
                        Thêm hình ảnh
                    </button>
                </div>
                <p className={cx('common-title')}>Images: {imgWorks.length}</p>
                <input type="text" placeholder="Search image..." className={cx('common-inp')}></input>
                <div className={cx('common-item-wrapper')}></div>
            </div>
            {
                imgWorks.length > 0 ? (
                    <TableImgWork
                        arrImgWork={imgWorks}
                        updateImageWork={(e: any) => handleUpdate(e)}
                        deleteImageWork={(e: any) => handleDelete(e)}
                    />
                ) : (
                    <div>Không có hình ảnh</div>
                )
            }
            
            <DialogDelete
                isOpen={openDialogDelete}
                imageWorkItem={valueDelete}
                isClose={(e: boolean) => setOpenDiaLogDelete(e)}
                messageDeleteSuccess={(e: boolean) => {
                    setShowToast({
                        message: 'Xóa hình ảnh thành công',
                        status: true
                    })
                }}
            />
        </>
    );
}
