import classNames from 'classnames/bind';
import styles from './FeedbackProduct.module.scss';

const cx = classNames.bind(styles);

function FeedbackProduct() {
    return (
        <div className={cx('feedback-container')}>
            <p className={cx('title')}>Đánh giá sản phẩm</p>
            <div className={cx('empty-feedback')}>
                <span className={cx('material-symbols-outlined', styles.chat)}>
                    {/* style="font-size:50px;color:#747474" */}
                    chat
                </span>
                <p className="fs-5">Chưa có đánh giá</p>
                {/* style="font-size:20px" */}
            </div>
            <div className={cx('feedback-title')}>
                <div className={cx('star-container')}>
                    <p className={cx('feedback-average')}></p>
                    <div className={cx('flex-star-feedback')}>
                        {/* style="margin-left: 5px" */}
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx('material-symbols-outlined', styles.star)}>star</span>
                            <span className={cx('material-symbols-outlined', styles['star-fill'], 'w-100')}>
                                {/* style="width: 100%" */}
                                star
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx('material-symbols-outlined', styles.star)}>star</span>
                            <span className={cx('material-symbols-outlined', styles['star-fill'], 'w-0')}>
                                {/* style="width: {{$star_fill*100}}%" */}
                                star
                            </span>
                        </div>
                        <div className="star-feedback">
                            {/* style="position: relative;height:24px" */}
                            <span className={cx('material-symbols-outlined', styles.star)}>star</span>
                            <span className={cx('material-symbols-outlined', styles['star-fill'], 'w-0')}>
                                {/* style="width: 0px" */}
                                star
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('type-star-container')}>
                    <div className={cx('star-box', 'star-active')} id="all">
                        Tất cả
                    </div>
                    <div className={cx('star-box')}></div>
                    {/* id="{{$i}}" */}
                    <div className={cx(styles['count-feedback'], 'd-none')}></div>
                    {/* style="display: none" */}
                </div>
            </div>
            <div className={cx('star-feedback-empty')}>
                <span className={cx('material-symbols-outlined', styles.chat)}>chat</span>
                <p className="fs-5">Chưa có đánh giá</p>
            </div>

            <div className={cx('feedback-content')}>
                <div className={cx('comment-box')}>
                    <div className={cx(styles.avatar, 'material-symbols-outlined')}>account_circle</div>
                    <div className={cx('comment-info')}>
                        <div className={cx('name')}></div>
                        <div className={cx('rate')}>
                            <div className={cx('flex-star-feedback')}>
                                <div className={cx('position-relative', 'h-20')}>
                                    <span className={cx('material-symbols-outlined', styles.star, 'fs-5')}>
                                        {/* style="font-size: 20px" */}
                                        star
                                    </span>
                                    <span
                                        className={cx('material-symbols-outlined', styles['star-fill'], 'w-100', 'fs-5')}
                                        // style="width: 100%;font-size:20px"
                                    >
                                        star
                                    </span>
                                </div>
                                <div className={cx('position-relative', 'h-20')}>
                                    <span className={cx('material-symbols-outlined', styles.star, 'fs-5')}>
                                        {/* style="font-size: 20px" */}
                                        star
                                    </span>
                                    <span
                                        className={cx('material-symbols-outlined', styles['star-fill'], 'w-0', 'fs-5')}
                                    >
                                        {/* style="width: 0px;font-size: 20px" */}
                                        star
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-info')}>Size: 41, Màu: Trắng</div>
                        <div className={cx('content')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackProduct;
