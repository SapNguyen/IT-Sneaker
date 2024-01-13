import classNames from 'classnames/bind';
import styles from './NewItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function NewItem({ img, title, content }) {
    return (
        <div className={cx('new')}>
            <div className={cx('new-item')}>
                <div className={cx('left-item')}>
                    <div className={cx('img-blog-left')}>
                        <img className={cx('img-new')} src={img} alt={title} />
                    </div>
                </div>
                <div className={cx('right-item')}>
                    <div className={cx('content-blog')}>
                        <div className={cx('content-right')}>
                            <h3>
                                <a href=" " title={title}>
                                    {title}
                                </a>
                            </h3>
                        </div>
                        <div className={cx('summary-item-blog')}>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewItem.prototype = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default NewItem;
