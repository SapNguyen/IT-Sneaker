// import styles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import 'bootstrap/dist/js/bootstrap.min.js';
import style from './Brand.module.scss';
import { Link } from 'react-router-dom';
import * as homeService from '~/services/homeService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

// const cx = classNames.bind(styles);
const cx = classNames.bind(style);

function Brand() {
    const [TwobrandValue, setTwoBrandValue] = useState([]);
    const [ThreebrandValue, setThreeBrandValue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPIBrand = async () => {
            try {
                setLoading(true);
                const result = await homeService.imgbanner();

                const two = result.data.slice(0, 2);
                const three = result.data.slice(2, 5);

                setTwoBrandValue(result && two);
                setThreeBrandValue(result && three);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIBrand();
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <div className={cx('container-fluid')}>
            <div className="row">
                {TwobrandValue &&
                    TwobrandValue.map((result) => (
                        <div className="col-sm-6" key={result.brand_id}>
                            <Link to={`/products/brand/${result.brand_name}`}>
                                <div className={cx('category')}>
                                    <img
                                        src={
                                            `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/brand/` +
                                            result.brand_id +
                                            '/' +
                                            result.brand_banner
                                        }
                                        className={cx('img-fluid')}
                                        alt=""
                                    />
                                    <div className={cx('caption')} align="center">
                                        <h2 className={cx('text-bold')}>{result.brand_name}</h2>
                                        <p className={cx('total-amount')}>{result.product_count + ' Sản phẩm'}</p>
                                    </div>
                                </div>
                            </Link>
                            {/* <a href=" "> */}
                            {/* <div className={cx('category')}>
                                <img src={result.bannerimg} className={cx('img-fluid')} alt="" />
                                <div className={cx('caption')} align="center">
                                    <h2 className={cx('text-bold')}>{result.namebrand}</h2>
                                    <p className={cx('total-amount')}>{result.product_count + ' Sản phẩm'}</p>
                                </div>
                            </div> */}
                            {/* </a> */}
                        </div>
                    ))}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                {/* <div className="col-sm-6">
                    <a href=" ">
                        <div className={cx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_2.jpg?v=382"
                                className={cx('img-fluid')}
                                alt=""
                            />
                            <div className={cx('caption')} align="center">
                                <h2 className={cx('text-bold')}>VANS</h2>
                                <p className={cx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div> */}
            </div>
            <div className="row mt-3">
                {ThreebrandValue &&
                    ThreebrandValue.map((result) => (
                        <div className="col-sm-4" key={result.brand_id}>
                            <Link to={`/products/brand/${result.brand_name}`}>
                                <div className={cx('category')}>
                                    <img
                                        src={
                                            `https://raw.githubusercontent.com/SapNguyen/laravelPHP/main/public/img/brand/` +
                                            result.brand_id +
                                            '/' +
                                            result.brand_banner
                                        }
                                        className={cx('img-fluid')}
                                        alt=""
                                    />
                                    <div className={cx('caption')} align="center">
                                        <h2 className={cx('text-bold')}>{result.brand_name}</h2>
                                        <p className={cx('total-amount')}>{result.product_count + ' Sản phẩm'}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                {/* <div className="col-sm-4">
                    <a href=" ">
                        <div className={cx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_4.jpg?v=382"
                                className={cx('img-fluid')}
                                alt=""
                            />
                            <div className={cx('caption')} align="center">
                                <h2 className={cx('text-bold')}>CLOUD SLIDE</h2>
                                <p className={cx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href=" ">
                        <div className={cx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_5.jpg?v=382"
                                className={cx('img-fluid')}
                                alt=""
                            />
                            <div className={cx('caption')} align="center">
                                <h2 className={cx('text-bold')}>PHỤ TRANG - PHỤ KIỆN</h2>
                                <p className={cx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Brand;
