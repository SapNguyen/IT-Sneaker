import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = [];
    const visiblePages = 5; // Số trang hiển thị
    const delta = 2; // Số trang hiển thị ở hai đầu

    const handleClick = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const addPage = (page) => {
        pages.push(
            <li key={page} className={cx(currentPage === page ? 'active' : '')}>
                <button onClick={() => handleClick(page)}>{page}</button>
            </li>,
        );
    };

    const addEllipsis = () => {
        pages.push(
            <li key="ellipsis">
                <span>...</span>
            </li>,
        );
    };

    // Trang đầu tiên
    addPage(1);

    // Các trang ở giữa
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
        addPage(i);
    }

    const startPage = Math.max(2, currentPage - delta);
    const endPage = Math.min(totalPages - 1, currentPage + delta);
    const numVisiblePages = Math.min(endPage - startPage + 1, visiblePages);

    for (let i = 0; i < numVisiblePages; i++) {
        addPage(startPage + i);
    }

    if (currentPage - delta > 2) {
        addEllipsis();
    }

    if (currentPage + delta < totalPages - 1) {
        addEllipsis();
    }

    // Trang cuối cùng
    addPage(totalPages);

    // for (let i = 1; i <= totalPages; i++) {
    //     pages.push(
    //         <li key={i} className={cx(i === currentPage ? 'active' : '')}>
    //             <button onClick={() => onPageChange(i)}>{i}</button>
    //         </li>,
    //     );
    // }

    // return <ul className={cx('pagination')}>{pages}</ul>;
    return (
        <ul className={cx('pagination')}>
            {currentPage > 1 && (
                <li>
                    <button onClick={() => handleClick(currentPage - 1)}>&laquo;</button>
                </li>
            )}
            {totalPages !== 1 && pages}
            {currentPage < totalPages && (
                <li>
                    <button onClick={() => handleClick(currentPage + 1)}>&raquo;</button>
                </li>
            )}
        </ul>
    );
}

export default Pagination;
