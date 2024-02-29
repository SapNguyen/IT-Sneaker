import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';

const cx = classNames.bind(styles);

function NewProduct() {
    return (
        <div className={cx('container')}>
            {/* style="margin-top: 80px" */}
            <p className={cx('title')}>SẢN PHẨM MỚI</p>
            {/* style="font-size: 22px" */}
            <div className="container-fluid mt-3">
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
