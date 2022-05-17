import { generateId } from "../../utils";

import { Post, User } from "../../types";

export const ADD_POSTS = "ADD_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";

export const LOAD_POSTS = "LOAD_POSTS";
export const SEND_NEW_USER_INFO = "SEND_NEW_USER_INFO";
export const LOG_ERROR = "LOAD_ERROR";

export const addPost = (post: Post) => ({
  type: ADD_POSTS,
  payload: {
    post: { ...post, id: generateId() },
  },
});

export const removePost = (id: string) => ({
  type: REMOVE_POST,
  payload: {
    id,
  },
});

export const changeUserInfo = (userInfo: User) => ({
  type: CHANGE_USER_INFO,
  payload: {
    userInfo,
  },
});
