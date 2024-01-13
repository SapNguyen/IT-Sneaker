import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './BrandVans.module.scss';
import Product from '~/Components/Product';
import IntroBrand from '~/layouts/components/IntroBrand';
import Sidebar from '~/layouts/components/Sidebar';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function BrandVans() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Vans</title>
                </Helmet>
                <IntroBrand
                    img="https://file.hstatic.net/200000265619/file/5955a72623d3f38daac2_22139eafac91403285c69107ec720bc6.jpg"
                    description="Vans là thương hiệu giày thể thao, đặc biệt biểu tượng cho những môn thể thao mạo hiểm, dựa trên sự trẻ trung, tính hữu dụng và nâng cao phong cách cá nhân. Tồn tại để truyền cảm hứng và khuyến khích sự sáng tạo cho giới trẻ trên toàn cầu là mục tiêu của Vans. Được thành lập vào năm 1966 bởi Paul Van Doren và sau hơn 56 năm thành lập, Vans đã có mặt trên 22 quốc gia trên toàn thế giới như Hàn quốc, Thái Lan, Philippines, Trung Quốc, Hongkong, Singapore,... Vans chính thức về Việt Nam vào năm 2009 dưới sự bảo trợ của công ty TNHH TMDV Vĩnh Quang Minh. Trải qua 13 năm thành lập và phát triển, hiện nay Vans Việt Nam đã có 17 hệ thống cửa hàng chính hãng và hơn 30 chi nhánh trên toàn quốc. Với tinh thần “OFF THE WALL” Vans tự tin sẽ là một trong những thương hiệu giày Sneaker đồng hành mạnh mẽ nhất cùng các bạn trong suốt chặng đường chinh phục đam mê của mình."
                />
                <div className={cx('content')}>
                    <Sidebar />
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
                    </div>
                </div>
            </div>
        </BrandProduct>
    );
}

export default BrandVans;
