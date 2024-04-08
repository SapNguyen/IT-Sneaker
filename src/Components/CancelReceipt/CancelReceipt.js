import classNames from 'classnames/bind';
import styles from './CancelReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CancelReceipt({ data, loading }) {
    return (
        <div>
            <Helmet>
                <title>Đơn hàng bị hủy</title>
            </Helmet>

            {data && data.map((order, index) => (
                <Fragment key={index}>
                    <div className={cx('receipt')}>
                        <div className={cx('receipt-header')}>
                            <span className={cx('status')}>ĐÃ HỦY</span>
                        </div>
                        {order.details.map((product, index) => (
                            <div key={index} className={cx('product-box')}>
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
                        ))}

                        <div className={cx('receipt-footer')}>
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
        </div>
    );
}

export default CancelReceipt;
