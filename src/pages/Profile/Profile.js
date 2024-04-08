import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Helmet } from 'react-helmet';
import { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import * as userService from '~/services/usersService';

const cx = classNames.bind(styles);

function Profile() {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueAddress, setInputValueAddress] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const [userResult, setUserResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (!loggedInUser) {
            setLoggedIn(false);
        }
        const fetchAPI = async () => {
            setLoading(true);
            const result = await userService.user(loggedInUser);
            setUserResult(result.users);
            setInputValueName(result.users[0].name);
            setInputValuePhone(result.users[0].phone.toString());
            setInputValueAddress(result.users[0].address);

            setLoading(false);
        };

        fetchAPI();
    }, []);

    if (loggedIn === false) {
        window.location.href = '/login';
    }

    const handleChangeName = (event) => {
        setInputValueName(event.target.value);
        setError('');
    };

    const handleChangePhone = (event) => {
        setInputValuePhone(event.target.value);
        setError('');
    };

    const handleChangeAddress = (event) => {
        setInputValueAddress(event.target.value);
        setError('');
    };

    const vietnamesePhoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const isValidVietnamesePhoneNumber = (phoneNumber) => {
        return vietnamesePhoneNumberRegex.test(phoneNumber);
    };

    const validateForm = () => {
        let isValid = true;

        if (/\d/.test(inputValueName)) {
            setError('Tên không được chứa số');
            isValid = false;
        } else {
            setError('');
        }

        // Validate số điện thoại
        if (!isValidVietnamesePhoneNumber(inputValuePhone)) {
            setError('Số điện thoại không đúng định dạng');
            isValid = false;
        } else {
            setError('');
        }

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(
                    `https://s25sneaker.000webhostapp.com/api/user/update/info?id=${sessionStorage.getItem(
                        'userId',
                    )}&name=${inputValueName}
                &phone=${inputValuePhone}&address=${inputValueAddress}`,
                );
                if (response.data.error) {
                    setError('Sửa không thành công');
                } else {
                    toast.success('Sửa thông tin thành công');
                }
            } catch (error) {
                alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
            }
        }
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
                <form>
                    {userResult && userResult.map((user, index) => (
                        <Fragment key={index}>
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
                                <p className={cx('form-control-email')}>{user.username}</p>
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
                            <div className={cx('alert', 'alert-danger', { 'd-none': !error })}>{error}</div>

                            <div className="d-flex justify-content-center mt-3">
                                <button
                                    type="submit"
                                    className={cx('btn-change', { 'btn-disabled': !isFormValid })}
                                    disabled={!isFormValid}
                                    onClick={handleSubmit}
                                >
                                    Lưu
                                </button>
                            </div>
                        </Fragment>
                    ))}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default Profile;
