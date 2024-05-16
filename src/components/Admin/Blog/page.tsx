import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useDebounce } from '@react-hooks-library/core';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import { removeBlog } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';
import styles from '../admin.module.scss';
import AdminAddProduct from './AddProduct';
import Tippy from '@tippyjs/react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ViewBlog from './View';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminBlog(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [addProduct, setAddProduct] = useState<boolean>(false);
    const [view, setView] = useState<boolean>(false);
    let products: any = useSelector((state: RootState) => state.main.allBlogs);
    const dispatch = useDispatch();
    const [updateProduct, setUpdateProduct] = useState<any>({});
    const debouncedText = useDebounce(searchValue, 200);

    const handleDeleteProduct = (id: number) => {
        dispatch(removeBlog(id));
    };

    if (debouncedText) {
        products = products.filter((product: any) => {
            return (
                removeVietnameseTones(product.title)
                    .toLowerCase()
                    .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
            );
        });
    }

    return (
        <>
            {addProduct && (
                <AdminAddProduct
                    setAddProduct={setAddProduct}
                    updateProduct={updateProduct}
                    setUpdateProduct={setUpdateProduct}
                />
            )}
            {view && (
                <ViewBlog
                    setView={setView}
                    updateProduct={updateProduct}
                    setUpdateProduct={setUpdateProduct}
                />
            )}
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setAddProduct(true)}>
                        Thêm bài viết
                    </button>
                </div>
                <p
                    className={cx('common-title')}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    Blogs: {products.length}{' '}
                    <Tippy content="Có một số bài đã đăng trước nên không thể chỉnh sửa!">
                        <HelpOutlineIcon
                            style={{
                                marginLeft: '10px',
                            }}
                        />
                    </Tippy>
                </p>
                <input
                    type="text"
                    placeholder="Search blog..."
                    className={cx('common-inp')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <div className={cx('common-item-wrapper')}>
                    {products.length > 0 ? (
                        <div className={cx('product-wrapper')}>
                            {products.map((product: any, index: number) => {
                                return (
                                    <div key={index} className={cx('product-item')}>
                                        <Link href={`/blogs/${product.path}`} className={cx('product-img')}>
                                            {product.img ? (
                                                <Image
                                                    src={!!product.img ? product.img : ''}
                                                    alt={product.title}
                                                    width={1000}
                                                    height={1000}
                                                />
                                            ) : (
                                                <div></div>
                                            )}
                                        </Link>
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>{product.title}</p>
                                            <p className={cx('product-des')}>{product.desHead}</p>
                                        </div>
                                        <div className={cx('product-btn')}>
                                            {new Date(product.createdAt).toLocaleDateString() !==
                                            'Invalid Date' ? (
                                                <>
                                                    <div
                                                        onClick={() => {
                                                            setUpdateProduct(product);
                                                            setAddProduct(true);
                                                        }}
                                                    >
                                                        <DriveFileRenameOutlineOutlinedIcon />
                                                    </div>
                                                    <div
                                                        onClick={() => {
                                                            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                                                                handleDeleteProduct(product.id);
                                                            }
                                                        }}
                                                    >
                                                        <DeleteOutlinedIcon />
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    onClick={() => {
                                                        setUpdateProduct(product);
                                                        setView(true);
                                                    }}
                                                    style={{ border: '0px solid' }}
                                                >
                                                    <RemoveRedEyeOutlinedIcon />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className={cx('common-p')}>Không có bài viết nào!</p>
                    )}
                </div>
            </div>
        </>
    );
}
