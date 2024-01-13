import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './BrandNike.module.scss';
import Product from '~/Components/Product';
import IntroBrand from '~/layouts/components/IntroBrand';
import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function BrandNike() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Nike</title>
                </Helmet>
                <IntroBrand img="https://file.hstatic.net/200000265619/file/banner-danh-muc-nike-1420x400_396c9b19168f411b821396f926a6cf7a.jpg" />
                <div className={cx('content')}>
                    <Sidebar />
                    <div className={cx('product')}>
                        <Product
                            nameproduct="Giày Nike JORDAN POINT LANE"
                            priceproduct="1,680,000₫"
                            supimg="https://product.hstatic.net/200000265619/product/cz4166-010-phsrh000-3144_490b4ad615aa4e2099a04a764afa037a_medium.jpg"
                            imgs={[
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phsrh000-3144_490b4ad615aa4e2099a04a764afa037a_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phslh001-3144_5080351a01944999a7a3c4c814fdb91c_icon.jpg',
                                'https://product.hstatic.net/200000265619/product/cz4166-010-phcfh001-3144_e2acf7a84e704ab8a946ea422acc674c_icon.jpg',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default BrandNike;
