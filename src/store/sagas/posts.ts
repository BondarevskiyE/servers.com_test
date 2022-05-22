import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { loadPostsFromApi, loadPostsFromApiByUserId, addPostToDB, removePostFromDB, loadPostsFromApiByDate } from "../../api";
import * as actions from "../actions";

import { Post, FilterOptions } from "../../types";

function* loadPosts(action: PayloadAction<FilterOptions>) {
  const { payload } = action;
  
  try {
    let newPosts: Post[];

    if (payload?.id) {
      newPosts = yield call(loadPostsFromApiByUserId, payload.id);
    } else if (payload?.date) {
      newPosts = yield call(loadPostsFromApiByDate, payload.date)
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

function* setFilterOptions(action: PayloadAction<FilterOptions & { name: string }>) {
  const { payload: { name, id, date } } = action;
  try {
    yield put({
      type: actions.CLEAR_POSTS
    });

    yield put({
      type: actions.SET_FILTER_OPTIONS,
      payload: {
        name
      }
    })

    yield call(loadPosts, { ...action, payload: { ...action.payload, id, date } });

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

function* cancelFiltering(action: PayloadAction<{}>) {
  try {
    yield put({
      type: actions.CLEAR_POSTS
    });
    yield call(loadPosts, { ...action, payload: {id: null, date: null} });

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
