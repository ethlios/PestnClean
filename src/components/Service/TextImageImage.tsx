import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function TextImageImage(props: IAppProps) {
    return (
        <div className="my-20">
            <div className={'grid grid-cols-3 gap-10'}>
                <div className={'col-span-3 md:col-span-1'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </div>
                <div className={'col-span-3 md:col-span-1'}>
                    <Image src={''} alt={''} width={500} height={300} />
                    <h2 className={cx('bg-text')}>Vệ sinh công nghiệp</h2>
                </div>
                <div className={'col-span-3 md:col-span-1'}>
                    <Image src={''} alt={''} width={500} height={300} />
                    <h2 className={cx('bg-text')}>Vệ sinh nhà ở</h2>
                </div>
            </div>
        </div>
    );
}