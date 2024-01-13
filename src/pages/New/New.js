import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './New.module.scss';
import NewItem from '~/Components/NewItem';

const cx = classNames.bind(styles);

function New() {
    return (
        <div>
            <div className={cx('container')}>
                <Helmet>
                    <title>News</title>
                </Helmet>
                <div className={cx('content')}>
                    <div className={cx('news')}>
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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
