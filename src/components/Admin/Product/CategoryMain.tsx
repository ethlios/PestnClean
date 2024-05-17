import React, { useState } from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const cx = classNames.bind(styles);

export interface IAppProps {
    setPhanloai: any;
    phanloai: any;
    setPhanloaiList: any;
    phanloaiList: any[];
}

export default function CategoryMain({ setPhanloai, phanloai, setPhanloaiList, phanloaiList }: IAppProps) {
    const [phanloaiIndex, setPhanloaiIndex] = useState<number>(-1);

    const handleDeletePhanloai = (index: number) => {
        const newList = phanloaiList.filter((item) => {
            return item !== phanloaiList[index];
        });
        setPhanloaiList(newList);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <input
                    id="PhanLoai"
                    type="text"
                    className={cx('add-inp')}
                    onChange={(e) => setPhanloai(e.target.value)}
                    placeholder="Phân loại"
                    value={phanloai}
                />
                <EastOutlinedIcon
                    style={{
                        position: 'absolute',
                        fontSize: '20px',
                        cursor: 'pointer',
                        right: '10px',
                        marginBottom: '3px',
                    }}
                    onClick={() => {
                        setPhanloaiList((prev: any) => [...prev, { type: phanloai, price: 0 }]);
                        setPhanloai('');
                        setPhanloaiIndex(-1);
                    }}
                />
            </div>
            {phanloaiList.length > 0 && (
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexWrap: 'wrap',
                        fontSize: '13px',
                        flexDirection: 'row',
                        gap: '5px',
                    }}
                >
                    {phanloaiList.map((item, index) => {
                        return (
                            <div key={index} className={'flex gap-1 w-full'}>
                                <div
                                    className={cx('add-inp-type')}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPhanloaiIndex(index);
                                    }}
                                >
                                    {item.type}
                                    {phanloaiIndex === index && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                position: 'absolute',
                                                backgroundColor: 'rgba(0,0,0,0.5)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                top: 0,
                                                left: 0,
                                                borderRadius: '5px',
                                                fontSize: '18px',
                                            }}
                                        >
                                            <RemoveOutlinedIcon
                                                onClick={() => handleDeletePhanloai(index)}
                                                style={{
                                                    color: '#fff',
                                                    zIndex: 10,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    className={cx('add-inp-type-price')}
                                    value={item.price}
                                    onChange={(e) => {
                                        const newList = phanloaiList.map((item, i) => {
                                            if (i === index) {
                                                return { ...item, price: +e.target.value };
                                            }
                                            return item;
                                        });
                                        setPhanloaiList(newList);
                                    }}
                                ></input>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
