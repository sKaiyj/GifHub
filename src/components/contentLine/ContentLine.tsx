import CustomButton from "../button/CustomButton";
import Gif from "../gif/Gif";
import styles from "./ContentLine.module.scss";
const ContentLine = ({
  data,
  onLoadMore,
}: {
  data: Array<any>;
  onLoadMore?: () => void;
}) => {
  return (
    <>
      <div className={styles.contentLine}>
        {data.map((item: any) => (
          <Gif src={item.images.original.url} key={item.id} height={300} />
        ))}
      </div>
      <CustomButton className={styles.button} onClick={onLoadMore}>
        Load more
      </CustomButton>
    </>
  );
};

export default ContentLine;
