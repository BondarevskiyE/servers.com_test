import { createReducer } from "@reduxjs/toolkit";
import { ADD_POST, ADD_POSTS, REMOVE_POST, SET_FILTER_OPTIONS, CLEAR_POSTS } from "../actions";
import { sortByDate } from '../../utils/date';

import { Post, AppState } from "../../types";

type State = {
  messages: Post[];
  filteredBy: {
    id: string | null,
    name: string | null
  }
};

const initialState: State = {
  messages: [],
  filteredBy: {
    id: null,
    name: null
  },
};

export const getPosts = (state: AppState) => state.posts.messages;
export const getUserPosts = (state: AppState) => state.posts.messages.filter((post) => post.author.id === state.user.id)
export const getFilteredBy = (state: AppState) => state.posts.filteredBy;

export const reducer = createReducer(initialState, {
  [ADD_POST]: (state, { payload }) => ({
    ...state,
    messages: [payload.post, ...state.messages],
  }),
  [ADD_POSTS]: (state, { payload }) => {
    const { posts } = payload;
    let newPosts = [ ...posts];
    newPosts = newPosts.sort(sortByDate);

    return ({
      ...state,
      messages: newPosts,
    })
  },
  [SET_FILTER_OPTIONS]: (state, { payload }) => {
    const { name, id } = payload;

    return {
      ...state,
      filteredBy: {
        name, id
      }
    }
  },
  [REMOVE_POST]: (state, { payload }) => {
    const messages = state.messages.filter(
      (message) => message.id !== payload.id
    );
    return { ...state, messages };
  },
  [CLEAR_POSTS]: () => ({
    messages: [],
    filteredBy: {
      id: null,
      name: null
    }
  })
});
