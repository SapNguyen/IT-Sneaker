import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Carousel } from 'react-bootstrap';
// import classNames from 'classnames/bind';
// import styles from './Slider.module.scss';
import * as homeService from '~/services/homeService';
import { Link } from 'react-router-dom';


import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// const cx = classNames.bind(styles);

function Slider() {
    const [sliderValue, setSliderValue] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPISlider = async () => {
            try {
                // setLoading(true);
                const result = await homeService.imghome();

                setSliderValue(result.data);
            } catch (err) {
                console.log(err);
            } finally {
                // setLoading(false);
            }
        };

        fetchAPISlider();
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <Carousel interval={3000}>
            {sliderValue && sliderValue.map((result) => (
                <Carousel.Item key={result.brand_id}>
                    <Link to={`/products/brand/${result.brand_name}`}>
                        <img
                            className="d-block w-100"
                            src={`http://127.0.0.1:8000/img/brand/` + result.brand_id + '/' + result.brand_img}
                            alt={result.brand_name}
                        />
                    </Link>
                </Carousel.Item>
            ))}
            {/* {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} */}

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theme.hstatic.net/200000265619/1001091352/14/slider_3.jpg?v=382"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theme.hstatic.net/200000265619/1001091352/14/slider_4.jpg?v=382"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theme.hstatic.net/200000265619/1001091352/14/slider_1.jpg?v=382"
                    alt="Third slide"
                />
            </Carousel.Item> */}
        </Carousel>
    );
}

export default Slider;
