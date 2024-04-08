import React, { useEffect, useState } from "react";
import styles from './pagination.module.scss';

export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
}

const DOTS: string = '...';

const Pagination = ({ totalPages, currentPage, setCurrentPage }: IPaginationProps) => {
    const [currentButtons, setCurrentButtons] = useState <(number | string)[]> ([]);
    const pageNumbers: number[] = [];
    const siblingCount: number = 3;

    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

    const onPrevClickHandler = () => setCurrentPage(prev => prev === 1 ? prev : prev - 1);
    const onNextClickHandler = () => setCurrentPage(prev => prev === totalPages ? prev : prev + 1);
    const onBtnClickHandler = (pageNumber: string | number) => {
        if (typeof pageNumber === 'number') setCurrentPage(pageNumber);
    };

    useEffect(() => {
        let tempPageNumbers: (number | string)[] = [...pageNumbers];

        if (currentPage >= 1 && currentPage <= siblingCount) {
            tempPageNumbers = [1, 2, 3, 4, DOTS, pageNumbers.length];
        }

        if (currentPage > siblingCount && currentPage < pageNumbers.length - 2) {
            const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
            const sliced2 = pageNumbers.slice(currentPage, currentPage + 1);
            tempPageNumbers = [1, DOTS, ...sliced1, ...sliced2, DOTS, pageNumbers.length];
        }

        if (currentPage > pageNumbers.length - siblingCount) {
            const sliced = pageNumbers.slice(pageNumbers.length - 4);
            tempPageNumbers = [1, DOTS, ...sliced];
        }

        setCurrentButtons(tempPageNumbers);
    }, [currentPage]);

    return (
        <ul className={styles.pagination}>
            <li
                className={styles.pagination__item}
                onClick={onPrevClickHandler}
            >&lt;</li>
            {currentButtons.map((pageNumber, i) => (
                <li
                    key={i}
                    className={`${styles['pagination__item']} ${pageNumber === currentPage ? styles['pagination__item--active'] : ''}`}
                    onClick={() => onBtnClickHandler(pageNumber)}
                >{pageNumber}</li>
            ))}
            <li
                className={styles.pagination__item}
                onClick={onNextClickHandler}
            >&gt;</li>
        </ul>
    );
};

export default Pagination;
