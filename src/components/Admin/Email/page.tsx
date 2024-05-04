import classNames from 'classnames/bind';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import styles from '../admin.module.scss';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import Link from 'next/link';
import Toast from '~/components/Orther/Toast';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminEmail(props: IAppProps) {
    const dispatch = useDispatch();
    const emails = useSelector((state: RootState) => state.main.emails);
    const { data: session } = useSession();
    const [showToast, setShowToast] = useState<boolean>(false);

    const handleLClickBtn = () => {
        if (emails.length > 0) {
            let str = '';
            const email = emails.map((email) => {
                return (str += `${email.email} `);
            });
            navigator.clipboard.writeText(email[email.length - 1]);
            setShowToast(true);
        }
    };

    return (
        <>
            <Toast
                text="Đã copy tất cả emails vào clipboard"
                showToast={showToast}
                setShowToast={setShowToast}
                rule="normal"
            />
            <div className={cx('common-wrapper')}>
                <div className={cx('email-header')}>
                    <p>Emails: {emails?.length}</p>
                    <button className={cx('commom-button')} onClick={handleLClickBtn}>
                        Copy All
                    </button>
                </div>
                <div className={cx('common-item-wrapper')} style={{ marginTop: '20px' }}>
                    {emails?.map((item, index) => {
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
                                    <button>
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
