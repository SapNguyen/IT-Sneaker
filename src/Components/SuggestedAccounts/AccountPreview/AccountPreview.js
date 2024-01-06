import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/Components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/384829924_976608623396397_573300790686052687_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QBCTz5C3hegAX8x9bzJ&_nc_ht=scontent.fhan2-3.fna&oh=03_AdTW5dJEXAk1j089dBxhbVfnD2NpCFfrEDLDwPzWg9IPwg&oe=65439F3A"
                    alt=""
                />

                <Button className={cx('follow-btn')} primary>Follow</Button>

            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Sạp Nguyễn</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Thế Anh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
