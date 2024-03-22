import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    // faEllipsisVertical,
    faQuestion,
    faUser,
    faSignOut,
    faPhone,
    faCartShopping,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import classNames from 'classnames/bind';
//import images from '~/assets/images';
import Button from '~/Components/Button/Button';
import Menu from '~/Components/Popper/Menu';
//import { InboxIcon, MessageIcon, UploadIcon } from '~/Components/Icons/Icons';
import Image from '~/Components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';

//dùng để viết .post-item có thể viết dấu -
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    // {
    //     icon: <FontAwesomeIcon icon={faEarthAsia} />,
    //     title: 'English',
    //     //thằng con cấp 2 của Menu_Items
    //     //cứ tk nào có children thì có sub menu cấp 2
    //     children: {
    //         title: 'Language',
    //         data: [
    //             {
    //                 type: 'language',
    //                 code: 'en',
    //                 title: 'English',
    //             },
    //             {
    //                 type: 'language',
    //                 code: 'vi',
    //                 title: 'Việt Nam',
    //             },
    //         ],
    //     },
    // },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        href: 'https://www.facebook.com',
    },
    // {
    //     icon: <FontAwesomeIcon icon={faKeyboard} />,
    //     title: 'Keyboard shortcuts',
    // },
];

const MENU_CART = [
    {
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Giỏi hàng',
        to: '/cart',
    },
    {
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        title: 'Thanh toán',
        to: '/pay',
    },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('userId');
        if (loggedInUser) {
            setCurrentUser(true);
        }
    }, []);

    const handleRemoveUserId = () => {
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    };

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
            to: '/profile',
        },
        // {
        //     icon: <FontAwesomeIcon icon={faCoins} />,
        //     title: 'Get coins',
        //     to: '/coin',
        // },
        // {
        //     icon: <FontAwesomeIcon icon={faGear} />,
        //     title: 'Settings',
        //     to: '/settings',
        // },
        //dải thêm những object màm Menu_items có
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true, //thằng nào có cái này thì có cái vạch ở tên
            onClick: handleRemoveUserId,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo Phim */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    {/* <img src={images.logo} alt="Tiktok" /> */}
                    <img
                        src="https://theme.hstatic.net/200000265619/1000946504/14/logo.png?v=372"
                        alt="Tiktok"
                        height={65}
                    />
                </Link>

                {/* Ô search */}
                <Search />

                {/* nếu đăng nhập thì hiện cái này */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Phone:01234567899" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <UploadIcon /> */}
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </Tippy>
                            {/* <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}> */}
                            {/* <MessageIcon /> */}
                            {/* <FontAwesomeIcon icon={faUser} />
                                </button>
                            </Tippy> */}
                            {/* <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}> */}
                            {/* <InboxIcon /> */}
                            {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                            {/* <span className={cx('badge')}>13</span> */}
                            {/* </button>
                            </Tippy> */}
                            <Menu items={MENU_CART} onChange={handleMenuChange}>
                                <button className={cx('action-btn')}>
                                    {/* <InboxIcon /> */}
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    {/* <span className={cx('badge')}>13</span> */}
                                </button>
                            </Menu>
                        </>
                    ) : (
                        //thẻ chứa Fal...
                        <>
                            {/* <Button primary lefticon={<FontAwesomeIcon icon={faSignIn} />}>
                                Register
                            </Button> */}
                            <Button primary to="/login" lefticon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    {/* Nếu mà có currentUser thì hiện userMenu còn không hiện MENU_ITEMS */}
                    <Menu items={currentUser ? MENU_ITEMS : userMenu}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/375062016_1027580694934669_5850570789184348493_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFrPjekynKd9oLRB5zHPE-QPRDnU_LOyig9EOdT8s7KKAUm8CsHxQb357HcI3sYJSrco7NyAaafG3vb2mwaK2-G&_nc_ohc=az0SXbtU5cgAX_eS543&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCjnG59NScDMlZ0V3KmU6Er1E2Ol9pPWNtmrkUDdSRTLw&oe=65B831F1"
                                className={cx('user-avatar')}
                                alt="Nguyễn Thế Anh"
                                // fallback="... 1 cái ảnh nào đó mà mình muốn dùng mặc định"
                            />
                        ) : (
                            <Fragment></Fragment>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
