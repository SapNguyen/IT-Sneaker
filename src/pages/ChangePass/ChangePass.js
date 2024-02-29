import classNames from 'classnames/bind';
import styles from './ChangePass.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ChangePass() {
    const [inputValuePassNow, setInputValuePassNow] = useState('');
    const [inputValuePassNew, setInputValuePassNew] = useState('');
    const [inputValueConfirm, setInputValueConfirm] = useState('');
    const [passnowError, setPassNowError] = useState('');
    const [passnewError, setPassNewError] = useState('');
    const [confirmError, setConfirmError] = useState('');

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
    };
    const handleChangePassNew = (event) => {
        setInputValuePassNew(event.target.value);
        setPassNewError('');
    };

    const handleChangeConfirm = (event) => {
        setInputValueConfirm(event.target.value);
        setConfirmError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (inputValuePassNew !== inputValueConfirm) {
                setConfirmError('Xác nhận mật khẩu không trùng khớp với mật khẩu mới.');
                setInputValueConfirm('');

                return;
            }
            // Thực hiện xử lý đăng nhập, ví dụ gọi API
            console.log('Passnow:', inputValuePassNow);
            console.log('Passnew:', inputValuePassNew);
            console.log('Passconfirm:', inputValueConfirm);
        }

        setInputValuePassNow('');
        setInputValuePassNew('');
        setInputValueConfirm('');

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
                <form onSubmit={handleSubmit}>
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

                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className={cx('btn-change', { 'btn-disabled': !isFormValid })}
                            disabled={!isFormValid}
                        >
                            Xác nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePass;
