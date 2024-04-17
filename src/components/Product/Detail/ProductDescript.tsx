import classNames from 'classnames/bind';
import styles from './product_detail.module.scss';
import DescriptTab from '~/components/Product/Detail/DecriptTab';

const cx = classNames.bind(styles);

export interface IAppProps {
}

export default function ProductDescript(props: IAppProps) {
    return (
        <div className={cx('product-descript')}>
            <div className={cx('tab-group')}>
                <DescriptTab title={'Mô tả chi tiết'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ac nisl
                        ultricies tincidunt. Nunc sit amet turpis nec nisl luctus ultricies. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus.
                    </p>
                </DescriptTab>
                <DescriptTab title={'Đánh giá (3)'}>
                    <p className={'h-52'}>
                        Comment will be here
                    </p>
                </DescriptTab>
                <DescriptTab title={'FAQs'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ac nisl
                        ultricies tincidunt. Nunc sit amet turpis nec nisl luctus ultricies. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus. Nullam
                        ultricies, purus nec ultricies fermentum, nunc nisl ultricies mi, ac tincidunt
                        nunc mauris sit amet sapien. Donec nec nisl ut nisl ultricies luctus.
                    </p>
                </DescriptTab>
            </div>
        </div>
    );
}