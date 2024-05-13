'use client';

import classNames from 'classnames/bind';
import styles from '../product.module.scss';
import useScroll from '~/libs/hooks/useScroll';
import FilterMenu from '~/components/Product/Main/FilterMenu';
import { Button, Checkbox, IconButton } from '@mui/material';
import useSize from '~/libs/hooks/useSize';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { filterMenu, checkboxFilter } from '~/constants/productFilter';
import { useEffect, useState } from 'react';
import CheckboxMenu from '~/components/Product/Main/CheckboxMenu';

const cx = classNames.bind(styles);

export interface IAppProps {
    openFilter: boolean;
    setOpenFilter: any;
    setProducts: any;
    allProducts: any;
    selectedCategory: any;
    setSelectedCategory: any;
    checkedFilter: any;
    setCheckedFilter: any;
}

export default function FilterProduct({
    openFilter,
    setOpenFilter,
    setProducts,
    allProducts,
    selectedCategory,
    setSelectedCategory,
    checkedFilter,
    setCheckedFilter,
}: IAppProps) {
    const wheel: boolean = useScroll();
    const { sizeX } = useSize();

    useEffect(() => {
        let filterProducts = allProducts.filter((product: any) => {
            if (selectedCategory.length === 0) return allProducts;
            return (
                selectedCategory.includes(product.category1) ||
                selectedCategory.includes(product.category2) ||
                selectedCategory.includes(product.category3)
            );
        });
        checkedFilter.forEach((checked: any) => {
            filterProducts = filterProducts.filter((product: any) => {
                return (
                    (product.weight && product.weight.includes(checked)) ||
                    (product.box && product.box.includes(checked)) ||
                    (product.package && product.package.includes(checked)) ||
                    (product.pieces && product.pieces.includes(checked)) ||
                    (product.bag && product.bag.includes(checked)) ||
                    (product.plate && product.plate.includes(checked)) ||
                    (product.categoryMain && product.categoryMain.includes(checked))
                );
            });
        });
        setProducts(filterProducts);
    }, [selectedCategory, checkedFilter]);

    const handleCancel = () => {
        setSelectedCategory([]);
        setCheckedFilter([]);
    };

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
                height: sizeX < 1024 ? '1300px' : '',
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
                                    selected={selectedCategory}
                                    setSelected={setSelectedCategory}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {checkboxFilter.map((filter: any, index: any) => (
                    <CheckboxMenu
                        filter={filter}
                        key={index}
                        checked={checkedFilter}
                        setChecked={setCheckedFilter}
                    />
                ))}
                {sizeX < 1024 && (
                    <div className={cx('filter-button')}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            style={{ fontWeight: '600', height: '45px' }}
                            onClick={handleCancel}
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
                )}
            </div>
        </div>
    );
}
