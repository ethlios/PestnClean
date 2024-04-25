import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import sendEmailImg from '../../../public/img/Asset 1.png';
import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import useSize from '~/libs/hooks/useSize';

const cx = classNames.bind(styles);

export interface IAppProps {
    setIsConfirm: any;
    setData: any;
    item: any;
}

export default function DialogSuccess({ setIsConfirm, setData, item }: IAppProps) {
    const { sizeX } = useSize();

    const handleDowloadImg = () => {
        item.style.padding = '30px';
        item.childNodes[7].style.display = 'none';
        item.childNodes[0].style.display = 'flex';
        // item.childNodes[0].style.width = '100px';
        // item.childNodes[0].style.height = '40px';

        const svg = document.querySelectorAll('p');

        for (let i = 0; i < svg.length; i++) {
            svg[i].style.position = 'relative';
            svg[i].style.bottom = '7px';
        }

        html2canvas(item).then((canvas) => {
            const base64image = canvas.toDataURL('image/pdf');
            let anchor = document.createElement('a');
            anchor.setAttribute('href', base64image);
            anchor.setAttribute('download', 'thong-tin.pdf');
            anchor.click();
            anchor.remove();
        });

        item.style.padding = '0px';
        item.childNodes[7].style.display = 'flex';
        item.childNodes[0].style.display = 'none';

        for (let i = 0; i < svg.length; i++) {
            svg[i].style.position = 'static';
            svg[i].style.bottom = '0';
        }
    };

    return (
        <div className="cpmount">
            <div
                className={cx('dialog-wrapper')}
                onClick={() => {
                    setIsConfirm(false);
                    setData('');
                }}
            >
                <div
                    className={cx('dialog-content')}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        padding: sizeX < 500 ? '20px' : '',
                    }}
                >
                    <Image
                        src={sendEmailImg.src}
                        alt="email pestnclean"
                        width={sizeX < 500 ? 180 : 230}
                        height={230}
                    />
                    <p
                        className={cx('dialog-title')}
                        style={{
                            fontSize: sizeX < 500 ? '16px' : '',
                            textAlign: 'center',
                        }}
                    >
                        Yêu cầu của bạn đã được gửi thành công!
                    </p>
                    <p
                        className={cx('dialog-text')}
                        style={{
                            fontSize: sizeX < 500 ? '13px' : '',
                        }}
                    >
                        Chúng tôi đã tiếp nhận yêu cầu của bạn. Chúng tôi sẽ gấp rút liên lạc lại với bạn ngay
                        khi có thể. Nếu có sự thay đổi hãy gọi ngay đến số{' '}
                        <a
                            href="tel:0868363600"
                            style={{
                                textDecoration: '1px underline',
                            }}
                        >
                            0868 36 36 00
                        </a>
                        . Chân thành cảm ơn thái độ làm việc chăm chỉ của bạn!
                    </p>
                    <div className={cx('dialog-button')}>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                outline: '2px solid',
                                width: '50%',
                            }}
                            onClick={handleDowloadImg}
                        >
                            {sizeX < 580 ? 'Print' : 'In thông tin cuộc hẹn'}
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '600',
                                width: '50%',
                            }}
                            onClick={() => {
                                setData('');
                                setIsConfirm(false);
                            }}
                        >
                            {sizeX < 580 ? 'Back' : 'quay Trở lại'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
