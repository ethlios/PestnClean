import classNames from 'classnames/bind';
import styles from './service.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
    className?: string;
}

export default function BundleCard(props: IAppProps) {
    return (
        <div className={props.className}>
            <div className={cx('bundle-card')}>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>{props.children}</div>
            </div>
        </div>
    );
}
