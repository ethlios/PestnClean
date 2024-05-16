import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Orther.module.scss';
import InfoIcon from '@mui/icons-material/Info';

const cx = classNames.bind(styles);

export interface IAppProps {
    text: string;
    rule: string;
    showToast: boolean;
    setShowToast: any;
}

// rule: normal | error

export default function Toast({ text, rule = 'normal', showToast, setShowToast }: IAppProps) {
    useEffect(() => {
        const toastTime = setTimeout(() => setShowToast(false), 3000);

        return () => clearTimeout(toastTime);
    }, [setShowToast, showToast]);

    return (
        <div className={cx('toast-wrapper')}>
            <div
                className={cx('toast')}
                style={{
                    backgroundColor: rule === 'normal' ? 'var(--primary)' : 'var(--error)',
                    bottom: showToast ? '15px' : '-60px',
                }}
                onClick={() => setShowToast(false)}
            >
                <InfoIcon sx={{ marginRight: '10px' }} />
                <p>{text}</p>
            </div>
        </div>
    );
}
