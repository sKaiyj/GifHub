import ContentLine from "../../components/contentLine/ContentLine";
import style from "./BestPage.module.scss";
import { best } from "../../API/API";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
interface MyData {
  data: Array<any>;
  pagination: {
    offset: number;
  };
}
function BestPage() {
  const [data, setData] = useState<MyData>({
    data: [],
    pagination: { offset: 0 },
  });

  useEffect(() => {
    best().then((newData) =>
      setData({
        data: [...data.data, ...newData.data],
        pagination: newData.pagination,
      })
    );
  }, []);

  const loadMore = () => {
    best(data.pagination.offset + 9).then((newData) =>
      setData({
        data: [...data.data, ...newData.data],
        pagination: newData.pagination,
      })
    );
  };

  if (data.data.length === 0) return <Loader />;

  return (
    <div className={style.bestPage}>
      <ContentLine data={data.data} onLoadMore={loadMore} />
    </div>
  );
}

export default BestPage;
