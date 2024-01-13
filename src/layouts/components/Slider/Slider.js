import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Carousel } from 'react-bootstrap';


function Slider() {
    return (
        // <div id={cx('slide')} className={cx('carousel slide')} data-bs-ride="carousel">
        //     <div className={cx('carousel-indicators')}>
        //         <button type="button" data-bs-target="#slide" className={cx('active')}></button>
        //         <button type="button" data-bs-target="#slide"></button>
        //         <button type="button" data-bs-target="#slide"></button>
        //         <button type="button" data-bs-target="#slide"></button>
        //         <button type="button" data-bs-target="#slide"></button>
        //     </div>

        //     <div className={cx('carousel-inner')}>
        //         <a className={cx('carousel-item active')} href=" ">
        //             <img
        //                 src="http://127.0.0.1:8000/img/brand/1/banner-danh-muc-converse-1420x400_d2c31e77d7244176a810f10b98e16d15.jpg"
        //                 className={cxx('d-block w-100')}
        //                 alt=""
        //             />
        //         </a>
        //         <a className={cx('carousel-item')} href=" ">
        //             <img
        //                 src="https://theme.hstatic.net/200000265619/1001091352/14/slider_2.jpg?v=382"
        //                 className={cxx('d-block w-100')}
        //                 alt=""
        //             />
        //         </a>
        //         <a className={cx('carousel-item')} href=" ">
        //             <img
        //                 src="https://theme.hstatic.net/200000265619/1001091352/14/slider_3.jpg?v=382"
        //                 className={cxx('d-block w-100')}
        //                 alt=""
        //             />
        //         </a>
        //         <a className={cx('carousel-item')} href=" ">
        //             <img
        //                 src="http://127.0.0.1:8000/img/brand/3/023a877e31bece11178bc786e058d49f.jpg"
        //                 className={cxx('d-block w-100')}
        //                 alt=""
        //             />
        //         </a>
        //         <a className={cx('carousel-item')} href=" ">
        //             <img
        //                 src="http://127.0.0.1:8000/img/brand/4/banner-danh-muc-nike-1420x400_396c9b19168f411b821396f926a6cf7a.jpg"
        //                 className={cxx('d-block w-100')}
        //                 alt=""
        //             />
        //         </a>
        //     </div>
        //     {/* <button className={cx('carousel-control-prev')} type="button" data-bs-target="#slide" data-bs-slide="prev">
        //         <span className={cx('carousel-control-prev-icon')}></span>
        //     </button>
        //     <button className={cx('carousel-control-next')} type="button" data-bs-target="#slide" data-bs-slide="next">
        //         <span className={cx('carousel-control-next-icon')}></span>
        //     </button> */}
        // </div>
        <Carousel interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theme.hstatic.net/200000265619/1001091352/14/slider_2.jpg?v=382"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
            
        </Carousel>
    );
}

export default Slider;
