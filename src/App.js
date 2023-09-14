import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './Components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        //Router ôm chọn chương trình để có thể dùng route dễ dàng trong routes có nhiều route
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; //không có layout ở route thì mặc định là DefaultLayout Fragment mặc định không có gì bên trong 
                        
                        let Layout = DefaultLayout
                        if(route.layout){
                            Layout= route.layout
                        }
                        else if (route.layout === null) {
                            Layout  = Fragment
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    //nếu page là children của defaultlayout thì nó sẽ đưa vào content
                                    <Layout>
                                        <Page />
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
