import { generateId } from "../../utils";

import { Post, User } from "../../types";

export const ADD_POST = "ADD_POST";
export const ADD_POSTS = "ADD_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";

export const LOAD_POSTS = "LOAD_POSTS";
export const SEND_NEW_USER_INFO = "SEND_NEW_USER_INFO";
export const LOG_ERROR = "LOG_ERROR";


export const loadPosts = () => ({
  type: LOAD_POSTS
});

export const addPost = (post: Omit<Post, 'id'>) => ({
  type: ADD_POST,
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
