import { call, takeEvery, put } from "redux-saga/effects";
import { getCatSuccess } from "./catState";

function* workGetCatsFetchSample() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);
  yield put(getCatSuccess(formattedCatsShortened));
}

function* catSaga() {
  yield takeEvery("cats/getCatchFetch", workGetCatsFetchSample);
}

export default catSaga;
