import classNames from 'classnames/bind';
import styles from './WaitReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function WaitReceipt() {
    const handleCancelOrder = () => {
        const confirmCancellation = window.confirm('Bạn có muốn hủy đơn hàng này không?');

        if (confirmCancellation) {
            // Gọi API để hủy đơn hàng ở đây
            // fetch('YOUR_API_ENDPOINT', {
            //   method: 'DELETE',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     // Bạn có thể thêm các headers khác nếu cần
            //   },
            //   body: JSON.stringify({ orderId: 'YOUR_ORDER_ID' }),
            // })
            //   .then(response => response.json())
            //   .then(data => {
            //     // Xử lý kết quả từ API (nếu cần)
            //   })
            //   .catch(error => {
            //     console.error('Error cancelling order:', error);
            //   });
            console.log('Đơn hàng đã được hủy.');
        } else {
            console.log('Hủy đơn hàng đã bị hủy bỏ.');
        }
    };

    return (
        <div>
            <Helmet>
                <title>Đơn hàng chờ</title>
            </Helmet>

            <div className={cx('receipt')}>
                <div className={cx('receipt-header')}>
                    <span className={cx('status')}>CHỜ DUYỆT</span>
                </div>
                <div className={cx('product-box')}>
                    <div className={cx('product')}>
                        <img
                            src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                            className={cx('img')}
                            alt=""
                        />
                        <div className={cx('prod-info')}>
                            <a href="/products/{{$receipt_products[$j]->product_id}}">
                                <div className={cx('prod-name')}>Giày</div>
                            </a>
                            <div className={cx('prod-cate')}>Size:42, Màu:Red</div>
                        </div>
                        <div className={cx('prod-amount')}>x2</div>
                        <div className={cx('prod-price')}>100.000₫</div>
                    </div>
                </div>
                <div className={cx('receipt-footer')}>
                    <div className={cx('btn-drop', 'btn-gray')} onClick={handleCancelOrder}>
                        Hủy đơn hàng
                    </div>
                    <div className={cx('title-price')}>
                        Thành tiền:
                        <p className={cx('price')}>100.000₫</p>
                    </div>
                </div>
            </div>

            

            <div className={cx('empty-alert')}>
                <FontAwesomeIcon icon={faReceipt} className={cx('cart-ico')} />
                <p className={cx('title-not-receipt')}>Chưa có đơn hàng</p>
            </div>

        </div>
    );
}

export default WaitReceipt;
