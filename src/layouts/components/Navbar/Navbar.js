import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
// import {
//     HomeIcon,
//     UserGroupIcon,
//     LiveIcon,
//     HomeActiveIcon,
//     UserGroupActiveIcon,
//     LiveActiveIcon,
// } from '~/Components/Icons/Icons';
//import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="HOME PAGE" to={config.routes.home} />
                <MenuItem
                    title="PRODUCTS"
                    to={`/products/brand/0`}
                    //icon={<UserGroupIcon />}
                    //activeIcon={<UserGroupActiveIcon />}
                />

                <MenuItem title="SPECIAL PRICE" to={config.routes.specialprice} />
                <MenuItem title="NEWS" to={config.routes.new} />
            </Menu>

            {/* <SuggestedAccounts label="Suggested accounts"/> */}
            {/* <SuggestedAccounts label="Following accounts"/> */}
        </aside>
    );
}

export default Navbar;
