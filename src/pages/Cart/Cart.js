import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import * as cartsService from '~/services/cartsService';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ProductCart from '~/Components/ProductCart';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Cart() {
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [cartResult, setCartResult] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [totalValues, setTotalValues] = useState(0);
    const [deleteValue, setDeleteValue] = useState(0);

    function isEqual(objA, objB) {
        return (
            objA.price === objB.price &&
            objA.size === objB.size &&
            objA.color === objB.color &&
            objA.product_id === objB.product_id &&
            objA.image === objB.image &&
            objA.quantity === objB.quantity &&
            objA.cart_id === objB.cart_id
        );
    }

    function isObjectInArray(object, array) {
        for (let i = 0; i < array.length; i++) {
            if (isEqual(object, array[i])) {
                return true;
            }
        }
        return false;
    }

    const handleValueClick = (data) => {
        setSelectedValues(data);
        setSelectedValues([...selectedValues, data]);
        if (isObjectInArray(data, selectedValues)) {
            // setSelectedValues(selectedValues.filter((item) => item !== data));
            setSelectedValues(selectedValues.filter((item) => !isEqual(item, data)));
        } else {
            setSelectedValues([...selectedValues, data]);
        }
    };

    const handleDeleteProduct = (data) => {
        setDeleteValue(data);
    };

    const handleBuyNow = async (event) => {
        event.preventDefault();
        if (selectedValues.length > 0) {
            const selectedValuesJSON = JSON.stringify(selectedValues);
            // return <Redirect to={{ pathname: '/payment', state: { selectedValues: selectedValues } }} />;
            sessionStorage.setItem('paymentId', selectedValuesJSON);
            window.location.href = '/payment';
        } else {
            toast.error('Vui lòng chọn sản phẩm');
        }
    };

    const loggedInUser = sessionStorage.getItem('userId');

    useEffect(() => {
        if (!loggedInUser) {
            setLoggedIn(false);
        }
        const fetchAPI = async () => {
            setLoading(true);

            const result = await cartsService.cartuser(loggedInUser);
            setCartResult(result && result.products);

            setLoading(false);
        };
        fetchAPI();

        setTotalValues(selectedValues.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));
    }, [loggedInUser, selectedValues, deleteValue]);

    if (loggedIn === false) {
        window.location.href = '/login';
    }

    return (
        <main>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            <div className={cx('container-box')}>
                <div className={cx('space')}></div>
                <div className={cx('content-box')}>
                    <div className={cx('item-box')}>
                        <div className={cx('div_product')}>Sản phẩm</div>
                        <div className={cx('div_price_each', 'gray')}>Đơn giá</div>
                        <div className={cx('div_amount', 'gray')}>Số lượng</div>
                        <div className={cx('div_price_all', 'gray')}>Số tiền</div>
                        <div className={cx('div_action', 'gray')}>Thao tác</div>
                    </div>
                    <div className={cx('white-product')}>
                        {cartResult &&
                            cartResult.map((product, index) => (
                                <ProductCart
                                    key={index}
                                    data={product}
                                    selectedValuesd={handleValueClick}
                                    deleteProduct={handleDeleteProduct}
                                />
                            ))}
                    </div>
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <div className={cx('item-box', 'payment')}>
                        <div className="d-flex align-items-center">
                            {/* <input
                                type="checkbox"
                                className={cx('checkbox', 'check-all')}
                                onChange={handleCheckAllChange}
                                checked={selectAll}
                            />
                            <p className={cx(styles['choose-all'], 'ml')}>Chọn tất cả</p> */}
                        </div>
                        <div className="d-flex align-items-center">
                            <p className={cx('total-payment')} id="s_amount">
                                Tổng thanh toán ( Sản phẩm):
                            </p>
                            <p className={cx('s-price')}>{totalValues.toLocaleString('vi-VN')}₫</p>

                            {/* <p style="font-size: 18px" id="s_amount">Tổng thanh toán (0 Sản phẩm):</p>
                    <p id="s_price">0₫</p> */}

                            <button className={cx('btn-payment')} onClick={handleBuyNow}>
                                Mua hàng
                            </button>
                            {/* <form action="/payment" method="post" className="d-none">
                                <button className={cx('submit')}></button>
                            </form> */}
                        </div>
                    </div>
                    {cartResult && cartResult.length === 0 && !loading && (
                        <div className={cx('payment-now')}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={cx('material-symbols-outlined', 'cart-ico')}
                            />
                            <p className={cx('title-cart-null')}>Giỏ hàng của bạn đang trống</p>
                            <Link to={'/'}>
                                <button className={cx('btn-home')}>MUA NGAY</button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className={cx('space')}></div>
                <ToastContainer />
            </div>
            <div className={cx('alert-screen')}>
                <div className={cx('alert-overlay')}></div>
                <div className={cx('alert-box shadow')}>
                    <p className={cx('title-alert')} id="msg"></p>
                    <button className={cx('btn_confirm')}> OK</button>
                </div>
            </div>
        </main>
    );
}

export default Cart;
