import classNames from 'classnames/bind';
import styles from './SimilarProduct.module.scss';

const cx = classNames.bind(styles);

function SimilarProduct() {
    return (
        <div className="mt-20">
            {/* style="margin-top: 80px" */}
            <p className="fs-5">SẢN PHẨM TƯƠNG TỰ</p>
            {/* style="font-size: 22px" */}
            <div className="container-fluid mt-3">
                <a className={cx('row', styles['box-product'])} href="/products/{{$p_similar->product_id}}">
                    <div className="col-sm-4 p-0">
                        {/* style="padding:0" */}
                        <img
                            src="/img/product/{{$p_similar->product_id}}/{{$p_similar->image}}"
                            className={cx('img-fluid')}
                            // style="height: 100%"
                            alt=""
                        />
                    </div>
                    <div className="col-sm-8">
                        <p className={cx('ps_name')}></p>
                        <div className={cx('div-ps-price')}>
                            <p className={cx('text-new-product')}></p>
                            {/* style="font-weight: bolder;color: red" */}
                            <p className={cx('ps-price-disabled')}></p>
                        </div>
                        <p className={cx('text-new-product')}></p>
                        {/* style="font-weight: bolder;color: red" */}
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SimilarProduct;
