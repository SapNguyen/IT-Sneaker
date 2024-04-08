import classNames from 'classnames/bind';
import styles from './Product.module.scss';
// import style from 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
// import React, { useState } from 'react';

const cx = classNames.bind(styles);
// const cxx = classNames.bind(style);

function Product({ data }) {
    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data && data.details.forEach((detail) => {
        const split = detail.product_image.split(',');
        split.forEach((fileName) => {
            uniqueProductImages.add(fileName);
        });
    });

    const uniqueProductImagesArray = Array.from(uniqueProductImages && uniqueProductImages);

    // const [imgValue, setImgValue] = useState([]);
    // let imgs=[img1,img2,img3,img4,img5]
    //nameproduct, priceproduct, mainimg, imgs, supimg

    // const imgElements = data.details.map((imgPath) => (
    //     <img
    //         key={imgPath.iddp}
    //         src={imgPath.imgdetail}
    //         className={cx('small-img')}
    //         alt={'IMG ' + imgPath.iddp}
    //         // onClick={() => handleMouseOversup(imgPath)}
    //     />
    // ));

    // useEffect(() => {
    //     const fetchAPIProduct = async () => {
    //         try {
    //             const result = await homeService.imgproduct(data.product_id);
    //             console.log(result.data);
    //             setImgValue(result.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchAPIProduct();
    // }, [data.product_id]);

    return (
        <div className={cx('owl-item')}>
            <div className={cx('item')}>
                <div className={cx('card')}>
                    <div className={cx('card-header')}>
                        {/* {data.details.split(',').map((imageUrl, imgIndex) => (
                            <div>
                                <img
                                    key={imgIndex}
                                    className="img-header-fluid"
                                    src={
                                        `http://127.0.0.1:8000/img/product/` +
                                        imgPath.product_id +
                                        '/' +
                                        imageUrl.trim()
                                    }
                                    alt={`Product`}
                                />
                                <div className={cx('slide-img')}>
                                    <img
                                        src={
                                            `http://127.0.0.1:8000/img/product/` +
                                            imgPath.product_id +
                                            '/' +
                                            imageUrl.trim()
                                        }
                                        className={cx('small-img')}
                                        alt={'IMG ' + imageUrl.product_size_color_id}
                                    />
                                </div>
                            </div>
                        ))} */}

                        {data && data.details.map((imgPath, index) => (
                            <Fragment key={index}>
                                {index === 0 &&
                                    uniqueProductImagesArray.map((img, index) => (
                                        <Fragment key={index}>
                                            {index === 0 && (
                                                <img
                                                    className={cx('img-header-fluid')}
                                                    src={
                                                        `http://127.0.0.1:8000/img/product/` +
                                                        imgPath.product_id +
                                                        '/' +
                                                        // imgPath.trim()
                                                        img
                                                    }
                                                    alt={`Product`}
                                                />
                                            )}
                                        </Fragment>
                                    ))}
                            </Fragment>
                        ))}
                        <div className={cx('slide-img')}>
                            {uniqueProductImagesArray && uniqueProductImagesArray.map(
                                (imgPath, index) =>
                                    index < 4 && (
                                        <Fragment key={index}>
                                            {uniqueProductImagesArray[index] && (
                                                <img
                                                    src={
                                                        `http://127.0.0.1:8000/img/product/` +
                                                        data.product_id +
                                                        '/' +
                                                        uniqueProductImagesArray[index]
                                                    }
                                                    className={cx('small-img')}
                                                    alt={'IMG '}
                                                />
                                            )}
                                        </Fragment>
                                    ),
                            )}
                        </div>

                        {/* {data.details.map(
                            (detail, index) =>
                                uniqueProductImagesArray.includes(detail.product_image) && (
                                    <div key={index}>
                                        <img
                                            src={`http://127.0.0.1:8000/img/product/${detail.product_id}/${detail.product_image}`}
                                            alt={`Product ${detail.product_id}`}
                                        />
                                    </div>
                                ),
                        )} */}

                        {/* {imgPath.product_image.split(',').map((imageURL, imgIndex) => (
                                    
                                ))} */}

                        {/* <img src={data.mainimg} className="img-header-fluid" alt="" />
                        <div className={cx('slide-img')}>
                            {data.details.map((imgPath) => (
                                <img
                                    key={imgPath.iddp}
                                    src={imgPath.imgdetail}
                                    className={cx('small-img')}
                                    alt={'IMG ' + imgPath.iddp}
                                    // onClick={() => handleMouseOversup(imgPath)}
                                />
                            ))}
                        </div> */}
                    </div>
                    <div className={cx('card-body')}>
                        <p className={cx('prod-name')}>{data.product_name}</p>
                    </div>
                    <div className={cx('card-footer')}>
                        <div className="row">
                            {data.discounts !== null ? (
                                <div className={cx('div_price')}>
                                    <h5 className={cx('prod-price')}>
                                        {(data.product_price -
                                            data.product_price * (data.discounts.discount_value / 100)).toLocaleString('vi-VN')}
                                        đ
                                    </h5>

                                    <h5 className={cx('prod-price-discount')}>{data.product_price.toLocaleString('vi-VN')}đ</h5>
                                </div>
                            ) : (
                                <div className={cx('div_price')}>
                                    <h5 className={cx('prod-price')}>{data.product_price.toLocaleString('vi-VN')}đ</h5>
                                </div>
                            )}
                            <div className="col-sm-6">
                                <button className={cx('btn-dark-detail')}>Chi tiết</button>
                            </div>
                        </div>
                    </div>
                    {data.discounts !== null && (
                        <div className={cx('promotion-tag')}>
                            <p className={cx('promotion-price')}>{data.discounts.discount_value}%</p>
                            GIẢM
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Product.prototype = {
    data: PropTypes.object.isRequired,
};

export default Product;
