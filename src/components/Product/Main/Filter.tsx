'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import useScroll from '~/libs/hooks/useScroll';
import FilterMenu from '~/components/Product/Main/FilterMenu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';

const cx = classNames.bind(styles);

export interface IAppProps {
}

const filterMenu = [
    {
        title: 'Kiểm soát côn trùng',
        subMenu: [
            'Dụng cụ vệ sinh',
            'Dung dịch hóa chất',
            'Máy chà sàn liên hợp',
            'Máy vệ sinh',
            'Phụ kiện',
        ],
    },
    {
        title: 'Giải pháp vệ sinh',
        subMenu: [
            'Dụng cụ vệ sinh',
            'Dung dịch hóa chất',
            'Máy chà sàn liên hợp',
            'Máy vệ sinh',
            'Phụ kiện',
        ],
    },
    {
        title: 'Dịch vụ vệ sinh',
        subMenu: [
            'Dụng cụ vệ sinh',
            'Dung dịch hóa chất',
            'Máy chà sàn liên hợp',
            'Máy vệ sinh',
            'Phụ kiện',
        ],
    },
];

const checkboxFilter = [
    {
        title: 'Sắp xếp theo',
        checkbox: [
            'Tất cả',
            'Sản phẩm mới',
        ],
    },
    {
        title: 'Giảm giá',
        checkbox: [
            'Đang giảm giá',
        ],
    },
    {
        title: 'Theo mức giá',
        checkbox: [
            'Dưới 1.000.000đ',
            'Từ 1.000.000đ - 5.000.000đ',
            'Trên 5.000.000đ',
        ],
    },
    {
        title: 'Dung tích',
        checkboxLeft: [
            '50ML',
            '100ML',
            '500ML',
        ],
        checkboxRight: [
            '1L',
            '5L',
            '20L',
        ],
    },
    {
        title: 'Gói',
        checkboxLeft: [
            '10gr',
            '20gr',
            '100gr',
            '200gr',
        ],
        checkboxRight: [
            '500gr',
            'Gói 20 viên',
            'Hũ 400gr',
        ],
    },
    {
        title: 'Hộp',
        checkboxLeft: [
            'Hộp 12 cục',
        ],
        checkboxRight: [
            '360gr',
        ],
    },
    {
        title: 'Miếng',
        checkboxLeft: [
            '1 miếng',
        ],
        checkboxRight: [
            '10 miếng',
        ],
    },
    {
        title: 'Túi',
        checkbox: [
            '1 túi',
            '1 bộ (5 túi bả và 1 trạm AGS)',
        ],
    },
    {
        title: 'Tấm',
        checkbox: [
            '1 tấm',
        ],
    },
];


export default function FilterProduct(props: IAppProps) {
    const wheel: boolean = useScroll();

    return (
        <div
            className={cx('product-filter')}
            style={{
                top: wheel ? '10px' : '70px',
            }}
        >
            <div className={'flex flex-col gap-6'}>
                <input className={cx('search-product')}
                       type={'text'}
                       placeholder={'Tên sản phẩm'} />
                {filterMenu.length !== 0 && (
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={cx('filter-title')}>Danh mục sản phẩm</h2>
                        <div className={'flex flex-col gap-2'}>
                            {filterMenu.map((menu, index) => (
                                <FilterMenu
                                    key={index}
                                    title={menu.title}
                                    subMenu={menu.subMenu}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {checkboxFilter.map((filter, index) => (
                    <div key={index} className={'flex flex-col gap-2'}>
                        <h2 className={cx('filter-title')}>{filter.title}</h2>
                        {filter.checkbox && (
                            <FormGroup>
                                {filter.checkbox.map((checkbox, index) => (
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox />}
                                        label={<p className={cx('label')}>{checkbox}</p>}
                                    />
                                ))}
                            </FormGroup>
                        )}
                        {filter.checkboxLeft && filter.checkboxRight && (
                            <div className={'flex justify-between *:flex *:flex-col *:gap-2 *:w-1/2'}>
                                <div>
                                    <FormGroup>
                                        {filter.checkboxLeft.map((checkbox, index) => (
                                            <FormControlLabel
                                                key={index}
                                                control={<Checkbox />}
                                                label={<p className={cx('label')}>{checkbox}</p>}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup>
                                        {filter.checkboxRight.map((checkbox, index) => (
                                            <FormControlLabel
                                                key={index}
                                                control={<Checkbox />}
                                                label={<p className={cx('label')}>{checkbox}</p>}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
