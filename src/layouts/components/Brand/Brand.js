// import styles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import 'bootstrap/dist/js/bootstrap.min.js';
import style from './Brand.module.scss';
import * as brandsServices from '~/services/brandsService';
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
                const result = await brandsServices.banners();

                const two = result.slice(0, 2);
                const three = result.slice(2, 5);

                setTwoBrandValue(two);
                setThreeBrandValue(three);
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
                {TwobrandValue.map((result) => (
                    <div className="col-sm-6" key={result.idb}>
                        <a href=" ">
                            <div className={cx('category')}>
                                <img src={result.bannerimg} className={cx('img-fluid')} alt="" />
                                <div className={cx('caption')} align="center">
                                    <h2 className={cx('text-bold')}>{result.namebrand}</h2>
                                    <p className={cx('total-amount')}>{result.product_count + ' Sản phẩm'}</p>
                                </div>
                            </div>
                        </a>
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
                {ThreebrandValue.map((result) => (
                    <div className="col-sm-4" key={result.idb}>
                        <a href=" ">
                            <div className={cx('category')}>
                                <img src={result.bannerimg} className={cx('img-fluid')} alt="" />
                                <div className={cx('caption')} align="center">
                                    <h2 className={cx('text-bold')}>{result.namebrand}</h2>
                                    <p className={cx('total-amount')}>{result.product_count + ' Sản phẩm'}</p>
                                </div>
                            </div>
                        </a>
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
