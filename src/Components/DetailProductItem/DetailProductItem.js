import classNames from 'classnames/bind';
import styles from './DetailProductItem.module.scss';
import './DetailProductItem.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from '../CustomNextArrow';
import CustomPrevArrow from '../CustomPrevArrow';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faStar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DetailProduct() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [inputQuantityValue, setInputQuantityValue] = useState('');

    const handleInputQuantityChange = (event) => {
        setInputQuantityValue(event.target.value);
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
                <div className={cx(styles.carousel)}>
                    {/* , 'owl-carousel', 'owl-theme', 'owl-loaded' */}
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
                <div className={cx('info')}>
                    {/* style="margin-top: 30px" */}
                    <h4 className={cx('product-name')}>
                        <FontAwesomeIcon icon={faCut} className={cx('icon-cut')} />
                        Giày Converse Chuck Taylor All Star Cx Spray Paint
                    </h4>
                    <div className={cx('status-line')}>
                        <span className="mr-2"> Thương hiệu: </span>
                        <span className={cx(styles.brand, 'mr-3')}>Converse</span>
                        {/* style="color: #d0021b" */}
                    </div>
                    <div className={cx(styles['status-line'], 'my-2')}>
                        {/* style="margin: 10px 0" */}
                        <div className={cx('flex-feedback')}>
                            {/*  style="border-right:1px solid rgb(0, 0, 0)" */}
                            <span className={cx('title-feedback')}>Đánh Giá:</span>
                            {/* style="color: #747474" */}
                            <span className={cx('content-feedback')}>0</span>
                            {/* style="font-size: 18px;margin-left:10px;margin-right:20px" */}
                        </div>
                        <div className={cx('flex-star')}>
                            {/* style="margin-left: 20px" */}
                            <div className={cx('average-star')}>0</div>
                            <div className={cx('flex-content-star')}>
                                {/* style="margin-left: 5px" */}
                                <div className={cx('relative-star')}>
                                    {/* style="position: relative;height:24px" */}
                                    <span className={cx(styles.star)}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span
                                        className={cx(styles['star-fill'])}
                                        // style="width: {{$star_fill*100}}%"
                                    >
                                        <FontAwesomeIcon icon={faStar} />
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
                        <div className={cx('price')}>2.600.000đ</div>
                        <h5 className={cx('price-disabled')}>2.500.000đ</h5>
                        <div className={cx('discount-value')}>10%</div>
                    </div>

                    <div>
                        <span className={cx('title-discount')}>KHUYẾN MÃI</span>
                        <div id="promotion">
                            <div class={cx('promotion-item')}>
                                <div class={cx('promotion-tag')}>
                                    <span class={cx('rectangle')}>TẾT</span>
                                </div>
                                <div class={cx(styles['promotion-info'], 'shadow')}>GIẢM 10%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    {/* id="div_size" style="margin-top:20px" */}
                    <h6 className={cx('col-sm-2', 'mt-1', styles['title-size'])}>
                        {/* style="margin-top: 8px" */}
                        Size:
                    </h6>
                    <div className={cx(styles['size-box'], 'col-sm-1')}>
                        <div className={cx('size-id')}>39</div>
                        <div className={cx('div-quantity')}>
                            <p className={cx('amount-hidden')}>9</p>
                            {/* style="display: none" */}
                            <p className={cx('color-hidden')}>White</p>
                            {/*  style="display: none" */}
                        </div>
                    </div>
                </div>
                <div className={cx('row', styles['div-color'])}>
                    {/* id="div_color" style="margin-top:20px;align-items: center" */}
                    <h6 className={cx(styles['title-color'], 'col-sm-2', 'mt-2', 'pt-1', 'pb-0')}>
                        {/* style="margin-top: 10px;padding-top: 5px 0;" */}
                        Màu:
                    </h6>
                    <div className={cx(styles['size-box'], styles['color-box'], 'col-sm-1')}>
                        {/* style="width: auto !important;margin-top:10px" */}
                        <div className="px-3">BLACK/CYBER TEAL/GHOSTED</div>
                        {/* "color" style="padding: 0 15px" */}
                        <img
                            src="/img/product/{{$colors[$i]->product_id}}/{{explode(',',$colors[$i]->product_image)[0]}}"
                            // style="display:none"
                            className="d-none"
                            alt=""
                        />
                    </div>
                    <div className={cx(styles['size-box'], styles['color-box'], 'col-sm-1')}>
                        {/* style="width: auto !important;margin-top:10px" */}
                        <div className="px-3">WHITE/CYBER TEAL/GHOSTED</div>
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
                    <h6 className={cx(styles['title-material'], 'mt-2')}>Chất liệu:</h6>
                    {/* style="margin-top: 8px" */}
                    <div className={cx(styles['size-box'], styles['material-box'], 'col-sm-1')}>
                        <div className="px-3">COTTON</div>
                    </div>
                    {/* chat-lieu col-sm- */}
                </div>
                <div className={cx('material')} id="setAmount">
                    <input
                        type="hidden"
                        name="size"
                        id="size_color"
                        value={inputQuantityValue}
                        onChange={handleInputQuantityChange}
                    />
                    <h6 className={cx(styles['title-quantity'], 'mt-2')}>Số lượng:</h6>
                    {/* style="margin-top: 8px" */}
                    <div className={cx('btn-group')}>
                        <div className={cx('button')}>
                            {/* <span className={cx('material-symbols-outlined', 'fs-5')}>
                                
                                remove
                            </span> */}
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                        <input
                            type="text"
                            className={cx('buy-amount')}
                            name="amount"
                            inputmode="numeric"
                            pattern="[0-9]*"
                        />
                        {/* value="1" min="1" required */}
                        <div className={cx('button')}>
                            {/* <span className={cx('material-symbols-outlined', 'fs-5')}>
                                
                                add
                            </span> */}
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                    <p className={cx('has-amount')}>9 sản phẩm có sẵn</p>
                </div>
                <div className={cx('div-alert')}>Vui lòng chọn Màu và Size</div>
                {/* id="div_alert" style="color: red;font-size:14px"*/}
                <div className={cx(styles.material, 'd-flex', 'justify-content-center')}>
                    {/* style="justify-content: center" */}
                    <button type="submit" className={cx('btn-buy', 'btn-allow')}>
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
