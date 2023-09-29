import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

//nếu không truyền onChange vào thì cũng k bị lỗi
const defaultfn = () => {};

function Menu({ children, items = [],hideOnClick=false, onChange = defaultfn}) {
    //lịch sử khi ấn vào menu để set thằng menu cấp 1 và menu caapsa 2
    const [history, setHistory] = useState([{ data: items }]); //phần từ cuối mảng
    const current = history[history.length - 1]; //lấy phần tử cuối

    const renderItems = () => {
        //current.data cũng giống như items
        return current.data.map((item, index) => {
            const isParent = !!item.children; // xem thằng nào có children

            //Component của mình tạo ra chưa chắc đã có onClick nên mình phải kiểm tra và tạo ra
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]); //thêm phần tử mới vào mảng history
                            //thêm vào cuối mảng nhưng tí nữa xóa thì xóa phần tử ở cuối mảng
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            //ấn vào sẽ không ẩn
            hideOnClick={hideOnClick}
            //khi show có bị delay hay không
            delay={[0, 700]}
            //để lệch sang bên phải 
            offset={[12,8]}
            //cho phép di chuyển qua và nhấn vào bên trong
            interactive
            //vị trí của Tippy
            placement="bottom-end"
            //render ra những cái mình gõ từng chữ
            render={(attrs) => (
                //PopperWrapper này là cái khung trắng bao bọc kết quả
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {/* nếu mà mảng history có >2 phần tử thì có language */}
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1)); //bỏ đi phần tử cuối cùng
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>setHistory(prev => prev.slice(0,1))}//xóa hết đi lấy phần tử đầu tiên thôi
        >
            {children}
        </Tippy>
    );
}

export default Menu;
