'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { blogs, btnLists } from '~/constants/blogs';
import { nameToLink } from '~/libs/orthers/nameToLink';
import ButtonCommon from '../Orther/Button';
import styles from './blogs.module.scss';
import Image from 'next/image';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsList(props: IAppProps) {
    const [defaulListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');
    const [blogsList, setBlogsList] = useState<any[]>([]);
    const [currentBlog, setCurrentBlog] = useState(-1);
    const [searchValue, setSearchValue] = useState<string>('');

    // Filter
    useEffect(() => {
        if (defaultList === 'Tất cả') {
            setBlogsList(blogs);
        } else {
            const newBlogsList = blogs.filter((blog: any) => blog.category === defaultList);

            setBlogsList(newBlogsList);
        }

        if (searchValue) {
            const newBlogs = blogs.filter((blog: any) => {
                return (
                    removeVietnameseTones(blog.title)
                        .toLowerCase()
                        .indexOf(removeVietnameseTones(searchValue).toLowerCase()) !== -1
                );
            });

            setBlogsList(newBlogs);
        }

        return () => setBlogsList([]);
    }, [defaultList, searchValue]);

    return (
        // All blogs
        <div className={cx('blogs-lists')}>
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
            <div className={cx('blogs-list-wrapper')}>
                {/* Search */}
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className={cx('search-btn')}>
                        <SearchIcon />
                    </div>
                </div>

                {/* Blog render */}
                {blogsList.length > 0 ? (
                    <>
                        <div className={cx('lists-inside')}>
                            {blogsList.map((blog, index) => {
                                return (
                                    <div
                                        key={blog.id}
                                        className={cx('blog-item')}
                                        style={{
                                            overflow: 'hidden',
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
                                                    <ButtonCommon
                                                        text="XEM"
                                                        path={`blogs/${nameToLink(blog.title)}`}
                                                    />
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
                                            <Link href={`blogs/${nameToLink(blog.title)}`}>{blog.title}</Link>
                                            <p>
                                                <AccessTimeIcon />
                                                {blog.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* More */}
                        <div className={cx('btn-more')}>
                            <ButtonCommon text="XEM THÊM" />
                        </div>
                    </>
                ) : (
                    <p className={cx('blogs-wrong')}>Không tìm thấy bài viết nào!</p>
                )}
            </div>
        </div>
    );
}
