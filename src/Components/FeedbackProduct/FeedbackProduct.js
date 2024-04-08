import classNames from 'classnames/bind';
import styles from './FeedbackProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState, Fragment } from 'react';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function FeedbackProduct({ data, setStar, count }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        setStar(tabNumber);
    };

    const totalStars = data.feedbacks && data.feedbacks.reduce((total, feedback) => total + feedback.star, 0);

    // Tính trung bình số sao
    const averageStars = data.feedbacks && totalStars / data.feedbacks.length;

    const displayStars = isNaN(averageStars) ? 0 : averageStars;

    const integerPart = Math.floor(displayStars); // Phần nguyên

    const decimalPart = displayStars - integerPart; // Phần thập phân

    const stars = [];

    // Tạo mảng với số lượng sao màu đỏ và đen
    for (let i = 0; i < integerPart; i++) {
        stars.push({ type: 'red' });
    }
    if (decimalPart > 0) {
        stars.push({ type: 'half' }); // Nếu có phần thập phân, thêm một nửa sao màu đỏ
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push({ type: 'black' }); // Thêm các sao màu đen còn lại
    }

    return (
        <div className={cx('feedback-container')}>
            <p className={cx('title')}>Đánh giá sản phẩm</p>
            <div className={cx('feedback-title')}>
                <div className={cx('star-container')}>
                    <p className={cx('feedback-average')}>{displayStars} trên 5</p>
                    <div className={cx('flex-star-feedback')}>
                        {stars && stars.map((star, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                // className={cx(star.type === 'red' ? 'star-active' : 'star-inactive')}
                                className={cx(
                                    star.type === 'red'
                                        ? 'star-active'
                                        : star.type === 'half'
                                        ? 'half-star'
                                        : 'star-inactive',
                                )}
                            />
                        ))}
                    </div>
                </div>
                <div className={cx('type-star-container')}>
                    <div
                        onClick={() => handleTabClick(0)}
                        className={`${styles['star-box']} ${activeTab === 0 ? styles.active : ''}`}
                    >
                        Tất cả({count.total_feedbacks})
                    </div>
                    <div
                        onClick={() => handleTabClick(5)}
                        className={`${styles['star-box']} ${activeTab === 5 ? styles.active : ''}`}
                    >
                        5 Sao({count.star_5_feedbacks})
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(4)}
                        className={`${styles['star-box']} ${activeTab === 4 ? styles.active : ''}`}
                    >
                        4 Sao({count.star_4_feedbacks})
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(3)}
                        className={`${styles['star-box']} ${activeTab === 3 ? styles.active : ''}`}
                    >
                        3 Sao({count.star_3_feedbacks})
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(2)}
                        className={`${styles['star-box']} ${activeTab === 2 ? styles.active : ''}`}
                    >
                        2 Sao({count.star_2_feedbacks})
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(1)}
                        className={`${styles['star-box']} ${activeTab === 1 ? styles.active : ''}`}
                    >
                        1 Sao({count.star_1_feedbacks})
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    {/* style="display: none" */}
                </div>
            </div>

            {activeTab === 0 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}

            {activeTab === 5 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}
            {activeTab === 4 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}
            {activeTab === 3 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}
            {activeTab === 2 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}
            {activeTab === 1 && (
                <div className={cx('feedback-content')}>
                    {data.feedbacks && data.feedbacks.length === 0 ? (
                        <div className={cx('star-feedback-empty')}>
                            <FontAwesomeIcon
                                className={cx('material-symbols-outlined', styles.chat)}
                                icon={faComment}
                            />
                            <p>Hiện chưa có đánh giá</p>
                        </div>
                    ) : (
                        <Fragment>
                            {data.feedbacks &&
                                data.feedbacks.map((result, index) => (
                                    <div key={index} className={cx('comment-box')}>
                                        <div className={cx(styles.avatar)}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className={cx('comment-info')}>
                                            <div className={cx('name')}>{result.member.name}</div>
                                            <div className={cx('rate')}>
                                                <div className={cx('flex-star-feedback')}>
                                                    <div className={cx('position-relative', 'h-20')}>
                                                        {[...Array(result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-active')}
                                                            />
                                                        ))}
                                                        {[...Array(5 - result.star)].map((_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={cx('star-inactive')}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={cx('product-info')}>Size: 41, Màu: Trắng</div> */}
                                            <div className={cx('content')}>{result.comment}</div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    )}
                </div>
            )}
        </div>
    );
}

export default FeedbackProduct;
