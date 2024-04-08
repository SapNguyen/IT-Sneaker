import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './ProductDiscount.module.scss';
import Product from '~/Components/Product';
import Sidebar from '~/layouts/components/Sidebar';
import IntroBrand from '~/layouts/components/IntroBrand';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import * as productsServices from '~/services/productsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import Pagination from '~/Components/Pagination';

const cx = classNames.bind(styles);

function ProductDiscount() {
    const { brandName } = useParams();

    const [productValue, setProductValue] = useState(false);
    // const [brandValue, setBrandValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [fetchAPI, setFetchAPI] = useState(1);

    const [selectedPrices, setSelectedPrices] = useState([]);

    const [priorityCheckboxState, setPriorityCheckboxState] = useState('');

    const result = {
        img: 'https://file.hstatic.net/200000265619/file/banner_danh_muc___sneaker_lab_1920x540_328a0ee6b1004decba47f03d31fe64c6.jpg',
        brand_des:
            'Hiểu được sức hút trong vẻ đẹp và tầm quan trọng trong việc giữ một đôi giày luôn mới, Sneaker LAB đã kết hợp niềm đam mê với văn hóa giày thể thao và khoa học để tạo ra giải pháp vệ sinh hiệu quả. Sneaker LAB đã tận dụng đặc tính từ công nghệ sinh học và khai thác một loại vi khuẩn có lợi, được sử dụng trong phân hủy sinh học chất thải hữu cơ. Từ đó cho ra đời công thức làm sạch độc quyền. Công nghệ sinh học này làm sạch ở cấp độ vi mô, duy trì hoạt chất bảo vệ lâu dài suốt quá trình sử dụng, giúp đôi giày của bạn sạch lâu hơn. Đồng thời, Sneaker LAB cũng chính thức được chứng nhận “Green Tag” - một trong những nhãn hiệu thân thiện với môi trường, đáng tin cậy và được công nhận rộng rãi. Với niềm tự hào là một thương hiệu đến từ Nam Phi áp dụng cách tiếp cận mới mẻ trong lĩnh vực chăm sóc giày, Sneaker LAB đã có mặt tại hơn 60 quốc gia trên thế giới và con số sẽ không ngừng tăng lên.',
    };

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

                setLoading(true);
                const result = await productsServices.productfordiscount(
                    brandName,
                    priorityCheckboxState,
                    selectedValuesJSON,
                    fetchAPI,
                );
                setTotalPages(result.products.last_page);
                setCurrentPage(page);
                // console.log(result.products);
                setProductValue(result.products);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIBrand(fetchAPI);
        // fetchAPIProduct();
    }, [brandName, selectedPrices, priorityCheckboxState, fetchAPI]);

    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>

                <IntroBrand data={result} />

                <div className={cx('content')}>
                    <div>
                        <div className={cx('sidebar-listbrand')}>
                            <div className={cx('title-listbrand')}>DANH MỤC SẢN PHẨM</div>
                            <Sidebar discount={true}/>
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
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default ProductDiscount;
