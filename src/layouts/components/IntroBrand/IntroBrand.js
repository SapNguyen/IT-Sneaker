import classNames from 'classnames/bind';
import styles from './IntroBrand.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function IntroBrand({ img, description }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-brand')} src={img} alt="ImageIntroBrand" />
            <div className={cx('intro')}>
                <p className={cx('text-intro')}>
                    <strong>{description}</strong>
                </p>
            </div>
        </div>
    );
}

IntroBrand.prototype = {
    img: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default IntroBrand;
