import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_USER_INFO } from "../actions";

import { User } from "../../types";

const initialState: User = {
  name: "Egor Bondarevskii",
  age: 25,
  id: "1",
};

export const getUser = (state: User) => state;

export const reducer = createReducer(initialState, {
  [CHANGE_USER_INFO]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
});
