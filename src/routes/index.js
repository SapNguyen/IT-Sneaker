//layouts
import { HeaderOnly } from '~/Components/Layout';

import routesConfig from '~/config/routes'
//Pages
import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//không đăng nhập vẫn vào được
const publicRoutes = [
    //1 mảng các object chứa component
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
