import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from '../Discount.module.scss';
import FlyOutsMenuItem from './BoxSearchMenuItem';

interface BoxSearchProps {
    items: any[];
}

const BoxSearch: React.FC<BoxSearchProps> = ({ items }: BoxSearchProps) => {
    const cx = classNames.bind(styles);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const handleClickMenuItem = (userId: string) => {};

    const handleClickShowBox = () => {
        setOpenSearch(!openSearch);
    };

    const showFlyOutsMenuitem = () => {
        return items.map((item, index) => (
            <FlyOutsMenuItem key={index} data={item} onClick={() => handleClickMenuItem(item.userId)} />
        ));
    };
    return (
        <Tippy
            content={'Hello'}
            visible={openSearch}
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('wrapper-boxSearch', 'p-2')} tabIndex={-1} {...attrs}>
                    {showFlyOutsMenuitem()}
                </div>
            )}
        >
            <input
                className={cx('wrapper-chooseObject-inputSearch')}
                placeholder="Nhập email khách hàng để tìm kiếm"
                onClick={handleClickShowBox}
            />
        </Tippy>
    );
};

export default BoxSearch;
