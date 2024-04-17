import classNames from 'classnames/bind';
import styles from './service.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {
    children: React.ReactNode;
}

export default function ParagraphAlignRight(props: IAppProps) {
    return (
        <div className={'grid grid-cols-5 my-10'}>
            <div className={'col-span-5 md:col-span-3 md:col-start-3'}>
                <div className={'text-right'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}