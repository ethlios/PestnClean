'use client';

export interface IAppProps {
}

import styles from '~/components/Search/search.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export default function FaqPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div className={'w-full cpmount'}
             style={{ padding: sizeX < 768 ? '0 20px' : sizeX < 1100 ? '0 50px' : sizeX < 1280 ? '0 80px' : '0 100px' }}>
            <div className={cx('search-wrapper')}>
                <p>Không tìm thấy kết quả nào!</p>
            </div>
        </div>
    );
}
