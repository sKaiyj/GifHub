import axios from "axios";
const API = process.env.REACT_APP_API_KEY;
export const search = (term: string) => {
  const data = axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${term}&limit=10&offset=0&rating=g&lang=en`
    )
    .then((res) => res.data);
  return data;
};

export const best = () => {
  const data = axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=10&rating=g`
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
