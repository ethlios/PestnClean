'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { blogs, btnLists } from '~/constants/blogs';
import ButtonCommon from '../Orther/Button';
import styles from './blogs.module.scss';
import Image from 'next/image';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';
import smoothScroll from '~/libs/orthers/smoothScroll';
import useSize from '~/libs/hooks/useSize';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsList(props: IAppProps) {
    const [defaulListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');
    const [blogsList, setBlogsList] = useState<any[]>([]);
    const [currentBlog, setCurrentBlog] = useState(-1);
    const [searchValue, setSearchValue] = useState<string>('');
    const [numberPageValue, setNumberPageValue] = useState<number>(0);
    const { sizeX } = useSize();
    let allBlogs: any = useSelector((state: RootState) => state.main.allBlogs);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 12;
    const currentItems = blogsList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogsList.length / 12);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * 12) % blogsList.length;
        setItemOffset(newOffset);
        smoothScroll('#blogs-list');
    };

    // Filter
    useEffect(() => {
        if (defaultList === 'Tất cả') {
            setBlogsList(allBlogs);
        } else {
            const newBlogsList = allBlogs.filter((blog: any) => blog.category === defaultList);

            setBlogsList(newBlogsList);
        }

        if (searchValue) {
            const newBlogs = allBlogs.filter((blog: any) => {
                return (
                    removeVietnameseTones(blog.title)
                        .toLowerCase()
                        .indexOf(removeVietnameseTones(searchValue).toLowerCase()) !== -1
                );
            });

            setBlogsList(newBlogs);
        }

        return () => setBlogsList([]);
    }, [allBlogs, defaultList, numberPageValue, searchValue]);

    return (
        // All blogs
        <div
            className={cx('blogs-lists')}
            style={{
                marginTop: sizeX < 800 ? '30px' : '50px',
            }}
        >
            <p className={cx('title')}>TẤT CẢ BÀI VIẾT</p>
            <div className={cx('btn-lists')}>
                {btnLists.map((btn, index) => {
                    return (
                        <ButtonCommon
                            key={btn.id}
                            text={btn.title}
                            setDefaultListValue={setDefaultListValue}
                            rule2={defaulListValue === index ? 'rule-1' : 'rule-2'}
                            index2={index}
                            setDefaultList={setDefaultList}
                        />
                    );
                })}
            </div>
            <div
                className={cx('blogs-list-wrapper')}
                style={{
                    padding: sizeX < 500 ? '15px' : '',
                }}
            >
                {/* Search */}
                <div className={cx('search')} id="blogs-list">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        style={{
                            width: sizeX < 600 ? '100%' : sizeX < 800 ? '60%' : '',
                        }}
                    />
                    <div className={cx('search-btn')}>
                        <SearchIcon />
                    </div>
                </div>

                {/* Blog render */}
                {currentItems.length > 0 ? (
                    <>
                        <div className={cx('lists-inside')}>
                            {currentItems.map((blog: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className={cx('blog-item')}
                                        style={{
                                            overflow: 'hidden',
                                            width:
                                                sizeX < 500
                                                    ? '100%'
                                                    : sizeX < 800
                                                      ? 'calc(100% / 2 - 10px)'
                                                      : sizeX < 1024
                                                        ? 'calc(100% / 3 - 14px)'
                                                        : 'calc(100% / 4 - 15px)',
                                        }}
                                    >
                                        <div
                                            className={cx('img-wrapper')}
                                            onMouseOver={() => setCurrentBlog(index)}
                                            onMouseOut={() => setCurrentBlog(-1)}
                                        >
                                            <Image
                                                src={blog.img}
                                                alt={blog.title}
                                                width={1000}
                                                height={1000}
                                                className={cx('blog-img')}
                                                style={{
                                                    scale: currentBlog === index ? '1.5' : 1,
                                                    transition: 'all ease .5s',
                                                }}
                                            ></Image>
                                            <div
                                                className={cx('blog-hover')}
                                                style={{
                                                    backgroundColor:
                                                        currentBlog === index ? 'rgba(0,0,0,0.4)' : '',
                                                }}
                                            >
                                                {currentBlog === index && (
                                                    <Link
                                                        href={`blogs/${blog.path}`}
                                                        style={{
                                                            backgroundColor: 'var(--primary)',
                                                            color: '#fff',
                                                            fontWeight: 600,
                                                            fontSize: sizeX < 550 ? '12.5px' : '14px',
                                                            padding: '8px 14px',
                                                            borderRadius: '5px',
                                                            border: 'solid 1.5px var(--primary)',
                                                        }}
                                                        className={cx('button-hover')}
                                                    >
                                                        XEM
                                                    </Link>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className={cx('blog-text-wrapper')}
                                            style={{
                                                backgroundColor:
                                                    currentBlog === index ? '#fff' : 'transparent',
                                                padding: currentBlog === index ? '5px' : '',
                                                transition: 'all ease .5s',
                                            }}
                                        >
                                            <p>{blog.category}</p>
                                            <Link href={`blogs/${blog.path}`}>{blog.title}</Link>
                                            <p>
                                                <AccessTimeIcon />
                                                {new Date(blog.createdAt).toLocaleDateString() !==
                                                'Invalid Date'
                                                    ? `${
                                                          new Date(blog.createdAt).getDate() < 10
                                                              ? '0' + new Date(blog.createdAt).getDate()
                                                              : new Date(blog.createdAt).getDate()
                                                      } tháng ${
                                                          new Date(blog.createdAt).getMonth() < 10
                                                              ? '0' +
                                                                `${new Date(blog.createdAt).getMonth() + 1}`
                                                              : `${new Date(blog.createdAt).getMonth() + 1}`
                                                      }, ${new Date(blog.createdAt).getFullYear()}`
                                                    : blog.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Sau"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="Trước"
                            renderOnZeroPageCount={null}
                            nextClassName="next-pagination"
                            previousClassName="next-pagination"
                            className="pagination"
                            activeClassName="pagination-active"
                            disabledClassName="pagination-disabled"
                        />
                    </>
                ) : (
                    <p className={cx('blogs-wrong')}>Không tìm thấy bài viết nào!</p>
                )}
            </div>
        </div>
    );
}
