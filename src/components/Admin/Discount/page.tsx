import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import { RootState } from '~/redux/provider/store';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Toast from '~/components/Orther/Toast';
import AddDiscount from './AddDiscount';
const cx = classNames.bind(styles);

export interface IAppProps {}
export interface showToast {
    message: string;
    status: boolean;
}
export default function AdminDiscount(props: IAppProps) {
    const discounts: any = useSelector((state: RootState) => state.main.discount);
    const [openAddDiscount, setOpenAddDiscount] = useState<boolean>(false);
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false,
    });

    return (
        <>
            <Toast
                text={showToast.message}
                showToast={showToast.status}
                setShowToast={setShowToast}
                rule="normal"
            />
            {openAddDiscount ? (
                <AddDiscount
                    isOpen={openAddDiscount}
                    isClose={(e: boolean) => {
                        setOpenAddDiscount(e);
                        setUpdateProduct({});
                    }}
                    valueUpdate={updateProduct}
                />
            ) : (
                <>
                    <div className={cx('common-wrapper')}>
                        <div className={cx('product-panel')}>
                            <button className={cx('commom-button')} onClick={() => setOpenAddDiscount(true)}>
                                Thêm mã khuyến mãi
                            </button>
                        </div>
                        <p className={cx('common-title')}>Mã khuyến mãi: {discounts.length}</p>
                        <input type="text" placeholder="Search image..." className={cx('common-inp')}></input>
                        <div className={cx('common-item-wrapper')}></div>
                    </div>
                    <div>
                        {discounts.map((item: any, index: number) => {
                            return (
                                <div key={index} onClick={() => console.log(item.id)}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                    {/* {
                            imgWorks.length > 0 ? (
                                <TableImgWork
                                    arrImgWork={imgWorks}
                                    updateImageWork={(e: any) => handleUpdate(e)}
                                    deleteImageWork={(e: any) => handleDelete(e)}
                                />
                            ) : (
                                <div>Không có hình ảnh</div>
                            )
                        } */}

                    {/* <DialogDelete
                            isOpen={openDialogDelete}
                            imageWorkItem={valueDelete}
                            isClose={(e: boolean) => setOpenDiaLogDelete(e)}
                            messageDeleteSuccess={(e: boolean) => {
                                setShowToast({
                                    message: 'Xóa hình ảnh thành công',
                                    status: true
                                })
                            }}
                        /> */}
                </>
            )}
        </>
    );
}
