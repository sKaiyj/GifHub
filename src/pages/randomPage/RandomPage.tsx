import style from "./RandomPage.module.scss";
import Gif from "../../components/gif/Gif";
import { random } from "../../API/API";
import { useEffect, useState } from "react";
import CustomButton from "../../components/button/CustomButton";
function RandomPage() {
  const [data, setData] = useState("");
  useEffect(() => {
    random().then((data) => setData(data.data.images.downsized.url));
  }, []);

  const newRandom = () => {
    random().then((data) => setData(data.data.images.downsized.url));
  };
  if (!data) return <h1>"loading..."</h1>;
  return (
    <div className={style.randomPage}>
      <Gif src={data} height={300} />
      <CustomButton className={style.button} onClick={newRandom}>
        New Random
      </CustomButton>
    </div>
  );
}

export default RandomPage;
