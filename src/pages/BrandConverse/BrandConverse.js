import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './BrandConverse.module.scss';
import Product from '~/Components/Product';
import IntroBrand from '~/layouts/components/IntroBrand';
import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function BrandConverse() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Converse</title>
                </Helmet>
                <IntroBrand
                    img="https://file.hstatic.net/200000265619/file/banner_danh_muc_-converse-1920x600_2a2adf9383294e468826bdb5c91bf878.jpg"
                    description="Thành lập năm 1908, thương hiệu Converse đã  nổi tiếng :’’Công ty thể thao truyền thống của MỸ ‘’ và hãng cũng sở hữu những thiết kế kinh điển như Chuck Taylor All Star, Jack Purcell, One Star, Chuck 70s, Chuck Taylor All Star CX, Run Star Hike,... Ngày nay, Converse được ưu chuộng và trở thành biểu tượng của thời trang đường phố và có mặt trên 160 quốc gia"
                />
                <div className={cx('content')}>
                    <Sidebar />
                    <div className={cx('product')}>
                        <Product
                            nameproduct="Giày Converse Chuck 70 Seasonal Color Canvas"
                            priceproduct="2,000,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/a05584c_3_a7d20e98ba91464f9fa53c23d3dc83ba_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/a05584c_2_94ef389a2a9046428ef541e955014a34_icon.jpg',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default BrandConverse;
