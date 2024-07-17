import React from "react";
import styles from "./Loader.module.scss";
const Loader = () => {
  return (
    <div class={styles.loader}>
      <div class={styles.loaderInner}>
        <div class={styles.loaderLineWrap}>
          <div class={styles.loaderLine}></div>
        </div>
        <div class={styles.loaderLineWrap}>
          <div class={styles.loaderLine}></div>
        </div>
        <div class={styles.loaderLineWrap}>
          <div class={styles.loaderLine}></div>
        </div>
        <div class={styles.loaderLineWrap}>
          <div class={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
