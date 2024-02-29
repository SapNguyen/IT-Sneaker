import classNames from 'classnames/bind';
import styles from './CustomNextArrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CustomNextArrow({ onClick,mt5 }) {
    return (
        <button className={cx('custom-next-arrow',{mt5})} onClick={onClick}>
            {/* → */}
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

export default CustomNextArrow;
