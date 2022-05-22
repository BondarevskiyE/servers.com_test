import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { loadPosts, addPost, cancelFiltering, setFilterOptions } from "./posts";
import * as actions from "../actions";

function* root() {
  yield all([
    takeLatest(actions.LOAD_POSTS, loadPosts),
    takeLatest(actions.ADD_POST, addPost),
    takeLatest(actions.FILTER_BY_AUTHOR, setFilterOptions),
    takeEvery(actions.CANCEL_FILTERING, cancelFiltering),
  ]);
}

export default root;
