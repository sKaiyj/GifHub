import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to='/'>GifHub</Link>
    </div>
  );
};

export default Logo;
