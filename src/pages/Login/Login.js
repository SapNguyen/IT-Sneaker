import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');

    const handleChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
    };

    const handleChangePass = (event) => {
        setInputValuePass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý khi form được submit, ví dụ gọi API
        console.log('Submitted value:', inputValueEmail + inputValuePass);
    };

    const isFormValid = inputValueEmail.trim() !== '' && inputValuePass.trim() !== '';
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
                <div className={cx('alert', 'alert-danger' ,'d-none')}>Nhập sai rồi</div>

                <button type="submit" className={cx('btn-login', { 'btn-disabled': !isFormValid })} disabled={!isFormValid}>
                    Đăng nhập
                </button>
            </form>
            <div className={cx('register')}>
                <button className={cx('btn-register')}>
                    <a href="/register" className={cx('a-register')}>
                        Tạo tài khoản mới
                    </a>
                </button>
            </div>
        </main>
    );
}

export default Login;
