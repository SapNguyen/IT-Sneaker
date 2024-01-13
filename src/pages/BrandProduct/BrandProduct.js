// import IntroBrand from '~/layouts/components/IntroBrand';
import classNames from 'classnames/bind';
import styles from './BrandProduct.module.scss';
// import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);

function BrandProduct({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            {/* <div className={cx('container')}>
                <IntroBrand />
                <div className={cx('content')}>
                    <Sidebar />
                    {children}
                </div>
            </div> */}
        </div>
    );
}

export default BrandProduct;
