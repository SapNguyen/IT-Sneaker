import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data.details && data.details.forEach((detail) => {
        // Thêm các giá trị product_image vào Set
        const split = detail.product_image.split(',');
        split.forEach((fileName) => {
            uniqueProductImages.add(fileName);
        });
        // uniqueProductImages.add(detail.product_image);
    });

    const uniqueProductImagesArray = Array.from(uniqueProductImages && uniqueProductImages);

    return (
        <Link to={`/product/${data.product_id}`} className={cx('wrapper')}>
            {data.details && data.details.map((imgPath, index) => (
                <Fragment key={index}>
                    {index === 0 &&
                        uniqueProductImagesArray && uniqueProductImagesArray.map((img, index) => (
                            <Fragment key={index}>
                                {index === 0 && (
                                    <img
                                        className={cx('avatar')}
                                        src={
                                            `http://127.0.0.1:8000/img/product/` +
                                            imgPath.product_id +
                                            '/' +
                                            // imgPath.trim()
                                            img
                                        }
                                        alt={data.product_name}
                                    />
                                )}
                            </Fragment>
                        ))}
                </Fragment>
            ))}

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.product_name}</span>
                    {/* có tích thì hiện */}
                    {data.product_id && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>

                {data.discounts !== null ? (
                    <div className={cx('div_price')}>
                        <span className={cx('price')}>
                            {data.product_price - data.product_price * (data.discounts.discount_value / 100)}đ
                        </span>
                        <span className={cx('price_discount')}>{data.product_price}đ</span>
                    </div>
                ) : (
                    <span className={cx('price')}>{data.product_price}đ</span>
                )}
            </div>
        </Link>
    );
}

//để cho data trong AccountItem luôn là 1 object và isRequired là bất buộc
AccountItem.prototype = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
