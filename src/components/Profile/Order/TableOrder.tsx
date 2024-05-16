import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import formatter from '~/libs/orthers/formatMoney';

const cx = classNames.bind(styles);

export interface IAppProps {
    orders?: any;
    setOpenAddOrder?: any;
    setOrder?: any;
}

export default function TableOrder({ orders, setOpenAddOrder, setOrder }: IAppProps) {
    return (
        <TableContainer sx={{ marginTop: '20px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead
                    style={{
                        backgroundColor: 'var(--primary)',
                        color: '#fff',
                    }}
                >
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
                    {orders.map((order: any) => (
                        <TableRow
                            key={order.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.05)',
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {order.name}
                            </TableCell>
                            <TableCell align="right">{order.address}</TableCell>
                            <TableCell align="right">{order.phone}</TableCell>
                            <TableCell align="right">{formatter.format(order.payment)}</TableCell>
                            <TableCell align="right">
                                {order.status ? order.status : 'Chờ xác nhận'}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center">
                                    <IconButton
                                        onClick={() => {
                                            setOpenAddOrder(true);
                                            setOrder(order);
                                        }}
                                    >
                                        <VisibilityIcon />
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
