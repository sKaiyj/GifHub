import styles from "./ContentLine.module.scss";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import React from "react";
import { useSelector } from "react-redux";

const ContentLine = () => {
  const gf = new GiphyFetch("TfEf3OStkFOrSCIPUitewGJjIifsNhQB");
  const searchNow = useSelector((state: any) => state.searchNow);

  let fetchGifs = (offset: number) =>
    gf.search(searchNow, { offset, limit: 10 });

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
