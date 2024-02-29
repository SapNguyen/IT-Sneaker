import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { Helmet } from 'react-helmet';
import DetailProductItem from '~/Components/DetailProductItem';
import DescriptionProduct from '~/Components/DescriptionProduct';
import FeedbackProduct from '~/Components/FeedbackProduct';
import InfoProduct from '~/Components/InfoProduct';
import NewProduct from '~/Components/NewProduct';
import { useParams } from 'react-router-dom';
// import SimilarProduct from '~/Components/SimilarProduct';

const cx = classNames.bind(styles);

function DetailProduct() {
    const { productId } = useParams();

    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Chi tiết sản phẩm {productId}</title>
            </Helmet>
            {/* style="margin-top: 25px;padding-left: 10%" */}
            <div className={cx(styles.container, 'container-fluid', 'mt-3','d-flex')}>
                {/* style="margin-top:40px !important; padding-left: 0px !important " */}
                <p className={cx('pid')} id="pid">
                    ID=1
                </p>
                {/* style="display: none" */}
                <div className="row">
                    <div className="col-sm-8">
                        {/* style="background:white;" */}
                        <DetailProductItem />
                        <DescriptionProduct />
                        <FeedbackProduct />
                    </div>
                    <div className="col-sm-4">
                    <InfoProduct />
                    <NewProduct />
                    {/* <SimilarProduct/> */}
                </div>
                </div>
                
            </div>
        </main>
    );
}

export default DetailProduct;
