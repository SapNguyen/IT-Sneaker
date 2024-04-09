import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './ProductBrand.module.scss';
import Product from '~/Components/Product';
import Sidebar from '~/layouts/components/Sidebar';
import IntroBrand from '~/layouts/components/IntroBrand';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import * as productsServices from '~/services/productsService';
import * as brandsServices from '~/services/brandsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import Pagination from '~/Components/Pagination';

const cx = classNames.bind(styles);

function ProductBrand() {
    const { brandName } = useParams();

    const [productValue, setProductValue] = useState(false);
    const [brandValue, setBrandValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [fetchAPI, setFetchAPI] = useState(1);

    const [selectedPrices, setSelectedPrices] = useState([]);

    const [priorityCheckboxState, setPriorityCheckboxState] = useState('');

    const handleCheckboxChange = (price) => {
        // Kiểm tra xem giá đã được chọn chưa
        if (selectedPrices.includes(price)) {
            // Nếu đã chọn, loại bỏ giá khỏi danh sách
            setSelectedPrices(selectedPrices.filter((selectedPrice) => selectedPrice !== price));
        } else {
            // Nếu chưa chọn, thêm giá vào danh sách
            setSelectedPrices([...selectedPrices, price]);
        }
    };

    const handleCheckboxChangePriority = (priority) => {
        setPriorityCheckboxState(priority);
        setSortType(priority);
    };

    const handleApplyFilterPriory = () => {};

    const handleApplyFilter = () => {};

    const handlePageChange = (pageNumber) => {
        setFetchAPI(pageNumber);
    };

    useEffect(() => {
        const fetchAPIBrand = async (page) => {
            try {
                const selectedValuesJSON = JSON.stringify(selectedPrices);

                const resultBrand = await brandsServices.brandtitle(brandName);

                setBrandValue(resultBrand && resultBrand.data);

                setLoading(true);
                const result = await productsServices.productforbrand(
                    brandName,
                    priorityCheckboxState,
                    selectedValuesJSON,
                    fetchAPI,
                );
                setTotalPages(result && result.products.last_page);
                setCurrentPage(page);
                // console.log(result.products);
                setProductValue(result && result.products);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIBrand(fetchAPI);
        // fetchAPIProduct();
    }, [brandName, selectedPrices, priorityCheckboxState, fetchAPI]); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    // console.log(brandName);

    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>

                {brandValue && brandValue.map((result) => <IntroBrand key={result.brand_id} data={result} />)}

                <div className={cx('content')}>
                    <div>
                        <div className={cx('sidebar-listbrand')}>
                            <div className={cx('title-listbrand')}>DANH MỤC SẢN PHẨM</div>
                            <Sidebar />
                        </div>
                        <div className={cx('sidebar-listbrand')}>
                            <div className={cx('title-listbrand')}>MỨC GIÁ</div>

                            <div className={cx('list-list-product')}>
                                <label className={cx('label-checkbox')}>
                                    <input
                                        type="checkbox"
                                        value="0-500000"
                                        checked={selectedPrices.includes('0-500000')}
                                        onChange={() => handleCheckboxChange('0-500000')}
                                        onClick={handleApplyFilter}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    Dưới 500.000đ
                                </label>

                                <label className={cx('label-checkbox')}>
                                    <input
                                        type="checkbox"
                                        value="500000-1000000"
                                        checked={selectedPrices.includes('500000-1000000')}
                                        onChange={() => handleCheckboxChange('500000-1000000')}
                                        onClick={handleApplyFilter}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    500.000đ - 1.000.000đ
                                </label>

                                <label className={cx('label-checkbox')}>
                                    <input
                                        type="checkbox"
                                        value="1000000-1500000"
                                        checked={selectedPrices.includes('1000000-1500000')}
                                        onChange={() => handleCheckboxChange('1000000-1500000')}
                                        onClick={handleApplyFilter}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    1.000.000đ - 1.500.000đ
                                </label>
                                <label className={cx('label-checkbox')}>
                                    <input
                                        type="checkbox"
                                        value="1500000-2000000"
                                        checked={selectedPrices.includes('1500000-2000000')}
                                        onChange={() => handleCheckboxChange('1500000-2000000')}
                                        onClick={handleApplyFilter}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    1.500.000đ - 2.000.000đ
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={cx('product')}>
                        <div className={cx('priority')}>
                            <div className={cx('title-priority')}>Ưu tiên xem:</div>

                            <div className={cx('list-list-priority')}>
                                <label className={cx('label-checkbox-priority')}>
                                    <input
                                        type="checkbox"
                                        value="A-Z"
                                        checked={sortType === 'A-Z'}
                                        onChange={() => handleCheckboxChangePriority('A-Z')}
                                        onClick={handleApplyFilterPriory}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    Từ A → Z
                                </label>

                                <label className={cx('label-checkbox-priority')}>
                                    <input
                                        type="checkbox"
                                        value="Z-A"
                                        checked={sortType === 'Z-A'}
                                        onChange={() => handleCheckboxChangePriority('Z-A')}
                                        onClick={handleApplyFilterPriory}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    Từ Z → A
                                </label>

                                <label className={cx('label-checkbox-priority')}>
                                    <input
                                        type="checkbox"
                                        value="Up"
                                        checked={sortType === 'Up'}
                                        onChange={() => handleCheckboxChangePriority('Up')}
                                        onClick={handleApplyFilterPriory}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    Giá tăng dần
                                </label>

                                <label className={cx('label-checkbox-priority')}>
                                    <input
                                        type="checkbox"
                                        value="Down"
                                        checked={sortType === 'Down'}
                                        onChange={() => handleCheckboxChangePriority('Down')}
                                        onClick={handleApplyFilterPriory}
                                    />
                                    <span className={cx('checkmark')}></span>
                                    Giá giảm dần
                                </label>
                            </div>
                        </div>
                        <div className={cx('d-ruby')}>
                            {productValue &&
                                productValue.data.map((result) => (
                                    <div key={result.product_id}>
                                        <Link to={`/product/${result.product_id}`}>
                                            <Product key={result.product_id} data={result} />
                                        </Link>
                                    </div>
                                ))}
                        </div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
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
