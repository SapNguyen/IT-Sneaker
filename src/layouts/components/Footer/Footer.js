import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className="row">
                <div className="col-sm-4">
                    <h6 className="fw-bolder text-white">Đồ án tốt nghiệp</h6>
                    <p className="text-white">Địa chỉ: Đại học Xây Dựng Hà Nội</p>
                    <p className="text-white">Điện thoại: 0999999999</p>
                    <p className="text-white">Email: anh1502965@huce.edu.com</p>
                </div>
                <div className="col-sm-4">
                    <h6 className="fw-bolder text-white">DANH MỤC</h6>
                    <p className="text-white">Trang chủ</p>
                    <p className="text-white">Thương hiệu</p>
                    <p className="text-white">Giới tính</p>
                    <p className="text-white">Hàng mới về</p>
                    <p className="text-white">Ưu đãi</p>
                </div>
                <div className="col-sm-4">
                    <h6 className="fw-bolder text-white">CHÍNH SÁCH</h6>
                    <p className="text-white">Điều khoản & điều kiện</p>
                    <p className="text-white">Chính sách bảo mật</p>
                    <p className="text-white">Chính sách giao hàng</p>
                    <p className="text-white">Chính sách bảo hành</p>
                    <p className="text-white">Phương thức thanh toán</p>
                    <p className="text-white">Hướng dẫn đặt hàng</p>
                    <p className="text-white">Liên hệ hợp tác</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
