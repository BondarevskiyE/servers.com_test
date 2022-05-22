import { generateId } from "../../utils";

import { Post } from "../../types";

export const ADD_POST = "ADD_POST";
export const ADD_POSTS = "ADD_POSTS";
export const REMOVE_POST = "REMOVE_POST";

export const LOAD_POSTS = "LOAD_POSTS";
export const SEND_NEW_USER_INFO = "SEND_NEW_USER_INFO";
export const FILTER_POSTS = "FILTER_POSTS";
export const SET_FILTER_OPTIONS = "SET_FILTER_OPTIONS";
export const CANCEL_FILTERING = "CANCEL_FILTERING";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const LOG_ERROR = "LOG_ERROR";

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const addPost = (post: Omit<Post, "id">) => {
  const newPost = { ...post, id: generateId() };

  return {
    type: ADD_POST,
    payload: {
      post: newPost,
    },
  }
};

export const removePost = (id: string) => ({
  type: REMOVE_POST,
  payload: {
    id,
  },
});

export const filterPosts = (id: string | null, name: string, date: { from: number, to: number } | null) => ({
  type: FILTER_POSTS,
  payload: {
    id,
    name,
    date
  }
})

export const cancelFiltering = () => ({
  type: CANCEL_FILTERING
})