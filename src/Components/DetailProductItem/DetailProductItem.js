import classNames from 'classnames/bind';
import styles from './DetailProductItem.module.scss';
import './DetailProductItem.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from '../CustomNextArrow';
import CustomPrevArrow from '../CustomPrevArrow';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faStar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const cx = classNames.bind(styles);

function DetailProduct({ data }) {
    const [inputQuantityValue, setInputQuantityValue] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertExceedQuantity, setShowAlertExceedQuantity] = useState(false);
    const [amount, setAmount] = useState(1);
    const [slider, setSlider] = useState(4);
    const [showQuantity, setShowQuantity] = useState(false);
    const [showChooseColor, setShowChooseColor] = useState(false);
    const [amountValue, setAmountValue] = useState('');
    const [chooseProductValue, setChooseProductValue] = useState({});
    const [availableColors, setAvailableColors] = useState([]);
    const [quantity0, setQuantity0] = useState([]);
    const [statuslargeImage, setStatusLargeImage] = useState(false);
    const [largeImage, setLargeImage] = useState('');

    // const hasAvailableSizes = data.details.some(detail => detail.quantity > 0);

    const handleImageClick = (imageUrl) => {
        setStatusLargeImage(true);
        setLargeImage(imageUrl);
    };

    const handleDecrease = () => {
        if (amount > 1) {
            // Đảm bảo giá trị không nhỏ hơn 1
            setAmount(amount - 1);
            setShowAlertExceedQuantity(false);
        }
    };

    const handleIncrease = () => {
        if (selectedSize && amountValue === '') {
            setShowChooseColor(true);
        } else {
            if (amount < amountValue) {
                setAmount(amount + 1);
            } else {
                setShowAlertExceedQuantity(true);
            }
        }
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size); // Lưu trữ size được chọn vào state
        setShowAlert(false);
        const product = data.details.find((item) => item.size === size && item.color === selectedColor);
        setChooseProductValue(product);
        if (product) {
            setShowQuantity(true);
            setAmountValue(product.quantity);
        }
        const colorsForSize = data.details.filter((detail) => detail.size === size).map((detail) => detail.color);

        setAvailableColors(colorsForSize);
        if (!colorsForSize.includes(selectedColor)) {
            setSelectedColor(null);
        }

        const outOfStockColors = data.details
            .filter((detail) => detail.size === size && detail.quantity === 0)
            .map((detail) => detail.color);

        setQuantity0(outOfStockColors);
        if (outOfStockColors.includes(selectedColor)) {
            setSelectedColor(null);
        }
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setShowAlert(false);
        setShowChooseColor(false);
        const product = data.details.find((item) => item.color === color && item.size === selectedSize);
        setChooseProductValue(product);
        if (product) {
            setShowQuantity(true);
            setAmountValue(product.quantity);
        }
    };

    const handleBuyNowClick = async (event) => {
        event.preventDefault();
        if (sessionStorage.getItem('userId')) {
            if (selectedColor && selectedSize) {
                // console.log(
                //     'User',
                //     sessionStorage.getItem('userId') + ' Product_id:',
                //     chooseProductValue.product_id + ' color:',
                //     chooseProductValue.color + ' size:',
                //     chooseProductValue.size + ' quantity:',
                //     amount,
                // );
                try {
                    const response = await axios.post(
                        `https://s25sneaker.000webhostapp.com/api/cart/add_product?mem_id=${sessionStorage.getItem(
                            'userId',
                        )}&product_id=${chooseProductValue.product_id}&color=${chooseProductValue.color}&size=${
                            chooseProductValue.size
                        }&quantity=${amount}`,
                    );
                    if (response.data.error === 'Giỏ hàng của bạn đã tồn tại sản phẩm này') {
                        toast.error('Giỏ hàng của bạn đã tồn tại sản phẩm này');
                    } else {
                        toast.success('Thêm giỏ hàng thành công');
                    }
                } catch (error) {
                    alert('Đã xảy ra lỗi khi thêm giỏi hàng. Vui lòng thử lại sau.');
                }
            } else {
                setShowAlert(true);
            }
        } else {
            sessionStorage.setItem('previousUrl', window.location.href);
            window.location.href = '/login';
        }
    };

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= amountValue) {
            setAmount(newValue);
        }
    };

    const uniqueProductImages = new Set();
    // Duyệt qua từng chi tiết sản phẩm trong mảng details của từng sản phẩm
    data &&
        data.details.forEach((detail) => {
            const split = detail.product_image.split(',');
            split.forEach((fileName) => {
                uniqueProductImages.add(fileName);
            });
            // console.log(uniqueProductImages);

            // console.log(detail.product_image);
            // Thêm các giá trị product_image vào Set
            // uniqueProductImages.add(detail.product_image);
        });

    const uniqueProductImagesArray = Array.from(uniqueProductImages && uniqueProductImages).reverse();

    const uniqueSizes = [...new Set(data.details.map((detail) => detail.size))];

    const uniqueColors = [...new Set(data.details.map((detail) => detail.color))];

    const handleInputQuantityChange = (event) => {
        setInputQuantityValue(event.target.value);
    };

    if (uniqueProductImagesArray && uniqueProductImagesArray.length < 4) {
        setSlider(uniqueProductImagesArray.length);
    }

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: slider,
        slidesToScroll: 1,
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

    const totalStars = data.feedbacks && data.feedbacks.reduce((total, feedback) => total + feedback.star, 0);

    // Tính trung bình số sao
    const averageStars = data.feedbacks && totalStars / data.feedbacks.length;

    const displayStars = isNaN(averageStars) ? 0 : averageStars;

    const integerPart = Math.floor(displayStars); // Phần nguyên

    const decimalPart = displayStars - integerPart; // Phần thập phân

    const stars = [];

    // Tạo mảng với số lượng sao màu đỏ và đen
    for (let i = 0; i < integerPart; i++) {
        stars.push({ type: 'red' });
    }
    if (decimalPart > 0) {
        stars.push({ type: 'half' }); // Nếu có phần thập phân, thêm một nửa sao màu đỏ
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push({ type: 'black' }); // Thêm các sao màu đen còn lại
    }

    return (
        <div className="row">
            {data &&
                data.details.map((imgPath, index) => (
                    // uniqueProductImagesArray.includes(imgPath.product_image.split(',')) && (
                    //     <Fragment key={index}>
                    //         {index === 0 && (
                    //             <div className="col-sm-6">
                    //                 {statuslargeImage ? (
                    //                     <img src={largeImage} className={cx('large-img')} alt="img-product" />
                    //                 ) : (
                    //                     <img
                    //                         src={
                    //                             `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                    //                             imgPath.product_id +
                    //                             '/' +
                    //                             imgPath.product_image
                    //                         }
                    //                         className={cx('large-img')}
                    //                         alt="img-product"
                    //                     />
                    //                 )}
                    //             </div>
                    //         )}
                    //     </Fragment>
                    // ),
                    <Fragment key={index}>
                        {index === 0 &&
                            uniqueProductImagesArray.map((img, index) => (
                                <Fragment key={index}>
                                    {index === 0 && (
                                        <div className="col-sm-6">
                                            {statuslargeImage ? (
                                                <img src={largeImage} className={cx('large-img')} alt="img-product" />
                                            ) : (
                                                <img
                                                    src={
                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                        imgPath.product_id +
                                                        '/' +
                                                        img
                                                    }
                                                    className={cx('large-img')}
                                                    alt="img-product"
                                                />
                                            )}
                                        </div>
                                    )}
                                </Fragment>
                            ))}
                    </Fragment>
                ))}

            <div className="col-sm-6">
                <div className={cx(styles.carousel)}>
                    <Slider {...settings} className={cx(uniqueProductImagesArray.length > 4 && 'd-flex')}>
                        {uniqueProductImagesArray.map((imgPath, index) => (
                            <Fragment key={index}>
                                {uniqueProductImagesArray[index] && (
                                    <div key={index} className={cx('owl-item', styles['owl-item-active'])}>
                                        <div className="item">
                                            <img
                                                src={
                                                    `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/` +
                                                    data.product_id +
                                                    '/' +
                                                    uniqueProductImagesArray[index]
                                                }
                                                className={cx('small-img')}
                                                alt="img1"
                                                onClick={() =>
                                                    handleImageClick(
                                                        `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/product/${data.product_id}/${uniqueProductImagesArray[index]}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </Slider>
                </div>
                <div className={cx('info')}>
                    {/* style="margin-top: 30px" */}
                    <h4 className={cx('product-name')}>
                        <FontAwesomeIcon icon={faCut} className={cx('icon-cut')} />
                        {data.product_name}
                    </h4>
                    <div className={cx('status-line')}>
                        <span className="mr-2"> Thương hiệu: </span>
                        <span className={cx(styles.brand, 'mr-3')}>{data.brands.brand_name}</span>
                        {/* style="color: #d0021b" */}
                    </div>
                    <div className={cx(styles['status-line'], 'my-2')}>
                        {/* style="margin: 10px 0" */}
                        <div className={cx('flex-feedback')}>
                            {/*  style="border-right:1px solid rgb(0, 0, 0)" */}
                            <span className={cx('title-feedback')}>Đánh Giá:</span>
                            {/* style="color: #747474" */}
                            <span className={cx('content-feedback')}>{data.feedbacks.length}</span>
                            {/* style="font-size: 18px;margin-left:10px;margin-right:20px" */}
                        </div>
                        <div className={cx('flex-star')}>
                            {/* style="margin-left: 20px" */}
                            <div className={cx('average-star')}>{displayStars}</div>
                            <div className={cx('flex-content-star')}>
                                {/* style="margin-left: 5px" */}
                                <div className={cx('relative-star')}>
                                    {/* style="position: relative;height:24px" */}
                                    {/* <span className={cx(styles.star)}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span
                                        className={cx(styles['star-fill'])}
                                        // style="width: {{$star_fill*100}}%"
                                    >
                                        <FontAwesomeIcon icon={faStar} />
                                    </span> */}
                                    {stars.map((star, index) => (
                                        <FontAwesomeIcon
                                            key={index}
                                            icon={faStar}
                                            // className={cx(star.type === 'red' ? 'star-active' : 'star-inactive')}
                                            className={cx(
                                                star.type === 'red'
                                                    ? 'star-active'
                                                    : star.type === 'half'
                                                    ? 'half-star'
                                                    : 'star-inactive',
                                            )}
                                        />
                                    ))}
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
                    {data.discounts !== null ? (
                        <Fragment>
                            <div className={cx('flex-price')}>
                                <div className={cx('price')}>
                                    {(
                                        data.product_price -
                                        data.product_price * (data.discounts.discount_value / 100)
                                    ).toLocaleString('vi-VN')}
                                    đ
                                </div>
                                <h5 className={cx('price-disabled')}>{data.product_price.toLocaleString('vi-VN')}đ</h5>
                                <div className={cx('discount-value')}>{data.discounts.discount_value}%</div>
                            </div>

                            <div>
                                <span className={cx('title-discount')}>KHUYẾN MÃI</span>
                                <div id="promotion">
                                    <div className={cx('promotion-item')}>
                                        <div className={cx('promotion-tag')}>
                                            <span className={cx('rectangle')}>{data.discounts.discount_name}</span>
                                        </div>
                                        <div className={cx(styles['promotion-info'], 'shadow')}>
                                            GIẢM {data.discounts.discount_value}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ) : (
                        <div className={cx('flex-price')}>
                            <div className={cx('price')}>{data.product_price.toLocaleString('vi-VN')}đ</div>
                        </div>
                    )}
                </div>
                <div className={cx('row')}>
                    {/* id="div_size" style="margin-top:20px" */}
                    <h6 className={cx('col-sm-2', 'mt-1', styles['title-size'])}>
                        {/* style="margin-top: 8px" */}
                        Size:
                    </h6>
                    {uniqueSizes.map((size, index) => (
                        <div
                            key={index}
                            className={cx(styles['size-box'], 'col-sm-1', {
                                [styles['size-selected']]: size === selectedSize,
                            })}
                            onClick={() => handleSizeClick(size)}
                        >
                            <div className={cx('size-id')}>{size}</div>
                            <div className={cx('div-quantity')}>
                                <p className={cx('amount-hidden')}>9</p>
                                <p className={cx('color-hidden')}>White</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('row', styles['div-color'])}>
                    {/* id="div_color" style="margin-top:20px;align-items: center" */}
                    <h6 className={cx(styles['title-color'], 'col-sm-2', 'mt-2', 'pt-1', 'pb-0')}>
                        {/* style="margin-top: 10px;padding-top: 5px 0;" */}
                        Màu:
                    </h6>
                    {uniqueColors.map((color, index) => (
                        <div
                            key={index}
                            className={cx(styles['size-box'], styles['color-box'], 'col-sm-1', {
                                [styles['size-selected']]: color === selectedColor,
                                'disabled-color':
                                    !selectedSize || !availableColors.includes(color) || quantity0.includes(color),
                            })}
                            onClick={() => handleColorClick(color)}
                            disabled={!selectedSize || !availableColors.includes(color) || quantity0.includes(color)}
                        >
                            <div className="px-3">{color}</div>
                        </div>
                    ))}
                </div>
                <div className={cx('material')}>
                    <h6 className={cx(styles['title-material'], 'mt-2')}>Chất liệu:</h6>
                    {/* style="margin-top: 8px" */}
                    <div className={cx(styles['size-box'], styles['material-box'], 'col-sm-1')}>
                        <div className="px-3">{data.product_material}</div>
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
                    <div className={cx('btn-group')}>
                        <div className={cx('button')}>
                            <FontAwesomeIcon icon={faMinus} onClick={handleDecrease} />
                        </div>
                        <input
                            type="text"
                            className={cx('buy-amount')}
                            name="amount"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={amount}
                            onChange={handleChange}
                            readOnly
                        />
                        <div className={cx('button')}>
                            <FontAwesomeIcon icon={faPlus} onClick={handleIncrease} />
                        </div>
                    </div>
                    {showQuantity && <p className={cx('has-amount')}>{amountValue} sản phẩm có sẵn</p>}
                </div>
                {showAlert && <div className={cx('div-alert')}>Vui lòng chọn Màu và Size</div>}
                {showAlertExceedQuantity && <div className={cx('div-alert')}>Vượt quá số lượng sản phẩm</div>}
                {showChooseColor && <div className={cx('div-alert')}>Vui lòng chọn màu</div>}
                {/* id="div_alert" style="color: red;font-size:14px"*/}
                <div className={cx(styles.material, 'd-flex', 'justify-content-center')}>
                    {/* style="justify-content: center" */}
                    <button type="submit" className={cx('btn-buy', 'btn-allow')} onClick={handleBuyNowClick}>
                        Mua ngay
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default DetailProduct;
