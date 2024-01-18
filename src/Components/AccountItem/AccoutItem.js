import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.namep}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.mainimg} alt={data.namep} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.namep}</span>
                    {/* có tích thì hiện */}
                    {data.idb && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.pricep}</span>
            </div>
        </Link>
    );
}

//để cho data trong AccountItem luôn là 1 object và isRequired là bất buộc
AccountItem.prototype = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;
