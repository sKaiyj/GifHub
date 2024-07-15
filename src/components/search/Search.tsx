import styles from "./Search.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Search = () => {
  const searchInput = useSelector((state: any) => state.searchInput);
  const searchNow = useSelector((state: any) => state.searchNow);
  const dispatch = useDispatch();
  const setSearchInput = (e: any) => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
  };
  const setSearchNow = () => {
    dispatch({ type: "SET_SEARCH_NOW", payload: searchInput });
  };
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={setSearchInput}
        value={searchInput}
        className={styles.search}
      ></input>
      <span onClick={setSearchNow} className={styles.searchIcon}></span>
    </div>
  );
};

export default Search;
