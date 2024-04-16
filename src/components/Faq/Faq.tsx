import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import Question from './Question';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cx = classNames.bind(styles);

export interface IFaqProps {
}

export default function FaqCPPage(props: IFaqProps) {
    return (
        <div className={'container'}>
            <div className={'my-5 text-center'}>
                <h1 className={cx('head-title')}>FAQS</h1>
                <b>Chúng tôi hi vọng có thể giúp được bạn</b>
            </div>
            <div className={'flex justify-center'}>
                <div className={'w-full md:w-5/6 lg:w-3/4'}>
                    <div className="my-3">
                        <h2 className={cx('title')}>Câu hỏi thường gặp</h2>
                        <div className={'my-3'}>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <Question key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="my-3">
                        <h2 className={cx('title')}>Câu hỏi chung</h2>
                        <div className={'my-3'}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Question key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="flex justify-end">
                            <div className={'p-3 rounded-lg text-green-500 bg-green-100'}>
                                <h3>Vẫn chưa giúp được bạn?</h3>
                                <div className={'flex justify-between mt-2'}>
                                    <h3>Liên hệ</h3>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}