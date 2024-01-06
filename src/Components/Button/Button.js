import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

//Tạo 1 function button nếu mình truyền to thì chuyển sang trang khác, href thì sang 1 trang bên ngoài ,...
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    lefticon,
    righticon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps, //đẩy những Props mình không lường trước được vào đây
    };

    //Remove event
    if (disable) {
        //delete props.onClick;//nếu có disable thì bỏ onClick đi
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        }); //lọc qua object
    }

    if (to) {
        props.to = to; //nếu có to thì đưa to vào trong props
        Component = Link; //button đổi thành Link chuyển trang trong nội bộ
    } else if (href) {
        props.href = href; //Nếu có href thì đưa vào trong props
        Component = 'a'; //nếu có href thì button là thẻ a
    }

    const classes = cx('wrapper', {
        primary, //nếu có primary thì primary sẽ được cho vào thêm classes
        outline,
        small,
        text,
        large,
        disable,
        rounded,
        [className]: className,
    });

    //ví dụ thay Component = button thì sẽ thành <button></button>
    return (
        <Component className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Component>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    children: PropTypes.node.isRequired, //children phải nhận bất cứ thứ gì có thể render được
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
