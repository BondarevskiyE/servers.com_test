import { all, takeLatest } from "redux-saga/effects";
import { loadPosts, addPost } from "./posts";
import * as actions from "../actions";
import changeUser from "./changeUser";

function* root() {
  yield all([
    takeLatest(actions.LOAD_POSTS, loadPosts),
    takeLatest(actions.SEND_NEW_USER_INFO, changeUser),
    takeLatest(actions.ADD_POST, addPost)
  ]);
}

export default root;
