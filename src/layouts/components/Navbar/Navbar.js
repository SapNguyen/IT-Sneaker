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
import { useEffect, useState } from 'react';
import * as brandService from '~/services/brandsService';

const cx = classNames.bind(styles);

function Navbar() {
    const [brandValue, setBrandValue] = useState([]);

    useEffect(() => {
        const fetchAPIProduct = async () => {
            try {
                const result = await brandService.brands();

                setBrandValue(result && result.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchAPIProduct();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Trang chủ" to={config.routes.home} />
                <MenuItem
                    title="Thương hiệu"
                    to={`/products/brand/All`}
                    data={brandValue && brandValue}
                    //icon={<UserGroupIcon />}
                    //activeIcon={<UserGroupActiveIcon />}
                />
                {/* <MenuPopper title="Thương hiệu" to={`/products/brand/0`} /> */}

                <MenuItem title="Giới tính" genre={['Unisex', 'Nam', 'Nữ']} to={`/products/genre/All/Unisex`} />
                <MenuItem title="Hàng mới về" to={`/products/new/All`} />
                <MenuItem title="Ưu đãi" to={`/products/special/All`} />
            </Menu>

            {/* <SuggestedAccounts label="Suggested accounts"/> */}
            {/* <SuggestedAccounts label="Following accounts"/> */}
        </aside>
    );
}

export default Navbar;
