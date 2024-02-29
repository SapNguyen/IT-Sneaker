import classNames from 'classnames/bind';
import styles from './Receipt.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import AllReceipt from '~/Components/AllReceipt';
import WaitReceipt from '~/Components/WaitReceipt';
import TransportReceipt from '~/Components/TransportReceipt';
import CompleteReceipt from '~/Components/CompleteReceipt';
import CancelReceipt from '~/Components/CancelReceipt';

const cx = classNames.bind(styles);

function Receipt() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className={cx(styles.container, 'col-lg-9')}>
            <Helmet>
                <title>Receipt</title>
            </Helmet>
            <div className="d-none">1</div>
            <div className={cx('item-box')}>
                <button
                    onClick={() => handleTabClick(1)}
                    className={`${styles['r-tab']} ${activeTab === 1 ? styles.active : ''}`}
                >
                    Tất cả
                </button>
                <button
                    onClick={() => handleTabClick(2)}
                    className={`${styles['r-tab']} ${activeTab === 2 ? styles.active : ''}`}
                >
                    Chờ duyệt
                </button>
                <button
                    onClick={() => handleTabClick(3)}
                    className={`${styles['r-tab']} ${activeTab === 3 ? styles.active : ''}`}
                >
                    Vận chuyển
                </button>
                <button
                    onClick={() => handleTabClick(4)}
                    className={`${styles['r-tab']} ${activeTab === 4 ? styles.active : ''}`}
                >
                    Hoàn thành
                </button>
                <button
                    onClick={() => handleTabClick(5)}
                    className={`${styles['r-tab']} ${activeTab === 5 ? styles.active : ''}`}
                >
                    Đã hủy
                </button>
            </div>

            {activeTab === 1 && 
                <AllReceipt />
            }

            {activeTab === 2 && 
                <WaitReceipt />
            }

            {activeTab === 3 &&
                <TransportReceipt />
            }
            {activeTab === 4 && 
                <CompleteReceipt />
            }
            {activeTab === 5 &&
                <CancelReceipt />
            }

            
        </div>
    );
}

export default Receipt;
