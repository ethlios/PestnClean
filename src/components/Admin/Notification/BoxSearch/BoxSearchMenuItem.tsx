import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Notification.module.scss';

interface FlyOutsMenuItemProps {
    data: any;
    onClick: any;
}

const FlyOutsMenuItem: React.FC<FlyOutsMenuItemProps> = ({ data, onClick }) => {
    const cx = classNames.bind(styles);
    const [isChecked,setIsChecked] = useState<boolean>(false);
    const handleClickBox = () => {
        setIsChecked(!isChecked);
       
    };

    useEffect(() => {
        onClick({
            status: isChecked,
            object: data
        });
    },[isChecked])

    return (
        <div className={cx('flex items-center justify-start')}>
            <input type="checkbox" id={data.id} name="vehicle1" value="Bike" onChange={handleClickBox} checked={isChecked} />
            <label className="ml-2 font-semibold" htmlFor={data.id}>
                {'(' + data.name + ') ' + data.email}
            </label>
        </div>
    );
};

export default FlyOutsMenuItem;
