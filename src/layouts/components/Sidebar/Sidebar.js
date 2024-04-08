import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import config from '~/config';
import Menu, { MenuItem } from './Menu';
import * as brandsServices from '~/services/brandsService';
import { useParams } from 'react-router-dom';

import { Fragment, useEffect, useState } from 'react';
// import  {HomeIcon,UserGroupIcon,LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon}  from '~/Components/Icons/Icons';
// import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar({ genre, product_new, discount }) {
    const { genreName } = useParams();
    const [genreProduct, setGenreProduct] = useState(2);

    const [brandValue, setBrandValue] = useState([]);

    useEffect(() => {
        const fetchAPIBrand = async () => {
            try {
                const result = await brandsServices.brands();

                if (genre) {
                    setGenreProduct(genreName);
                }
                setBrandValue(result && result.data);
            } catch (err) {
                console.log(err);
            } finally {
            }
        };

        fetchAPIBrand();
    }, [genre, genreName]); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount

    return (
        <aside className={cx('wrapper')}>
            {/* <Link to={`/product/${result.idp}`}><Product data={result}/></Link> */}

            <Menu>
                {brandValue.map((result) => (
                    <Fragment key={result.brand_id}>
                        {genre && (
                            <MenuItem
                                title={result.brand_name}
                                to={`/products/genre/${result.brand_name}/${genreProduct}`}
                            />
                        )}
                        {discount && (
                            <MenuItem title={result.brand_name} to={`/products/special/${result.brand_name}`} />
                        )}
                        {product_new && (
                            <MenuItem title={result.brand_name} to={`/products/new/${result.brand_name}`} />
                        )}
                        {!genre && !discount && !product_new && (
                            <MenuItem title={result.brand_name} to={`/products/brand/${result.brand_name}`} />
                        )}
                    </Fragment>
                ))}
            </Menu>

            {/* 
            // <MenuItem title="Vans" to={`/products/brand/:brandId`}/>
                // <MenuItem title="Palladium" to={`/products/brand/:brandId`}/>
                // <MenuItem title="K-swiss" to={`/products/brand/:brandId`}/>
                // <MenuItem title="Nike" to={`/products/brand/:brandId`}/>
            <MenuItem title="Converse" to={config.routes.brandConverse}/>
                <MenuItem title="Vans" to={config.routes.brandVans}/>
                <MenuItem title="Palladium" to={config.routes.brandPalladium}/>
                <MenuItem title="K-swiss" to={config.routes.brandKswiss}/>
                <MenuItem title="Nike" to={config.routes.brandNike}/> */}

            {/* <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/> */}
            {/* <SuggestedAccounts label="Suggested accounts"/> */}
            {/* <SuggestedAccounts label="Following accounts"/> */}
        </aside>
    );
}

export default Sidebar;
