import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import { loadPostsFromApi, addPostToBD } from "../../api";
import * as actions from "../actions";

import { Post } from "../../types";

function* loadPosts() {
  try {
    const newPosts: Post[] = yield call(loadPostsFromApi);

    yield put({
      type: actions.ADD_POSTS,
      payload: {
        posts: newPosts,
      }
    });
  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

function* addPost(action: PayloadAction<{post: Post}>) {
  try {
    const { payload: { post } } = action;

    yield call(addPostToBD, post);

  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

export {
  loadPosts,
  addPost
};
