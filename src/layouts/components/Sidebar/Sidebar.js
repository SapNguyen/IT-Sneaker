import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu,{MenuItem} from './Menu';
// import  {HomeIcon,UserGroupIcon,LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon}  from '~/Components/Icons/Icons';
// import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Converse" to={config.routes.brandConverse}/>
                <MenuItem title="Vans" to={config.routes.brandVans}/>
                <MenuItem title="Palladium" to={config.routes.brandPalladium}/>
                <MenuItem title="K-swiss" to={config.routes.brandKswiss}/>
                <MenuItem title="Nike" to={config.routes.brandNike}/>
                
                {/* <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/> */}

            </Menu>
            
            {/* <SuggestedAccounts label="Suggested accounts"/> */}
            {/* <SuggestedAccounts label="Following accounts"/> */}
        </aside>
    );
}

export default Sidebar;
