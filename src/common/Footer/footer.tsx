import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/logo.png';
import fbIcon from '../../../public/icon/facebook.svg';
import linkedinIcon from '../../../public/icon/linkedin.svg';
import youtubeIcon from '../../../public/icon/youtube.svg';
import styles from './footer.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const cx = classNames.bind(styles);

export interface FooterProps {
}

export default function Footer(props: FooterProps) {
    return (
        <Container>
            <footer className={cx('footer')}>
                <div className={cx('footer-top')}>
                    <Image alt="Logo công ty PESTNCLEAN" src={logo.src} width={176} height={100} />
                    <Link href={'/lienhe'}>
                        <Button variant="contained" size="large"
                                sx={{ background: 'var(--primary)' }}
                        >Liên Hệ</Button>
                    </Link>
                </div>
                <div className={cx('footer-content')}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div className={cx('footer-content-left')}>
                                    <p><strong>Địa chỉ: </strong>Lầu 8, 123 Lý Chính Thắng, P. Võ Thị Sau, Q.3</p>
                                    <p><strong>Điện thoại: </strong>0868 36 36 00</p>
                                    <p><strong>Email: </strong>sales@petnclea.vn</p>
                                    <div className={cx('footer-icon')}>
                                        <Image src={fbIcon} alt={'Facebook'} height={30} />
                                        <Image src={linkedinIcon} alt={'Facebook'} height={30} />
                                        <Image src={youtubeIcon} alt={'Facebook'} height={30} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={cx('footer-content-right')}>
                                    <div>
                                        <h3 className={cx('title')}>DỊCH VỤ</h3>
                                        <ul>
                                            <li><Link href={''}>Kiểm soát côn trùng</Link></li>
                                            <li><Link href={''}>Dịch vụ vệ sinh</Link></li>
                                            <li><Link href={''}>Giải pháp vệ sinh</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className={cx('title')}>DANH MỤC</h3>
                                        <ul>
                                            <li><Link href={''}>Trang chủ</Link></li>
                                            <li><Link href={''}>Giới thiệu</Link></li>
                                            <li><Link href={''}>Sản phẩm</Link></li>
                                            <li><Link href={''}>Blogs</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className={cx('title')}>KHÁC</h3>
                                        <ul>
                                            <li><Link href={''}>Hỏi đáp</Link></li>
                                            <li><Link href={''}>Liên hệ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className={cx('footer-bottom')}>
                    <p>Copyright © 2024 PestNClean. Công ty TNHH Thương Mại Dịch Vụ Xuất Nhập Khẩu Nguyễn Duy.</p>
                </div>
            </footer>
        </Container>
    );
}