// import styles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import 'bootstrap/dist/js/bootstrap.min.js';
import style from './Brand.module.scss';

// const cx = classNames.bind(styles);
const cxx = classNames.bind(style);

function Brand() {
    return (
        <div className={cxx('container-fluid')}>
            <div className="row">
                <div className="col-sm-6">
                    <a href=" ">
                        <div className={cxx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_1.jpg?v=382"
                                className={cxx('img-fluid')}
                                alt=""
                            />
                            <div className={cxx('caption')} align="center">
                                <h2 className={cxx('text-bold')}>CONVERSE</h2>
                                <p className={cxx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6">
                    <a href=" ">
                        <div className={cxx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_2.jpg?v=382"
                                className={cxx('img-fluid')}
                                alt=""
                            />
                            <div className={cxx('caption')} align="center">
                                <h2 className={cxx('text-bold')}>VANS</h2>
                                <p className={cxx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-4">
                    <a href=" ">
                        <div className={cxx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_3.jpg?v=382"
                                className={cxx('img-fluid')}
                                alt=""
                            />
                            <div className={cxx('caption')} align="center">
                                <h2 className={cxx('text-bold')}>PALLADIUM</h2>
                                <p className={cxx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href=" ">
                        <div className={cxx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_4.jpg?v=382"
                                className={cxx('img-fluid')}
                                alt=""
                            />
                            <div className={cxx('caption')} align="center">
                                <h2 className={cxx('text-bold')}>CLOUD SLIDE</h2>
                                <p className={cxx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href=" ">
                        <div className={cxx('category')}>
                            <img
                                src="https://theme.hstatic.net/200000265619/1001091352/14/banner_project_5.jpg?v=382"
                                className={cxx('img-fluid')}
                                alt=""
                            />
                            <div className={cxx('caption')} align="center">
                                <h2 className={cxx('text-bold')}>PHỤ TRANG - PHỤ KIỆN</h2>
                                <p className={cxx('total-amount')}> 2 sản phẩm</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brand;
