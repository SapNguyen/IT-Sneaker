import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes,privateRoutes } from './routes';
import DefaultLayout from '~/layouts';
import { Fragment } from 'react';

function App() {
    return (
        //Router ôm chọn chương trình để có thể dùng route dễ dàng trong routes có nhiều route
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; //không có layout ở route thì mặc định là DefaultLayout Fragment mặc định không có gì bên trong

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        let id;
                        if (route.idB) {
                            if (route.idB === 1) {
                                id = 1;
                            } else if (route.idB === 2) {
                                id = 2;
                            } else if (route.idB === 3) {
                                id = 3;
                            } else if (route.idB === 6) {
                                id = 6;
                            } else if (route.idB === 7) {
                                id = 7;
                            }
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    //nếu page là children của defaultlayout thì nó sẽ đưa vào content
                                    <Layout>
                                        <Page id={id} />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {privateRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; //không có layout ở route thì mặc định là DefaultLayout Fragment mặc định không có gì bên trong

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        let order;
                        if (route.order) {
                            order='receipt';
                        }
                        let status;
                        if (route.status) {
                            if(route.status === 3){
                                status=3;
                            } else if (route.status === 4){
                                status=4;
                            } else if (route.status === 1){
                                status=1;
                            } else if (route.status === 2){
                                status=2;
                            } else if (route.status === -1){
                                status= -1;
                            }
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    //nếu page là children của defaultlayout thì nó sẽ đưa vào content
                                    <Layout>
                                        <Page order={order} status={status}/>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
