export interface IAppProps {}
import styles from '~/components/Search/search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function FaqPage(props: IAppProps) {
    return (
        <div className={'w-full cpmount container'}>
            <div className={cx('search-wrapper')}>
                <p>Không tìm thấy kết quả nào!</p>
            </div>
        </div>
    );
}
