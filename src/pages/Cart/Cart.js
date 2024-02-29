import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    // const [totalAmount, setTotalAmount] = useState(0);

    const handleProductClick = (productId) => {
        setSelectedProduct(productId === selectedProduct ? null : productId);
    };

    return (
        <main>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            <div className={cx('container-box')}>
                <div className={cx('space')}></div>
                <div className={cx('content-box')}>
                    <div className={cx('item-box')}>
                        <div className={cx('div_check')}>
                            <input type="checkbox" className={cx('checkbox', 'check-all')} />
                        </div>
                        <div className={cx('div_product')}>Sản phẩm</div>
                        <div className={cx('div_price_each', 'gray')}>Đơn giá</div>
                        <div className={cx('div_amount', 'gray')}>Số lượng</div>
                        <div className={cx('div_price_all', 'gray')}>Số tiền</div>
                        <div className={cx('div_action', 'gray')}>Thao tác</div>
                    </div>
                    <div className={cx('white-product')}>
                        <div className={cx('item-box', 'product')}>
                            <p className={cx(styles.cid, 'd-none')}></p>
                            <div className={cx('div_check')}>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="{{$pri_product->product_id}}"
                                    className={cx('checkbox', 'check-one')}
                                />
                            </div>
                            <div className={cx('div_product')}>
                                <div className={cx('div_product-info')}>
                                    <img
                                        src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                        className={cx('product-img')}
                                        alt=""
                                    />
                                    <a href="/" className={cx('prod-link')}>
                                        <p className={cx(styles['txt_product'], 'ml')}>
                                            Giày Converse Chuck 70 Seasonal Color Canvas
                                        </p>
                                    </a>
                                    <div className={cx('relative-size')}>
                                        <div className={cx('div_size')} onClick={() => handleProductClick(1)}>
                                            <div className={cx('flex')}>
                                                <p>Size: </p>
                                                <p className={cx('size')}>42</p>

                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className={cx(styles['material-symbols-outlined'], 'ml')}
                                                />
                                            </div>
                                            <p className={cx('color')}>BLACK/CYBER TEAL/GHOSTED</p>
                                        </div>

                                        {selectedProduct === 1 && (
                                            <div className={cx('div_choose-size')}>
                                                <div className={cx('d-flex-size-arrow')}>
                                                    <div className={cx('size-arrow-outer')}>
                                                        <div className={cx('size-arrow')}></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className={cx('title-size')}>Size:42</p>
                                                    <div>
                                                        <div className={cx('size-box')}>40</div>
                                                        <div className={cx('size-box', 'sold-out')}>41</div>
                                                        <div className={cx('size-box', 'selected')}>42</div>
                                                        {/* <div className="{cx('size-box">{{$sizes[$j]->size}}</div> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className={cx('title-color')}>Màu:Black</p>
                                                    <div>
                                                        <div className={cx('size-box')}>40</div>
                                                        <div className={cx('size-box', 'sold-out')}>41</div>
                                                        <div className={cx('size-box', 'selected')}>42</div>

                                                        {/* <div className="{cx('size-box" style="width:auto">{{$colors[$j]->color}}</div> */}
                                                    </div>
                                                </div>
                                                <div className={cx('d-flex', 'mt-3', 'justify-content-center')}>
                                                    {/* style="justify-content: center" */}
                                                    <button className={cx('btn_cancel-size')}>TRỞ LẠI</button>
                                                    <button className={cx('btn_confirm-size')}>XÁC NHẬN</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('div_price_each')}>
                                <p className={cx('price-disabled')}>2.000.000₫</p>
                                1.800.000₫
                                {/* {{number_format($pri_product->product_price)}}₫ */}
                            </div>
                            <div className={cx('div_amount')}>
                                <div className={cx('quantity-change')}>
                                    <button className={cx('btn-change', 'btn_dec')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <div className={cx('number-quantity')}>
                                        <input
                                            type="number"
                                            name="quantity"
                                            className={cx('quantity')}
                                            min="1"
                                            value=""
                                            max=""
                                        />
                                    </div>
                                    <button className={cx('btn-change', 'btn_inc')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>

                            <div className={cx('div_price_all')}>2.000.000₫</div>
                            {/* <div className="{cx('div_price_all">
                        {{number_format($pri_product->product_price * $pri_product->amount)}}₫
                      </div> */}
                            <div className={cx('div_action')}>
                                <p className={cx('p_remove')}>Xóa</p>
                            </div>
                        </div>
                        <div className={cx(styles.data, 'd-none')}></div>
                        <div className={cx('item-box', 'product')}>
                            <p className={cx(styles.cid, 'd-none')}></p>
                            <div className={cx('div_check')}>
                                <input type="checkbox" name="" id="" className={cx('checkbox', 'check-one')} />
                            </div>
                            <div className={cx('div_product')}>
                                <div className={cx('div_product-info')}>
                                    <img
                                        src="https://product.hstatic.net/200000265619/product/a05584c_1-web_2bc2fde2ad044dd1a1c897eed07b7001_medium.jpg"
                                        className={cx('product-img')}
                                        alt=""
                                    />
                                    <a href="/" className={cx('prod-link')}>
                                        <p className={cx(styles['txt_product'], 'ml')}>
                                            Giày Converse Chuck 70 Seasonal Color Canvas
                                        </p>
                                    </a>
                                    <div className={cx('relative-size')}>
                                        <div className={cx('div_size')} onClick={() => handleProductClick(2)}>
                                            <div className={cx('flex')}>
                                                <p>Size: </p>
                                                <p className={cx('size')}>42</p>

                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className={cx(styles['material-symbols-outlined'], 'ml')}
                                                />
                                            </div>
                                            <p className={cx('color')}>BLACK/CYBER TEAL/GHOSTED</p>
                                        </div>

                                        {selectedProduct === 2 && (
                                            <div className={cx('div_choose-size')}>
                                                <div className={cx('d-flex-size-arrow')}>
                                                    <div className={cx('size-arrow-outer')}>
                                                        <div className={cx('size-arrow')}></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className={cx('title-size')}>Size:42</p>
                                                    <div>
                                                        <div className={cx('size-box')}>40</div>
                                                        <div className={cx('size-box', 'sold-out')}>41</div>
                                                        <div className={cx('size-box', 'selected')}>42</div>
                                                        {/* <div className="{cx('size-box">{{$sizes[$j]->size}}</div> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className={cx('title-color')}>Màu:Black</p>
                                                    <div>
                                                        <div className={cx('size-box')}>40</div>
                                                        <div className={cx('size-box', 'sold-out')}>41</div>
                                                        <div className={cx('size-box', 'selected')}>42</div>

                                                        {/* <div className="{cx('size-box" style="width:auto">{{$colors[$j]->color}}</div> */}
                                                    </div>
                                                </div>
                                                <div className={cx('d-flex', 'mt-3', 'justify-content-center')}>
                                                    {/* style="justify-content: center" */}
                                                    <button className={cx('btn_cancel-size')}>TRỞ LẠI</button>
                                                    <button className={cx('btn_confirm-size')}>XÁC NHẬN</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('div_price_each')}>
                                <p className={cx('price-disabled')}>2.000.000₫</p>
                                1.800.000₫
                                {/* {{number_format($pri_product->product_price)}}₫ */}
                            </div>
                            <div className={cx('div_amount')}>
                                <div className={cx('quantity-change')}>
                                    <button className={cx('btn-change', 'btn_dec')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <div className={cx('number-quantity')}>
                                        <input
                                            type="number"
                                            name="quantity"
                                            className={cx('quantity')}
                                            min="1"
                                            value=""
                                            max=""
                                        />
                                    </div>
                                    <button className={cx('btn-change', 'btn_inc')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>

                            <div className={cx('div_price_all')}>2.000.000₫</div>
                            {/* <div className="{cx('div_price_all">
                        {{number_format($pri_product->product_price * $pri_product->amount)}}₫
                      </div> */}
                            <div className={cx('div_action')}>
                                <p className={cx('p_remove')}>Xóa</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item-box', 'payment')}>
                        <div className="d-flex align-items-center">
                            <input type="checkbox" className={cx('checkbox', 'check-all')} />
                            <p className={cx(styles['choose-all'], 'ml')}>Chọn tất cả</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className={cx('total-payment')} id="s_amount">
                                Tổng thanh toán ( Sản phẩm):
                            </p>
                            <p className={cx('s-price')}>0₫</p>

                            {/* <p style="font-size: 18px" id="s_amount">Tổng thanh toán (0 Sản phẩm):</p>
                    <p id="s_price">0₫</p> */}
                            <button className={cx('btn-payment')}>Mua hàng</button>
                            <form action="/payment" method="post" className="d-none">
                                <input type="hidden" className={cx('choice')} name="choice" />
                                <button className={cx('submit')}></button>
                            </form>
                        </div>
                    </div>
                    <div className={cx('payment-now')}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className={cx('material-symbols-outlined', 'cart-ico')}
                        />
                        <p className={cx('title-cart-null')}>Giỏ hàng của bạn đang trống</p>
                        <a href="/">
                            <button className={cx('btn-home')}>MUA NGAY</button>
                        </a>
                    </div>
                </div>
                <div className={cx('space')}></div>
            </div>
            <div className={cx('alert-screen')}>
                <div className={cx('alert-overlay')}></div>
                <div className={cx('alert-box shadow')}>
                    <p className={cx('title-alert')} id="msg"></p>
                    <button className={cx('btn_confirm')}> OK</button>
                </div>
            </div>
        </main>
    );
}

export default Cart;
