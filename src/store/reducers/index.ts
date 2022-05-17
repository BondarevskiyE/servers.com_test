import { combineReducers } from "redux";
import postsReducer from "./posts";
import userReducer from "./user";

export default combineReducers({
  posts: postsReducer,
  user: userReducer,
});
