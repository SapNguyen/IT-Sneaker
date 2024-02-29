import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Product from '~/Components/Product';
import ReactPlayer from 'react-player';
import Brand from '~/layouts/components/Brand';
import Slider from '~/layouts/components/Slider';
import CustomSlider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CustomNextArrow from '~/Components/CustomNextArrow';
import CustomPrevArrow from '~/Components/CustomPrevArrow';

import * as productsServices from '~/services/productsService';

import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow mt5/>,
        prevArrow: <CustomPrevArrow mt5/>,
    };

    const [productValue, setProductValue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPIProduct = async () => {
            try {
                setLoading(true);
                const result = await productsServices.detailproduct();

                setProductValue(result.products);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIProduct();
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>Trang Chủ</title>
            </Helmet>
            <div className={cx('container')}>
                <Slider />
                <Brand />
                <div className={cx('product-list')}>
                    <div className={cx('des_img_product')}>
                        <img
                            src="https://theme.hstatic.net/200000265619/1001091352/14/banner_product_nangdong.jpg?v=383"
                            className={cx('img-fluid')}
                            alt=""
                        />
                        <div className={cx('des_product')}>
                            <div className={cx('title')}>SNEAKER BUZZ DECONSTRUCTION</div>
                            <p className={cx('text-des')}>
                                Thuộc bộ sưu tập đặc biệt Deconstruction của dòng Y-strap, hai sản phẩm này kế thừa
                                những ưu điểm của các sản phẩm Y-strap đồng thời được nâng cấp tạo dáng của sản phẩm.
                                Phần đế được nâng cao và thiết kế theo xu hướng bất quy tắc giúp sản phẩm trở nên thu
                                hút hơn. Màu sắc của BST này được nghiên cứu phù hợp mùa HO23 và nhu cầu thời trang của
                                người địa phương cũng như bề mặt đường phố Việt Nam. Với bề mặt được thiết kế các chấp
                                vá bằng ngôn ngữ thiết kế hiện đại tạo bề mặt 3D giúp hình thể thời trang nhưng vẫn hỗ
                                trợ bàn chân bám sát và giảm trơn trượt. Phấn đế cao su cùng gợn sóng nổi giúp bám dính
                                mọi địa hình,mọi thời tiết và không gây hại đến mô hình bàn chân cũng như an toàn cho da
                                chân. Đế cao giúp tăng chiều cao của người sử dụng nhưng vẫn giữ được độ thoải mái.
                            </p>
                            <a className={cx('more')} href=" " title="Xem tất cả">
                                Xem tất cả
                            </a>
                        </div>
                    </div>

                    <div className={cx('container-slider')} align="center">
                        {/* <div className={cx('owl-carousel')}>
                            <div className={cx('owl-stage-outer')}>
                                <div className={cx('owl-stage')}> */}
                        <CustomSlider {...settings} className={cx('slider-flex')}>
                            {productValue.map((result) => (
                                <div key={result.idp}>
                                    <Link to={`/product/${result.idp}`}><Product data={result}/></Link>
                                    {/* <Product
                                    
                                        // nameproduct="Giày Vans Sk8-Low Rearrange"
                                        // priceproduct="1,680,000₫"
                                        // mainimg="https://product.hstatic.net/200000265619/product/vn0009qccjj_-web-1_613696c8feb8494081616e15c27db43d_medium.jpg"
                                        // imgs={[
                                        //     'https://product.hstatic.net/200000265619/product/vn000crnba2__web_1_1a353a64a6274d648592f3b01aa4eb23_small.jpg',
                                        //     'https://product.hstatic.net/200000265619/product/vn000crnba2__5_88668b3e0dda49d5885aea626976a6a2_small.jpg',
                                        //     'https://product.hstatic.net/200000265619/product/vn000crnba2__2_34f05d3d2c44441ca0fe513b36d953f5_small.jpg',
                                        // ]}
                                        data={result}
                                    /> */}
                                </div>
                            ))}

                            {/* <div>
                                <Product
                                    nameproduct="Giày Vans Sk8-Low Rearrange"
                                    priceproduct="1,680,000₫"
                                    mainimg="https://product.hstatic.net/200000265619/product/vn0005ufahu__web_1_50880f87383e45feb6d53861b8f8e674_medium.jpg"
                                    imgs={[
                                        'https://product.hstatic.net/200000265619/product/vn0005ufahu__web_1_50880f87383e45feb6d53861b8f8e674_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/vn0005ufahu__2_d70dd7d8657042748b3f6a9525cecfcb_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/vn0005ufahu__3_f67ae41bf8c8411eb882252e8bd0e1ac_icon.jpg',
                                    ]}
                                />
                            </div>
                            <div>
                                <Product
                                    nameproduct="Giày Vans Sk8-Low Rearrange"
                                    priceproduct="1,680,000₫"
                                    mainimg="https://product.hstatic.net/200000265619/product/a05584c_5_7e6ca3a0f3e74dc0bed53db62b5b988b_medium.jpg"
                                    imgs={[
                                        'https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/a05584c_2_94ef389a2a9046428ef541e955014a34_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/a05584c_3_a7d20e98ba91464f9fa53c23d3dc83ba_icon.jpg',
                                    ]}
                                />
                            </div>
                            <div>
                                <Product
                                    nameproduct="Giày Vans Sk8-Low Rearrange"
                                    priceproduct="1,680,000₫"
                                    mainimg="https://product.hstatic.net/200000265619/product/vn000ckf6ky__web_1_4c237d5814254b4a93dd4318797f537d_medium.jpg"
                                    imgs={[
                                        'https://product.hstatic.net/200000265619/product/vn000ckf6ky__web_1_4c237d5814254b4a93dd4318797f537d_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/vn000ckf6ky__2_068547467c8b43ed848ea6aae930e05d_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/vn000ckf6ky__4_0b69f3e3bf3e45539ac303185c2a29d3_icon.jpg',
                                    ]}
                                />
                            </div>
                            <div>
                                <Product
                                    nameproduct="Giày Vans Sk8-Low Rearrange"
                                    priceproduct="1,680,000₫"
                                    mainimg="https://product.hstatic.net/200000265619/product/1sbs033_web_27cf7c3b9dcb4e0585f4dd60212ba19a_medium.jpg"
                                    imgs={[
                                        'https://product.hstatic.net/200000265619/product/1sbs033_web_27cf7c3b9dcb4e0585f4dd60212ba19a_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/1sbs033_3_f652430e99fe441facf4544eaa89d60f_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/1sbs033_2_122ea5c062a74832aed40ea146eee956_icon.jpg',
                                    ]}
                                />
                            </div>
                            <div>
                                <Product
                                    nameproduct="Giày Vans Sk8-Low Rearrange"
                                    priceproduct="1,680,000₫"
                                    mainimg="https://product.hstatic.net/200000265619/product/vn0a3hj9bhh__web_1_490eb28bc0c54ce39c8ffa1a4444c85e_medium.jpg"
                                    imgs={[
                                        'https://product.hstatic.net/200000265619/product/vn0a3hj9bhh__web_1_490eb28bc0c54ce39c8ffa1a4444c85e_icon.jpg',
                                        'https://product.hstatic.net/200000265619/product/vn0a3hj9bhh__4_ffd4a98884bd4b92ab54f429f8d154ab_icon.jpg',
                                    ]}
                                />
                            </div> */}
                        </CustomSlider>
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                        {/* </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={cx('video')}>
                        <ReactPlayer
                            className={cx('youtube')}
                            url="https://www.youtube.com/embed/f34s9XL-fvI?autoplay=1&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Fsneakerbuzz.vn%2F&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsneakerbuzz.vn&amp;widgetid=1"
                            controls
                            width="640"
                            height="360"
                            playing={true}
                            loop={true}
                        ></ReactPlayer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
