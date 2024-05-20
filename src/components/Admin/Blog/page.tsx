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
import AdminAddBlog from './AddBlog';
import Tippy from '@tippyjs/react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ViewBlog from './View';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AdminBlog(props: IAppProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [addBlog, setAddBlog] = useState<boolean>(false);
    const [view, setView] = useState<boolean>(false);
    let blogs: any = useSelector((state: RootState) => state.main.allBlogs);
    const dispatch = useDispatch();
    const [updateBlog, setUpdateBlog] = useState<any>({});
    const debouncedText = useDebounce(searchValue, 200);

    const handleDeleteBlog = (id: number) => {
        dispatch(removeBlog(id));
    };

    if (debouncedText) {
        blogs = blogs.filter((product: any) => {
            return (
                removeVietnameseTones(product.title)
                    .toLowerCase()
                    .indexOf(removeVietnameseTones(debouncedText).toLowerCase()) !== -1
            );
        });
    }

    return (
        <>
            {addBlog && (
                <AdminAddBlog
                    setAddBlog={setAddBlog}
                    updateBlog={updateBlog}
                    setUpdateBlog={setUpdateBlog}
                    blogs={blogs}
                />
            )}
            {view && <ViewBlog setView={setView} updateBlog={updateBlog} setUpdateBlog={setUpdateBlog} />}
            <div className={cx('common-wrapper')}>
                <div className={cx('product-panel')}>
                    <button className={cx('commom-button')} onClick={() => setAddBlog(true)}>
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
                    Blogs: {blogs.length}{' '}
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
                    {blogs.length > 0 ? (
                        <div className={cx('product-wrapper')}>
                            {blogs.map((blog: any, index: number) => {
                                return (
                                    <div key={index} className={cx('product-item')}>
                                        <Link href={`/blogs/${blog.path}`} className={cx('product-img')}>
                                            {blog.img ? (
                                                <Image
                                                    src={!!blog.img ? blog.img : ''}
                                                    alt={blog.title}
                                                    width={1000}
                                                    height={1000}
                                                />
                                            ) : (
                                                <div></div>
                                            )}
                                        </Link>
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>{blog.title}</p>
                                            <p className={cx('product-des')}>{blog.desHead}</p>
                                        </div>
                                        <div className={cx('product-btn')}>
                                            {new Date(blog.createdAt).toLocaleDateString() !==
                                            'Invalid Date' ? (
                                                <>
                                                    <div
                                                        onClick={() => {
                                                            setUpdateBlog(blog);
                                                            setAddBlog(true);
                                                        }}
                                                    >
                                                        <DriveFileRenameOutlineOutlinedIcon />
                                                    </div>
                                                    <div
                                                        onClick={() => {
                                                            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                                                                handleDeleteBlog(blog.id);
                                                            }
                                                        }}
                                                    >
                                                        <DeleteOutlinedIcon />
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    onClick={() => {
                                                        setUpdateBlog(blog);
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
