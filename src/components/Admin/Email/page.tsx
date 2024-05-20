import classNames from 'classnames/bind';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import styles from '../admin.module.scss';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import Link from 'next/link';
import Toast from '~/components/Orther/Toast';
import { removeEmail } from '~/redux/actions';

const cx = classNames.bind(styles);

export interface IAppProps {}
export interface showToast {
    message: string,
    status: boolean
}

export default function AdminEmail(props: IAppProps) {
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);
    const { data: session } = useSession();
    const [showToast, setShowToast] = useState<showToast>({
        message: '',
        status: false
    });

    const handleLClickBtn = () => {
        if (selector.emails.length > 0) {
            let str = '';
            const email = selector.emails.map((email) => {
                return (str += `${email.email} `);
            });
            navigator.clipboard.writeText(email[email.length - 1]);
            setShowToast({
                message: "Đã copy tất cả emails vào clipboard",
                status: true
            });
        }
    };

    const handleClickRemoveEmail = (item: any) =>{
        dispatch(removeEmail({id: item.id}));
    }

    useEffect(() => {
        if(selector.message === 'Xóa email thành công'){
            setShowToast({
                message: selector.message,
                status: true
            });
        }
    },[selector.message]);

    useEffect(() => {
        setShowToast(prevState => ({
            ...prevState,
            status: false
        }));
    }, []);

    return (
        <>
            <Toast
                text= {showToast.message}
                showToast={showToast.status}
                setShowToast={setShowToast}
                rule="normal"
            />
            <div className={cx('common-wrapper')}>
                <div className={cx('email-header')}>
                    <p>Emails: {selector.emails?.length}</p>
                    <button className={cx('commom-button')} onClick={handleLClickBtn}>
                        Copy All
                    </button>
                </div>
                <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}>
                    {selector.emails?.map((item, index) => {
                        return (
                            <div key={index} className={cx('email-item')} style={{ height: '50px' }}>
                                <div className={cx('email-index')}>{index + 1}</div>
                                <p>{item.email}</p>
                                <div className={cx('email-button')}>
                                    <button>
                                        <Link href={`mailto:${item.email}`} rel="noopener noreferrer">
                                            <ForwardToInboxOutlinedIcon />
                                        </Link>
                                    </button>
                                    <button onClick={() => handleClickRemoveEmail(item)}>
                                        <CancelOutlinedIcon />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
