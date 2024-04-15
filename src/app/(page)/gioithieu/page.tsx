import classNames from 'classnames/bind';
import styles from '../../../components/About/about.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function AboutPage(props: IAppProps) {

    return (
        <div className={'container'}>
            <div className={'grid grid-cols-2 my-20'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <h1 className={cx('head-title')}>
                        HỆ SINH THÁI GIẢI PHÁP
                        <br />VỆ SINH VÀ KIỂM SOÁT
                        <br />CÔN TRÙNG TOÀN DIỆN
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className={'my-20'}>
                <Image
                    src={''}
                    alt="giới thiệu pestnclean"
                    key="pestnclean about page "
                    width={1980}
                    className={'w-full bg-gray-200 h-auto md:h-96'}
                />
            </div>
            <div className={'grid grid-cols-2 my-20'}>
                <div className={'col-span-2 md:col-start-2 md:col-span-1'}>
                    <p className={'text-right'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-12 gap-6 my-20'}>
                <div className={'col-span-12 md:col-span-5'}>
                    <div className={'mb-5'}>
                        <Image
                            src={''}
                            alt="giới thiệu pestnclean"
                            key="pestnclean about page "
                            width={1980}
                            className={'w-full bg-gray-200 h-auto md:h-96'}
                        />
                    </div>
                    <h2 className={cx('title')}>1. TẦM NHÌN</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={'col-span-12 md:col-span-7'}>
                    <div className={'mb-5'}>
                        <Image
                            src={''}
                            alt="giới thiệu pestnclean"
                            key="pestnclean about page "
                            width={1980}
                            className={'w-full bg-gray-200 h-auto md:h-96'}
                        />
                    </div>
                    <h2 className={cx('title')}>2. SỨ MỆNH</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-4 mt-20'}>
                <div className={'col-span-4 md:col-start-2 md:col-span-2 text-center'}>
                    <h2 className={cx('title') + ' mb-0'}>3. GIÁ TRỊ CỐT LÕI</h2>
                    <p className={'font-bold text-2xl'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-4 gap-6 my-10'}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={'col-span-4 md:col-span-2 xl:col-span-1'}>
                        <div className={'mb-5'}>
                            <Image
                                src={''}
                                alt="giới thiệu pestnclean"
                                key="pestnclean about page "
                                width={1980}
                                className={'w-full bg-gray-200 h-auto md:h-80'}
                            />
                        </div>
                        <p className={'font-bold text-center text-xl'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
