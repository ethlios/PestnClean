'use client';

export interface IAppProps {}

import styles from '~/components/Search/search.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { nameToLink } from '~/libs/orthers/nameToLink';
import Link from 'next/link';
import Image from 'next/image';
import formatter from '~/libs/orthers/formatMoney';
import ButtonCommon from '~/components/Orther/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CogWheel from '~/components/Orther/Loader/CogWheel/CogWheel';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { allServices } from '~/constants/service';
import { removeVietnameseTones } from '~/libs/orthers/removeVietnamese';

const cx = classNames.bind(styles);

export default function FaqPage(props: IAppProps) {
    const { sizeX } = useSize();
    const search = useSearchParams();
    const [resultQueryProducts, setResultQueryProducts] = useState<any[]>([]);
    const [resultQueryBlogs, setResultQueryBlogs] = useState<any[]>([]);
    const [resultQueryService, setResultQueryService] = useState<any[]>([]);

    const [isLoader, setIsLoader] = useState<boolean>(true);
    const [isCheckedProducts, setCheckedProducts] = useState<boolean>(false);
    const [isCheckedBlogs, setCheckedBlogs] = useState<boolean>(false);
    const [isCheckedService, setCheckedService] = useState<boolean>(false);
    const [currentBlog, setCurrentBlog] = useState(-1);

    let allBlogs = useSelector((state: RootState) => state.main.allBlogs);
    let allProducts = useSelector((state: RootState) => state.main.allProducts);

    useEffect(() => {
        if (search.get('q')) {
            const products: any[] = allProducts.filter((item) => {
                return (
                    removeVietnameseTones(item.title)
                        .toLowerCase()
                        .indexOf(removeVietnameseTones(search.get('q') ?? '').toLowerCase()) !== -1
                );
            });

            const blogs: any[] = allBlogs.filter((item) => {
                return (
                    removeVietnameseTones(item.title)
                        .toLowerCase()
                        .indexOf(removeVietnameseTones(search.get('q') ?? '').toLowerCase()) !== -1
                );
            });

            const services: any[] = allServices.filter((item) => {
                return (
                    removeVietnameseTones(item.title)
                        .toLowerCase()
                        .indexOf(removeVietnameseTones(search.get('q') ?? '').toLowerCase()) !== -1
                );
            });

            setResultQueryProducts(products);
            setResultQueryBlogs(blogs);
            setResultQueryService(services);
            setCheckedProducts(true);
            setCheckedBlogs(false);
            setCheckedService(false);
            setIsLoader(false);
        }
    }, [allBlogs, allProducts, search]);

    useEffect(() => {
        if (resultQueryProducts.length > 0) {
            setCheckedProducts(true);
            setCheckedBlogs(false);
            setCheckedService(false);
        }

        if (resultQueryBlogs.length > 0) {
            setCheckedBlogs(true);
            setCheckedProducts(false);
            setCheckedService(false);
        }

        if (resultQueryService.length > 0) {
            setCheckedService(true);
            setCheckedBlogs(false);
            setCheckedProducts(false);
        }
    }, [resultQueryBlogs.length, resultQueryProducts.length, resultQueryService.length]);

    return (
        <>
            {isLoader ? (
                <div className="flex items-center justify-center relative">
                    <CogWheel />
                </div>
            ) : (
                <div
                    className={cx('wrapper')}
                    style={{
                        padding:
                            sizeX < 768
                                ? '0 20px'
                                : sizeX < 1100
                                  ? '0 50px'
                                  : sizeX < 1280
                                    ? '0 80px'
                                    : '0 100px',
                    }}
                >
                    <div
                        className={cx('wrapper-search')}
                        style={{
                            paddingTop: '30px',
                        }}
                    >
                        <div className="sm:flex sm:items-center">
                            <p className="font-semibold pl-4">Kết quả tìm kiếm:</p>
                            <ul
                                className={cx('sm:flex sm:items-center sm:ml-4', 'wrapper-search-ul')}
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <li className='ml-4 sm:ml-0'>
                                    Sản phẩm:
                                    {resultQueryProducts
                                        ? `(${resultQueryProducts.length} kết quả);`
                                        : '(0 kết quả);'}
                                </li>
                                <li className="ml-4 sm:ml-2">
                                    Bài viết:
                                    {resultQueryBlogs
                                        ? `(${resultQueryBlogs.length} kết quả);`
                                        : '(0 kết quả);'}
                                </li>
                                <li className="ml-4 sm:ml-2">
                                    Dịch vụ:
                                    {resultQueryService
                                        ? `(${resultQueryService.length} kết quả);`
                                        : '(0 kết quả);'}
                                </li>
                            </ul>
                        </div>
                        <div className="sm:flex sm:items-center sm:justify-start pl-4 mt-4">
                            <p>Hiển thị theo:</p>
                            <div className="flex items-center justify-start sm:ml-4 mt-4 sm:mt-0">
                                <button
                                    className={cx(
                                        'sm:ml-2 text-xs sm:text-sm sm:w-32 w-28',
                                        'wrapper-search-control-btn',
                                        isCheckedProducts
                                            ? 'wrapper-search-control-btnChecked'
                                            : 'wrapper-search-control-btnUnChecked',
                                    )}
                                    onClick={() => {
                                        setCheckedProducts(true);
                                        setCheckedBlogs(false);
                                        setCheckedService(false);
                                    }}
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    Sản phẩm
                                </button>
                                <button
                                    className={cx(
                                        'ml-2 text-xs sm:text-sm sm:w-32 w-28',
                                        'wrapper-search-control-btn',
                                        isCheckedBlogs
                                            ? 'wrapper-search-control-btnChecked'
                                            : 'wrapper-search-control-btnUnChecked',
                                    )}
                                    onClick={() => {
                                        setCheckedProducts(false);
                                        setCheckedBlogs(true);
                                        setCheckedService(false);
                                    }}
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    Bài viết
                                </button>
                                <button
                                    className={cx(
                                        'ml-2 text-xs sm:text-sm sm:w-32 w-28',
                                        'wrapper-search-control-btn',
                                        isCheckedService
                                            ? 'wrapper-search-control-btnChecked'
                                            : 'wrapper-search-control-btnUnChecked',
                                    )}
                                    onClick={() => {
                                        setCheckedProducts(false);
                                        setCheckedBlogs(false);
                                        setCheckedService(true);
                                    }}
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    Dịch vụ
                                </button>
                            </div>
                        </div>

                        {/* HIỂN THỊ SEARCH THEO SẢN PHẨM */}
                        {isCheckedProducts &&
                            (resultQueryProducts && resultQueryProducts.length > 0 ? (
                                <div className={cx('wrapper-search-grid','grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2')}>
                                    {resultQueryProducts.map((item: any, index) => {
                                        const path = nameToLink(item ? item.title : '');
                                        return (
                                            <Link
                                                href={`/sanpham/${path}`}
                                                className={cx('wrapper-search-product')}
                                                key={item.id}
                                            >
                                                <div className={cx('')}>
                                                    <div
                                                        className={cx('item-img', 'relative')}
                                                        style={{
                                                            height: sizeX < 430 ? '160px' : '',
                                                        }}
                                                    >
                                                        {item.status !== null && (
                                                            <div
                                                                className={cx('wrapper-search-product-img')}
                                                                style={{
                                                                    fontSize: '13.5',
                                                                    fontWeight: '600',
                                                                }}
                                                            >
                                                                {item.status}
                                                            </div>
                                                        )}
                                                        <Image
                                                            src={item.Image[0]}
                                                            alt={item.title}
                                                            width={160}
                                                            height={160}
                                                            className={'h-60 w-full object-cover'}
                                                        />
                                                    </div>
                                                    <p
                                                        className={cx('item-category')}
                                                        style={{
                                                            fontSize: sizeX < 400 ? '10.5px' : '',
                                                        }}
                                                    >
                                                        {item.category}
                                                    </p>
                                                    <div className={cx('wrapper-search-product-title')}>
                                                        <p
                                                            className={cx(
                                                                'text-base font-semibold',
                                                                'wrapper-search-product-title-p',
                                                            )}
                                                        >
                                                            {item.title}
                                                        </p>
                                                        <p className={cx('text-sm font-semibold')}>
                                                            {formatter.format(+item.price)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center mt-10">
                                    <p className="font-semibold text-base">
                                        Không có kết quả tìm kiếm về sản phẩm
                                    </p>
                                </div>
                            ))}

                        {/* HIỂN THỊ SEARCH THEO BÀI VIẾT */}
                        {isCheckedBlogs &&
                            (resultQueryBlogs && resultQueryBlogs.length > 0 ? (
                                <div className={cx('wrapper-search-grid','grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2')}>
                                    {resultQueryBlogs.map((blog: any, index) => {
                                        return (
                                            <div key={blog.id} className={cx('blog-item')}>
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
                                                                currentBlog === index
                                                                    ? 'rgba(0,0,0,0.4)'
                                                                    : '',
                                                        }}
                                                    >
                                                        {currentBlog === index && (
                                                            <ButtonCommon
                                                                text="XEM"
                                                                path={`blogs/${nameToLink(blog.title)}`}
                                                                rule="rule-1"
                                                            />
                                                        )}
                                                    </div>
                                                </div>

                                                <div
                                                    className={cx('blog-text-wrapper')}
                                                    style={{
                                                        backgroundColor:
                                                            currentBlog === index ? '#fff' : 'transparent',
                                                        padding: currentBlog === index ? '10px' : '8px',
                                                        transition: 'all ease .5s',
                                                    }}
                                                >
                                                    <p>{blog.category}</p>
                                                    <Link href={`blogs/${nameToLink(blog.title)}`}>
                                                        {blog.title}
                                                    </Link>
                                                    <p>
                                                        <AccessTimeIcon />
                                                        {blog.createdAt}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center mt-10">
                                    <p className="font-semibold text-base">
                                        Không có kết quả tìm kiếm về bài viết
                                    </p>
                                </div>
                            ))}

                        {/* HIỂN THỊ SEARCH THEO DỊCH VỤ */}
                        {isCheckedService &&
                            (resultQueryService && resultQueryService.length > 0 ? (
                                <div className={cx('wrapper-search-grid','grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2')}>
                                    {resultQueryService.map((service: any, index) => {
                                        return (
                                            <div
                                                key={service.id}
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
                                                        src={service.img}
                                                        alt={service.title}
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
                                                                currentBlog === index
                                                                    ? 'rgba(0,0,0,0.4)'
                                                                    : '',
                                                        }}
                                                    >
                                                        {currentBlog === index && (
                                                            <ButtonCommon
                                                                text="XEM"
                                                                path={`/${nameToLink(service.title)}`}
                                                                rule="rule-1"
                                                            />
                                                        )}
                                                    </div>
                                                </div>

                                                <div
                                                    className={cx('blog-text-wrapper')}
                                                    style={{
                                                        backgroundColor:
                                                            currentBlog === index ? '#fff' : 'transparent',
                                                        padding: currentBlog === index ? '10px' : '8px',
                                                        transition: 'all ease .5s',
                                                    }}
                                                >
                                                    <p>{service.category}</p>
                                                    <Link href={`/${nameToLink(service.title)}`}>
                                                        {service.title}
                                                    </Link>
                                                    <p>
                                                        <AccessTimeIcon />
                                                        {service.createdAt}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center mt-10">
                                    <p className="font-semibold text-base">
                                        Không có kết quả tìm kiếm về dịch vụ
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </>
    );
}
