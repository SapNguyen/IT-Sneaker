import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [inputValueName, setInputValueName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    const validateForm = () => {
        let isValid = true;

        // Kiểm tra email
        if (inputValueEmail.trim() === '') {
            setEmailError('Vui lòng điền email.');
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
        if (inputValueName.trim() === '') {
            setNameError('Vui lòng điền tên.');
            isValid = false;
        } else {
            setNameError('');
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
    const handleChangeName = (event) => {
        setInputValueName(event.target.value);
        setNameError('');
    };
    const handleChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
        setEmailError('');
    };

    const handleChangePass = (event) => {
        setInputValuePass(event.target.value);
        setPasswordError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Thực hiện xử lý đăng nhập, ví dụ gọi API
            console.log('Email:', inputValueEmail);
            console.log('Password:', inputValuePass);
        }

        // Thực hiện xử lý khi form được submit, ví dụ gọi API
        console.log('Submitted value:', inputValueEmail + inputValuePass + inputValueName);
    };

    const isFormValid = inputValueEmail.trim() !== '' && inputValuePass.trim() !== '' && inputValueName.trim() !== '';

    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <p className={cx('title-register')}>ĐĂNG KÝ</p>
            <form onSubmit={handleSubmit}>
                <div className={cx('div-name')}>
                    <label className={cx('form-label')}>
                        Name:
                        <input
                            type="text"
                            className={cx('form-control', { 'is-invalid': nameError })}
                            placeholder="Nhập Tên"
                            name="name"
                            value={inputValueName}
                            onChange={handleChangeName}
                            onBlur={handleNameBlur}
                        />
                        {nameError && <p className={cx('invalid-feedback')}>{nameError}</p>}
                    </label>
                </div>
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
                <div className={cx('div-pass')}>
                    <label className={cx('form-label')}>
                        Password:
                        <input
                            type="password"
                            className={cx('form-control', { 'is-invalid': passwordError })}
                            placeholder="Nhập mật khẩu"
                            name="pswd"
                            value={inputValuePass}
                            onChange={handleChangePass}
                            onBlur={handlePasswordBlur}
                        />
                        {passwordError && <p className={cx('invalid-feedback')}>{passwordError}</p>}
                    </label>
                </div>
                <div className={cx('alert', 'alert-danger', 'd-none')}>Nhập sai rồi</div>

                <button type="submit" className={cx('btn-register', { 'btn-disabled': !isFormValid })} disabled={!isFormValid}>
                    Đăng ký
                </button>
            </form>
            <div className={cx('login')}>
                <button className={cx('btn-login')}>
                    <a href="/login" className={cx('a-login')}>
                        Đã có tài khoản
                    </a>
                </button>
            </div>
        </main>
    );
}

export default Register;
