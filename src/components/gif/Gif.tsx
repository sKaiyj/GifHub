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
    <a href={src} className={className + " " + styles.gif}>
      <img
        className={styles.img}
        src={src}
        width={width}
        height={height}
        {...props}
      />
    </a>
  );
};

export default Gif;
