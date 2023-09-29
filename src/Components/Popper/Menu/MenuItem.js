import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({ data, onClick }) {
    const classes =cx('menu-item',{
        separate:data.separate,//thêm custom class separate thằng nào có separate thì được gạch ở trên
    })
    return (
        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
