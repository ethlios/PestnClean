import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '../../../components/Cart/cart.module.scss';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function CartPage(props: IAppProps) {
    return (
        <div className={'container'}>
            {/*Header title*/}
            <div className={cx('link')}>
                <Link href="/">Trang chủ</Link>
                <p>|</p>
                <Link href="/cart">Giỏ hàng</Link>
            </div>
            <div className={cx('decoration')}></div>
            {/*Main*/}
            <div className={'grid grid-cols-12 gap-6 mb-20'}>
                {/*Buy added list*/}
                <div className={'col-span-12 md:col-span-8 gap-3 flex flex-col'}>
                    {/*Item*/}
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={'shadow-lg rounded-md my-2'}>
                            <div className={'grid grid-cols-6 gap-4 p-4'}>
                                <div className={'col-span-1'}>
                                    <Image
                                        src={''}
                                        alt={'Ảnh sản phẩm'}
                                        width={1000}
                                        className={'bg-gray-200 h-auto md:h-32'}
                                    />
                                </div>
                                <div className={'col-span-2'}>
                                    <div className={`flex flex-col justify-between  md:h-32 w-max`}>
                                        <div>
                                            <p className={cx('product-category')}>
                                                Sản phẩm giải pháp vệ sinh
                                            </p>
                                            <p className={cx('product-name')}>Tinh dầu chanh Viet Oils</p>
                                        </div>
                                        <span className={cx('price')}>
                                            <p>Tổng: 2.200.000 đ</p>
                                            <p className={cx('price-default')}>(1.100.000 đ)</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*Summary checkout form*/}
                <div className={'col-span-12 md:col-span-4'}>
                    <div className="shadow-lg rounded-md p-3">
                        <div className={cx('panel')}>
                            {/*Discount code*/}
                            <div className="my-3">
                                <h3 className={cx('title')}>Mã khuyến mãi</h3>
                                <p className={cx('description')}>Nhập mã khuyến mãi để được giảm giá</p>
                                <div className="mt-3">
                                    <FormControl className={'w-full'}>
                                        <OutlinedInput
                                            id="discount-code"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <Button variant="text" color="inherit">
                                                        Gửi
                                                    </Button>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            {/* Shipping method
                            <div className="my-3">
                                <h3 className={cx('title')}>Hình thức giao hàng</h3>
                                <div className="mt-3">
                                    <FormControl className={'w-full'}>
                                        <RadioGroup defaultValue="free" name="radio-shipping">
                                            <div
                                                className={
                                                    'flex justify-between items-center px-1 my-1 border-2 rounded-lg'
                                                }
                                            >
                                                <div className={'flex items-center'}>
                                                    <Radio value="free" />
                                                    <b>Miễn phí</b>
                                                </div>
                                                <b>
                                                    0 <span className={cx('currency')}>đ</span>
                                                </b>
                                            </div>
                                            <div
                                                className={
                                                    'flex justify-between items-center px-1 my-1 border-2 rounded-lg'
                                                }
                                            >
                                                <div className={'flex items-center'}>
                                                    <Radio value="fast" />
                                                    <b>Nhanh</b>
                                                </div>
                                                <b>
                                                    30.000 <span className={cx('currency')}>đ</span>
                                                </b>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div> */}
                            {/*Summary*/}
                            <div className={'my-3'}>
                                <h3 className={cx('title')}>Tóm tắt đơn hàng</h3>
                                <div className="flex justify-between items center mt-2">
                                    <span>
                                        <b>4</b> Sản phẩm
                                    </span>
                                    <b>
                                        4.400.000 <span className={cx('currency')}>đ</span>
                                    </b>
                                </div>
                                <div className="flex justify-between items center">
                                    <span>Phí vận chuyển</span>
                                    <b>
                                        0 <span className={cx('currency')}>đ</span>
                                    </b>
                                </div>
                                <div className="flex justify-between items center">
                                    <span>Mã giảm giá</span>
                                    <b>
                                        0 <span className={cx('currency')}>đ</span>
                                    </b>
                                </div>
                            </div>
                            {/*Payment*/}
                            <div className={'my-3 pt-2 border-t-2'}>
                                <div className="flex justify-between items center">
                                    <span>Tổng cộng</span>
                                    <b>
                                        4.400.000 <span className={cx('currency')}>đ</span>
                                    </b>
                                </div>
                                <div className="my-2">
                                    <Button variant="contained" fullWidth>
                                        Thanh toán
                                    </Button>
                                </div>
                                <div>
                                    <div className="flex items-center my-1">
                                        <CreditCardIcon />
                                        <b className={'underline ml-2'}>Thanh toán an toàn</b>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <PublishedWithChangesIcon />
                                        <b className={'underline ml-2'}>Đổi trả dễ dàng</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Back to shop*/}
            <div className={'my-20'}>
                <Link href={'/sanpham'} className={'inline-flex items-center'}>
                    <ArrowBackIosIcon />
                    <h1 className={'font-bold'}>Trở lại mua sắm</h1>
                </Link>
            </div>
        </div>
    );
}
