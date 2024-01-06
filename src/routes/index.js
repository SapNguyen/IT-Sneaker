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

//không đăng nhập vẫn vào được
const publicRoutes = [
    //1 mảng các object chứa component
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
