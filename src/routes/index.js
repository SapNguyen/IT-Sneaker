//layouts
import { HeaderOnly } from '~/layouts';

import config from '~/config'; //thư mục cấu hình
//Pages
import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import ProductBrand from '~/pages/ProductBrand';
// import BrandConverse from '~/pages/BrandConverse';
// import BrandKswiss from '~/pages/BrandKswiss';
// import BrandVans from '~/pages/BrandVans';
// import BrandPalladium from '~/pages/BrandPalladium';
// import BrandNike from '~/pages/BrandNike';
import New from '~/pages/New';
import SpecialPrice from '~/pages/SpecialPrice';

//không đăng nhập vẫn vào được
const publicRoutes = [
    //1 mảng các object chứa component
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    
    { path: config.routes.products, component: ProductBrand },
    { path: config.routes.brandConverse, component: ProductBrand, idP: 1 },
    { path: config.routes.brandVans, component: ProductBrand, idP: 2 },
    { path: config.routes.brandPalladium, component: ProductBrand, idP: 3 },
    { path: config.routes.brandKswiss, component: ProductBrand, idP: 6 },
    { path: config.routes.brandNike, component: ProductBrand, idP: 7 },

    { path: config.routes.specialprice, component: SpecialPrice },
    { path: config.routes.new, component: New },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
