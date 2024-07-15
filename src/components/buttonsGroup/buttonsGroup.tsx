import React from "react";
import CustomButton from "../button/CustomButton";
import styles from "./buttonsGroup.module.scss";
import { Link } from "react-router-dom";
const ButtonsGroup = () => {
  return (
    <div className={styles.buttonsGroup}>
      <Link to='/'>
        <CustomButton>Search</CustomButton>
      </Link>
      <Link to='/best'>
        <CustomButton>Best</CustomButton>
      </Link>
      <Link to='/random'>
        <CustomButton>Random</CustomButton>
      </Link>
    </div>
  );
};

export default ButtonsGroup;
