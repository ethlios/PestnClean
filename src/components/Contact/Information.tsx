import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import classNames from 'classnames/bind';
import Link from 'next/link';
import useSize from '~/libs/hooks/useSize';
import styles from './contact.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function InformationContactPage(props: IAppProps) {
    const { sizeX } = useSize();

    return (
        <div
            className={cx('information')}
            style={{
                width: sizeX < 768 ? '100%' : sizeX < 1024 ? '43%' : '35%',
            }}
        >
            {/* Content 1 */}
            <div className={cx('information-1')}>
                <p>LIÊN HỆ</p>
                <Link href="mailto:sales@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                    <AttachEmailOutlinedIcon className="mr-2" />
                    sales@pestnclean.vn
                </Link>
                <Link href="mailto:info@pestnclean.vn" target="_blank" rel="noopener noreferrer">
                    <AlternateEmailIcon className="mr-2" />
                    info@pestnclean.vn
                </Link>
                <Link href="tel:0868363600" target="_blank" rel="noopener noreferrer">
                    <RingVolumeOutlinedIcon className="mr-1" /> 0868 36 36 00
                </Link>
            </div>
            <div className={cx('information-2')}>
                <p>MẠNG XÃ HỘI</p>
                <div className={cx('social-icon')}>
                    <Link
                        href={'https://www.facebook.com/pestncleancare'}
                        className="opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon />
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/company/pestnclean/?viewAsMember=true'}
                        className="opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link
                        href={'https://www.youtube.com/channel/UCetBg-JrnHttmuF0wiZflww'}
                        className="opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <YouTubeIcon />
                    </Link>
                </div>
            </div>

            {/* Map */}
            <div className={cx('map')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.936780105516!2d106.6846497507514!3d10.786597795062624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20cdef0107%3A0xa6a58be629300115!2zSOG7hyBTaW5oIFRow6FpIFBlc3RuQ2xlYW4!5e0!3m2!1svi!2s!4v1713603621602!5m2!1svi!2s"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </div>
            <div className={cx('description')}>
                <p>
                    PestnClean cam kết phục vụ tận tâm mọi khách hàng và đối tác với đội ngũ tư vấn viên hỗ
                    trợ liên tục 24/7.
                </p>
                <p>
                    Chúng tôi tiến hành cấp dịch vụ theo khung thời gian theo yêu cầu của khách hàng mọi lúc
                    mọi nơi. Liên hệ để được tư vấn và hỗ trợ cụ thể nhất qua email.
                </p>
            </div>
            <h1 className={cx('watermark')}>© PESTNCLEAN 2024</h1>
        </div>
    );
}
