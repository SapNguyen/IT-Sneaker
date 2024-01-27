import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import config from '~/config';
import Menu,{MenuItem} from './Menu';
import * as brandsServices from '~/services/brandsService';

import { useEffect, useState } from 'react';
// import  {HomeIcon,UserGroupIcon,LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon}  from '~/Components/Icons/Icons';
// import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    const [brandValue, setBrandValue] = useState([]);

    useEffect(() => {
        const fetchAPIBrand = async () => {
            try {
                const result = await brandsServices.brands();

                setBrandValue(result);
            } catch (err) {
                console.log(err);
            } finally {
            }
        };

        fetchAPIBrand();
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <aside className={cx('wrapper')}>
                {/* <Link to={`/product/${result.idp}`}><Product data={result}/></Link> */}

            <Menu>
            {brandValue.map((result) => (
                <MenuItem key={result.idb} title={result.namebrand} to={`/products/brand/${result.idb}`}/>
                // <MenuItem title="Vans" to={`/products/brand/:brandId`}/>
                // <MenuItem title="Palladium" to={`/products/brand/:brandId`}/>
                // <MenuItem title="K-swiss" to={`/products/brand/:brandId`}/>
                // <MenuItem title="Nike" to={`/products/brand/:brandId`}/>
                ))}
                {/* <MenuItem title="Converse" to={config.routes.brandConverse}/>
                <MenuItem title="Vans" to={config.routes.brandVans}/>
                <MenuItem title="Palladium" to={config.routes.brandPalladium}/>
                <MenuItem title="K-swiss" to={config.routes.brandKswiss}/>
                <MenuItem title="Nike" to={config.routes.brandNike}/> */}
                
                {/* <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/> */}

            </Menu>
            
            {/* <SuggestedAccounts label="Suggested accounts"/> */}
            {/* <SuggestedAccounts label="Following accounts"/> */}
        </aside>
    );
}

export default Sidebar;
