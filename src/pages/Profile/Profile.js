import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';

const cx = classNames.bind(styles);

function Profile() {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueAddress, setInputValueAddress] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (!loggedInUser) {
            setLoggedIn(false);
        }
    }, []);

    if (loggedIn === false) {
        window.location.href = '/login';
    }

    const handleChangeName = (event) => {
        setInputValueName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setInputValuePhone(event.target.value);
    };

    const handleChangeAddress = (event) => {
        setInputValueAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý khi form được submit, ví dụ gọi API
        // console.log('Submitted value:', inputValueEmail + inputValuePass);
    };

    const isFormValid =
        inputValueName.trim() !== '' && inputValuePhone.trim() !== '' && inputValueAddress.trim() !== '';

    return (
        <div className={cx('container')}>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <p className={cx('title')}>Hồ Sơ Của Tôi</p>
            <div className={cx('content')}>
                <form onSubmit={handleSubmit}>
                    <div className={cx('div-name')}>
                        <label className={cx('form-label')}>Tên</label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            placeholder="Nhập tên"
                            name="name"
                            value={inputValueName}
                            onChange={handleChangeName}
                        />
                    </div>
                    <div className={cx('div-email')}>
                        <label className={cx('form-label')}>Email</label>
                        <p className={cx('form-control-email')}>anh@gmail.com</p>
                    </div>
                    <div className={cx('div-phone')}>
                        <label className={cx('form-label')}>Số điện thoại</label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            placeholder="Nhập số điện thoại"
                            name="phone"
                            value={inputValuePhone}
                            onChange={handleChangePhone}
                        />
                    </div>
                    <div className={cx('div-address')}>
                        <label className={cx('form-label')}>Địa chỉ</label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            placeholder="Nhập Địa chỉ"
                            name="address"
                            value={inputValueAddress}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className={cx('btn-change', { 'btn-disabled': !isFormValid })}
                            disabled={!isFormValid}
                        >
                            Lưu
                        </button>
                    </div>
                </form>

                {/* <form>
                    <table>
                        <tr classNames="tr_input" id="tr_name">
                            <td classNames="form-label">Tên</td>
                            <td>
                                <input
                                    type="text"
                                    classNames="form-control "
                                    id="name"
                                    name="name"
                                    value="{{$user->name}}"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td classNames="form-label">Email</td>
                            <td></td>
                        </tr>
                        <tr classNames="tr_input" id="tr_phone">
                            <td classNames="form-label">Số điện thoại</td>
                            <td>
                                <input
                                    type="text"
                                    classNames="form-control "
                                    id="phone"
                                    name="phone"
                                    value="(+84) {{$user->phone}}"
                                />
                            </td>
                        </tr>
                        <tr classNames="tr_input" id="tr_address">
                            <td classNames="form-label">Địa chỉ</td>
                            <td>
                                <input
                                    type="text"
                                    classNames="form-control "
                                    id="address"
                                    name="address"
                                    value="{{$user->address}}"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <button id="btn_profile" classNames="button">
                                    Lưu
                                </button>
                            </td>
                        </tr>
                    </table>
                </form> */}
            </div>
        </div>
    );
}

export default Profile;
