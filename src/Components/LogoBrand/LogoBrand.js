import classNames from 'classnames/bind';
import styles from './LogoBrand.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from '../CustomNextArrow';
import CustomPrevArrow from '../CustomPrevArrow';
import * as homeService from '~/services/homeService';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function LogoBrand() {
    const [logoValue, setLogoValue] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow mt0 />,
        prevArrow: <CustomPrevArrow mt0 />,
    };

    useEffect(() => {
        const fetchAPISlider = async () => {
            try {
                // setLoading(true);
                const result = await homeService.imglogo();

                setLogoValue(result && result.data);
            } catch (err) {
                console.log(err);
            } finally {
                // setLoading(false);
            }
        };

        fetchAPISlider();
    }, []);

    return (
        <div className={cx(styles.carousel)}>
            <Slider {...settings} className={cx('grid')}>
                {logoValue && logoValue.map((result) => (
                    <div key={result.brand_id} className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                        <Link to={`/products/brand/${result.brand_name}`}>
                            <div className={cx('item', styles['w-50'])}>
                                <img
                                    src={`http://127.0.0.1:8000/img/brand/` + result.brand_id + '/' + result.brand_logo}
                                    className={cx('small-img')}
                                    alt={result.brand_name}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
                {/* <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div>
                <div className={cx('owl-item', styles['owl-item-active'], styles['w-50'])}>
                    <div className={cx('item', styles['w-50'])}>
                        <img src="http://127.0.0.1:8000/img/brand/1/logo.jpg" className={cx('small-img')} alt="img1" />
                    </div>
                </div> */}
            </Slider>
        </div>
    );
}

export default LogoBrand;
