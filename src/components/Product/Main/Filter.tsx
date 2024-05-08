'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import useScroll from '~/libs/hooks/useScroll';
import FilterMenu from '~/components/Product/Main/FilterMenu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Checkbox, IconButton } from '@mui/material';
import useSize from '~/libs/hooks/useSize';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { filterMenu, checkboxFilter } from '~/constants/productFilter';

const cx = classNames.bind(styles);

export interface IAppProps {
    openFilter: boolean;
    setOpenFilter: any;
}

export default function FilterProduct({ openFilter, setOpenFilter }: IAppProps) {
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();

    return (
        <div
            className={cx('product-filter')}
            style={{
                top: sizeX < 1024 ? 0 : wheel ? '10px' : '70px',
                width: '100%',
                padding: !openFilter ? '0' : '',
                border: !openFilter ? 'none' : '',
                position: sizeX < 1024 ? 'fixed' : 'sticky',
                zIndex: sizeX < 1024 ? '5000' : '',
                left: sizeX < 1024 && !openFilter ? '-1024px' : sizeX < 1024 && openFilter ? '0px' : '',
                height: sizeX < 1024 ? '100vh' : '',
            }}
        >
            <div
                className={'flex flex-col gap-6'}
                style={{
                    position: 'absolute',
                    width: sizeX < 1024 ? '100%' : '',
                    padding: sizeX < 450 ? '40px 20px' : sizeX < 1024 ? '50px' : '',
                }}
            >
                {sizeX < 1024 && openFilter && (
                    <IconButton
                        sx={{
                            position: 'fixed',
                            top: '0px',
                            right: '0px',
                        }}
                        onClick={() => setOpenFilter(false)}
                    >
                        <DisabledByDefaultIcon color="primary" sx={{ fontSize: '40px' }} />
                    </IconButton>
                )}
                <input className={cx('search-product')} type={'text'} placeholder={'Tên sản phẩm'} />
                {filterMenu.length !== 0 && (
                    <div className={'flex flex-col gap-2'}>
                        <h2
                            className={cx('filter-title')}
                            style={{
                                marginBottom: '8px',
                            }}
                        >
                            Danh mục sản phẩm
                        </h2>
                        <div className={'flex flex-col gap-2'}>
                            {filterMenu.map((menu, index) => (
                                <FilterMenu
                                    key={index}
                                    title={menu.title}
                                    subMenu={menu.subMenu}
                                    className={cx('title')}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {checkboxFilter.map((filter, index) => (
                    <div key={index} className={'flex flex-col gap-2'}>
                        <h2 className={cx('filter-title')}>{filter.title}</h2>
                        {filter.checkbox &&
                            filter.checkbox.map((checkbox, index) => (
                                <div className={'flex items-center gap-2'} key={index}>
                                    <Checkbox />
                                    <p className={cx('label')}>{checkbox}</p>
                                </div>
                            ))}
                        {filter.checkboxLeft && filter.checkboxRight && (
                            <div className={'flex justify-between *:flex *:flex-col *:gap-2 *:w-1/2'}>
                                <div>
                                    {filter.checkboxLeft.map((checkbox, index) => (
                                        <div className={'flex items-center gap-2'} key={index}>
                                            <Checkbox />
                                            <p className={cx('label')}>{checkbox}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {filter.checkboxRight.map((checkbox, index) => (
                                        <div className={'flex items-center gap-2'} key={index}>
                                            <Checkbox />
                                            <p className={cx('label')}>{checkbox}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className={cx('filter-button')}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        style={{ fontWeight: '600', height: '45px' }}
                    >
                        Hủy bỏ
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ fontWeight: '600', height: '45px' }}
                    >
                        Xác nhận
                    </Button>
                </div>
            </div>
        </div>
    );
}
