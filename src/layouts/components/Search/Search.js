import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadLessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/Icons/Icons';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    //khi có nhiều state thì thường dùng useCallback or useMemo
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]); //mảng này về sau dùng API
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    //khi người dùng ngừng gõ 500ms thì mới gọi useEffect
    const debouncedValue = useDebounce(searchValue, 500);

    //dùng useRef để lấy DOM input mà mình muốn focus
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus(); //focus lại inputRef mình vừa định nghĩa ở trên
    };

    //Sau 3s thì hiện kết quả
    useEffect(() => {
        //nếu search không có giá trị thì tippy k hiện
        if (!searchValue.trim()) {
            setSearchResult([]); //mảng rỗng thì mất
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchAPI();

        setLoading(true);

        //XMLHttpRequest
        //Fetch

        //encode nếu ng dùng vô tình nhập kí tự đặc biệt thì nó không bị lỗi
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data); //in ra chuỗi mảng json data
        //         setLoading(false)
        //     })
        //     .catch(()=>{
        //         setLoading(false);//nếu mà bị lỗi mạng cũng dừng loading
        //     })

        //khi nào searchValue thay đỏi thì useEffect được gọi
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        //nếu search bằng dấu cách 
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }

    }


    return (
        // Để tránh lỗi warning tẻ tippy 
        <div>
            <HeadLessTippy
                //appendTo={()=>document.body}//sửa lỗi warning tippy hoặc thêm thẻ div bên ngoài để sửa lỗi warning tippy
                //hover và ấn được vào kết quả
                interactive
                //nếu kết quả tìm kiếm > 0
                visible={showResult && searchResult.length > 0}
                //render ra những cái mình gõ từng chữ
                render={(attrs) => (
                    //PopperWrapper này là cái khung trắng bao bọc kết quả
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                // Khi click ra bên ngoài tippy
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)} //khi focus lại thì lại đổi thành true
                    />
                    {/* Khi có searchValue thì mới hiện icon clear */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
    
                    {/* nếu nó đang loading thì hiện cái này */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                    <button className={cx('search-btn')} onMouseDown={(e)=>e.preventDefault}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;
