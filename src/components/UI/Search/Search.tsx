import { FormEventHandler, ChangeEventHandler } from "react";
import styles from './search.module.scss';
import Icon from "../Icon/Icon.tsx";
import {useState} from "react";

const Search = () => {
    const [search, setSearch] = useState('');

    const searchHandler: ChangeEventHandler<HTMLInputElement> = e => setSearch(e.target.value);

    const submitHandler: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    };

    return (
        <form className={styles.search} onSubmit={submitHandler}>
            <label htmlFor="customers-search" className={styles.search__label}>
                <input type="text" className={styles.search__input} name="customers-search" id="customers-search" placeholder="Search" value={search} onChange={searchHandler}/>
            </label>
            <button type="submit" className={styles.search__btn}>
                <Icon size='16' icon='search'/>
            </button>
        </form>
    );
};

export default Search;
