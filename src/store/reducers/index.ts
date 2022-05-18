import { combineReducers } from "redux";
import * as posts  from "./posts";
import * as user from "./user";

const reducer = combineReducers({
  posts: posts.reducer,
  user: user.reducer,
});

export {
  posts,
  user,
  reducer
};
