import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { useState } from 'react';
//import { icon } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon, data, genre }) {
    const [showBrands, setShowBrands] = useState(false);

    const handleMouseEnter = () => {
        if (data && data.length > 0) {
            setShowBrands(true);
        }
        if (genre && genre.length > 0){
            setShowBrands(true);
        }
    };

    // const handleMouseLeave = () => {
    //     setShowBrands(false);
    // };
    // onMouseLeave={handleMouseLeave}
    return (
        //Nav Link này có chuyển hướng và đổi màu
        //Khi click vào cái mình muốn nó tự thêm cho mình class active
        <div className={cx('menu-item')} onMouseEnter={handleMouseEnter}>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('active-icon')}>{activeIcon}</span>
                <span className={cx('title')}>{title}</span>
            </NavLink>
            {showBrands && !genre &&(
                <ul className={cx('sub-menu')}>
                    {data.map((brand, index) => (
                        <li key={index}>
                            <NavLink to={`/products/brand/${brand.brand_name}`} className={cx('sub-menu-item')}>
                                {brand.brand_name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
            {showBrands && genre &&(
                <ul className={cx('sub-menu')}>
                    {genre.map((genre, index) => (
                        <li key={index}>
                            <NavLink to={`/products/genre/All/${genre}`} className={cx('sub-menu-item')}>
                                {genre}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    // icon: PropTypes.node.isRequired,
    // activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
