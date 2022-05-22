import { createReducer } from "@reduxjs/toolkit";
import { ADD_POST, ADD_POSTS } from "../actions";
import { sortByDate } from '../../utils/date';

import { User, Post, AppState } from "../../types";

const initialState: User = {
  name: "Egor Bondarevskii",
  age: 25,
  id: "1",
};

export const getUser = (state: AppState) => state.user;
export const getUserId = (state: AppState) => state.user.id;

export const reducer = createReducer(initialState, {
  [ADD_POST]: (state, { payload }) => ({
    ...state,
    userPosts: [payload.post, ...state.userPosts],
  }),
  [ADD_POSTS]: (state, { payload }) => {
    const { posts } = payload;
    let userPosts = [ ...state.userPosts, ...posts.filter((post: Post) => post.author.id === state.id)];
    userPosts = userPosts.sort(sortByDate);

    return {
      ...state,
      userPosts,
    };
  },
});
