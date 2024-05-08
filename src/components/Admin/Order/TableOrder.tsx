import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import formatter from '~/libs/orthers/formatMoney';

const cx = classNames.bind(styles);

export interface IAppProps {
    orders?: any;
    setIsUpdate?: any;
    setOpenAddOrder?: any;
    setOrder?: any;
    handleDelete?: any;
}

export default function TableOrder({
    orders,
    setIsUpdate,
    setOpenAddOrder,
    setOrder,
    handleDelete,
}: IAppProps) {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Tên</TableCell>
                        <TableCell align="right">Địa chỉ</TableCell>
                        <TableCell align="right">Số Điện Thoại</TableCell>
                        <TableCell align="right">Tiền</TableCell>
                        <TableCell align="right">Tình trạng</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order: any, index: number) => (
                        <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {order.name}
                            </TableCell>
                            <TableCell align="right">{order.address}</TableCell>
                            <TableCell align="right">{order.phone}</TableCell>
                            <TableCell align="right">{formatter.format(order.payment)}</TableCell>
                            <TableCell align="right">{order.status}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center">
                                    <IconButton
                                        onClick={() => {
                                            setIsUpdate(true);
                                            setOpenAddOrder(true);
                                            setOrder(order);
                                        }}
                                    >
                                        <DriveFileRenameOutlineOutlinedIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(order)}>
                                        <DeleteOutlinedIcon />
                                    </IconButton>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
