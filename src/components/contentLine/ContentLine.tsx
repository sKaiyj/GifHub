import Gif from "../gif/Gif";
import styles from "./ContentLine.module.scss";
const ContentLine = ({ data }: { data: Array<any> }) => {
  return (
    <div className={styles.contentLine}>
      {data.map((item: any) => (
        <Gif src={item.images.original.url} key={item.id} height={300} />
      ))}
    </div>
  );
};

export default ContentLine;
