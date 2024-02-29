import classNames from 'classnames/bind';
import styles from './FeedbackProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FeedbackProduct() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div className={cx('feedback-container')}>
            <p className={cx('title')}>Đánh giá sản phẩm</p>
            {/* <div className={cx('empty-feedback')}>
                <span className={cx('material-symbols-outlined', styles.chat)}>
                    
                    chat
                </span>
                <p className="fs-5">Chưa có đánh giá</p>
            </div> */}
            <div className={cx('feedback-title')}>
                <div className={cx('star-container')}>
                    <p className={cx('feedback-average')}>3 trên 5</p>
                    <div className={cx('flex-star-feedback')}>
                        {/* style="margin-left: 5px" */}
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx(styles.star)}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span
                                className={cx(styles['star-fill'])}
                                // style="width: {{$star_fill*100}}%"
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx(styles.star)}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span
                                className={cx(styles['star-fill'])}
                                // style="width: {{$star_fill*100}}%"
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx(styles.star)}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span
                                className={cx(styles['star-fill'])}
                                // style="width: {{$star_fill*100}}%"
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx(styles.star)}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span
                                className={cx(styles['star-fill'])}
                                // style="width: {{$star_fill*100}}%"
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx(styles.star)}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span
                                className={cx(styles['star-fill'])}
                                // style="width: {{$star_fill*100}}%"
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('type-star-container')}>
                    <div
                        onClick={() => handleTabClick(0)}
                        className={`${styles['star-box']} ${activeTab === 0 ? styles.active : ''}`}
                    >
                        Tất cả
                    </div>
                    <div
                        onClick={() => handleTabClick(5)}
                        className={`${styles['star-box']} ${activeTab === 5 ? styles.active : ''}`}
                    >
                        5 Sao(0)
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(4)}
                        className={`${styles['star-box']} ${activeTab === 4 ? styles.active : ''}`}
                    >
                        4 Sao(0)
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(3)}
                        className={`${styles['star-box']} ${activeTab === 3 ? styles.active : ''}`}
                    >
                        3 Sao(0)
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(2)}
                        className={`${styles['star-box']} ${activeTab === 2 ? styles.active : ''}`}
                    >
                        2 Sao(0)
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    <div
                        onClick={() => handleTabClick(1)}
                        className={`${styles['star-box']} ${activeTab === 1 ? styles.active : ''}`}
                    >
                        1 Sao(0)
                    </div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}>0</div>
                    {/* style="display: none" */}
                </div>
            </div>
            <div className={cx('star-feedback-empty')}>
                <span className={cx('material-symbols-outlined', styles.chat)}>chat</span>
                <p className="fs-5">Chưa có đánh giá</p>
            </div>
            {activeTab === 0 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
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
            )}
            {activeTab === 5 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
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
            )}
            {activeTab === 4 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
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
            )}
            {activeTab === 3 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
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
            )}
            {activeTab === 2 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
                                            // style="width: {{$star_fill*100}}%"
                                        >
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('position-relative', 'h-20')}>
                                        <span className={cx(styles.star)}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span
                                            className={cx(styles['star-fill'])}
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
            )}
            {activeTab === 1 && (
                <div className={cx('feedback-content')}>
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
                                            className={cx(styles['star-fill'])}
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
            )}
        </div>
    );
}

export default FeedbackProduct;
