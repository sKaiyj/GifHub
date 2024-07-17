import axios from "axios";
const API = process.env.REACT_APP_API_KEY;
export const search = (term: string, offset: number = 0) => {
  const data = axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${term}&limit=9&offset=${offset}&rating=g&lang=en`
    )
    .then((res) => res.data);
  return data;
};

export const best = (offset: number = 0): Promise<any> => {
  const data = axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=9&rating=g&offset=${offset}`
    )
    .then((res) => res.data);
  return data;
};

export const random = () => {
  const data = axios
    .get(`https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`)
    .then((res) => res.data);
  return data;
};
