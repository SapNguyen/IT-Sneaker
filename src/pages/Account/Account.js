import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile';
import { useState, useEffect } from 'react';
import ChangePass from '../ChangePass';
import Receipt from '../Receipt';

const cx = classNames.bind(styles);

function Account({ order, status }) {
    const [activeTab, setActiveTab] = useState(1);
    const [statusOrder, setStatusOrder] = useState(3);
    const [loggedIn, setLoggedIn] = useState(true);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleOrder = () => {
        setActiveTab(3);
        window.location.href = '/order';
    };

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (!loggedInUser) {
            setLoggedIn(false);
        }
        if (order === 'receipt') {
            setActiveTab(3);
        }
        if (status === 3) {
            setStatusOrder(3);
            setActiveTab(3);
        }  else if (status === 1) {
            setStatusOrder(1);
            setActiveTab(3);
        } else if (status === 4) {
            setStatusOrder(4);
            setActiveTab(3);
        } else if (status === 2) {
            setStatusOrder(2);
            setActiveTab(3);
        } else if (status === -1) {
            setStatusOrder(-1);
            setActiveTab(3);
        }
    }, [order, status]);

    // if (loggedIn === false) {
    //     window.location.href = '/login';
    // }

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
                                <div onClick={handleOrder}>
                                    <p className={`${styles['title-receipt']} ${activeTab === 3 ? styles.active : ''}`}>
                                        Đơn mua
                                    </p>
                                </div>
                            </div>
                        </div>
                        {activeTab === 1 && <Profile />}
                        {activeTab === 2 && <ChangePass />}
                        {activeTab === 3 && <Receipt status={statusOrder} />}
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
