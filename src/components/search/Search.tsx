import styles from "./Search.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Search = ({ onSearch }: { onSearch: (searchNow: string) => void }) => {
  const searchInput = useSelector((state: any) => state.searchInput);
  const dispatch = useDispatch();

  const setSearchInput = (e: any) => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
  };

  return (
    <div className={styles.searchContainer}>
      <input
        onChange={setSearchInput}
        value={searchInput}
        className={styles.search}
      ></input>
      <span
        onClick={() => onSearch(searchInput)}
        className={styles.searchIcon}
      ></span>
    </div>
  );
};

export default Search;
