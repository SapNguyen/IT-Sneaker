import classNames from 'classnames/bind';
import styles from './AllReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser, faReceipt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AllReceipt() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFeedback, setIsFeedBack] = useState(false);
    const [rating, setRating] = useState(0);
    const [confim, setConfirm] = useState(false);
    const [isConfirmButtonVisible, setConfirmButtonVisible] = useState(true);

    const handleClickConfirm = () => {
        setConfirm(true);
        setConfirmButtonVisible(false);
        // Đặt thời gian (ví dụ: 2 giây) để sau đó ẩn thẻ div xác nhận
        setTimeout(() => {
            setConfirm(false);
        }, 2000);
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        //gọi API ở đây
    };

    const handleClickSeeReview = () => {
        setIsModalVisible((prev) => !prev);
    };

    const handleClickFeedback = () => {
        setIsFeedBack((prev) => !prev);
    };

    const handleOkButton = () => {
        setIsModalVisible(false);
    };

    const handleBackFeedback = () => {
        setIsFeedBack(false);
    };

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
                <title>Tất cả đơn hàng</title>
            </Helmet>
            <div className={cx('receipt')}>
                {/* <div className={cx('receipt-header')}>
                    <span className={cx('status')}>VẬN CHUYỂN</span>
                </div>
                <div className={cx('receipt-header')}>
                    <span className={cx('status')}>CHỜ DUYỆT</span>
                </div> */}
                <div className={cx('receipt-header')}>
                    <span className={cx('status')}>HOÀN THÀNH</span>
                </div>
                {/* <div className={cx('receipt-header')}>
                    <span className={cx('status')}>ĐÃ HỦY</span>
                </div> */}
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
                    {/* <div className={cx('btn-drop', 'btn-gray')}>Hủy đơn hàng</div>
                    <div className={cx('btn-confirm', 'btn-red')}>Đã nhận hàng</div> */}
                    <div className={cx('feedback', 'btn-red')} onClick={handleClickFeedback}>
                        Đánh giá
                    </div>
                    {/* <div className={cx('btn-gray', 'view-feedback')} onClick={handleClickSeeReview}>
                        Xem đánh giá
                    </div> */}
                    <div className={cx('title-price')}>
                        Thành tiền:
                        <p className={cx('price')}>100.000₫</p>
                    </div>
                </div>
            </div>

            <div className={cx('receipt')}>
                <div className={cx('receipt-header')}>
                    <span className={cx('status')}>VẬN CHUYỂN</span>
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
                    {isConfirmButtonVisible ? (
                        <div className={cx('btn-confirm', 'btn-red')} onClick={handleClickConfirm}>
                            Đã nhận hàng
                        </div>
                    ) : (
                        <div className={cx('feedback', 'btn-red')} onClick={handleClickFeedback}>
                            Đánh giá
                        </div>
                    )}

                    <div className={cx('title-price')}>
                        Thành tiền:
                        <p className={cx('price')}>100.000₫</p>
                    </div>
                </div>
            </div>

            <div className={cx('receipt')}>
                <div className={cx('receipt-header')}>
                    <span className={cx('status')}>HOÀN THÀNH</span>
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
                    <div className={cx('btn-gray', 'view-feedback')} onClick={handleClickSeeReview}>
                        Xem đánh giá
                    </div>
                    <div className={cx('title-price')}>
                        Thành tiền:
                        <p className={cx('price')}>100.000₫</p>
                    </div>
                </div>
            </div>

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

            {isFeedback && (
                <div className={cx('feedback-screen')}>
                    <div className={cx('success-overlay')}></div>
                    <div className={cx('feedback-box')}>
                        <div className={cx('feedback-product-box')}>
                            <div className={cx('product-feedback')}>
                                <img
                                    src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                    alt=""
                                    className={cx('img-product-feedback')}
                                />
                                <div className={cx('info-product')}>
                                    <p className={cx('name-product-feedback')}>Giày Converse</p>
                                    <p className={cx('product-classify')}>Size:37, Màu:Trắng</p>
                                </div>
                            </div>
                            {/* <div className={cx('flex', 'starbox')}>
                                <div className="div-star">
                                    <FontAwesomeIcon icon={faStar} className={cx('star')} />
                                </div>
                            </div> */}
                            <div className={cx('flex', 'starbox')}>
                                <div className="div-star">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FontAwesomeIcon
                                            key={star}
                                            icon={faStar}
                                            className={cx(star <= rating ? 'star-active' : 'star-inactive')}
                                            onClick={() => handleStarClick(star)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <textarea className={cx('my-comment')} cols="30" rows="10"></textarea>
                        </div>

                        <p className={cx('feedback-title')}>Đánh Giá Sản Phẩm</p>
                        <div className={cx(styles.flex, 'mt-3')}>
                            <p className={cx('error-txt')}></p>
                            <button className={cx('btn_cancel-feedback')} onClick={handleBackFeedback}>
                                TRỞ LẠI
                            </button>
                            <button className={cx('btn_confirm-feedback')}>ĐÁNH GIÁ</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={cx('empty-alert')}>
                <FontAwesomeIcon icon={faReceipt} className={cx('cart-ico')} />
                <p className={cx('title-not-receipt')}>Chưa có đơn hàng</p>
            </div>

            {isModalVisible && (
                <div className={cx('feedback-screen-view')}>
                    <div className={cx('feedback-overlay')}></div>
                    <div className={cx('feedback-box-view')}>
                        <div className={cx('feedback-product-view')}>
                            <div className={cx('product-feedback')}>
                                <img
                                    src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                    alt=""
                                    className={cx('img-product-feedback')}
                                />
                                <div className={cx('info-product')}>
                                    <p className={cx('name-product-feedback')}>Giày Converse</p>
                                    <p className={cx('product-classify')}>Size:37, Màu:Trắng</p>
                                </div>
                            </div>
                            <div className={cx(styles['flex-comment'], 'mt-3')}>
                                <div className={cx('comment-box')}>
                                    <div className={cx(styles.avatar)}>
                                        <FontAwesomeIcon icon={faCircleUser} />
                                    </div>
                                    <div className={cx('comment-info')}>
                                        <div className={cx('name')}>Anh</div>
                                        <div className={cx('rate')}>
                                            <div className={cx('flex-star-feedback')}>
                                                <div className={cx('position-relative', 'h-20')}>
                                                    <span className={cx(styles.star)}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>
                                                    <span
                                                        // className={cx(styles['star-fill'])}
                                                        className={cx(styles.star)}
                                                        // style="width: {{$star_fill*100}}%"
                                                    >
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                        <div className={cx('content')}>Tốt</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className={cx('feedback-title')}>Đánh Giá Của Bạn</p>

                        <div className={cx('btn-ok')}>
                            <div className={cx('btn_close')} onClick={handleOkButton}>
                                OK
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
        </div>
    );
}

export default AllReceipt;
