import classNames from 'classnames/bind';
import styles from './Receipt.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import AllReceipt from '~/Components/AllReceipt';
import WaitReceipt from '~/Components/WaitReceipt';
import TransportReceipt from '~/Components/TransportReceipt';
import CompleteReceipt from '~/Components/CompleteReceipt';
import CancelReceipt from '~/Components/CancelReceipt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as orderService from '~/services/ordersService';

const cx = classNames.bind(styles);

function Receipt(status) {
    const [activeTab, setActiveTab] = useState(3);
    const [orderResult, setOrderResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);

        if(tabNumber === 3){
            window.location.href = '/order';
        }  else if (tabNumber === 1){
            window.location.href = '/order/transport';
        } else if (tabNumber === 0){
            window.location.href = '/order/wait';
        } else if (tabNumber === 2){
            window.location.href = '/order/completion';
        } else if (tabNumber === -1){
            window.location.href = '/order/canceled';
        }
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const loggedInUser = sessionStorage.getItem('userId');
            setLoading(true);

            const result = await orderService.order(loggedInUser, activeTab);
            setOrderResult(result.products);

            setLoading(false);

            if (status.status === 3) {
                setActiveTab(3);
            } else if (status.status === 4) {
                setActiveTab(0);
            } else if (status.status === 1) {
                setActiveTab(1);
            } else if (status.status === 2) {
                setActiveTab(2);
            } else if (status.status === -1) {
                setActiveTab(-1);
            }
        };
        fetchAPI();
        // totalHandler();
    }, [activeTab,status.status]);

    return (
        <div className={cx(styles.container, 'col-lg-9')}>
            <Helmet>
                <title>Receipt</title>
            </Helmet>
            <div className="d-none">1</div>
            <div className={cx('item-box')}>
                <button
                    onClick={() => handleTabClick(3)}
                    className={`${styles['r-tab']} ${activeTab === 3 ? styles.active : ''}`}
                >
                    Tất cả
                </button>
                <button
                    onClick={() => handleTabClick(0)}
                    className={`${styles['r-tab']} ${activeTab === 0 ? styles.active : ''}`}
                >
                    Chờ duyệt
                </button>
                <button
                    onClick={() => handleTabClick(1)}
                    className={`${styles['r-tab']} ${activeTab === 1 ? styles.active : ''}`}
                >
                    Vận chuyển
                </button>
                <button
                    onClick={() => handleTabClick(2)}
                    className={`${styles['r-tab']} ${activeTab === 2 ? styles.active : ''}`}
                >
                    Hoàn thành
                </button>
                <button
                    onClick={() => handleTabClick(-1)}
                    className={`${styles['r-tab']} ${activeTab === -1 ? styles.active : ''}`}
                >
                    Đã hủy
                </button>
            </div>

            {activeTab === 3 && <AllReceipt data={orderResult} loading={loading} />}

            {activeTab === 0 && <WaitReceipt data={orderResult} loading={loading} />}

            {activeTab === 1 && <TransportReceipt data={orderResult} loading={loading} />}
            {activeTab === 2 && <CompleteReceipt data={orderResult} loading={loading} />}
            {activeTab === -1 && <CancelReceipt data={orderResult} loading={loading} />}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        </div>
    );
}

export default Receipt;
