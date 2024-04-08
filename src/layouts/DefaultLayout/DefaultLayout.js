import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
//import Sidebar from '~/layouts/components/Sidebar';
import Navbar from '~/layouts/components/Navbar';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('imgheader')}
                src="https://theme.hstatic.net/200000265619/1001091352/14/banner.jpg?v=459"
                alt="Tiktok"
                height={65}
            />
            <Header />
            <div className={cx('container')}>
                {/* <Sidebar /> */}
                <Navbar />

                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
