import * as React from 'react';
import BannerContactPage from '~/components/Contact/Banner';
import classNames from 'classnames/bind';
import styles from '../../../components/Contact/contact.module.scss';
import InformationContactPage from '~/components/Contact/Information';
import FormContactPage from '~/components/Contact/Form';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function ContactPage(props: IAppProps) {
    return (
        <div>
            <BannerContactPage />
            <div className={cx('content')}>
                <InformationContactPage />
                <FormContactPage />
            </div>
        </div>
    );
}
