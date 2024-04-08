import classNames from 'classnames/bind';
import styles from './WaitReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const cx = classNames.bind(styles);

function WaitReceipt({ data, loading }) {
    const handleCancelOrder = async (order_id) => {
        const confirmCancellation = window.confirm('Bạn có muốn hủy đơn hàng này không?');

        if (confirmCancellation) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/order/canceled?order_id=${order_id}}`,
                );
                if (response.data.error) {
                    toast.error('Hủy đơn hàng thất bại');
                } else {
                    toast.success('Hủy đơn hàng thành công');
                    setTimeout(function () {
                        window.location.href = '/order/canceled';
                    }, 1000);
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi hủy đơn hàng. Vui lòng thử lại sau.');
            }
        }
    };

    return (
        <div>
            <Helmet>
                <title>Đơn hàng chờ</title>
            </Helmet>

            {data && data.map((order, index) => (
                <Fragment key={index}>
                    <div className={cx('receipt')}>
                        <div className={cx('receipt-header')}>
                            <span className={cx('status')}>CHỜ DUYỆT</span>
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
                            </Fragment>
                        ))}
                        <div className={cx('receipt-footer')}>
                            <div
                                className={cx('btn-drop', 'btn-gray')}
                                onClick={() => handleCancelOrder(order.order_id)}
                            >
                                Hủy đơn hàng
                            </div>
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

export default WaitReceipt;
