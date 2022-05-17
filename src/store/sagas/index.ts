import { all, takeLatest } from "redux-saga/effects";
import loadPosts from "./loadPosts";
import * as actions from "../actions";
import changeUser from "./changeUser";

function* root() {
  yield all([
    takeLatest(actions.LOAD_POSTS, loadPosts),
    takeLatest(actions.SEND_NEW_USER_INFO, changeUser),
  ]);
}

export default root;
