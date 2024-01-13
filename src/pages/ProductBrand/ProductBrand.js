import BrandProduct from '../BrandProduct';
import classNames from 'classnames/bind';
import styles from './ProductBrand.module.scss';
import Product from '~/Components/Product';
import Sidebar from '~/layouts/components/Sidebar';
import IntroBrand from '~/layouts/components/IntroBrand';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

function ProductBrand() {
    return (
        <BrandProduct>
            <div className={cx('container')}>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>
                <IntroBrand
                    img="https://file.hstatic.net/200000265619/file/banner_danh_muc-sneaker_lab-767x600_fb5601e67cb24b45835eb37166a82757.jpg"
                    description="Hiểu được sức hút trong vẻ đẹp và tầm quan trọng trong việc giữ một đôi giày luôn mới, Sneaker LAB đã kết hợp niềm đam mê với văn hóa giày thể thao và khoa học để tạo ra giải pháp vệ sinh hiệu quả. Sneaker LAB đã tận dụng đặc tính từ công nghệ sinh học và khai thác một loại vi khuẩn có lợi, được sử dụng trong phân hủy sinh học chất thải hữu cơ. Từ đó cho ra đời công thức làm sạch độc quyền. Công nghệ sinh học này làm sạch ở cấp độ vi mô, duy trì hoạt chất bảo vệ lâu dài suốt quá trình sử dụng, giúp đôi giày của bạn sạch lâu hơn. Đồng thời, Sneaker LAB cũng chính thức được chứng nhận “Green Tag” - một trong những nhãn hiệu thân thiện với môi trường, đáng tin cậy và được công nhận rộng rãi. Với niềm tự hào là một thương hiệu đến từ Nam Phi áp dụng cách tiếp cận mới mẻ trong lĩnh vực chăm sóc giày, Sneaker LAB đã có mặt tại hơn 60 quốc gia trên thế giới và con số sẽ không ngừng tăng lên."
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

export default ProductBrand;
