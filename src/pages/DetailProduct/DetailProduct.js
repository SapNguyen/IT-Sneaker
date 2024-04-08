import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { Helmet } from 'react-helmet';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetailProductItem from '~/Components/DetailProductItem';
import DescriptionProduct from '~/Components/DescriptionProduct';
import FeedbackProduct from '~/Components/FeedbackProduct';
import InfoProduct from '~/Components/InfoProduct';
import NewProduct from '~/Components/NewProduct';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import SimilarProduct from '~/Components/SimilarProduct';
import * as productsService from '~/services/productsService';

const cx = classNames.bind(styles);

function DetailProduct() {
    const [loading, setLoading] = useState(false);
    const [productResult, setProductResult] = useState([]); //mảng này về sau dùng API
    const [feedbackResult, setFeedbackResult] = useState({});
    const [countfeedbackResult, setCountFeedbackResult] = useState({});
    const [starResult, setStarResult] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageAPI, setPagehAPI] = useState(1);

    const { productId } = useParams();

    const handlePageChange = (pageNumber) => {
        setPagehAPI(pageNumber);
    };

    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);

            const result = await productsService.detail(productId);

            setProductResult(result.products);

            setLoading(false);
        };
        fetchAPI();

        const feedbackAPI = async (page) => {
            const result = await productsService.feedback_product(productId, starResult, pageAPI);

            setFeedbackResult(result.products);
            setCurrentPage(page);
        };
        feedbackAPI(pageAPI);

        const countAPI = async () => {
            const result = await productsService.count_feedback(productId);

            setCountFeedbackResult(result.products);
        };
        countAPI();

        setLoading(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, starResult, pageAPI]);

    const handleStarClick = (data) => {
        setStarResult(data);
    };

    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Chi tiết sản phẩm {productId}</title>
            </Helmet>
            {/* style="margin-top: 25px;padding-left: 10%" */}
            <div className={cx(styles.container, 'container-fluid', 'mt-3', 'd-flex')}>
                {/* style="margin-top:40px !important; padding-left: 0px !important " */}
                <p className={cx('pid')} id="pid">
                    ID={productId}
                </p>
                {/* style="display: none" */}
                {productResult && productResult.map((result, index) => (
                    <div className="row" key={index}>
                        <div className="col-sm-8">
                            {/* style="background:white;" */}
                            <DetailProductItem data={result} />
                            <DescriptionProduct data={result} />
                            <FeedbackProduct
                                data={feedbackResult}
                                setStar={handleStarClick}
                                count={countfeedbackResult}
                                currentPage={currentPage}
                                handlePageChange={handlePageChange}
                            />
                        </div>
                        <div className="col-sm-4">
                            <InfoProduct data={result} />
                            <NewProduct data={result} />
                            {/* <SimilarProduct/> */}
                        </div>
                    </div>
                ))}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            </div>
        </main>
    );
}

export default DetailProduct;
