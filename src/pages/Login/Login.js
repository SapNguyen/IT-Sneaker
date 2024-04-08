import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import * as loginService from '~/services/loginService';

const cx = classNames.bind(styles);

function Login() {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
        setError(null);
    };

    const handleChangePass = (event) => {
        setInputValuePass(event.target.value);
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await loginService.login(inputValueEmail, inputValuePass);
            // console.log(result.user[0].role);
            if (result.user[0].role === null) {
                sessionStorage.setItem('userId', result.user[0].mem_id);

                const previousUrl = sessionStorage.getItem('previousUrl');
                if (previousUrl) {
                    sessionStorage.removeItem('previousUrl');
                    window.location.href = previousUrl;
                } else {
                    window.location.href = '/';
                }
            } else {
                setError('Tài khoản mật khẩu không đúng');
            }
        } catch (error) {
            setError('Tài khoản mật khẩu không đúng');
        }
    };

    const isFormValid = inputValueEmail.trim() !== '' && inputValuePass.trim() !== '';

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, []);

    if (loggedIn) {
        // Nếu người dùng chưa đăng nhập, chuyển hướng họ đến trang đăng nhập
        window.location.href = '/dashboard';
    }

    return (
        <main className={cx('wrapper')}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <p className={cx('title-login')}>ĐĂNG NHẬP</p>
            <form onSubmit={handleSubmit}>
                <div className={cx('div-email')}>
                    <label className={cx('form-label')}>
                        Email:
                        <input
                            type="text"
                            className={cx('form-control')}
                            placeholder="Nhập Email"
                            name="email"
                            value={inputValueEmail}
                            onChange={handleChangeEmail}
                        />
                    </label>
                </div>
                <div className={cx('div-pass')}>
                    <label className={cx('form-label')}>
                        Password:
                        <input
                            type="password"
                            className={cx('form-control')}
                            placeholder="Nhập mật khẩu"
                            name="pswd"
                            value={inputValuePass}
                            onChange={handleChangePass}
                        />
                    </label>
                </div>
                <div className={cx('alert', 'alert-danger', { 'd-none': !error })}>{error}</div>

                <button
                    type="submit"
                    className={cx('btn-login', { 'btn-disabled': !isFormValid })}
                    disabled={!isFormValid}
                >
                    Đăng nhập
                </button>
            </form>
            <div className={cx('register')}>
                <button className={cx('btn-register')}>
                    <a href="/register" className={cx('a-register')}>
                        Tạo tài khoản mới
                    </a>
                </button>
                <button className={cx('btn-forget')}>
                    <a href="/forget" className={cx('a-register')}>
                        Quên mật khẩu
                    </a>
                </button>
            </div>
            {/* <div className={cx('register')}>
                <button className={cx('btn-register')}>
                    <a href="/forget" className={cx('a-register')}>
                        Quên mật khẩu
                    </a>
                </button>
            </div> */}
        </main>
    );
}

export default Login;
