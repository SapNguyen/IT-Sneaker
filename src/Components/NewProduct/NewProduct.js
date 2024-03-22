import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import { Fragment, useEffect, useState } from 'react';
import * as productsService from '~/services/productsService';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NewProduct({ data }) {
    const [productResult, setProductResult] = useState([]); //mảng này về sau dùng API

    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data.details.forEach((detail) => {
        // Thêm các giá trị product_image vào Set
        const split = detail.product_image.split(',');
        split.forEach((fileName) => {
            uniqueProductImages.add(fileName);
        });
    });

    const uniqueProductImagesArray = Array.from(uniqueProductImages).reverse();

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await productsService.similar(data.brand_id);

            setProductResult(result.products);
        };
        fetchAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.brand_id]);

    return (
        <div className={cx('container')}>
            <p className={cx('title')}>SẢN PHẨM TƯƠNG TỰ</p>
            <div className="container-fluid mt-3">
                {productResult.map((product, index) => (
                    <Link
                        key={index}
                        className={cx('row', styles['box-product'])}
                        to={`/product/${product.product_id}`}
                    >
                        <div className="col-sm-4 p-0">
                            {data.details.map((imgPath, index) => (
                                <Fragment key={index}>
                                    {index === 0 &&
                                        uniqueProductImagesArray.map((img, index) => (
                                            <Fragment key={index}>
                                                {index === 0 && (
                                                    <img
                                                        src={
                                                            `http://127.0.0.1:8000/img/product/` +
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
                            <p className={cx('ps_name')}>{product.product_name}</p>
                            {data.discounts !== null ? (
                                <div className={cx('div-ps-price')}>
                                    <p className={cx('text-new-product')}>
                                        {data.product_price -
                                            data.product_price * (data.discounts.discount_value / 100)}
                                        đ
                                    </p>
                                    <p className={cx('ps-price-disabled')}>{data.product_price}đ</p>
                                </div>
                            ) : (
                                <div className={cx('div-ps-price')}>
                                    <p className={cx('text-new-product')}>{data.product_price}đ</p>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
                <div className={cx('row', styles['box-product'])} href="/products/{{$p_similar->product_id}}">
                    <div className="col-sm-4 p-0">
                        {/* style="padding:0" */}
                        <img
                            src="https://product.hstatic.net/200000265619/product/12sbu232_003_web_86062cf8b3cf4983a178033f7de48a2d_medium.jpg"
                            className={cx('img-fluid')}
                            // style="height: 100%"
                            alt=""
                        />
                    </div>
                    <div className="col-sm-8">
                        <p className={cx('ps_name')}>Dép Sneaker Buzz Classic Slide I</p>
                        <div className={cx('div-ps-price')}>
                            <p className={cx('text-new-product')}>2.340.000đ</p>
                            {/* style="font-weight: bolder;color: red" */}
                            <p className={cx('ps-price-disabled')}>2.600.000đ</p>
                        </div>
                        {/* <p className={cx('text-new-product')}></p> */}
                        {/* style="font-weight: bolder;color: red" */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
