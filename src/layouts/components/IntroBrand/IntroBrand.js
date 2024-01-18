import classNames from 'classnames/bind';
import styles from './IntroBrand.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function IntroBrand({ data }) {
    //img, description
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-brand')} src={data.detailimg} alt="ImageIntroBrand" />
            <div className={cx('intro')}>
                <p className={cx('text-intro')}>
                    <strong>{data.desbrand}</strong>
                </p>
            </div>
        </div>
    );
}

IntroBrand.prototype = {
    data: PropTypes.object.isRequired,
};

export default IntroBrand;
