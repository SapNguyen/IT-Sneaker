import styles from './Header.module.scss';
import classNames from 'classnames/bind';

//dùng để viết .post-item có thể viết dấu -
const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}></div>
    </header>;
}

export default Header;
