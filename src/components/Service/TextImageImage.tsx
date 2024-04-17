import classNames from 'classnames/bind';
import styles from './service.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function TextImageImage(props: IAppProps) {
    return (
        <div className="my-20">
            <div
                className={'grid grid-cols-3 gap-10'}
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <p
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '35%',
                        fontSize: '14.5px',
                        color: 'var(--text-black)',
                        fontWeight: 600,
                        letterSpacing: '.2px',
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '65%',
                        gap: '20px',
                    }}
                >
                    <div className={'col-span-3 md:col-span-1'}>
                        <Image src={''} alt={''} width={500} height={300} />
                        <p className={cx('bg-text')}>Vệ sinh công nghiệp</p>
                    </div>
                    <div className={'col-span-3 md:col-span-1'}>
                        <Image src={''} alt={''} width={500} height={300} />
                        <p className={cx('bg-text')}>Vệ sinh nhà ở</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
