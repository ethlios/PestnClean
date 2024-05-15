'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkboxFilter } from '~/constants/productFilter';
import { addCheckboxFilterProductPage } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';

export default function ProductPageLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const allProducts = useSelector((state: RootState) => state.main.allProducts);

    useEffect(() => {
        // Duyệt qua tất cả sản phẩm
        allProducts.forEach((product: any) => {
            // Duyệt qua từng thuộc tính trong checkboxFilter
            checkboxFilter.map((filter: any) => {
                // Nếu thuộc tính của sản phẩm có giá trị và chưa tồn tại trong checkboxFilter
                if (product[filter.field] && !filter.checkbox.includes(product[filter.field])) {
                    // Thêm giá trị thuộc tính vào checkboxFilter
                    filter.checkbox.push(product[filter.field]);
                }
            });
        });
        // Gửi giá trị checkboxFilter lên store
        dispatch(addCheckboxFilterProductPage(checkboxFilter));
    }, []);
    
    return children;
}
