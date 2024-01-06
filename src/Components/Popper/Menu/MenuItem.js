import Button from '~/Components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate, //thêm custom class separate thằng nào có separate thì được gạch ở trên
    });
    return (
        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
