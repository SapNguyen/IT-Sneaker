import Product from '~/Components/Product';
import classNames from 'classnames/bind';
import styles from './SpecialPrice.module.scss';
import BrandProduct from '../BrandProduct';
// import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as productsServices from '~/services/productsService';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SpecialPrice() {
    const [productValue, setProductValue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPIProduct = async () => {
            try {
                setLoading(true);
                const result = await productsServices.detailproduct();

                setProductValue(result.products);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIProduct();
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm đặc biệt</title>
                </Helmet>
                <div className={cx('content')}>
                    {/* <Sidebar /> */}
                    <div className={cx('product')}>
                        {productValue.map((result) => (
                            <Product key={result.idp} data={result} />
                        ))}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                        {/* <Product
                            nameproduct="Giày Converse Chuck 70 Seasonal Color Canvas"
                            priceproduct="2,000,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/a05584c_3_a7d20e98ba91464f9fa53c23d3dc83ba_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/a05584c_2_94ef389a2a9046428ef541e955014a34_icon.jpg',
                            ]}
                        /> */}
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default SpecialPrice;
