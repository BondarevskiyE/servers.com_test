import { call, put } from "redux-saga/effects";
import { loadPostsFromApi } from "../../api";
import * as actions from "../actions";

import { Post } from "../../types";

function* loadPosts() {
  try {
    const newPosts: Post[] = yield call(loadPostsFromApi);

    yield put({
      type: actions.ADD_POSTS,
      posts: newPosts,
    });
  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

export default loadPosts;
