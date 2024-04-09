import classNames from 'classnames/bind';
import styles from './NewProductDetail.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function NewProductDetail({ data }) {
    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data &&
        data.details.forEach((detail) => {
            // Thêm các giá trị product_image vào Set
            const split = detail.product_image.split(',');
            split.forEach((fileName) => {
                uniqueProductImages.add(fileName);
            });
        });

    const uniqueProductImagesArray = Array.from(uniqueProductImages).reverse();

    return (
        <div className={cx('row', styles['box-product'])} to={`/product/${data.product_id}`}>
            <div className="col-sm-4 p-0">
                {data &&
                    data.details.map((imgPath, index) => (
                        <Fragment key={index}>
                            {index === 0 &&
                                uniqueProductImagesArray.map((img, index) => (
                                    <Fragment key={index}>
                                        {index === 0 && (
                                            <img
                                                src={
                                                    `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                    imgPath.product_id +
                                                    '/' +
                                                    // imageURL.trim()
                                                    img
                                                }
                                                className={cx('img-fluid')}
                                                alt=""
                                            />
                                        )}
                                    </Fragment>
                                ))}
                        </Fragment>
                    ))}
            </div>
            <div className="col-sm-8">
                <p className={cx('ps_name')}>{data.product_name}</p>
                {data && data.discounts !== null ? (
                    <div className={cx('div-ps-price')}>
                        <p className={cx('text-new-product')}>
                            {(
                                data.product_price -
                                data.product_price * (data.discounts.discount_value / 100)
                            ).toLocaleString('vi-VN')}
                            đ
                        </p>
                        <p className={cx('ps-price-disabled')}>{data.product_price.toLocaleString('vi-VN')}đ</p>
                    </div>
                ) : (
                    <div className={cx('div-ps-price')}>
                        <p className={cx('text-new-product')}>{data.product_price.toLocaleString('vi-VN')}đ</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewProductDetail;
