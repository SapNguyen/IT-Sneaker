import classNames from 'classnames/bind';
import styles from './TransportReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function TransportReceipt({ data, loading }) {
    const [confim, setConfirm] = useState(false);
    const [isConfirmButtonVisible, setConfirmButtonVisible] = useState(true);

    const handleClickConfirm = async (order_id) => {
        try {
            const response = await axios.post(
                `https://s25sneaker.000webhostapp.com/api/order/completion?order_id=${order_id}}`,
            );
            if (response.data.error) {
                toast.error('Xác nhận thất bại');
            } else {
                setConfirm(true);
                setConfirmButtonVisible(false);
                setTimeout(() => {
                    setConfirm(false);
                }, 2000);
                setTimeout(() => {
                    window.location.href = '/order/completion';
                }, 3000);
            }
        } catch (error) {
            alert('Đã xảy ra lỗi khi Xác nhận. Vui lòng thử lại sau.');
        }
    };

    return (
        <div>
            <Helmet>
                <title>Đơn hàng đang vận chuyển</title>
            </Helmet>
            {data && data.map((order, index) => (
                <Fragment key={index}>
                    <div className={cx('receipt')}>
                        <div className={cx('receipt-header')}>
                            <span className={cx('status')}>VẬN CHUYỂN</span>
                        </div>
                        {order.details.map((product, index) => (
                            <Fragment key={index}>
                                <div className={cx('product-box')}>
                                    <Link to={`/product/` + product.product_id} className={cx('product')}>
                                        <img
                                            src={
                                                `http://127.0.0.1:8000/img/product/` +
                                                product.product_id +
                                                '/' +
                                                product.img
                                            }
                                            className={cx('img')}
                                            alt=""
                                        />
                                        <div className={cx('prod-info')}>
                                            <div>
                                                <div className={cx('prod-name')}>{product.product.product_name}</div>
                                            </div>
                                            <div className={cx('prod-cate')}>
                                                Size:{product.size}, Màu:{product.color}
                                            </div>
                                        </div>
                                        <div className={cx('prod-amount')}>x{product.quantity}</div>
                                        <div className={cx('prod-price')}>{product.sell_price.toLocaleString('vi-VN')}₫</div>
                                    </Link>
                                </div>

                                {confim && (
                                    <div>
                                        <div className={cx('space')}></div>
                                        <div className={cx('success-screen')}>
                                            <div className={cx('success-overlay')}></div>
                                            <div className={cx('success-box')}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                                                <p className={cx('title-confirm')}>Xác nhận thành công</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                        <div className={cx('receipt-footer')}>
                            {isConfirmButtonVisible && (
                                <div
                                    className={cx('btn-confirm', 'btn-red')}
                                    onClick={() => handleClickConfirm(order.order_id)}
                                >
                                    Đã nhận hàng
                                </div>
                            )}

                            <div className={cx('title-price')}>
                                Thành tiền:
                                <p className={cx('price')}>{order.order_value.toLocaleString('vi-VN')}₫</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ))}
            {data && data.length === 0 && !loading && (
                <div className={cx('empty-alert')}>
                    <FontAwesomeIcon icon={faReceipt} className={cx('cart-ico')} />
                    <p className={cx('title-not-receipt')}>Chưa có đơn hàng</p>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default TransportReceipt;
