import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
