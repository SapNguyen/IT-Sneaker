import classNames from 'classnames/bind';
import styles from './IntroBrand.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function IntroBrand({ data }) {
    //img, description
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('img-brand')}
                src={
                    data.img ? data.img : `http://127.0.0.1:8000/img/brand/` + data.brand_id + '/' + data.brand_des_img
                }
                alt="ImageIntroBrand"
            />
            <div className={cx('intro')}>
                <p className={cx('text-intro')}>
                    <strong>{data.brand_des}</strong>
                </p>
            </div>
        </div>
    );
}

IntroBrand.prototype = {
    data: PropTypes.object.isRequired,
};

export default IntroBrand;
