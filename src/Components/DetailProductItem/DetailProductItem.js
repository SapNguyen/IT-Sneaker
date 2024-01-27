import classNames from 'classnames/bind';
import styles from './DetailProductItem.module.scss';
import './DetailProductItem.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from '../CustomNextArrow';
import CustomPrevArrow from '../CustomPrevArrow';

const cx = classNames.bind(styles);

function DetailProduct() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="row">
            <div className="col-sm-6">
                <img
                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_1024x1024.jpg"
                    className={cx('large-img')}
                    alt="img-product"
                />
            </div>
            <div className="col-sm-6">
                <div className={cx(styles.carousel, 'owl-carousel', 'owl-theme', 'owl-loaded')}>
                    <Slider {...settings} className="d-flex">
                        <div className={cx('owl-item', styles['owl-item-active'])}>
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_small.jpg"
                                    className={cx('small-img')}
                                    alt="img1"
                                />
                            </div>
                        </div>
                        <div className={cx('owl-item', styles['owl-item-active'])}>
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_small.jpg"
                                    className={cx('small-img')}
                                    alt="img1"
                                />
                            </div>
                        </div>
                        <div className={cx('owl-item', styles['owl-item-active'])}>
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_small.jpg"
                                    className={cx('small-img')}
                                    alt="img1"
                                />
                            </div>
                        </div>
                        <div className={cx('owl-item', styles['owl-item-active'])}>
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_small.jpg"
                                    className={cx('small-img')}
                                    alt="img1"
                                />
                            </div>
                        </div>
                    </Slider>
                    {/* <div className={cx(styles['owl-stage-outer'], 'owl-stage-outer')}></div>
                    <div className="owl-stage">

                        
                        <div className={cx('owl-item', styles['owl-item-active'])} >
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__web_1_2a9e4b0dba8d41f08eb070e2b7fd6d7f_small.jpg"
                                    className={cx('small-img')}
                                    alt="img1"
                                />
                            </div>
                        </div>
                        <div className={cx('owl-item', styles['owl-item-active'])}>
                            <div className="item">
                                <img
                                    src="https://product.hstatic.net/200000265619/product/vn000csajvy__2_04ec9a66149c440da59edf91cd8253f5_small.jpg"
                                    className={cx('small-img')}
                                    alt="img2"
                                />
                            </div>
                        </div>
                        


                    </div> */}
                </div>

                <div className="owl-nav">
                    <button type="button" className="btn btn-link owl-prev">
                        <span className={cx('material-symbols-outlined')}>
                            {/* style="font-size: 40px" */}
                            chevron_left
                        </span>
                    </button>

                    <button type="button" className="btn btn-link owl-next">
                        <span className={cx('material-symbols-outlined')}>
                            {/* style="font-size: 40px" */}
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            <div className={cx('info')}>
                {/* style="margin-top: 30px" */}
                <h4>g</h4>
                <div className={cx('status-line')}>
                    <span className="mgr-5"> Thương hiệu: </span>
                    <span className={cx(styles.brand, 'mgr-10')}></span>
                    {/* style="color: #d0021b" */}
                </div>
                <div className={cx(styles['status-line'], 'my-2')}>
                    {/* style="margin: 10px 0" */}
                    <div className="flex-feedback">
                        {/*  style="border-right:1px solid rgb(0, 0, 0)" */}
                        <span className={cx('tile-feedback')}>Đánh Giá:</span>
                        {/* style="color: #747474" */}
                        <span className={cx('content-feedback')}> </span>
                        {/* style="font-size: 18px;margin-left:10px;margin-right:20px" */}
                    </div>
                    <div className={cx('flex')}>
                        {/* style="margin-left: 20px" */}
                        <p className={cx('average-star')}></p>
                        <div className={cx('flex-star')}>
                            {/* style="margin-left: 5px" */}
                            <div className={cx('relative-star')}>
                                {/* style="position: relative;height:24px" */}
                                <span className="material-symbols-outlined star">star</span>
                                <span className="material-symbols-outlined star-fill w-100">
                                    {/* style="width: 100%" */}
                                    star
                                </span>
                            </div>
                            <div className={cx('relative-star')}>
                                {/* style="position: relative;height:24px" */}
                                <span className={cx(styles.star, 'material-symbols-outlined')}>star</span>
                                <span
                                    className={cx('material-symbols-outlined', styles['star-fill'])}
                                    // style="width: {{$star_fill*100}}%"
                                >
                                    star
                                </span>
                            </div>
                            <div className={cx('relative-star')}>
                                style="position: relative;height:24px"
                                <span className={cx(styles.star, 'material-symbols-outlined')}>star</span>
                                {/* className="material-symbols-outlined star" */}
                                <span className={cx('material-symbols-outlined', styles['star-fill'])}>
                                    {/* style="width: 0px" */}
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={cx(styles['status-line'], 'my-2')}>
                    <div className="flex" style="border-right:1px solid rgb(0, 0, 0)">
                        <span style="color: #747474">Đánh Giá:</span>
                        <span style="font-size: 18px;margin-left:10px;margin-right:20px"> 0</span>
                    </div>
                    <div className="flex" style="margin-left: 20px">
                        <p className="average-star"> 0 </p>
                        <div className="flex" style="margin-left: 5px">
                            <div style="position: relative;height:24px">
                                <span className="material-symbols-outlined star">star</span>
                                <span className="material-symbols-outlined star-fill" style="width: 0px">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={cx('flex-price')}>
                    {/*  */}
                    <h2 className={cx('price')}>g</h2>
                    <h5 className={cx('price-disabled')}>g</h5>
                    <div className={cx('discount-value')}>g</div>
                </div>
                <h2 className={cx('price')}>g</h2>
                <div>
                    <span className={cx('promotion-title')}>KHUYẾN MÃI</span>
                    {/* style="font-size: 18px" */}
                    <div className={cx('promotion')}>
                        <div className={cx('promotion-item')}>
                            <div className={cx('promotion-tag')}>
                                <span className={cx('rectangle')}></span>
                            </div>
                            <div className={cx('promotion-info', 'shadow')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('row', styles['div-size'])}>
                {/* id="div_size" style="margin-top:20px" */}
                <h6 className={cx('col-sm-2', 'mt-2')}>
                    {/* style="margin-top: 8px" */}
                    Size:
                </h6>
                <div className={cx(styles['size-box'], 'col-sm-1')}>
                    <p className={cx('size-id')}></p>
                    <div className={cx('div-quantity')}>
                        <p className={cx('amount-hidden')}></p>
                        {/* style="display: none" */}
                        <p className={cx('color-hidden')}></p>
                        {/*  style="display: none" */}
                    </div>
                </div>
            </div>
            <div className={cx('row', styles['div-color'])}>
                {/* id="div_color" style="margin-top:20px;align-items: center" */}
                <h6 className={cx('col-sm-2', 'mt-2', 'pt-1', 'pb-0')}>
                    {/* style="margin-top: 10px;padding-top: 5px 0;" */}
                    Màu:
                </h6>
                <div className={cx(styles['size-box'], styles['color-box'], 'col-sm-1')}>
                    {/* style="width: auto !important;margin-top:10px" */}
                    <p className="px-3"></p>
                    {/* "color" style="padding: 0 15px" */}
                    <img
                        src="/img/product/{{$colors[$i]->product_id}}/{{explode(',',$colors[$i]->product_image)[0]}}"
                        // style="display:none"
                        className="d-none"
                        alt=""
                    />
                </div>
            </div>
            <div className={cx('material')}>
                <h6 className="mt-2">Chất liệu:</h6>
                {/* style="margin-top: 8px" */}
                <div className={cx('chat-lieu')}></div>
                {/* chat-lieu col-sm- */}
            </div>
            <div className={cx('material')} id="setAmount">
                <input type="hidden" name="size" id="size_color" />
                <h6 className="mt-2">Số lượng:</h6>
                {/* style="margin-top: 8px" */}
                <div className={cx('btn-group')}>
                    <div className={cx('button')}>
                        <span className={cx('material-symbols-outlined', 'fs-5')}>
                            {/* style="font-size: 20px" */}
                            remove
                        </span>
                    </div>
                    <input type="number" id="buy-amount" name="amount" value="1" min="1" required />
                    <div className={cx('button')}>
                        <span className={cx('material-symbols-outlined', 'fs-5')}>
                            {/* style="font-size: 20px" */}
                            add
                        </span>
                    </div>
                </div>
                <p id="has-amount"></p>
            </div>
            <div className={cx('div-alert')}></div>
            {/* id="div_alert" style="color: red;font-size:14px"*/}
            <div className={cx(styles.material, 'd-flex', 'justify-content-center')}>
                {/* style="justify-content: center" */}
                <button type="submit" className={cx('buy-btn btn-allow')}>
                    Mua ngay
                </button>
            </div>
        </div>
    );
}

export default DetailProduct;
