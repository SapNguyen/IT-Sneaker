import classNames from 'classnames/bind';
import styles from './DescriptionProduct.module.scss';

const cx = classNames.bind(styles);

function DescriptionProduct() {
    return (
        <div>
            <div className={cx(styles.tab, 'row')}>
                <button
                    className={cx(styles.tablinks, 'col-sm-3', 'rounded-top', styles.active)}
                    onclick="openTab(event, 'description')"
                >
                    Mô tả sản phẩm
                </button>
                <button
                    className={cx(styles.tablinks, 'col-sm-3', 'rounded-top')}
                    onclick="openTab(event, 'size-table')"
                >
                    Bảng Size
                </button>
                <button className={cx(styles.tablinks, 'col-sm-3', 'rounded-top')} onclick="openTab(event, 'policy')">
                    Chính sách bán hàng
                </button>
                <button className={cx(styles.tablinks, 'col-sm-3', 'rounded-top')} onclick="openTab(event, 'preserve')">
                    Thông tin bảo quản
                </button>
            </div>
            <div id="description" className={cx(styles.tabcontent, 'd-block')}>
                {/* style="display: block" */}
                <p></p>
            </div>

            <div id="size-table" className={cx('tabcontent')}>
                <img src="{{asset('img/size.jpg')}}" alt="" className="img-fluid" />
            </div>

            <div id="policy" className={cx('tabcontent')}>
                <h5>Hàng đã mua không đổi trả</h5>
            </div>

            <div id="preserve" className={cx('tabcontent')}>
                <p>Đối Với Giày Vải bạt (canvas):</p>
                <p>1.Sản phẩm chỉ nên giặt bằng tay và tránh việc chà sát mạnh trên bề mặt vải.</p>
                <p>
                    2.Đối với hóa chất tẩy rửa hoặc xà phòng có tính kiềm cao đều dễ gây nên tình trạng bung keo, biến
                    dạng hoặc loang màu. Do đó chỉ nên dùng dầu gội, sữa tắm hoặc dung dịch chuyên dụng dành cho sản
                    phẩm.
                </p>
                <p>3.Khuyến cáo không phơi sản phẩm dưới ánh nắng trực tiếp hoặc sấy khô bằng nhiệt độ cao.</p>
                <p>
                    4.Đối với giày trắng, giặt xong sẽ quấn nhiều lớp giấy ăn xung quanh để thấm hút nước và nhân lúc
                    giày còn ẩm rắc bột phấn rôm lên trực tiếp bề mặt vải, sau đó để giày khô tự nhiên.
                </p>
                <p>
                    5.Đối với khách hàng thường xuyên vận động hoặc ra nhiều mồ hôi, nên phun một lớp giấm ăn lên giày
                    trước khi sử dụng.
                </p>
                <p className="mt-2">Đối Với Giày Da (leather):</p>
                {/* style="margin-top: 10px" */}
                <p>
                    1.Sản phẩm bằng da, giả da hoặc da lộn khi bị bám bụi bẩn chỉ nên sử dụng khăn lông ẩm để vệ sinh và
                    làm sạch.
                </p>
                <p>
                    2.Trong quá trình sử dụng, nên hạn chế va chạm vật sắt/ nhọn lên trên bề mặt da; tránh đi dưới trời
                    mưa hoặc khi dính vết trà, cà phê thì phải xử lý ngay để không lưu lại vết ố.
                </p>
                <p>
                    3.Không tự ý bôi hoặc phun các chất tẩy rửa lên bề mặt da, trừ những dung dịch chuyên dụng dành cho
                    sản phẩm.
                </p>
                <p>4.Khuyến cáo không phơi sản phẩm dưới ánh nắng trực tiếp hoặc sấy khô bằng nhiệt độ cao.</p>
                <p className="mt-2">
                    {' '}
                    Lưu ý chung : Đối với sản phẩm không sử dụng thường xuyên thì nên nhét giấy bên trong để giữ được
                    form dáng như ban đầu.
                </p>
            </div>
        </div>
    );
}

export default DescriptionProduct;
