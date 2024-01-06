import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/Components/Button/Button';
import Menu from '~/Components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Components/Icons/Icons';
import Image from '~/Components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

//dùng để viết .post-item có thể viết dấu -
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        //thằng con cấp 2 của Menu_Items
        //cứ tk nào có children thì có sub menu cấp 2
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@henry',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        //dải thêm những object màm Menu_items có
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true, //thằng nào có cái này thì có cái vạch ở tên
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                {/* nếu đăng nhập thì hiện cái này */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>13</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        //thẻ chứa Fal...
                        <>
                            <Button text className={cx('custom')}>
                                Upload
                            </Button>
                            <Button primary lefticon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    {/* Nếu mà có currentUser thì hiện userMenu còn không hiện MENU_ITEMS */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/384829924_976608623396397_573300790686052687_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QBCTz5C3hegAX8x9bzJ&_nc_ht=scontent.fhan2-3.fna&oh=03_AdTW5dJEXAk1j089dBxhbVfnD2NpCFfrEDLDwPzWg9IPwg&oe=65439F3A"
                                className={cx('user-avatar')}
                                alt="Nguyễn Văn A"
                                // fallback="... 1 cái ảnh nào đó mà mình muốn dùng mặc định"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
