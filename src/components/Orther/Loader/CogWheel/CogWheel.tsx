import classNames from 'classnames/bind';
import styles from './CogWheel.module.scss';

const cx = classNames.bind(styles);
function CogWheel() {
    return (
        <div className={cx('cssload-cssload-wrap2')}>
            <div className={cx('cssload-wrap')}>
                <div className={cx('cssload-overlay')}></div>

                <div className={cx('cssload-cogWheel', 'cssload-one')}>
                    <div className={cx('cssload-cog', 'cssload-one')}></div>
                    <div className={cx('cssload-cog', 'cssload-two')}></div>
                    <div className={cx('cssload-cog', 'cssload-three')}></div>
                    <div className={cx('cssload-cog', 'cssload-four')}></div>
                    <div className={cx('cssload-cog', 'cssload-five')}></div>
                    <div className={cx('cssload-center')}></div>
                </div>

                <div className={cx('cssload-cogWheel', 'cssload-two')}>
                    <div className="cssload-cog cssload-one"></div>
                    <div className={cx('cssload-cog', 'cssload-one')}></div>
                    <div className={cx('cssload-cog', 'cssload-two')}></div>
                    <div className={cx('cssload-cog', 'cssload-three')}></div>
                    <div className={cx('cssload-cog', 'cssload-four')}></div>
                    <div className={cx('cssload-cog', 'cssload-five')}></div>
                    <div className={cx('cssload-center')}></div>
                </div>
            </div>
        </div>
    );
}

export default CogWheel;
