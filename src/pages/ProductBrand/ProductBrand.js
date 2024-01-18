import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './ProductBrand.module.scss';
import Product from '~/Components/Product';
import Sidebar from '~/layouts/components/Sidebar';
import IntroBrand from '~/layouts/components/IntroBrand';
import { Helmet } from 'react-helmet';
import * as productsServices from '~/services/productsService';
import * as brandsServices from '~/services/brandsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductBrand({ id }) {
    const [productValue, setProductValue] = useState([]);
    const [brandValue, setBrandValue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPIProduct = async () => {
            try {
                setLoading(true);
                const result = await productsServices.productforbrand(id);

                setProductValue(result.products);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchAPIBrand = async () => {
            try {
                const resultBrand = await brandsServices.brandtitle(id);

                setBrandValue(resultBrand.brands);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAPIBrand();
        fetchAPIProduct();
    }, [id]); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>

                {brandValue.map((result) => (
                    <IntroBrand key={result.idb} data={result} />
                ))}

                <div className={cx('content')}>
                    <Sidebar />
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
                        />
                        <Product
                            nameproduct="Giày K-Swiss Vista Trainer"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/07000-142-m-01-web_be101c4afc914974aa8eb8404f0786b4_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/07000-142-m-01-web_be101c4afc914974aa8eb8404f0786b4_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/07000-142-m-02_af748f936b16434ab3d21d346b722907_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/07000-142-m-05_aa89e3c249e443f196c3bebbbf3324be_icon.jpg',
                            ]}
                        />
                        <Product
                            nameproduct="Giày Nike JORDAN POINT LANE"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/cz4166-010-phsrh000-3144_490b4ad615aa4e2099a04a764afa037a_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phsrh000-3144_490b4ad615aa4e2099a04a764afa037a_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phslh001-3144_5080351a01944999a7a3c4c814fdb91c_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phcfh001-3144_e2acf7a84e704ab8a946ea422acc674c_icon.jpg',
                            ]}
                        />
                        <Product
                            nameproduct="Giày Palladium Pampa Travel Lite"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/77039-116-m-01-web_daf1c2b652cd43a789344eaa045006b5_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/77039-116-m-01-web_daf1c2b652cd43a789344eaa045006b5_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/77039-116-m-06_4a3e2dff4ee84ba3b69535f6da503b93_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/77039-116-m-02_44dfc61027a24b11898a89206f6b43d4_icon.jpg',
                            ]}
                        /> */}
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default ProductBrand;
