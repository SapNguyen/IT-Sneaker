import classNames from 'classnames/bind';
import styles from './CustomPrevArrow.module.scss';

const cx = classNames.bind(styles);

function CustomPrevArrow({ onClick }) {
    return (
        <button className={cx('custom-prev-arrow')} onClick={onClick}>
            ←
        </button>
    );
}

export default CustomPrevArrow;
