import ContentLine from "../../components/contentLine/ContentLine";
import style from "./BestPage.module.scss";
import { best } from "../../API/API";
import { useEffect, useState } from "react";

function BestPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    best().then((data) => setData(data.data));
  }, []);

  if (data.length === 0) return <h1>"loading..."</h1>;

  return (
    <div className={style.bestPage}>
      <ContentLine data={data} />
    </div>
  );
}

export default BestPage;
