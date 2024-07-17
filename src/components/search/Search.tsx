import styles from "./Search.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Search = ({ onSearch }: { onSearch: () => void }) => {
  const searchInput = useSelector((state: any) => state.searchInput);
  const dispatch = useDispatch();

  const setSearchInput = (e: any) => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
  };
  const clearInput = () => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: "" });
  };
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={setSearchInput}
        value={searchInput}
        className={styles.search}
      ></input>
      <span onClick={() => onSearch()} className={styles.searchIcon}></span>
      <span onClick={() => clearInput()} className={styles.closeIcon}></span>
    </div>
  );
};

export default Search;
