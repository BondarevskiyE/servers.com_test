import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { loadPosts, addPost, cancelFiltering, setFilterOptions, removePost } from "./posts";
import * as actions from "../actions";

function* root() {
  yield all([
    takeLatest(actions.LOAD_POSTS, loadPosts),
    takeLatest(actions.ADD_POST, addPost),
    takeLatest(actions.REMOVE_POST, removePost),
    takeLatest(actions.FILTER_POSTS, setFilterOptions),
    takeEvery(actions.CANCEL_FILTERING, cancelFiltering),
  ]);
}

export default root;
