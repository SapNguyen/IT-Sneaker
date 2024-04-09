import classNames from 'classnames/bind';
import styles from './AllReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser, faReceipt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function AllReceipt({ data, loading }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFeedback, setIsFeedBack] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [confim, setConfirm] = useState(false);
    const [feedbackProduct, setFeedbackProduct] = useState(null);
    const [feedbackOrder, setFeedbackOrder] = useState(null);
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

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };
    const handleChangeComment = (event) => {
        setComment(event.target.value);
    };

    const handleFeedback = async (mem_id, product_id, order_id) => {
        if (rating !== 0) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/feedback/product?mem_id=${mem_id}&product_id=${product_id}&comment=${comment}&star=${rating}&order_id=${order_id}}`,
                );
                if (response.data.error) {
                    console.log(response.data.error);
                    toast.error('Đánh giá thất bại');
                } else {
                    toast.success('Đánh giá thành công');
                    setTimeout(function () {
                        setIsFeedBack(false);
                    }, 1000);
                    setTimeout(() => {
                        window.location.href = '/order/completion';
                    }, 2000);
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi đánh giá. Vui lòng thử lại sau.');
            }
        } else {
            toast.error('Vui lòng chọn số sao đánh giá');
        }
    };

    const handleClickSeeReview = (id, order) => {
        setFeedbackProduct(id);
        setFeedbackOrder(order);
        setIsModalVisible((prev) => !prev);
    };

    const handleClickFeedback = (id, order) => {
        setFeedbackProduct(id);
        setFeedbackOrder(order);
        setIsFeedBack((prev) => !prev);
    };

    const handleOkButton = () => {
        setIsModalVisible(false);
    };

    const handleBackFeedback = () => {
        setIsFeedBack(false);
    };

    const handleCancelOrder = async (order_id, details) => {
        const confirmCancellation = window.confirm('Bạn có muốn hủy đơn hàng này không?');

        if (confirmCancellation) {
            try {
                const detailsJSON = JSON.stringify(details);
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/order/canceled?order_id=${order_id}&details=${detailsJSON}`,
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
                <title>Tất cả đơn hàng</title>
            </Helmet>
            {data.map((order, index) => (
                <Fragment key={index}>
                    {order.order_status === 2 && (
                        <Fragment>
                            <div className={cx('receipt')}>
                                <div className={cx('receipt-header')}>
                                    <span className={cx('status')}>HOÀN THÀNH</span>
                                </div>
                                {order.details.map((product, index) => (
                                    <Fragment key={index}>
                                        <div className={cx('product-box')}>
                                            <Link to={`/product/` + product.product_id} className={cx('product')}>
                                                <img
                                                    src={
                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                        product.product_id +
                                                        '/' +
                                                        product.img
                                                    }
                                                    className={cx('img')}
                                                    alt=""
                                                />
                                                <div className={cx('prod-info')}>
                                                    <div>
                                                        <div className={cx('prod-name')}>
                                                            {product.product.product_name}
                                                        </div>
                                                    </div>
                                                    <div className={cx('prod-cate')}>
                                                        Size:{product.size}, Màu:{product.color}
                                                    </div>
                                                </div>
                                                <div className={cx('prod-amount')}>x{product.quantity}</div>
                                                <div className={cx('prod-price')}>
                                                    {product.sell_price.toLocaleString('vi-VN')}₫
                                                </div>
                                            </Link>
                                        </div>

                                        {isFeedback &&
                                            feedbackProduct === product.product_id &&
                                            feedbackOrder === product.order_id && (
                                                <div key={index} className={cx('feedback-screen')}>
                                                    <div className={cx('success-overlay')}></div>
                                                    <div className={cx('feedback-box')}>
                                                        <div className={cx('feedback-product-box')}>
                                                            <div className={cx('product-feedback')}>
                                                                <img
                                                                    src={
                                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                                        product.product_id +
                                                                        '/' +
                                                                        product.img
                                                                    }
                                                                    alt=""
                                                                    className={cx('img-product-feedback')}
                                                                />
                                                                <div className={cx('info-product')}>
                                                                    <p className={cx('name-product-feedback')}>
                                                                        {product.product.product_name}
                                                                    </p>
                                                                    <p className={cx('product-classify')}>
                                                                        Size:{product.size}, Màu:{product.color}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className={cx('flex', 'starbox')}>
                                                                <div className="div-star">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <FontAwesomeIcon
                                                                            key={star}
                                                                            icon={faStar}
                                                                            className={cx(
                                                                                star <= rating
                                                                                    ? 'star-active'
                                                                                    : 'star-inactive',
                                                                            )}
                                                                            onClick={() => handleStarClick(star)}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <textarea
                                                                className={cx('my-comment')}
                                                                cols="30"
                                                                rows="10"
                                                                value={comment}
                                                                onChange={handleChangeComment}
                                                            ></textarea>
                                                        </div>

                                                        <p className={cx('feedback-title')}>Đánh Giá Sản Phẩm</p>
                                                        <div className={cx(styles.flex, 'mt-3')}>
                                                            <p className={cx('error-txt')}></p>
                                                            <button
                                                                className={cx('btn_cancel-feedback')}
                                                                onClick={handleBackFeedback}
                                                            >
                                                                TRỞ LẠI
                                                            </button>
                                                            <button
                                                                className={cx('btn_confirm-feedback')}
                                                                onClick={() =>
                                                                    handleFeedback(
                                                                        sessionStorage.getItem('userId'),
                                                                        product.product_id,
                                                                        product.order_id,
                                                                    )
                                                                }
                                                            >
                                                                ĐÁNH GIÁ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        {isModalVisible &&
                                            feedbackProduct === product.product_id &&
                                            feedbackOrder === product.order_id &&
                                            order.feedbacks.length !== 0 && (
                                                <div className={cx('feedback-screen-view')}>
                                                    <div className={cx('feedback-overlay')}></div>
                                                    <div className={cx('feedback-box-view')}>
                                                        <div className={cx('feedback-product-view')}>
                                                            <div className={cx('product-feedback')}>
                                                                <img
                                                                    src={
                                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                                        product.product_id +
                                                                        '/' +
                                                                        product.img
                                                                    }
                                                                    alt=""
                                                                    className={cx('img-product-feedback')}
                                                                />
                                                                <div className={cx('info-product')}>
                                                                    <p className={cx('name-product-feedback')}>
                                                                        {product.product.product_name}
                                                                    </p>
                                                                    <p className={cx('product-classify')}>
                                                                        Size:{product.size}, Màu:{product.color}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {order.feedbacks.map(
                                                                (feedback, index) =>
                                                                    feedbackProduct === feedback.product_id && (
                                                                        <div
                                                                            key={index}
                                                                            className={cx(
                                                                                styles['flex-comment'],
                                                                                'mt-3',
                                                                            )}
                                                                        >
                                                                            <div className={cx('comment-box')}>
                                                                                <div className={cx(styles.avatar)}>
                                                                                    <FontAwesomeIcon
                                                                                        icon={faCircleUser}
                                                                                    />
                                                                                </div>
                                                                                <div className={cx('comment-info')}>
                                                                                    <div className={cx('name')}>
                                                                                        {feedback.member.name}
                                                                                    </div>
                                                                                    <div className={cx('rate')}>
                                                                                        <div
                                                                                            className={cx(
                                                                                                'flex-star-feedback',
                                                                                            )}
                                                                                        >
                                                                                            <div
                                                                                                className={cx(
                                                                                                    'position-relative',
                                                                                                    'h-20',
                                                                                                )}
                                                                                            >
                                                                                                {[
                                                                                                    ...Array(
                                                                                                        feedback.star,
                                                                                                    ),
                                                                                                ].map(
                                                                                                    (_, starIndex) => (
                                                                                                        <FontAwesomeIcon
                                                                                                            key={
                                                                                                                starIndex
                                                                                                            }
                                                                                                            icon={
                                                                                                                faStar
                                                                                                            }
                                                                                                            className={cx(
                                                                                                                'star-active',
                                                                                                            )}
                                                                                                        />
                                                                                                    ),
                                                                                                )}
                                                                                                {[
                                                                                                    ...Array(
                                                                                                        5 -
                                                                                                            feedback.star,
                                                                                                    ),
                                                                                                ].map(
                                                                                                    (_, starIndex) => (
                                                                                                        <FontAwesomeIcon
                                                                                                            key={
                                                                                                                starIndex
                                                                                                            }
                                                                                                            icon={
                                                                                                                faStar
                                                                                                            }
                                                                                                            className={cx(
                                                                                                                'star-inactive',
                                                                                                            )}
                                                                                                        />
                                                                                                    ),
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className={cx('content')}>
                                                                                        {feedback.comment}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ),
                                                            )}
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
                                        {!order.feedbacks.some(
                                            (feedback) => feedback.product_id === product.product_id,
                                        ) && (
                                            <div className={cx('receipt-footer')}>
                                                <div
                                                    className={cx('feedback', 'btn-red')}
                                                    onClick={() =>
                                                        handleClickFeedback(product.product_id, product.order_id)
                                                    }
                                                >
                                                    Đánh giá
                                                </div>
                                            </div>
                                        )}
                                        {order.feedbacks.some(
                                            (feedback) =>
                                                feedback.mem_id === parseInt(sessionStorage.getItem('userId')),
                                        ) &&
                                            order.feedbacks.some(
                                                (feedback) => feedback.product_id === product.product_id,
                                            ) && (
                                                <div className={cx('receipt-footer')}>
                                                    <div
                                                        className={cx('btn-gray', 'view-feedback')}
                                                        onClick={() =>
                                                            handleClickSeeReview(product.product_id, product.order_id)
                                                        }
                                                    >
                                                        Xem đánh giá
                                                    </div>
                                                </div>
                                            )}
                                    </Fragment>
                                ))}
                                <div className={cx('receipt-footer')}>
                                    <div className={cx('title-price')}>
                                        Thành tiền:
                                        <p className={cx('price')}>{order.order_value.toLocaleString('vi-VN')}₫</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}

                    {order.order_status === 1 && (
                        <Fragment>
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
                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                        product.product_id +
                                                        '/' +
                                                        product.img
                                                    }
                                                    className={cx('img')}
                                                    alt=""
                                                />
                                                <div className={cx('prod-info')}>
                                                    <div>
                                                        <div className={cx('prod-name')}>
                                                            {product.product.product_name}
                                                        </div>
                                                    </div>
                                                    <div className={cx('prod-cate')}>
                                                        Size:{product.size}, Màu:{product.color}
                                                    </div>
                                                </div>
                                                <div className={cx('prod-amount')}>x{product.quantity}</div>
                                                <div className={cx('prod-price')}>
                                                    {product.sell_price.toLocaleString('vi-VN')}₫
                                                </div>
                                            </Link>
                                        </div>

                                        {confim && (
                                            <div>
                                                <div className={cx('space')}></div>
                                                <div className={cx('success-screen')}>
                                                    <div className={cx('success-overlay')}></div>
                                                    <div className={cx('success-box')}>
                                                        <FontAwesomeIcon
                                                            icon={faCheckCircle}
                                                            className={cx('check-icon')}
                                                        />
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
                    )}

                    {order.order_status === 0 && (
                        <Fragment>
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
                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                        product.product_id +
                                                        '/' +
                                                        product.img
                                                    }
                                                    className={cx('img')}
                                                    alt=""
                                                />
                                                <div className={cx('prod-info')}>
                                                    <div>
                                                        <div className={cx('prod-name')}>
                                                            {product.product.product_name}
                                                        </div>
                                                    </div>
                                                    <div className={cx('prod-cate')}>
                                                        Size:{product.size}, Màu:{product.color}
                                                    </div>
                                                </div>
                                                <div className={cx('prod-amount')}>x{product.quantity}</div>
                                                <div className={cx('prod-price')}>
                                                    {product.sell_price.toLocaleString('vi-VN')}₫
                                                </div>
                                            </Link>
                                        </div>
                                    </Fragment>
                                ))}
                                <div className={cx('receipt-footer')}>
                                    <div
                                        className={cx('btn-drop', 'btn-gray')}
                                        onClick={() => handleCancelOrder(order.order_id, order.details)}
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
                    )}

                    {order.order_status === -1 && (
                        <div className={cx('receipt')}>
                            <div className={cx('receipt-header')}>
                                <span className={cx('status')}>ĐÃ HỦY</span>
                            </div>
                            {order.details.map((product, index) => (
                                <div key={index} className={cx('product-box')}>
                                    <Link to={`product/` + product.product_id} className={cx('product')}>
                                        <img
                                            src={
                                                `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
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
                                        <div className={cx('prod-price')}>
                                            {product.sell_price.toLocaleString('vi-VN')}₫
                                        </div>
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
                    )}
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

export default AllReceipt;
