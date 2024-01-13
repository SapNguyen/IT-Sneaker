import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './BrandKswiss.module.scss';
import Product from '~/Components/Product';
import IntroBrand from '~/layouts/components/IntroBrand';
import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function BrandKswiss() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>K-swiss</title>
                </Helmet>
                <IntroBrand
                    img="https://file.hstatic.net/200000265619/file/kswiss-1420x400_6361bec3225944fd954425722a5059a6.jpg"
                    description="Swiss được thành lập vào những năm 1960, khi cơn sốt thời trang bắt đầu bùng phát, vào năm 1966, anh em nhà Thụy Sỹ Bona (Art Brunner và Earnest Brunner) đã tạo ra đôi giày tennis hoàn toàn bằng da đầu tiên trên thế giới tại Los Angeles, California, Mỹ. Được biết đến là thương hiệu giày thể thao nổi tiếng của xứ cờ hoa, mỗi thiết kế tạo nên những đôi K – Swiss đều là sự hòa trộn giữa nét cổ điển và hiện đại làm nên tên tuổi của thương hiệu này trong lòng các Fans yêu giày trên thế giới. Tiền thân của K-SWISS là một nhà máy có tên KUNJIL, nên chữ cái đầu tiên K của KUNJIL đã được lấy làm tên thương hiệu và được giữ cho đến tận bây giờ.

                Sau hơn 55 năm phát triển, chất lượng nổi bật và hiệu suất vượt trội của K-SWISS đã trở nên phổ biến trên sân đấu; các sản phẩm của K-SWISS cũng đã mở rộng từ lĩnh vực quần vợt sang điền kinh, chèo thuyền, đua xe tự do và các lĩnh vực thể thao mạo hiểm khác.
                
                Hiện nay, thương hiệu thuần Mỹ này đã trở thành một trong những thương hiệu thời trang của thế giới và được ưa chuộng cũng như xuất hiện trên đường phố Châu Âu, Châu Mỹ, Nhật Bản, Hàn Quốc, Hồng Kông và Đài Loan. Tại Trung Quốc, K - SWISS liên tục kết hợp các thiết kế cổ điển và tân tiến để tạo ra những phong cách mới."
                />
                <div className={cx('content')}>
                    <Sidebar />
                    <div className={cx('product')}>
                        <Product
                            nameproduct="Giày K-Swiss Vista Trainer"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/07000-142-m-01-web_be101c4afc914974aa8eb8404f0786b4_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/07000-142-m-01-web_be101c4afc914974aa8eb8404f0786b4_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/07000-142-m-02_af748f936b16434ab3d21d346b722907_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/07000-142-m-05_aa89e3c249e443f196c3bebbbf3324be_icon.jpg',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default BrandKswiss;
