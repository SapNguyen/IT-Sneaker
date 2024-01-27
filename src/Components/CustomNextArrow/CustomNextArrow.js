import classNames from 'classnames/bind';
import styles from './CustomNextArrow.module.scss';

const cx = classNames.bind(styles);

function CustomNextArrow({ onClick }) {
    return (
        <button className={cx('custom-next-arrow')} onClick={onClick}>
            →
        </button>
    );
}

export default CustomNextArrow;
