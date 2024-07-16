import React from "react";
import styles from "./CustomButton.module.scss";
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  [name: string]: any;
}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <button {...props} className={className + " " + styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
