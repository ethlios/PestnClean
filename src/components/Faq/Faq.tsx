import classNames from 'classnames/bind';
import styles from './faq.module.scss';
import Question from './Question';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { questionsCommon } from '~/constants/faq';

const cx = classNames.bind(styles);

export interface IFaqProps {}

export default function FaqCPPage(props: IFaqProps) {
    return (
        <div className={'container'}>
            <div className={'mt-10 mb-5 text-center'}>
                <h1 className={cx('head-title')}>FAQS</h1>
                <p className={cx('head-description')}>Chúng tôi hi vọng có thể giúp được bạn!</p>
            </div>
            <div className={'flex justify-center'}>
                <div className={'w-full md:w-5/6 lg:w-3/4'}>
                    <div className="my-8">
                        <p className={cx('title')}>Câu hỏi chung</p>
                        <div className={'my-5'}>
                            {questionsCommon.map((question, index) => (
                                <Question key={index} title={question.title} path={question.path} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="flex justify-end">
                            <div
                                className={'p-8 rounded-lg'}
                                style={{
                                    backgroundColor: '#79b4614e',
                                    color: 'var(--secondary)',
                                }}
                            >
                                <h3 style={{ fontWeight: 'bold' }}>Vẫn chưa giúp được bạn?</h3>
                                <Link
                                    href="/lienhe"
                                    className={`${cx('link-hover')} flex justify-between mt-4`}
                                >
                                    <p className={cx('contact-link')}>Liên hệ</p>
                                    <ArrowForwardIcon />
                                </Link>
                                <div className={cx('card-decor')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
