import classNames from 'classnames/bind';
import styles from './CompleteReceipt.module.scss';
import { Helmet } from 'react-helmet';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function CompleteReceipt({ data, loading }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFeedback, setIsFeedBack] = useState(false);
    const [rating, setRating] = useState(0);
    const [feedbackProduct, setFeedbackProduct] = useState(null);
    const [feedbackOrder, setFeedbackOrder] = useState(null);
    const [comment, setComment] = useState('');

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
                alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
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

    return (
        <div>
            <Helmet>
                <title>Đơn hàng đã hoàn thành</title>
            </Helmet>
            {data &&
                data.map((order, index) => (
                    <div key={index} className={cx('receipt')}>
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
                                                                    className={cx(styles['flex-comment'], 'mt-3')}
                                                                >
                                                                    <div className={cx('comment-box')}>
                                                                        <div className={cx(styles.avatar)}>
                                                                            <FontAwesomeIcon icon={faCircleUser} />
                                                                        </div>
                                                                        <div className={cx('comment-info')}>
                                                                            <div className={cx('name')}>
                                                                                {feedback.member.name}
                                                                            </div>
                                                                            <div className={cx('rate')}>
                                                                                <div
                                                                                    className={cx('flex-star-feedback')}
                                                                                >
                                                                                    <div
                                                                                        className={cx(
                                                                                            'position-relative',
                                                                                            'h-20',
                                                                                        )}
                                                                                    >
                                                                                        {[...Array(feedback.star)].map(
                                                                                            (_, starIndex) => (
                                                                                                <FontAwesomeIcon
                                                                                                    key={starIndex}
                                                                                                    icon={faStar}
                                                                                                    className={cx(
                                                                                                        'star-active',
                                                                                                    )}
                                                                                                />
                                                                                            ),
                                                                                        )}
                                                                                        {[
                                                                                            ...Array(5 - feedback.star),
                                                                                        ].map((_, starIndex) => (
                                                                                            <FontAwesomeIcon
                                                                                                key={starIndex}
                                                                                                icon={faStar}
                                                                                                className={cx(
                                                                                                    'star-inactive',
                                                                                                )}
                                                                                            />
                                                                                        ))}
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
                                {!order.feedbacks.some((feedback) => feedback.product_id === product.product_id) && (
                                    <div className={cx('receipt-footer')}>
                                        <div
                                            className={cx('feedback', 'btn-red')}
                                            onClick={() => handleClickFeedback(product.product_id, product.order_id)}
                                        >
                                            Đánh giá
                                        </div>
                                    </div>
                                )}
                                {order.feedbacks.some(
                                    (feedback) => feedback.mem_id === parseInt(sessionStorage.getItem('userId')),
                                ) &&
                                    order.feedbacks.some((feedback) => feedback.product_id === product.product_id) && (
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

export default CompleteReceipt;
