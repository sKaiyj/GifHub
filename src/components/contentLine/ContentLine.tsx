import styles from "./ContentLine.module.scss";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ContentLine = () => {
  const gf = new GiphyFetch("TfEf3OStkFOrSCIPUitewGJjIifsNhQB"); // убрать отдельно
  const location = useLocation().pathname;
  const searchNow = useSelector((state: any) => state.searchNow);

  let fetchGifs: any;
  if (location === "/") {
    fetchGifs = (offset: number) => gf.search(searchNow, { offset, limit: 10 });
  } else {
    fetchGifs = (offset: number) => gf.trending({ limit: 10, offset });
  }
  return (
    <div className={styles.contentLine}>
      <Grid
        width={800}
        columns={3}
        gutter={6}
        fetchGifs={fetchGifs}
        key={searchNow}
      />
    </div>
  );
};

export default ContentLine;
