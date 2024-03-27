import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catsReducer from "./catState.js";
import catSaga from "./catSaga.js";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { cats: catsReducer },
  middleware: () => [saga],
});
saga.run(catSaga);

export default store;
