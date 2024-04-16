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

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function BlogsList(props: IAppProps) {
    const [defaulListValue, setDefaultListValue] = useState<number>(0);
    const [defaultList, setDefaultList] = useState<string>('Tất cả');
    const [blogsList, setBlogsList] = useState<any[]>([]);
    const [currentBlog, setCurrentBlog] = useState(-1);

    // Filter
    useEffect(() => {
        if (defaultList === 'Tất cả') {
            setBlogsList(blogs);
        } else {
            const newBlogsList = blogs.filter((blog) => blog.category === defaultList);

            setBlogsList(newBlogsList);
        }

        return () => setBlogsList([]);
    }, [defaultList]);

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
                    <input type="text" placeholder="Tìm kiếm..." />
                    <div className={cx('search-btn')}>
                        <SearchIcon />
                    </div>
                </div>

                {/* Blog render */}
                <div className={cx('lists-inside')}>
                    {blogsList.map((blog, index) => {
                        return (
                            <div key={blog.id} className={cx('blog-item')}>
                                <div
                                    className={cx('img-wrapper')}
                                    onMouseOver={() => setCurrentBlog(index)}
                                    onMouseOut={() => setCurrentBlog(-1)}
                                >
                                    {/* <Image
                                        src={img.src}
                                        alt={blog.title}
                                        width={1000}
                                        height={1000}
                                        className={cx('blog-img')}
                                    ></Image> */}
                                    <div className={cx('blog-img')}></div>
                                    <div
                                        className={cx('blog-hover')}
                                        style={{
                                            backgroundColor: currentBlog === index ? 'rgba(0,0,0,0.1)' : '',
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
                                <p>{blog.category}</p>
                                <Link href={`blogs/${nameToLink(blog.title)}`}>{blog.title}</Link>
                                <p>
                                    <AccessTimeIcon />
                                    {blog.createdAt}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* More */}
                <div className={cx('btn-more')}>
                    <ButtonCommon text="XEM THÊM" />
                </div>
            </div>
        </div>
    );
}
