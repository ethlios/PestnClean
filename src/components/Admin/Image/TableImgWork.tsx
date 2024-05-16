import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { styled } from '@mui/material';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
export interface IAppProps {
    arrImgWork: any[];
    updateImageWork: any;
    deleteImageWork: any;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 600,
        fontFamily: 'Merriweather',
        fontSize: 13,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function TableImgWork(props: IAppProps) {
    const cx = classNames.bind(styles);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Hình ảnh</StyledTableCell>
                        <StyledTableCell align="left">Danh mục</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.arrImgWork.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledTableCell component="th" scope="row">
                                <img
                                    loading="lazy"
                                    className="w-40 h-40 object-cover"
                                    src={row.img}
                                    alt="Ảnh được chọn"
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <div className={cx('font-semibold', 'tableTableCell')}>
                                    {row.type}
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div className="flex items-center justify-center">
                                    <div
                                        className={cx('btn-control')}
                                        onClick={() => props.updateImageWork(row)}
                                    >
                                        <DriveFileRenameOutlineOutlinedIcon />
                                    </div>
                                    <div
                                        className={cx('btn-control', 'ml-2')}
                                        onClick={() => props.deleteImageWork(row)}
                                    >
                                        <DeleteOutlinedIcon />
                                    </div>
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
