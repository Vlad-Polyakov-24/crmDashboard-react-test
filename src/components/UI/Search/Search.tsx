import React, { FormEventHandler, ChangeEventHandler } from "react";
import styles from './search.module.scss';
import Icon from "../Icon/Icon.tsx";

export interface ISearchProps {
    searchQuery: string;
    onSearch:  React.Dispatch<React.SetStateAction<string>>;
}

const Search = (props: ISearchProps) => {
    const searchHandler: ChangeEventHandler<HTMLInputElement> = e => {
        props.onSearch(e.target.value);
    };

    const submitHandler: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
    };

    return (
        <form className={styles.search} onSubmit={submitHandler}>
            <label htmlFor="customers-search" className={styles.search__label}>
                <input type="text" className={styles.search__input} name="customers-search" id="customers-search" placeholder="Search" value={props.searchQuery} onChange={searchHandler}/>
            </label>
            <button type="submit" className={styles.search__btn}>
                <Icon size='16' icon='search'/>
            </button>
        </form>
    );
};

export default Search;
