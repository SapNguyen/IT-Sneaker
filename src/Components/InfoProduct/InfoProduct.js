import classNames from 'classnames/bind';
import styles from './InfoProduct.module.scss';

const cx = classNames.bind(styles);

function InfoProduct({ data }) {
    const getGender = (product_genre) => {
        switch (product_genre) {
            case 0:
                return 'Nam';
            case 1:
                return 'Nữ';
            case 2:
                return 'Unisex';
            default:
                return '';
        }
    };

    const gender = getGender(data.product_genre);

    return (
        <table className={cx('table table-bordered proc-table fw-600 text-center', styles['table'])}>
            <thead>
                <tr>
                    <th colSpan={2} className={cx(styles['info-product'], 'fw-600', 'p5', styles.padding)}>
                        THÔNG TIN SẢN PHẨM
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={cx('padding')}>Barcode</td>
                    <td className={cx('padding')}>{data.product_id}</td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Dòng sản phẩm</td>
                    <td className={cx('padding')}>{data.product_name}</td>
                </tr>
                <tr>
                    <td className={cx('padding')}>Giới tính</td>
                    <td className={cx('padding')}>{gender}</td>
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
