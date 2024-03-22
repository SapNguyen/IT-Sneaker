import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const cx = classNames.bind(styles);

function ProductCart({ data, selectedValuesd, deleteProduct }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [amount, setAmount] = useState(1);
    const [amountValue, setAmountValue] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    // const [showChooseColor, setShowChooseColor] = useState(false);
    const [availableColors, setAvailableColors] = useState([]);
    const [quantity0, setQuantity0] = useState([]);
    const [size, setSize] = useState(data.size);
    const [color, setColor] = useState(data.color);

    // const [chooseProductValue, setChooseProductValue] = useState({});

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        // const product = data.details.find((item) => item.size === size && item.color === selectedColor);

        const colorsForSize = data.products.details
            .filter((detail) => detail.size === size)
            .map((detail) => detail.color);

        setAvailableColors(colorsForSize);
        if (!colorsForSize.includes(selectedColor)) {
            setSelectedColor(null);
        }

        const outOfStockColors = data.products.details
            .filter((detail) => detail.size === size && detail.quantity === 0)
            .map((detail) => detail.color);

        setQuantity0(outOfStockColors);
        if (outOfStockColors.includes(selectedColor)) {
            setSelectedColor(null);
        }
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        // setShowChooseColor(false);
    };

    const uniqueSizes = [...new Set(data.products.details.map((detail) => detail.size))];

    const uniqueColors = [...new Set(data.products.details.map((detail) => detail.color))];
    // const [selectedValues, setSelectedValues] = useState();

    const handleCheckboxChange = (event) => {
        const value = parseInt(event.target.value);
        // setSelectedValue(value);
        const isChecked = event.target.checked;
        const selectedProductInfo = {
            price:value,
            size: size,
            color: color,
            product_id: data.product_id,
            image: uniqueProductImagesArray[0],
        };
        if (isChecked) {
            selectedValuesd(selectedProductInfo);
        } else {
            selectedValuesd(selectedProductInfo);
        }
        // console.log(
        //     'Giá:',
        //     value + ' size:',
        //     size + ' color:',
        //     color + ' product_id:',
        //     data.product_id + ' Màu:',
        //     uniqueProductImagesArray[0],
        // );
    };

    const handleConfirmUpdate = async (event) => {
        event.preventDefault();
        if (selectedColor && selectedSize) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/cart/update?cart_id=${data.cart_id}
                    &size=${selectedSize}&color=${selectedColor}`,
                );
                if (response.data.error) {
                    toast.error('Đổi size và color thất bại');
                } else {
                    setSize(selectedSize);
                    setColor(selectedColor);
                    toast.success('Đổi size và color thành công');
                    setSelectedProduct(null);
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi chỉnh sửa size và color. Vui lòng thử lại sau.');
            }
        } else {
            toast.error('Vui lòng chọn size và color');
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/cart/detele?cart_id=${data.cart_id}`,
                );
                if (response.data.error) {
                    toast.error('Xóa thất bại');
                } else {
                    deleteProduct(data.cart_id);
                    toast.success('Xóa thành công');
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi xóa sản phẩm. Vui lòng thử lại sau.');
            }
        }
    };

    const handleProductClick = (productId) => {
        setSelectedProduct(productId === selectedProduct ? null : productId);
    };

    const handleBack = (productId) => {
        setSelectedProduct(null);
    };

    const handleDecrease = () => {
        if (amount > 1) {
            // Đảm bảo giá trị không nhỏ hơn 1
            setAmount(amount - 1);
        }
    };

    const handleIncrease = () => {
        const product = data.products.details.find((item) => item.size === data.size && item.color === data.color);

        if (product) {
            setAmountValue(product.quantity);
        }
        if (amountValue !== '') {
            if (amount < amountValue) {
                setAmount(amount + 1);
            } else {
                toast.error('Vượt quá số lượng sản phẩm hiện có');
            }
        } else {
            setAmount(amount + 1);
        }
    };

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= amountValue) {
            setAmount(newValue);
        }
    };

    const uniqueProductImages = new Set();

    data.products.details.forEach((detail) => {
        const split = detail.product_image.split(',');
        split.forEach((fileName) => {
            uniqueProductImages.add(fileName);
        });
    });

    const uniqueProductImagesArray = Array.from(uniqueProductImages);

    return (
        <div className={cx('item-box', 'product')}>
            <div className={cx('div_check')}>
                {data.products.discounts !== null ? (
                    <input
                        type="checkbox"
                        className={cx('checkbox', 'check-one')}
                        value={
                            (data.products.product_price -
                                data.products.product_price * (data.products.discounts.discount_value / 100)) *
                            amount
                        }
                        onChange={handleCheckboxChange}
                    />
                ) : (
                    <input
                        type="checkbox"
                        className={cx('checkbox', 'check-one')}
                        value={data.products.product_price * amount}
                        onChange={handleCheckboxChange}
                    />
                )}
                {/* <input
                    type="checkbox"
                    className={cx('checkbox', 'check-one')}
                    value={data.product_id}
                    onChange={handleCheckboxChange}
                /> */}
            </div>
            <div className={cx('div_product')}>
                <div className={cx('div_product-info')}>
                    {data.products.details.map((imgPath, index) => (
                        <Fragment key={index}>
                            {index === 0 &&
                                uniqueProductImagesArray.map((img, index) => (
                                    <Link key={index} to={`/product/${imgPath.product_id}`}>
                                        {index === 0 && (
                                            <img
                                                src={
                                                    `http://127.0.0.1:8000/img/product/` +
                                                    imgPath.product_id +
                                                    '/' +
                                                    img
                                                }
                                                className={cx('product-img')}
                                                alt=""
                                            />
                                        )}
                                    </Link>
                                ))}
                        </Fragment>
                    ))}

                    <Link to={'/product/' + data.product_id} className={cx('prod-link')}>
                        <p className={cx(styles['txt_product'], 'ml')}>{data.products.product_name}</p>
                    </Link>
                    <div className={cx('relative-size')}>
                        <div className={cx('div_size')} onClick={() => handleProductClick(data.product_id)}>
                            <div className={cx('flex')}>
                                <p>Size: </p>
                                <p className={cx('size')}>{size}</p>

                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={cx(styles['material-symbols-outlined'], 'ml')}
                                />
                            </div>
                            <p className={cx('color')}>{color}</p>
                        </div>

                        {selectedProduct === data.product_id && (
                            <div className={cx('div_choose-size')}>
                                <div className={cx('d-flex-size-arrow')}>
                                    <div className={cx('size-arrow-outer')}>
                                        <div className={cx('size-arrow')}></div>
                                    </div>
                                </div>
                                <div>
                                    <p className={cx('title-size')}>Size:</p>
                                    <div>
                                        {uniqueSizes.map((size, index) => (
                                            <div
                                                key={index}
                                                className={cx('size-box', {
                                                    [styles['selected']]: size === selectedSize,
                                                })}
                                                onClick={() => handleSizeClick(size)}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                        {/* <div className="{cx('size-box">{{$sizes[$j]->size}}</div> */}
                                    </div>
                                </div>
                                <div>
                                    <p className={cx('title-color')}>Màu:</p>
                                    <div>
                                        {uniqueColors.map((color, index) => (
                                            <div
                                                key={index}
                                                className={cx('size-box', {
                                                    [styles['selected']]: color === selectedColor,
                                                    'disabled-color': !selectedSize || !availableColors.includes(color),
                                                    'sold-out': quantity0.includes(color),
                                                })}
                                                onClick={() => handleColorClick(color)}
                                                disabled={
                                                    !selectedSize ||
                                                    !availableColors.includes(color) ||
                                                    quantity0.includes(color)
                                                }
                                            >
                                                {color}
                                            </div>
                                        ))}
                                        {/* <div className={cx('size-box', 'sold-out')}>41</div>
                                        <div className={cx('size-box', 'selected')}>42</div> */}
                                    </div>
                                </div>
                                <div className={cx('d-flex', 'mt-3', 'justify-content-center')}>
                                    {/* style="justify-content: center" */}
                                    <button className={cx('btn_cancel-size')} onClick={handleBack}>
                                        TRỞ LẠI
                                    </button>
                                    <button className={cx('btn_confirm-size')} onClick={handleConfirmUpdate}>
                                        XÁC NHẬN
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {data.products.discounts !== null ? (
                <div className={cx('div_price_each')}>
                    <p className={cx('price-disabled')}>{data.products.product_price}₫</p>
                    {data.products.product_price -
                        data.products.product_price * (data.products.discounts.discount_value / 100)}
                    ₫
                </div>
            ) : (
                <div className={cx('div_price_each')}>{data.products.product_price}₫</div>
            )}

            <div className={cx('div_amount')}>
                <div className={cx('quantity-change')}>
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
                    <ToastContainer />
                </div>
            </div>

            {data.products.discounts !== null ? (
                <div className={cx('div_price_all')}>
                    {(data.products.product_price -
                        data.products.product_price * (data.products.discounts.discount_value / 100)) *
                        amount}
                    ₫
                </div>
            ) : (
                <div className={cx('div_price_all')}>{data.products.product_price * amount}₫</div>
            )}

            <div className={cx('div_action')}>
                <p className={cx('p_remove')} onClick={handleDelete}>
                    Xóa
                </p>
            </div>
        </div>
    );
}

export default ProductCart;
