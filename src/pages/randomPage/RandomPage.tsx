import React, { useEffect } from "react";
import style from "./RandomPage.module.scss";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import CustomButton from "../../components/button/CustomButton";

function RandomPage() {
  const gf = new GiphyFetch("Mg9uQkfKo8mLERCRJRzPaN5qZoCQWSBc"); // убрать отдельно
  const [newRandom, setNewRandom] = React.useState(false);
  const [asyncData, setAsyncData] = React.useState<any>(null!);
  useEffect(() => {
    gf.random().then((res) => setAsyncData(res));
    console.log(asyncData);
  }, [newRandom]);

  const onClick = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=gVCqGpoOmqqoc38CuLQLodl2lJNA3HQs"
    ).then((res) => console.log(res.json()));
  };
  return (
    <div className={style.randomPage}>
      {asyncData ? (
        <>
          <Gif gif={asyncData.data} width={400} className={style.gif} />
          <CustomButton onClick={onClick}>new random</CustomButton>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default RandomPage;
