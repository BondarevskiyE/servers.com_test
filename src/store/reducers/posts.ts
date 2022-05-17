import { createReducer } from "@reduxjs/toolkit";
import { ADD_POSTS, REMOVE_POST } from "../actions";

import { Post } from "../../types";

type State = {
  messages: Post[];
};

const initialState: State = {
  messages: [],
};

export const getPosts = (state: State) => state.messages;

export default createReducer(initialState, {
  [ADD_POSTS]: (state, { payload }) => ({
    ...state,
    messages: [...state.messages, ...payload.posts],
  }),
  [REMOVE_POST]: (state, { payload }) => {
    const messages = state.messages.filter(
      (message) => message.id !== payload.id
    );
    return { ...state, messages };
  },
});
