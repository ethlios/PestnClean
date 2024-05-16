import React, { useState } from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import classNames from 'classnames/bind';
import styles from '../admin.module.scss';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const cx = classNames.bind(styles);

export interface IAppProps {
    setHastag: any;
    hastag: string;
    setHastagList: any;
    hastagList: any[];
    readOnly?: boolean;
}

export default function HastagList({ setHastag, hastag, setHastagList, hastagList, readOnly }: IAppProps) {
    const [hastagIndex, setHastagIndex] = useState<number>(-1);

    const handleDeleteHastag = (ind: number) => {
        const newList = hastagList.filter((image) => {
            return image !== hastagList[ind];
        });
        setHastagList(newList);
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
                    id="Hastag"
                    type="text"
                    className={cx('add-inp')}
                    onChange={(e) => setHastag(e.target.value)}
                    placeholder="Menus"
                    value={hastag}
                    readOnly
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
                        setHastagList((prev: any) => [...prev, hastag]);
                        setHastag('');
                    }}
                />
            </div>
            {hastagList.length > 0 && (
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
                    {hastagList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    fontWeight: 600,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setHastagIndex(index);
                                }}
                            >
                                {item}
                                {hastagIndex === index && (
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
                                            onClick={() => handleDeleteHastag(index)}
                                            style={{
                                                color: '#fff',
                                                zIndex: 10,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
