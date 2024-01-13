import classNames from 'classnames/bind';
import styles from './Product.module.scss';
// import style from 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
// import React, { useState } from 'react';

const cx = classNames.bind(styles);
// const cxx = classNames.bind(style);

function Product({ nameproduct, priceproduct, mainimg, imgs, supimg }) {
    // let imgs=[img1,img2,img3,img4,img5]

    const imgElements = imgs.map((imgPath, index) => (
        <img
            key={index}
            src={imgPath}
            className={cx('small-img')}
            alt={'IMG ' + index}
            // onClick={() => handleMouseOversup(imgPath)}
        />
    ));

    return (
        <div className={cx('owl-item')}>
            <div className={cx('item')}>
                <div className={cx('card')}>
                    <div className={cx('card-header')}>
                        <img
                            //src="https://product.hstatic.net/200000265619/product/vn0009qccjj_-web-1_613696c8feb8494081616e15c27db43d_medium.jpg"
                            src={mainimg ? mainimg : supimg}
                            className="img-header-fluid"
                            alt=""
                        />
                        <div className={cx('slide-img')}>
                            {/* <img
                                src="https://product.hstatic.net/200000265619/product/vn0009qccjj_-web-1_613696c8feb8494081616e15c27db43d_icon.jpg"
                                className={cx('small-img')}
                                alt=''
                            />
                            <img
                                src="https://product.hstatic.net/200000265619/product/vn0009qccjj__2_5dd3c5e21c2c42aaaf230558cd6a4b46_icon.jpg"
                                className={cx('small-img')}
                                alt=''
                            />
                            <img
                                src="https://product.hstatic.net/200000265619/product/vn0009qccjj__3_1b3547b7a3f846b7940f2449dbdf75df_icon.jpg"
                                className={cx('small-img')}
                                alt=''
                            /> */}
                            {imgElements}
                        </div>
                    </div>
                    <div className={cx('card-body')}>
                        <a href=" ">
                            <p className={cx('prod-name')}>{nameproduct}</p>
                        </a>
                    </div>
                    <div className={cx('card-footer')}>
                        <div className="row">
                            <div className={cx('div_price')}>
                                <h5 className={cx('prod-price')}>{priceproduct}</h5>
                            </div>
                            <div className="col-sm-6">
                                <a href=" ">
                                    <button className={cx('btn-dark-detail')}>Chi tiết</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Product.prototype = {
    nameproduct: PropTypes.string.isRequired,
    priceproduct: PropTypes.string.isRequired,
    mainimg: PropTypes.string, 
    supimg: PropTypes.string,
    imgs: PropTypes.string.isRequired,
};

export default Product;
