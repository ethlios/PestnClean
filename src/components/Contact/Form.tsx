'use client';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { services } from '~/constants/menu';
import ButtonCommon from '../Orther/Button';
import styles from './contact.module.scss';
import Toast from '../Orther/Toast';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    setData: any;
    setIsConfirm: any;
    data: any;
    setShowToast: any;
}

export default function FormContactPage({ setData, setIsConfirm, data, setShowToast }: IAppProps) {
    const [defaultService, setDefaultService] = useState<string>('Kiểm soát côn trùng');
    const [defaulServiceValue, setDefaultServiceValue] = useState<number>(0);
    const [defaulListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Nhà hàng');
    const [lists, setLists] = useState<any>([]);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const form = useRef<any>('');
    const { sizeX } = useSize();

    // Get List services
    useEffect(() => {
        const listFilter = services.filter((service) => service.title === defaultService);

        if (listFilter[0].list.length > 0) {
            setLists(listFilter[0].list);
            setDefaultListValue(-1);
            setDefaultList('');
        }

        return () => setLists([]);
    }, [defaultService]);

    // Submit Form
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            address,
            message,
            nganh: defaultService,
            dichvu: defaultList,
        };

        if (defaultList) {
            setData(data);
            setIsConfirm(true);
        } else {
            setShowToast(true);
        }

        window.scrollTo({
            top: 400,
            left: 0,
            behavior: 'smooth',
        });
    };

    // Update

    useEffect(() => {
        if (!!data) {
            setDefaultService(data.nganh);
            setDefaultList(data.dichvu);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address);
            setMessage(data.message);
        }
    }, [data]);

    // Reset Form
    const handleReset = () => {
        setDefaultService('Kiểm soát côn trùng');
        setDefaultList('');
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');

        setData('');
    };

    return (
        <div className={cx('form')} style={sizeX < 768 ? { width: '100%' } : { width: '52%' }}>
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
                    <div className={cx('progress-value')}>
                        <div
                            className={cx('progress-item-first')}
                            style={{
                                width: !!defaultService ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                        <div
                            className={cx('progress-item')}
                            style={{
                                width: !!defaultList ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                        <div
                            className={cx('progress-item')}
                            style={{
                                width: !!name && name.length > 2 ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                        <div
                            className={cx('progress-item')}
                            style={{
                                width: validateEmailRegex.test(email) ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                        <div
                            className={cx('progress-item')}
                            style={{
                                width: isPhone.test(phone) ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                        <div
                            className={cx('progress-item-last')}
                            style={{
                                width: !!address && address.length > 2 ? 'calc(100% /6)' : '0',
                            }}
                        ></div>
                    </div>
                </div>
                <div className={cx('progress-1')}>
                    <p
                        style={{
                            fontSize: sizeX < 500 ? '14.5px' : '',
                        }}
                    >
                        2. XÁC NHẬN
                    </p>
                    <div className={cx('progress-value')}></div>
                </div>
            </div>

            {/* Service */}
            <div className={cx('service')}>
                <p className={cx('form-title')}>DỊCH VỤ?</p>
                <div className={cx('service-title')}>
                    {services.map((service, index) => {
                        return (
                            <ButtonCommon
                                key={service.id}
                                text={service.title}
                                rule={defaulServiceValue === index ? 'rule-1' : 'rule-2'}
                                setDefaultServiceValue={setDefaultServiceValue}
                                index={index}
                                setDefaultService={setDefaultService}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={cx('service')}>
                <p className={cx('form-title')}>BẠN ĐANG QUAN TÂM?</p>
                <div className={cx('service-title')}>
                    {lists.length > 0
                        ? lists.map((list: any, index: number) => {
                              return (
                                  <ButtonCommon
                                      key={list.id}
                                      text={list.title}
                                      rule2={defaulListValue === index ? 'rule-1' : 'rule-2'}
                                      setDefaultListValue={setDefaultListValue}
                                      index2={index}
                                      setDefaultList={setDefaultList}
                                  />
                              );
                          })
                        : ''}
                </div>
            </div>

            {/* FORM */}
            <div className={cx('service')}>
                <p className={cx('form-title')}>THÔNG TIN CỦA BẠN</p>
                <form onSubmit={handleSubmit} ref={form} className={cx('form-wrapper')}>
                    <div className={cx('form-content')}>
                        <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Tên</InputLabel>
                            <OutlinedInput
                                type="text"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end" disabled>
                                            <AssignmentIndIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Tên"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                type="email"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end" disabled>
                                            <AlternateEmailIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormControl>
                    </div>
                    <div className={cx('form-content')}>
                        <FormControl sx={{ width: '50%', paddingRight: '15px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Số điện thoại</InputLabel>
                            <OutlinedInput
                                type="text"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end" disabled>
                                            <CallIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </FormControl>
                    </div>

                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Địa chỉ</InputLabel>
                        <OutlinedInput
                            type="text"
                            color="primary"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" edge="end" disabled>
                                        <HomeIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Địa chỉ"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            required
                        />
                    </FormControl>
                    <textarea
                        style={{
                            width: '100%',
                            height: '140px',
                        }}
                        className={cx('textarea')}
                        placeholder="Ghi chú thêm"
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        value={message}
                        spellCheck={false}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '10px',
                            gap: '10px',
                            alignItems: 'center',
                        }}
                    >
                        <input
                            type="checkbox"
                            required
                            style={{ accentColor: 'var(--primary)', width: '30px', height: '30px' }}
                            id="checkboxid"
                        />
                        <label
                            style={{
                                fontSize: '12px',
                                fontWeight: 600,
                                color: 'var(--text-black)',
                            }}
                            htmlFor="checkboxid"
                        >
                            Chúng tôi cam kết thông tin của bạn sẽ được bảo mật một cách trọn vẹn. Việc bạn
                            chọn vào ô này cũng đồng nghĩa với việc chấp thuận các cam kết của chúng tôi!
                        </label>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '20px',
                            gap: '10px',
                        }}
                    >
                        <button
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                border: '2px solid',
                                width: '50%',
                                height: '45px',
                                borderRadius: ' 5px',
                            }}
                            onClick={handleReset}
                            className={cx('button-hover')}
                        >
                            Làm lại
                        </button>
                        <button
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '45px',
                                width: '50%',
                                backgroundColor: 'var(--primary)',
                                borderRadius: ' 5px',
                                color: '#fff',
                            }}
                            type="submit"
                            className={cx('button-hover')}
                        >
                            Tiếp tục
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
