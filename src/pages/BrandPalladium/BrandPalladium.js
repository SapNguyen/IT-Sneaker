import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './BrandPalladium.module.scss';
import Product from '~/Components/Product';
import IntroBrand from '~/layouts/components/IntroBrand';
import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function BrandPalladium() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Palladium</title>
                </Helmet>
                <IntroBrand
                    img="https://file.hstatic.net/200000265619/file/banner_danh_muc-palladium-1920x600_ec621d0286af4b13b39a82920f34c278.jpg"
                    description="Được thành lập vào năm 1920 tại Lyon, Pháp, Palladium khởi đầu  là một công ty chuyên sản xuất lốp máy bay dành cho quân đội. Năm 1947, Palladium thay đổi định hướng sang sản xuất giày dành cho binh lính, quân đội. Ngày nay, giày palladium không chỉ giới hạn trong các quân doanh mà ngay cả công chúng, đặc biệt là giới trẻ cũng ưa thích sự tiện lợi và cá tính thời trang của những đôi boots đặc biệt này. Các dòng sản phẩm của Palladium bao gồm: Pampa, Blanc, Monochorm, Pallabrouse, Pallaphoenix, Pallakix, Pallashock."
                />
                <div className={cx('content')}>
                    <Sidebar />
                    <div className={cx('product')}>
                        <Product
                            nameproduct="Giày Palladium Pampa Travel Lite"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/77039-116-m-01-web_daf1c2b652cd43a789344eaa045006b5_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/77039-116-m-01-web_daf1c2b652cd43a789344eaa045006b5_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/77039-116-m-06_4a3e2dff4ee84ba3b69535f6da503b93_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/77039-116-m-02_44dfc61027a24b11898a89206f6b43d4_icon.jpg',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default BrandPalladium;
