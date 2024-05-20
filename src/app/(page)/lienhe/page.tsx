'use client';

import React, { useState } from 'react';
import BannerContactPage from '~/components/Contact/Banner';
import classNames from 'classnames/bind';
import styles from '../../../components/Contact/contact.module.scss';
import InformationContactPage from '~/components/Contact/Information';
import FormContactPage from '~/components/Contact/Form';
import ConfirmForm from '~/components/Contact/ConfirmForm';
import Toast from '~/components/Orther/Toast';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ContactPage(props: IAppProps) {
    const { sizeX } = useSize();
    const [data, setData] = useState<any>();
    const [isConfirm, setIsConfirm] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);

    return (
        <div className="cpmount">
            <BannerContactPage />
            {/* Toast */}
            <Toast
                rule="normal"
                text="Vui lòng chọn loại dịch vụ"
                showToast={showToast}
                setShowToast={setShowToast}
            />
            <div className={cx('content')}
                 style={{ padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px' }}>
                <InformationContactPage />
                {!isConfirm ? (
                    <FormContactPage
                        setData={setData}
                        setIsConfirm={setIsConfirm}
                        data={data}
                        setShowToast={setShowToast}
                    />
                ) : (
                    <ConfirmForm data={data} setIsConfirm={setIsConfirm} setData={setData} />
                )}
            </div>
        </div>
    );
}
