import classNames from 'classnames/bind';
import styles from './CustomPrevArrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CustomPrevArrow({ onClick, mt5, mt0, mt7 }) {
    return (
        <button className={cx('custom-prev-arrow', { mt5 }, { mt0 }, { mt7 })} onClick={onClick}>
            {/* ← */}
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

export default CustomPrevArrow;
