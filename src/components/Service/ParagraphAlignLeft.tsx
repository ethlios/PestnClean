import classNames from 'classnames/bind';
import styles from './service.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
}

export default function ParagraphAlignLeft(props: IAppProps) {
    return (
        <div className={'grid grid-cols-5 my-10'}>
            <div className={'col-span-5 md:col-span-3'}>
                <div className={'text-left'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}