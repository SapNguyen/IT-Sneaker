//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy
            visible
            interactive //có thể tương tác được với bên trong
            delay={[800, 0]} //800ms sau mới hiện
            offset={[-20,0]}//set lại vị trí của tippy
            render={renderPreview}
            placement="bottom"
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/384829924_976608623396397_573300790686052687_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QBCTz5C3hegAX8x9bzJ&_nc_ht=scontent.fhan2-3.fna&oh=03_AdTW5dJEXAk1j089dBxhbVfnD2NpCFfrEDLDwPzWg9IPwg&oe=65439F3A"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Sạp Nguyễn</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyễn Thế Anh</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
