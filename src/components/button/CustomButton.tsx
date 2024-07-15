import React from "react";
import styles from "./CustomButton.module.scss";
interface CustomButtonProps {
  children: React.ReactNode;
  [name: string]: any;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
