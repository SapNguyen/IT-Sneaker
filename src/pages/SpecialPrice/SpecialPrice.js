import Product from '~/Components/Product';
import classNames from 'classnames/bind';
import styles from './SpecialPrice.module.scss';
import BrandProduct from '../BrandProduct';
// import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function SpecialPrice() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm đặc biệt</title>
                </Helmet>
                <div className={cx('content')}>
                    {/* <Sidebar /> */}
                    <div className={cx('product')}>
                        <Product
                            nameproduct="Giày Vans Sk8-Low Rearrange"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/vn000bw7ccz__web_1_a49543c82615414e894de19b08fa612f_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/vn000bw7ccz__web_1_a49543c82615414e894de19b08fa612f_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/vn000bw7ccz__2_a324be0aa3be480faa0ff2d590a4c6c7_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/vn000bw7ccz__3_b9e6f07eadfd4556a7b628b78eac13f1_icon.jpg',
                            ]}
                        />
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

export default SpecialPrice;
