import classNames from 'classnames/bind';
import styles from './service.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ServiceBanner(props: IAppProps) {
    return (
        <div className="mt-10 mb-20">
            <div className={'rounded-xl border-2 w-full h-64'}>
            </div>
        </div>
    );
}