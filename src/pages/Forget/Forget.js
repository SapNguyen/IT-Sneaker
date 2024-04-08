import classNames from 'classnames/bind';
import styles from './Forget.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
// import * as registerService from '~/services/registerService';
import axios from 'axios';
const cx = classNames.bind(styles);

function Forget() {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const vietnamesePhoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const isValidVietnamesePhoneNumber = (phoneNumber) => {
        return vietnamesePhoneNumberRegex.test(phoneNumber);
    };

    const handlePhoneBlur = () => {
        if (inputValuePhone.trim() === '') {
            setPhoneError('Vui lòng điền số điện thoại.');
        } else {
            setPhoneError('');
        }
    };
    const handleEmailBlur = () => {
        if (inputValueEmail.trim() === '') {
            setEmailError('Vui lòng điền email.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordBlur = () => {
        if (inputValuePass.trim() === '') {
            setPasswordError('Vui lòng điền mật khẩu.');
        } else {
            setPasswordError('');
        }
    };
    const handleChangePhone = (event) => {
        setInputValuePhone(event.target.value);
        setPhoneError('');
        setError('');
    };
    const handleChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
        setEmailError('');
        setError('');
    };

    const handleChangePass = (event) => {
        setInputValuePass(event.target.value);
        setPasswordError('');
        setError('');
    };

    const validateForm = () => {
        let isValid = true;

        // Kiểm tra email
        if (inputValueEmail.trim() === '') {
            setEmailError('Vui lòng điền email.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Kiểm tra password
        if (inputValuePass.trim() === '') {
            setPasswordError('Vui lòng điền mật khẩu.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        // Kiểm tra Name
        if (inputValuePhone.trim() === '') {
            setPhoneError('Vui lòng điền số điện thoại.');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (!isValidVietnamesePhoneNumber(inputValuePhone)) {
            setPhoneError('Số điện thoại không đúng định dạng');
            isValid = false;
        } else {
            setPhoneError('');
        }

        // Validate Email
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(inputValueEmail)) {
            setEmailError('Email không hợp lệ');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate Password
        if (!inputValuePass || inputValuePass.length < 8) {
            setPasswordError('Password mới phải có ít nhất 8 ký tự');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/forget?phone=${inputValuePhone}&username=${inputValueEmail}&password=${inputValuePass}`,
                );
                if (response.data.error === 'Email và số điện thoại không trùng khớp') {
                    setError('Email và số điện thoại không trùng khớp');
                } else {
                    sessionStorage.setItem('userId', response.data.user[0].member_id);
                    window.location.href = '/';
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
            }
        }
    };

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, []);

    if (loggedIn) {
        // Nếu người dùng chưa đăng nhập, chuyển hướng họ đến trang đăng nhập
        window.location.href = '/';
    }

    const isFormValid = inputValueEmail.trim() !== '' && inputValuePass.trim() !== '' && inputValuePhone.trim() !== '';

    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Quên mật khẩu</title>
            </Helmet>
            <p className={cx('title-register')}>QUÊN MẬT KHẨU</p>
            <form>
                <div className={cx('div-email')}>
                    <label className={cx('form-label')}>
                        Email:
                        <input
                            type="text"
                            className={cx('form-control', { 'is-invalid': emailError })}
                            placeholder="Nhập Email"
                            name="email"
                            value={inputValueEmail}
                            onChange={handleChangeEmail}
                            onBlur={handleEmailBlur}
                        />
                        {emailError && <p className={cx('invalid-feedback')}>{emailError}</p>}
                    </label>
                </div>
                <div className={cx('div-phone')}>
                    <label className={cx('form-label')}>
                        Phone:
                        <input
                            type="text"
                            className={cx('form-control', { 'is-invalid': phoneError })}
                            placeholder="Nhập phone"
                            name="phone"
                            value={inputValuePhone}
                            onChange={handleChangePhone}
                            onBlur={handlePhoneBlur}
                        />
                        {phoneError && <p className={cx('invalid-feedback')}>{phoneError}</p>}
                    </label>
                </div>
                <div className={cx('div-pass')}>
                    <label className={cx('form-label')}>
                        Password New:
                        <input
                            type="password"
                            className={cx('form-control', { 'is-invalid': passwordError })}
                            placeholder="Nhập mật khẩu mới"
                            name="pswd"
                            value={inputValuePass}
                            onChange={handleChangePass}
                            onBlur={handlePasswordBlur}
                        />
                        {passwordError && <p className={cx('invalid-feedback')}>{passwordError}</p>}
                    </label>
                </div>
                <div className={cx('alert', 'alert-danger', { 'd-none': !error })}>{error}</div>

                <button
                    type="submit"
                    className={cx('btn-register', { 'btn-disabled': !isFormValid })}
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                >
                    Xác nhận
                </button>
            </form>
            <div className={cx('login')}>
                <button className={cx('btn-login')}>
                    <a href="/login" className={cx('a-login')}>
                        Đăng nhập
                    </a>
                </button>
            </div>
        </main>
    );
}

export default Forget;
