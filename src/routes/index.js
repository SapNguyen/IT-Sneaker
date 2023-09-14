//layouts
import { HeaderOnly } from '~/Components/Layout';

//Pages
import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//không đăng nhập vẫn vào được
const publicRoutes = [
    //1 mảng các object chứa component
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
