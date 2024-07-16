import Search from "../../components/search/Search";
import ContentLine from "../../components/contentLine/ContentLine";
import { useState, useEffect } from "react";
import { search } from "../../API/API";
import styles from "./SearchPage.module.scss";
import { useSelector } from "react-redux";
function SearchPage() {
  const [data, setData] = useState([]);
  const onSearch = (searchNow: string) => {
    search(searchNow).then((data) => setData(data.data));
    console.log(searchNow);
  };

  return (
    <div className={styles.searchPage}>
      <Search onSearch={onSearch} />
      {data.length === 0 ? <h1>Search a gif!</h1> : <ContentLine data={data} />}
    </div>
  );
}

export default SearchPage;
