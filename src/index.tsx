import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import SearchPage from "./pages/searchPage/SearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BestPage from "./pages/bestPage/BestPage";
import RandomPage from "./pages/randomPage/RandomPage";
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

const defaultState = {
  searchInput: "",
  searchNow: "",
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
