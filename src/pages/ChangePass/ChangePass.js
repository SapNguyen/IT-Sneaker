import classNames from 'classnames/bind';
import styles from './ChangePass.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function ChangePass() {
    const [inputValuePassNow, setInputValuePassNow] = useState('');
    const [inputValuePassNew, setInputValuePassNew] = useState('');
    const [inputValueConfirm, setInputValueConfirm] = useState('');
    const [passnowError, setPassNowError] = useState('');
    const [passnewError, setPassNewError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [error, setError] = useState(null);

    const validateForm = () => {
        let isValid = true;

        // Kiểm tra email
        if (inputValuePassNow.trim() === '') {
            setPassNowError('Vui lòng điền mật khẩu hiện tại.');
        } else {
            setPassNowError('');
        }

        // Kiểm tra password
        if (inputValuePassNew.trim() === '') {
            setPassNewError('Vui lòng điền mật khẩu mới.');
            isValid = false;
        } else {
            setPassNewError('');
        }

        // Kiểm tra Name
        if (inputValueConfirm.trim() === '') {
            setConfirmError('Vui lòng điền xác nhận.');
            isValid = false;
        } else {
            setConfirmError('');
        }

        if (!inputValuePassNew || inputValuePassNew.length < 8) {
            setPassNewError('Password phải có ít nhất 8 ký tự');
            isValid = false;
        } else {
            setPassNewError('');
        }

        return isValid;
    };
    const handlePassNowBlur = () => {
        if (inputValuePassNow.trim() === '') {
            setPassNowError('Vui lòng điền mật khẩu hiện tại.');
        } else {
            setPassNowError('');
        }
    };
    const handlePassNewBlur = () => {
        if (inputValuePassNew.trim() === '') {
            setPassNewError('Vui lòng điền mật khẩu mới.');
        } else {
            setPassNewError('');
        }
    };

    const handleConfirmBlur = () => {
        if (inputValueConfirm.trim() === '') {
            setConfirmError('Vui lòng điền xác nhận.');
        } else {
            setConfirmError('');
        }
    };
    const handleChangePassNow = (event) => {
        setInputValuePassNow(event.target.value);
        setPassNowError('');
        setError('');
    };
    const handleChangePassNew = (event) => {
        setInputValuePassNew(event.target.value);
        setPassNewError('');
        setError('');
    };

    const handleChangeConfirm = (event) => {
        setInputValueConfirm(event.target.value);
        setConfirmError('');
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (inputValuePassNew !== inputValueConfirm) {
                setConfirmError('Xác nhận mật khẩu không trùng khớp với mật khẩu mới.');
                setInputValueConfirm('');

                return;
            } else {
                try {
                    const response = await axios.post(
                        `https://s25sneaker.000webhostapp.com/api/user/update/password?id=${sessionStorage.getItem(
                            'userId',
                        )}&password=${inputValuePassNow}&passwordnew=${inputValuePassNew}`,
                    );
                    if (response.data.message === 'Mật khẩu không chính xác') {
                        setError('Mật khẩu không chính xác');
                    } else {
                        toast.success('Thay đổi mật khẩu thành công');
                        setInputValuePassNow('');
                        setInputValuePassNew('');
                        setInputValueConfirm('');
                        setError('');
                    }
                } catch (error) {
                    alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
                }
            }
        }

        // Thực hiện xử lý khi form được submit, ví dụ gọi API
        // console.log('Submitted value:', inputValueEmail + inputValuePass + inputValueName);
    };

    const isFormValid =
        inputValuePassNow.trim() !== '' && inputValuePassNew.trim() !== '' && inputValueConfirm.trim() !== '';

    return (
        <div className={cx('container')}>
            <Helmet>
                <title>Đổi mật khẩu</title>
            </Helmet>
            <p className={cx('title')}>Đổi mật khẩu</p>
            <div className={cx('content')}>
                <form>
                    <div className={cx('div-passnow')}>
                        <label className={cx('form-label')}>Mật khẩu hiện tại</label>
                        <input
                            type="password"
                            className={cx('form-control', { 'is-invalid': passnowError })}
                            placeholder="Nhập mật khẩu hiện tại"
                            name="passnow"
                            value={inputValuePassNow}
                            onChange={handleChangePassNow}
                            onBlur={handlePassNowBlur}
                        />
                    </div>
                    {passnowError && <p className={cx('invalid-feedback')}>{passnowError}</p>}

                    <div className={cx('div-passnew')}>
                        <label className={cx('form-label')}>Mật khẩu mới</label>
                        <input
                            type="password"
                            className={cx('form-control', { 'is-invalid': passnewError })}
                            placeholder="Nhập mật khẩu mới"
                            name="passnew"
                            value={inputValuePassNew}
                            onChange={handleChangePassNew}
                            onBlur={handlePassNewBlur}
                        />
                    </div>
                    {passnewError && <p className={cx('invalid-feedback')}>{passnewError}</p>}

                    <div className={cx('div-confirm')}>
                        <label className={cx('form-label')}>Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            className={cx('form-control', { 'is-invalid': confirmError })}
                            placeholder="Nhập xác nhận mật khẩu"
                            name="confirm"
                            value={inputValueConfirm}
                            onChange={handleChangeConfirm}
                            onBlur={handleConfirmBlur}
                        />
                    </div>
                    {confirmError && <p className={cx('invalid-feedback')}>{confirmError}</p>}

                    <div className={cx('alert', 'alert-danger', { 'd-none': !error })}>{error}</div>

                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className={cx('btn-change', { 'btn-disabled': !isFormValid })}
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                        >
                            Xác nhận
                        </button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default ChangePass;
