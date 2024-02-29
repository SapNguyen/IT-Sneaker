import classNames from 'classnames/bind';
import styles from './InfoProduct.module.scss';

const cx = classNames.bind(styles);

function InfoProduct() {
    return (
        <table className="table table-bordered proc-table fw-600 text-center">
            <thead>
                <tr>
                    <th colSpan={2} className={cx(styles['info-product'],'fw-600','p5',styles.padding)}>THÔNG TIN SẢN PHẨM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={cx('padding')}>Barcode</td>
                    <td className={cx('padding')}>2</td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Dòng sản phẩm</td>
                    <td className={cx('padding')}>Chuck Taylor All Star Classic</td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Giới tính</td>
                    <td className={cx('padding')}>Unisex</td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Chế độ bảo hành</td>
                    <td className={cx('padding')}>
                        1 Tháng
                        <p>(Không áp dụng sản phẩm giảm giá)</p>
                    </td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Phụ kiện kèm theo</td>
                    <td className={cx('padding')}>Shopping Bag + HĐ Mua Hàng + Vớ Tặng (Áp dụng 1 số sản phẩm)</td>
                </tr>
            </tbody>
        </table>
    );
}

export default InfoProduct;
