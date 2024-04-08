import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import { Fragment, useEffect, useState } from 'react';
import * as productsService from '~/services/productsService';
import NewProductDetail from '../NewProductDetail';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NewProduct({ data }) {
    const [productResult, setProductResult] = useState([]); //mảng này về sau dùng API

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await productsService.similar(data.brand_id);

            setProductResult(result && result.products);
        };
        fetchAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.brand_id]);

    return (
        <div className={cx('container')}>
            <p className={cx('title')}>SẢN PHẨM TƯƠNG TỰ</p>
            <div className="container-fluid mt-3">
                {productResult && productResult.map((product, index) => (
                    <Fragment key={index}>
                        <Link to={`/product/${product.product_id}`}>
                            <NewProductDetail data={product} />
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default NewProduct;
