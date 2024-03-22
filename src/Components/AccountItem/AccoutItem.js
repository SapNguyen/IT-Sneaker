import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data.details.forEach((detail) => {
        // Thêm các giá trị product_image vào Set
        uniqueProductImages.add(detail.product_image);
    });

    const uniqueProductImagesArray = Array.from(uniqueProductImages);
    
    return (
        <Link to={`/product/${data.product_id}`} className={cx('wrapper')}>
            {data.details.map(
                (imgPath, index) =>
                    uniqueProductImagesArray.includes(imgPath.product_image) && (
                        <div key={index}>
                            {index === 0 && (
                                <img
                                    className={cx('avatar')}
                                    src={
                                        `http://127.0.0.1:8000/img/product/` +
                                        imgPath.product_id +
                                        '/' +
                                        // imgPath.trim()
                                        imgPath.product_image
                                    }
                                    alt={data.product_name}
                                />
                            )}
                        </div>
                    ),
            )}

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.product_name}</span>
                    {/* có tích thì hiện */}
                    {data.product_id && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>

                {data.discounts !== null ? (
                    <div className={cx('div_price')}>
                        <span className={cx('price')}>{data.product_price - data.product_price * (data.discounts.discount_value / 100)}đ</span>
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
