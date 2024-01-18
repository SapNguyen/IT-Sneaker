import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './New.module.scss';
import NewItem from '~/Components/NewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as newsServices from '~/services/newsService';

import { useEffect, useState } from 'react';


const cx = classNames.bind(styles);

function New() {
    const [newValue, setNewValue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            try{
                setLoading(true);
                const result = await newsServices.news();
    
                setNewValue(result);
            }
            catch(err){
                console.log(err);
            }
            finally{
                setLoading(false);

            }
        };

        fetchAPI();
    },[]);// Dependency array trống đại diện cho việc useEffect chỉ chạy một lần như componentDidMount
    // console.log(newValue);
    

    return (
        <div>
            <div className={cx('container')}>
                <Helmet>
                    <title>News</title>
                </Helmet>
                <div className={cx('content')}>
                    <div className={cx('news')}>
                        {newValue.map((result)  =>  (
                            <NewItem key={result.idn} data={result}/>
                        ))}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        {/* <NewItem
                            img="https://file.hstatic.net/200000265619/article/01-thumb_sneakerbuzz_2ff2f9e57dfb48a8a42f4ff62bdfd32e_large.jpg"
                            title="E-FASHION DẦN LỘ DIỆN RÕ GIỮA GIAO LỘ VĂN HÓA ĐƯỜNG PHỐ"
                            content="“E” hóa lĩnh vực sneaker game để đa dạng hóa khả năng tiếp cận với cộng
                                đồng thời trang 4.0, đào sâu trải nghiệm như 1 giao lộ văn hóa và câu
                                chuyện của nhiều thương hiệu quốc tế, Sneaker Buzz tiếp tục hành trình
                                trở thành “Innovative Retailer” ( Nhà bán lẻ cải tiến ) phục vụ nhu cầu
                                khi mở rộng ..."
                        />
                        <NewItem
                            img="https://file.hstatic.net/200000265619/article/01-thumb_sneakerbuzz_2ff2f9e57dfb48a8a42f4ff62bdfd32e_large.jpg"
                            title="E-FASHION DẦN LỘ DIỆN RÕ GIỮA GIAO LỘ VĂN HÓA ĐƯỜNG PHỐ"
                            content="“E” hóa lĩnh vực sneaker game để đa dạng hóa khả năng tiếp cận với cộng
                                đồng thời trang 4.0, đào sâu trải nghiệm như 1 giao lộ văn hóa và câu
                                chuyện của nhiều thương hiệu quốc tế, Sneaker Buzz tiếp tục hành trình
                                trở thành “Innovative Retailer” ( Nhà bán lẻ cải tiến ) phục vụ nhu cầu
                                khi mở rộng ..."
                        />
                        <NewItem
                            img="https://file.hstatic.net/200000265619/article/01-thumb_sneakerbuzz_2ff2f9e57dfb48a8a42f4ff62bdfd32e_large.jpg"
                            title="E-FASHION DẦN LỘ DIỆN RÕ GIỮA GIAO LỘ VĂN HÓA ĐƯỜNG PHỐ"
                            content="“E” hóa lĩnh vực sneaker game để đa dạng hóa khả năng tiếp cận với cộng
                                đồng thời trang 4.0, đào sâu trải nghiệm như 1 giao lộ văn hóa và câu
                                chuyện của nhiều thương hiệu quốc tế, Sneaker Buzz tiếp tục hành trình
                                trở thành “Innovative Retailer” ( Nhà bán lẻ cải tiến ) phục vụ nhu cầu
                                khi mở rộng ..."
                        /> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
