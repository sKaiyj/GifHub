import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  searchInput: "",
  dataArray: [],
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
