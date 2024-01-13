import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({title,to,icon,activeIcon}) {
    return ( 
        //Nav Link này có chuyển hướng và đổi màu
        //Khi click vào cái mình muốn nó tự thêm cho mình class active
        <NavLink className={(nav)=>cx('menu-item',{active:nav.isActive})} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
     );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
}

export default MenuItem;