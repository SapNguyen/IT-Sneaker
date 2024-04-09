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

    const { productId } = useParams();


    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);

            const result = await productsService.detail(productId);

            setProductResult(result && result.products);

            setLoading(false);
        };
        fetchAPI();

        const feedbackAPI = async () => {
            const result = await productsService.feedback_product(productId, starResult);

            setFeedbackResult(result && result.products);
        };
        feedbackAPI();

        const countAPI = async () => {
            const result = await productsService.count_feedback(productId);

            setCountFeedbackResult(result && result.products);
        };
        countAPI();

        setLoading(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, starResult]);

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
                        <div className={cx('col-sm-8',styles['col-sm-8-none'])}>
                            {/* style="background:white;" */}
                            <DetailProductItem data={result} />
                            <DescriptionProduct data={result} />
                            <FeedbackProduct
                                data={feedbackResult}
                                setStar={handleStarClick}
                                count={countfeedbackResult}
                            />
                        </div>
                        <div className={cx('col-sm-4',styles['col-sm-4-none'])}>
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
