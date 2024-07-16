import React from "react";
import styles from "./Gif.module.scss";
const Gif = ({
  src,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div className={className + " " + styles.gif}>
      <img
        className={styles.img}
        src={src}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default Gif;
