import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import { RootState } from '~/redux/provider/store';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Toast from '~/components/Orther/Toast';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddDiscount from './AddDiscount';
import { deleteDiscount } from '~/redux/actions';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
const cx = classNames.bind(styles);

export interface IAppProps {}
export interface showToast {
    message: string;
    status: boolean;
}
export default function AdminDiscount(props: IAppProps) {
    const discounts: any = useSelector((state: RootState) => state.main.discount);
    const [openAddDiscount, setOpenAddDiscount] = useState<boolean>(false);
    const [updateDiscount, setUpdateDiscount] = useState<any>({});
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false,
    });
    const dispatch = useDispatch();

    const handleDeleteDiscount = (id: number) => {
        dispatch(deleteDiscount(id));
    };
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
                        setUpdateDiscount({});
                    }}
                    valueUpdate={updateDiscount}
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
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Tên</TableCell>
                                        <TableCell align="right">Code</TableCell>
                                        <TableCell align="right">Ngày bắt đầu</TableCell>
                                        <TableCell align="right">Ngày kết thúc</TableCell>
                                        <TableCell align="right">Mô tả</TableCell>
                                        <TableCell align="right">Mức giá giảm</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {discounts.map((item: any, index: number) => (
                                        <TableRow key={index} onClick={() => console.log(item.id)}>
                                            <TableCell component="th" scope="row">
                                                {item.name}
                                            </TableCell>
                                            <TableCell align="right">{item.code}</TableCell>
                                            <TableCell align="right">{item.dateStart}</TableCell>
                                            <TableCell align="right">{item.dateEnd}</TableCell>
                                            <TableCell align="right">{item.description}</TableCell>
                                            <TableCell align="right">{item.percent} %</TableCell>
                                            <TableCell>
                                                <div className="flex items-center justify-center">
                                                <IconButton
                                        onClick={() => {
                                            setOpenAddDiscount(item);
                                            setUpdateDiscount(true);
                                        }}
                                    >
                                        <DriveFileRenameOutlineOutlinedIcon />
                                    </IconButton>
                                                    <IconButton
                                                        onClick={() => {
                                                            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                                                                handleDeleteDiscount(item.id);
                                                            }
                                                        }}
                                                    >
                                                        <DeleteOutlinedIcon />
                                                    </IconButton>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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