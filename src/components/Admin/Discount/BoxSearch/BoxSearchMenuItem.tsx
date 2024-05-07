import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../Discount.module.scss';

interface FlyOutsMenuItemProps {
    data: any;
    onClick: any;
}

const FlyOutsMenuItem: React.FC<FlyOutsMenuItemProps> = ({ data, onClick }) => {
    const cx = classNames.bind(styles);

    const handleClickBox = () => {
        if (onClick) onClick(data);
    };

    useEffect(() => {
        console.log(data);
    },[data]);

    return (
        <div className={cx('flex items-center justify-start')} onClick={handleClickBox}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label className='ml-2 font-semibold' htmlFor="vehicle1">{"("+data.name +") " + data.email}</label>
        </div>
    );
};

export default FlyOutsMenuItem;
