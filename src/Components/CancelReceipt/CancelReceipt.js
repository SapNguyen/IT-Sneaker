import classNames from 'classnames/bind';
import styles from './CancelReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CancelReceipt() {

    return ( <div>
        <Helmet>
            <title>Đơn hàng bị hủy</title>
        </Helmet>


        <div className={cx('receipt')}>
            <div className={cx('receipt-header')}>
                <span className={cx('status')}>ĐÃ HỦY</span>
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
                {/* <div className={cx('btn-drop', 'btn-gray')} onClick={handleCancelOrder}>Hủy đơn hàng (chờ duyệt)</div>
                <div className={cx('btn-confirm', 'btn-red')}>Đã nhận hàng(vận chuyển 1)</div> */}
                {/* <div className={cx('feedback', 'btn-red')} onClick={handleClickFeedback}>
                    Đánh giá(vận chuyển 1)
                </div> */}
                {/* <div className={cx('btn-gray', 'view-feedback')} onClick={handleClickSeeReview}>
                    Xem đánh giá (hoàn thành 2)
                </div> */}
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

    </div> );
}

export default CancelReceipt;