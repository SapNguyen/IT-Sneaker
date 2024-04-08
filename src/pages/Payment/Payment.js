import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import * as userService from '~/services/usersService';

const cx = classNames.bind(styles);

function Payment() {
    const [loading, setLoading] = useState(false);
    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueAddress, setInputValueAddress] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const [paymentProduct, setPaymentProduct] = useState([]);
    const [userResult, setUserResult] = useState([]);
    const [totalValues, setTotalValues] = useState(0);

    // const { paymentUser } = location.state.selectedValues;

    const totalHandler = (data) => {
        if (data) {
            setTotalValues(data.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));
        }
    };

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        const selectedValuesJSON = sessionStorage.getItem('paymentId');
        const paymentUser = JSON.parse(selectedValuesJSON);
        if (paymentUser) {
            setPaymentProduct(paymentUser);
        }
        if (!loggedInUser) {
            setLoggedIn(false);
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await userService.user(loggedInUser);
            setUserResult(result && result.users);
            totalHandler(JSON.parse(selectedValuesJSON));
            setInputValueName(result && result.users[0].name);
            setInputValuePhone(result && result.users[0].phone.toString());
            setInputValueAddress(result && result.users[0].address);

            setLoading(false);
        };
        fetchAPI();
        // totalHandler();
    }, []);

    if (loggedIn === false) {
        window.location.href = '/login';
    }

    const handleChangeName = (event) => {
        setInputValueName(event.target.value);
        setNameError('');
    };

    const handleChangePhone = (event) => {
        setInputValuePhone(event.target.value);
        setPhoneError('');
    };

    const handleChangeAddress = (event) => {
        setInputValueAddress(event.target.value);
        setAddressError('');
    };

    const vietnamesePhoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const isValidVietnamesePhoneNumber = (phoneNumber) => {
        return vietnamesePhoneNumberRegex.test(phoneNumber);
    };

    const validateForm = () => {
        let isValid = true;

        if (/\d/.test(inputValueName)) {
            setNameError('Tên không được chứa số');
            isValid = false;
        } else {
            setNameError('');
        }

        // Validate số điện thoại
        if (!isValidVietnamesePhoneNumber('0' + inputValuePhone)) {
            setPhoneError('Số điện thoại không đúng định dạng');
            isValid = false;
        } else {
            setPhoneError('');
        }

        // Kiểm tra tên
        if (inputValueName.trim() === '') {
            setNameError('Vui lòng điền tên.');
        } else {
            setNameError('');
        }

        // Kiểm tra số điện thoại
        if (inputValuePhone.trim() === '') {
            setPhoneError('Vui lòng điền số điện thoại.');
            isValid = false;
        } else {
            setPhoneError('');
        }

        // Kiểm tra địa chỉ
        if (inputValueAddress.trim() === '') {
            setAddressError('Vui lòng điền địa chỉ.');
            isValid = false;
        } else {
            setAddressError('');
        }

        return isValid;
    };

    const handleNameBlur = () => {
        if (inputValueName.trim() === '') {
            setNameError('Vui lòng điền tên.');
        } else {
            setNameError('');
        }
    };
    const handlePhoneBlur = () => {
        if (inputValuePhone.trim() === '') {
            setPhoneError('Vui lòng điền số điện thoại.');
        } else {
            setPhoneError('');
        }
    };

    const handleAddressBlur = () => {
        if (inputValueAddress.trim() === '') {
            setAddressError('Vui lòng điền địa chỉ.');
        } else {
            setAddressError('');
        }
    };

    const handlePayment = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/payment/store?
                    mem_id=${sessionStorage.getItem(
                        'userId',
                    )}&receiver_name=${inputValueName}&receiver_phone=${inputValuePhone}
                    &receiver_address=${inputValueAddress}&total=${totalValues}&products=${sessionStorage.getItem(
                        'paymentId',
                    )}
                    `,
                );
                if (response.data.error) {
                    console.log(response.data.error);
                    toast.error('Thanh toán thất bại');
                } else {
                    // sessionStorage.setItem('userId', response.data.user[0].member_id);
                    // window.location.href = '/';
                    toast.success('Thanh toán thành công');
                    setTimeout(function () {
                        window.location.href = '/account';
                        sessionStorage.removeItem('paymentId');
                    }, 2000);
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
            }
            // console.log(
            //     'mem_id: ',
            //     sessionStorage.getItem('userId') + ' receiver_name:',
            //     inputValueName + ' receiver_phone:',
            //     inputValuePhone + ' receiver_address:',
            //     inputValueAddress + ' total:',
            //     totalValues + ' products:',
            //     paymentProduct,
            // );
        }
    };

    const isFormValid =
        inputValueName.trim() !== '' && inputValuePhone.trim() !== '' && inputValueAddress.trim() !== '';

    return (
        <div className={cx('main')}>
            <Helmet>
                <title>Thanh toán</title>
            </Helmet>
            {sessionStorage.getItem('paymentId') ? (
                <Fragment>
                    <div className={cx('payment-product')}>
                        <div className={cx('payment-product-info')}>
                            <div className={cx('payment-product-info-header')}>
                                <a href="/" className={cx('payment-product-info-header-logo')}>
                                    <h1 className={cx('payment-product-info-header-logo-text')}>SNEAKER</h1>
                                </a>
                                <div className={cx('payment-product-info-header-breadcrumb')}>
                                    <div className={cx('payment-product-info-header-breadcrumb-item')}>
                                        <a href="/cart">Giỏ hàng</a>
                                    </div>
                                    <div className={cx('payment-product-info-header-breadcrumb-item-current')}>
                                        Thông tin giao hàng
                                    </div>
                                    <div className={cx('payment-product-info-header-breadcrumb-item-pt')}>
                                        Phương thức thanh toán
                                    </div>
                                </div>
                            </div>

                            <form id="form_payment">
                                {/* action="/payment/insert" */}
                                {/* <div class="payment-product-section"> */}
                                <div className={cx('payment-product-section-header')}>
                                    <h2 className={cx('payment-product-section-header-title')}>Thông tin giao hàng</h2>
                                </div>

                                {userResult && userResult.map((user, index) => (
                                    <div key={index} className={cx('payment-product-section-content')}>
                                        <div className={cx('payment-product-section-content-email')}>
                                            <div className={cx('payment-product-section-content-wrapper-email')}>
                                                <label className={cx('title-name')}>Tên:</label>
                                                <input
                                                    type="text"
                                                    placeholder="Họ và tên"
                                                    spellCheck="false"
                                                    className={cx(
                                                        'input',
                                                        'payment-product-section-content-wrapper-sdt-sdt',
                                                        {
                                                            'is-invalid': nameError,
                                                        },
                                                    )}
                                                    size="30"
                                                    id="billing_address_full_name"
                                                    name="txtHoten"
                                                    value={inputValueName}
                                                    onChange={handleChangeName}
                                                    onBlur={handleNameBlur}
                                                />
                                                {nameError && <p className={cx('error-msg')}>{nameError}</p>}
                                            </div>
                                        </div>
                                        <div className={cx('payment-product-section-content-sdt')}>
                                            <div className={cx('payment-product-section-content-wrapper-sdt')}>
                                                <label className={cx('title-phone')}>Số điện thoại:</label>

                                                <input
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                    className={cx(
                                                        'input',
                                                        'payment-product-section-content-wrapper-sdt-sdt',
                                                        {
                                                            'is-invalid': phoneError,
                                                        },
                                                    )}
                                                    id="i_phone"
                                                    name="txtPhone"
                                                    value={inputValuePhone}
                                                    onChange={handleChangePhone}
                                                    onBlur={handlePhoneBlur}
                                                />

                                                {/* <input type="text" placeholder="Số điện thoại" spellCheck="false" className="{cx('input payment-product-section-content-wrapper-sdt-sdt"
                           id="i_phone" name="txtPhone" value="" required>
                         */}
                                                {phoneError && <p className={cx('error-msg')}>{phoneError}</p>}
                                            </div>
                                        </div>
                                        <div className={cx('payment-product-section-content-address')}>
                                            <div className={cx('payment-product-section-content-wrapper-address')}>
                                                <label className={cx('title-address')}>Địa chỉ:</label>

                                                <input
                                                    type="text"
                                                    placeholder="Địa chỉ"
                                                    spellCheck="false"
                                                    className={cx(
                                                        'input',
                                                        'payment-product-section-content-wrapper-address-address',
                                                        { 'is-invalid': addressError },
                                                    )}
                                                    size="30"
                                                    id="billing_address_address"
                                                    name="txtDiachi"
                                                    value={inputValueAddress}
                                                    onChange={handleChangeAddress}
                                                    onBlur={handleAddressBlur}
                                                />
                                                {addressError && (
                                                    <p className={cx('invalid-feedback')}>{addressError}</p>
                                                )}

                                                {/* <input type="text" placeholder="Địa chỉ" spellCheck="false" className="{cx('input payment-product-section-content-wrapper-address-address" 
                          size="30" id="billing_address_address" name="txtDiachi" value="" id="i_address" required>
                          <p className="{cx('error-msg"></p> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className={cx('payment-product-footer')}>
                                    <div className={cx('payment-product-footer-form')}>
                                        <button
                                            className={cx('payment-product-footer-content', {
                                                btn_disabled: !isFormValid,
                                            })}
                                            id="btn_submit"
                                            onClick={handlePayment}
                                        >
                                            Hoàn tất
                                        </button>
                                    </div>
                                    <a href="/cart" className={cx('payment-product-footer-link')}>
                                        Giỏ hàng
                                    </a>
                                </div>
                            </form>
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        </div>
                    </div>

                    <div className={cx('price-product')}>
                        <div className={cx('price-product-content')}>
                            <div className={cx('price-product-content-content')}>
                                <div className={cx('price-product-sections')}>
                                    {paymentProduct && paymentProduct.map((product, index) => (
                                        <div key={index} className={cx('price-product-sections-order-list')}>
                                            <div className={cx('price-product-sections-order-list-img')}>
                                                <img
                                                    src={
                                                        `http://127.0.0.1:8000/img/product/` +
                                                        product.product_id +
                                                        '/' +
                                                        product.image
                                                    }
                                                    alt=""
                                                    className={cx('price-product-sections-order-list-img-img')}
                                                />
                                            </div>
                                            <div className={cx('price-product-sections-order-list-info')}>
                                                <div className={cx('price-product-sections-order-list-info-name')}>
                                                    {product.name}
                                                </div>
                                                <div className={cx('all-size')}>
                                                    Size:{product.size} ,{product.color}
                                                </div>
                                            </div>
                                            <div className={cx('price-product-sections-order-list-info-quantity')}>
                                                SL:{product.quantity}
                                            </div>
                                            <div className={cx('price-product-sections-order-list-price')}>
                                                <span>{product.price.toLocaleString('vi-VN')}₫</span>
                                            </div>
                                        </div>
                                    ))}

                                    <div className={cx('price-product-sections-payment')}>
                                        <div className={cx('price-product-sections-payment-ship')}>
                                            <div className={cx('price-product-sections-payment-ship-price')}>
                                                <div className={cx('price-product-sections-payment-ship-price-name')}>
                                                    Tạm tính
                                                </div>
                                                <div className={cx('price-product-sections-payment-ship-price-price')}>
                                                    {totalValues.toLocaleString('vi-VN')}₫
                                                </div>
                                            </div>
                                            <div className={cx('price-product-sections-payment-ship-ship')}>
                                                <div className={cx('price-product-sections-payment-ship-ship-name')}>
                                                    Phí vận chuyển
                                                </div>
                                                <div className={cx('price-product-sections-payment-ship-ship-price')}>
                                                    300.00₫
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('price-product-sections-payment-total')}>
                                            <div className={cx('price-product-sections-payment-total-total')}>
                                                Tổng cộng
                                            </div>
                                            <div className={cx('price-product-sections-payment-total-price')}>
                                                {(totalValues + 30000).toLocaleString('vi-VN')}₫
                                            </div>
                                        </div>
                                        <div className={cx('price-product-sections-total')}>
                                            <div className={cx('price-product-sections-payment-total-total')}>
                                                Thanh toán trực tiếp cho người giao hàng khi đã nhận hàng
                                            </div>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className={cx('wrapper-not')}>
                        <p className={cx('title-not-product')}>
                            Hiện chưa có sản phẩm. Vui lòng chọn sản phẩm ở giỏ hàng
                        </p>
                        <div className={cx('cart')}>
                            <button className={cx('btn-cart')}>
                                <a href="/cart" className={cx('a-cart')}>
                                    Giỏ hàng
                                </a>
                            </button>
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default Payment;
