import SearchPage from "../pages/searchPage/SearchPage";
import { createBrowserRouter } from "react-router-dom";
import BestPage from "../pages/bestPage/BestPage";
import RandomPage from "../pages/randomPage/RandomPage";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <SearchPage /> },
      { path: "/best", element: <BestPage /> },
      { path: "/random", element: <RandomPage /> },
    ],
  },
]);

export default router;
