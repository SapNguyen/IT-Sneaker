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
import SpecialPrice from '~/pages/SpecialPrice';
import DetailProduct from '~/pages/DetailProduct';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Account from '~/pages/Account';
import Cart from '~/pages/Cart';
import Payment from '~/pages/Payment';
import Forget from '~/pages/Forget';
import Genre from '~/pages/Genre';
import ProductNew from '~/pages/ProductNew';
import ProductDiscount from '~/pages/ProductDiscount';

//không đăng nhập vẫn vào được
const publicRoutes = [
    //1 mảng các object chứa component
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    
    { path: config.routes.products, component: ProductBrand },
    { path: config.routes.genres, component: Genre },
    { path: config.routes.productdiscount, component: ProductDiscount },
    { path: config.routes.new, component: ProductNew },
    // { path: config.routes.brandConverse, component: ProductBrand, idB: 1 },
    // { path: config.routes.brandVans, component: ProductBrand, idB: 2 },
    // { path: config.routes.brandPalladium, component: ProductBrand, idB: 3 },
    // { path: config.routes.brandKswiss, component: ProductBrand, idB: 6 },
    // { path: config.routes.brandNike, component: ProductBrand, idB: 7 },

    { path: config.routes.detailproduct, component: DetailProduct },

    { path: config.routes.specialprice, component: SpecialPrice },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.login, component: Login},
    { path: config.routes.register, component: Register},
    { path: config.routes.forget, component: Forget},
    
];

//phải đăng nhập mới vào được
const privateRoutes = [
    { path: config.routes.account, component: Account},
    { path: config.routes.cart, component: Cart},
    { path: config.routes.payment, component: Payment, layout: null},
    { path: config.routes.profile, component: Profile },
    { path: config.routes.order, component: Account, order:'receipt', status: 3 },
    { path: config.routes.orderwait, component: Account, order:'receipt', status: 4 },
    { path: config.routes.ordertransport, component: Account, order:'receipt', status: 1 },
    { path: config.routes.ordercompletion, component: Account, order:'receipt', status: 2 },
    { path: config.routes.ordercanceled, component: Account, order:'receipt', status: -1 },

];

export { publicRoutes, privateRoutes };
