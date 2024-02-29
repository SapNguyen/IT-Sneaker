import classNames from 'classnames/bind';
import styles from './CustomPrevArrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CustomPrevArrow({ onClick,mt5 }) {
    return (
        <button className={cx('custom-prev-arrow',{mt5})} onClick={onClick}>
            {/* ← */}
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

export default CustomPrevArrow;
