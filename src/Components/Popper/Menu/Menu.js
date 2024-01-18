import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

//nếu không truyền onChange vào thì cũng k bị lỗi
const defaultfn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    //lịch sử khi ấn vào menu để set thằng menu cấp 1 và menu caapsa 2
    const [history, setHistory] = useState([{ data: items }]); //phần từ cuối mảng
    const current = history[history.length - 1]; //lấy phần tử cuối

    //khi nào có nhiều state mới dùng useCallback useMemo để cho đỡ khỏi render lại

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

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); //bỏ đi phần tử cuối cùng
    };

    const renderResult = (attrs) => (
        //PopperWrapper này là cái khung trắng bao bọc kết quả
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {/* nếu mà mảng history có >2 phần tử thì có language */}
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    //khi click ra bên ngoài thì sẽ quay lại tippy đầu tiên
    const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            appendTo={() => document.body} //lỗi hiện thông báo tippy
            //ấn vào sẽ không ẩn
            hideOnClick={hideOnClick}
            //khi show có bị delay hay không
            delay={[0, 700]}
            //để lệch sang bên phải
            offset={[12, 8]}
            //cho phép di chuyển qua và nhấn vào bên trong
            interactive
            //vị trí của Tippy
            placement="bottom-end"
            //render ra những cái mình gõ từng chữ
            render={renderResult}
            onHide={handleResetMenu} //xóa hết đi lấy phần tử đầu tiên thôi
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
