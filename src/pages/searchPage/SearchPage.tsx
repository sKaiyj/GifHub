import Search from "../../components/search/Search";
import ContentLine from "../../components/contentLine/ContentLine";
import { useState } from "react";
import { search } from "../../API/API";
import styles from "./SearchPage.module.scss";
import { useSelector } from "react-redux";

interface MyData {
  data: Array<any>;
  pagination: {
    offset: number;
  };
}

function SearchPage() {
  const searchNow = useSelector((state: any) => state.searchInput);
  const [data, setData] = useState<MyData>({
    data: [],
    pagination: { offset: 0 },
  });

  const onSearch = () => {
    search(searchNow).then((newData) =>
      setData({
        data: [...newData.data],
        pagination: newData.pagination,
      })
    );
  };

  const loadMore = () => {
    search(searchNow, data.pagination.offset + 9).then((newData) =>
      setData({
        data: [...data.data, ...newData.data],
        pagination: newData.pagination,
      })
    );
  };

  return (
    <div className={styles.searchPage}>
      <Search onSearch={onSearch} />
      {data.data.length === 0 ? (
        <h1>Search a gif!</h1>
      ) : (
        <ContentLine data={data.data} onLoadMore={loadMore} />
      )}
    </div>
  );
}

export default SearchPage;
