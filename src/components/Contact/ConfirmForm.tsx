import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';
import { Button } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ShieldIcon from '@mui/icons-material/Shield';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import logo from '../../../public/img/logo.png';
import emailjs from '@emailjs/browser';
import DialogSuccess from './dialogSuccess';
import DialogError from './dialogError';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    data: any;
    setIsConfirm: any;
    setData: any;
}

export default function ConfirmForm({ data, setIsConfirm, setData }: IAppProps) {
    const mainRef = useRef<any>();
    const formRef = useRef<any>();
    const [sendEmailSuccess, setSendEmailSuccess] = useState<boolean>(false);
    const [sendEmailError, setSendEmailError] = useState<boolean>(false);
    const { sizeX } = useSize();

    const handleSubmit = () => {
        emailjs.sendForm('service_1my45v9', 'template_hbqvz21', formRef.current, 'YddtFQS5swpWShEm8').then(
            (result) => {
                setSendEmailSuccess(true);
                setSendEmailError(false);
            },
            (error) => {
                setSendEmailSuccess(false);
                setSendEmailError(true);
            },
        );
    };

    return (
        <div className={cx('form')} style={sizeX < 768 ? { width: '100%' } : { width: '50%' }}>
            <h1
                style={{
                    marginTop: sizeX < 768 ? '50px' : '',
                }}
            >
                MỘT DỰ ÁN VỚI <br />
                PESTNCLEAN?
            </h1>

            {/* Progress */}
            <div
                className={cx('progress')}
                style={{
                    gap: sizeX < 500 ? '20px' : '',
                }}
            >
                <div className={cx('progress-1')}>
                    <p
                        style={{
                            fontSize: sizeX < 500 ? '14.5px' : '',
                        }}
                    >
                        1. NHẬP THÔNG TIN
                    </p>
                    <div className={cx('progress-value-comple')}></div>
                </div>
                <div className={cx('progress-1')}>
                    <p
                        style={{
                            fontSize: sizeX < 500 ? '14.5px' : '',
                        }}
                    >
                        2. XÁC NHẬN {sizeX < 480 ? '' : 'THÔNG TIN'}
                    </p>
                    <div className={cx('progress-value-comple')}></div>
                </div>
            </div>

            {/* Confirm Form */}
            {sendEmailSuccess && (
                <DialogSuccess setData={setData} setIsConfirm={setIsConfirm} item={mainRef.current} />
            )}
            {sendEmailError && <DialogError setData={setData} setIsConfirm={setIsConfirm} />}

            <div ref={mainRef} className={cx('confirm-main')}>
                <div
                    style={{
                        display: 'none',
                        marginBottom: '20px',
                        width: '176px',
                        height: '42px',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${logo.src})`,
                    }}
                />

                <p className={cx('confirm-title')}>Thông tin cá nhân!</p>
                <div className={cx('confirm-wrapper')}>
                    <div
                        className={cx('confirm-text')}
                        style={{
                            flexDirection: sizeX < 900 ? 'column' : 'row',
                        }}
                    >
                        <div className={cx('confirm-item')}>
                            <AssignmentIndIcon />
                            <p>{data.name}</p>
                        </div>
                        <div className={cx('confirm-item')}>
                            <AlternateEmailIcon />
                            <p>{data.email}</p>
                        </div>
                    </div>
                    <div
                        className={cx('confirm-item')}
                        style={{
                            width: '100%',
                        }}
                    >
                        <CallIcon />
                        <p>{data.phone}</p>
                    </div>
                </div>
                <div className={cx('confirm-shield')}>
                    <ShieldIcon />{' '}
                    <p>Thông tin cá nhân của bạn sẽ được chúng tôi bảo mật một cách hết sức cẩn thận!</p>
                </div>
                <p className={cx('confirm-title')}>Thông tin cuộc hẹn!</p>
                <div className={cx('confirm-wrapper')}>
                    <div className={cx('confirm-text')}>
                        <div className={cx('confirm-item-orther')}>
                            <SettingsSuggestIcon />
                            <p>{`${data.nganh} - ${data.dichvu}`}</p>
                        </div>
                    </div>
                    <div className={cx('confirm-item-orther')}>
                        <HomeIcon />
                        <p>{data.address}</p>
                    </div>
                    <div className={cx('confirm-item-orther')}>
                        <StickyNote2Icon />
                        <p>{data.message ? data.message : 'Không có ghi chú nào được biên soạn!'}</p>
                    </div>
                </div>
                <div className={cx('confirm-shield')}>
                    <HandshakeIcon /> <p>Thông tin của cuộc hẹn là thỏa thuận chung giữa chúng ta!</p>
                </div>
                <div className={cx('btn-wrapper')}>
                    <Button
                        variant="outlined"
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            border: '2px solid',
                            width: '50%',
                            height: '45px',
                        }}
                        onClick={() => setIsConfirm(false)}
                    >
                        Chỉnh sửa
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            height: '45px',
                            width: '50%',
                        }}
                        onClick={handleSubmit}
                    >
                        Gửi thông tin
                    </Button>
                </div>
                <form
                    ref={formRef}
                    style={{
                        display: 'none',
                    }}
                >
                    <input type="text" defaultValue={data.name} name="Name" />
                    <input type="text" defaultValue={data.email} name="Email" />
                    <input type="text" defaultValue={data.phone} name="Phone" />
                    <input type="text" defaultValue={`${data.nganh} - ${data.dichvu}`} name="Service" />
                    <input type="text" defaultValue={data.address} name="Address" />
                    <textarea defaultValue={data.message} name="Message" />
                </form>
            </div>
        </div>
    );
}
