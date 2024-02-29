import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile';
import { useState } from 'react';
import ChangePass from '../ChangePass';
import Receipt from '../Receipt';

const cx = classNames.bind(styles);

function Account() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Account</title>
            </Helmet>
            <div className="d-flex">
                <div className={cx('space')}></div>
                <div className="container-fluid mt-4 " align="center">
                    <div className="row">
                        <div className={cx(styles.tab, 'col-lg-3')}>
                            <div className={cx('dropdown')}>
                                <div className={cx('account')}>
                                    <FontAwesomeIcon icon={faUser} className={cx('avatar-person')} />
                                    <span className={cx('title-account')}>Tài khoản của tôi</span>
                                </div>
                                <div className={cx('account-drop')}>
                                    {/* cx('mt-1', 'ml-1', 'choice')  */}
                                    {/* href="/account/profile" */}
                                    {/* href="/account/password" */}
                                    <div onClick={() => handleTabClick(1)}>
                                        <p
                                            className={`${styles['choice']} mt-1 ml-1 ${
                                                activeTab === 1 ? styles.active : ''
                                            }`}
                                        >
                                            Hồ sơ
                                        </p>
                                    </div>
                                    <div onClick={() => handleTabClick(2)}>
                                        <p
                                            className={`${styles['choice']} mt-1 ml-1 ${
                                                activeTab === 2 ? styles.active : ''
                                            }`}
                                        >
                                            Đổi mật khẩu
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(styles.account, 'mt-3')}>
                                {/* href="/account/receipt" */}
                                {/* cx('title-receipt') */}

                                <FontAwesomeIcon icon={faReceipt} className={cx('avatar-receipt')} />
                                <div onClick={() => handleTabClick(3)}>
                                    <p className={`${styles['title-receipt']} ${activeTab === 3 ? styles.active : ''}`}>
                                        Đơn mua
                                    </p>
                                </div>
                            </div>
                        </div>
                        {activeTab === 1 && <Profile />}
                        {activeTab === 2 && <ChangePass />}
                        {activeTab === 3 && <Receipt />}
                        {/* @yield('content') */}
                    </div>
                </div>
                <div className={cx('space')}></div>
                <div className={cx('success-screen')}>
                    <div className={cx('success-overlay')}></div>
                    <div className={cx('success-box')}>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                        <p className={cx('update')}>Cập nhật thành công</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Account;
