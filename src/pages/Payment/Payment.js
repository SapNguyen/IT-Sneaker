import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Payment() {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueAddress, setInputValueAddress] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');

    const validateForm = () => {
        let isValid = true;

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Thực hiện xử lý đăng nhập, ví dụ gọi API
            console.log('Tên:', inputValueName);
            console.log('Số điện thoại:', inputValuePhone);
            console.log('Địa chỉ:', inputValueAddress);
        }

        // Thực hiện xử lý khi form được submit, ví dụ gọi API
        console.log('Submitted value:', inputValueName + inputValuePhone + inputValueAddress);
    };

    const isFormValid =
        inputValueName.trim() !== '' && inputValuePhone.trim() !== '' && inputValueAddress.trim() !== '';

    return (
        <div className={cx('main')}>
            <Helmet>
                <title>Thanh toán</title>
            </Helmet>
            <div className={cx('payment-product')}>
                <div className={cx('payment-product-info')}>
                    <div className={cx('payment-product-info-header')}>
                        <a href="/" className={cx('payment-product-info-header-logo')}>
                            <h1 className={cx('payment-product-info-header-logo-text')}>SNEAKER</h1>
                        </a>
                        <div className={cx('payment-product-info-header-breadcrumb')}>
                            <div className={cx('payment-product-info-header-breadcrumb-item')}>
                                <a href="/">Giỏ hàng</a>
                            </div>
                            <div className={cx('payment-product-info-header-breadcrumb-item-current')}>
                                Thông tin giao hàng
                            </div>
                            <div className={cx('payment-product-info-header-breadcrumb-item-pt')}>
                                Phương thức thanh toán
                            </div>
                        </div>
                    </div>

                    <form id="form_payment" onSubmit={handleSubmit}>
                        {/* action="/payment/insert" */}
                        {/* <div class="payment-product-section"> */}
                        <div className={cx('payment-product-section-header')}>
                            <h2 className={cx('payment-product-section-header-title')}>Thông tin giao hàng</h2>
                        </div>

                        <div className={cx('payment-product-section-content')}>
                            <div className={cx('payment-product-section-content-email')}>
                                <div className={cx('payment-product-section-content-wrapper-email')}>
                                    <label className={cx('title-name')}>
                                        Tên:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        spellCheck="false"
                                        className={cx('input', 'payment-product-section-content-wrapper-sdt-sdt', {
                                            'is-invalid': nameError,
                                        })}
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
                                    <label className={cx('title-phone')}>
                                        Số điện thoại:
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className={cx('input', 'payment-product-section-content-wrapper-sdt-sdt', {
                                            'is-invalid': phoneError,
                                        })}
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
                                    <label className={cx('title-address')}>
                                        Địa chỉ:
                                    </label>

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
                                    {addressError && <p className={cx('invalid-feedback')}>{addressError}</p>}

                                    {/* <input type="text" placeholder="Địa chỉ" spellCheck="false" className="{cx('input payment-product-section-content-wrapper-address-address" 
                          size="30" id="billing_address_address" name="txtDiachi" value="" id="i_address" required>
                          <p className="{cx('error-msg"></p> */}
                                </div>
                            </div>
                        </div>
                        <div className={cx('payment-product-footer')}>
                            <div className={cx('payment-product-footer-form')}>
                                <button
                                    className={cx('payment-product-footer-content', { btn_disabled: !isFormValid })}
                                    disabled={!isFormValid}
                                    type="submit"
                                    id="btn_submit"
                                >
                                    Hoàn tất
                                </button>
                            </div>
                            <a href="/cart" className={cx('payment-product-footer-link')}>
                                Giỏ hàng
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className={cx('price-product')}>
                <div className={cx('price-product-content')}>
                    <div className={cx('price-product-content-content')}>
                        <div className={cx('price-product-sections')}>
                            <div className={cx('price-product-sections-order-list')}>
                                <div className={cx('price-product-sections-order-list-img')}>
                                    <img
                                        src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                        alt=""
                                        className={cx('price-product-sections-order-list-img-img')}
                                    />
                                </div>
                                <div className={cx('price-product-sections-order-list-info')}>
                                    <div className={cx('price-product-sections-order-list-info-name')}>
                                        Giày Converse Chuck 70 Seasonal Color Canvas
                                    </div>
                                    <div className={cx('all-size')}>Size:42 ,WHITE</div>
                                </div>
                                <div className={cx('price-product-sections-order-list-info-quantity')}>Số lượng :1</div>
                                <div className={cx('price-product-sections-order-list-price')}>
                                    <span>1.800.000₫</span>
                                </div>
                            </div>

                            <div className={cx('price-product-sections-order-list')}>
                                <div className={cx('price-product-sections-order-list-img')}>
                                    <img
                                        src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                        alt=""
                                        className={cx('price-product-sections-order-list-img-img')}
                                    />
                                </div>
                                <div className={cx('price-product-sections-order-list-info')}>
                                    <div className={cx('price-product-sections-order-list-info-name')}>
                                        Giày Converse Chuck 70 Seasonal Color Canvas
                                    </div>
                                    <div className={cx('all-size')}>Size:42 ,BLACK</div>
                                </div>
                                <div className={cx('price-product-sections-order-list-info-quantity')}>Số lượng :1</div>
                                <div className={cx('price-product-sections-order-list-price')}>
                                    <span>1.800.000₫</span>
                                </div>
                            </div>

                            <div className={cx('price-product-sections-payment')}>
                                <div className={cx('price-product-sections-payment-ship')}>
                                    <div className={cx('price-product-sections-payment-ship-price')}>
                                        <div className={cx('price-product-sections-payment-ship-price-name')}>
                                            Tạm tính
                                        </div>
                                        <div className={cx('price-product-sections-payment-ship-price-price')}>
                                            1.800.000₫
                                        </div>
                                    </div>
                                    <div className={cx('price-product-sections-payment-ship-ship')}>
                                        <div className={cx('price-product-sections-payment-ship-ship-name')}>
                                            Phí vận chuyển
                                        </div>
                                        <div className={cx('price-product-sections-payment-ship-ship-price')}>0₫</div>
                                    </div>
                                </div>
                                <div className={cx('price-product-sections-payment-total')}>
                                    <div className={cx('price-product-sections-payment-total-total')}>Tổng cộng</div>
                                    <div className={cx('price-product-sections-payment-total-price')}>1.800.000₫</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
