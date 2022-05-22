import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select } from "redux-saga/effects";
import { loadPostsFromApi, loadPostsFromApiByUserId, addPostToDB, removePostFromDB } from "../../api";
import { posts } from "../";
import * as actions from "../actions";

import { Post, FilteredBy } from "../../types";

function* loadPosts() {

  try {
    let newPosts: Post[];

    const filteredBy: FilteredBy = yield select(posts.getFilteredBy);
    if (filteredBy?.id) {
      newPosts = yield call(loadPostsFromApiByUserId, filteredBy?.id);
    } else {
      newPosts = yield call(loadPostsFromApi)
    }

    yield put({
      type: actions.ADD_POSTS,
      payload: {
        posts: newPosts,
      },
    });
  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

function* setFilterOptions(action: PayloadAction<FilteredBy>) {
  const { payload: { name, id } } = action;
  try {
    yield put({
      type: actions.CLEAR_POSTS
    });

    yield put({
      type: actions.SET_FILTER_OPTIONS,
      payload: {
        name, id
      }
    })

    yield call(loadPosts);

  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

function* addPost(action: PayloadAction<{ post: Post }>) {
  try {
    const {
      payload: { post },
    } = action;

    yield call(addPostToDB, post);
  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

function* cancelFiltering() {
  try {
    yield put({
      type: actions.CLEAR_POSTS
    });
    yield call(loadPosts);

  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

export function* removePost(action: PayloadAction<{id: string}>) {
  try {
    yield call(removePostFromDB, action.payload.id);

  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

export { loadPosts, addPost, cancelFiltering, setFilterOptions };
