// import classNames from 'classnames/bind';
// import styles from './InfoProduct.module.scss';

// const cx = classNames.bind(styles);

function InfoProduct() {
    return (
        <table className="table table-bordered proc-table">
            <thead>
                <tr>
                    <th colspan="2">THÔNG TIN SẢN PHẨM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Barcode</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Dòng sản phẩm</td>
                    <td>Chuck Taylor All Star Classic</td>
                </tr>
                <tr>
                    <td>Giới tính</td>
                    <td>Unisex</td>
                </tr>
                <tr>
                    <td>Chế độ bảo hành</td>
                    <td>
                        1 Tháng
                        <p>(Không áp dụng sản phẩm giảm giá)</p>
                    </td>
                </tr>
                <tr>
                    <td>Phụ kiện kèm theo</td>
                    <td>Shopping Bag + HĐ Mua Hàng + Vớ Tặng (Áp dụng 1 số sản phẩm)</td>
                </tr>
            </tbody>
        </table>
    );
}

export default InfoProduct;
