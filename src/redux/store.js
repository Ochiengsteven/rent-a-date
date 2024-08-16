// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import companionsReducer from "./reducers/companionsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    companions: companionsReducer,
  },
});

export default store;
