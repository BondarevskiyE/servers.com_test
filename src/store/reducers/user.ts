import { createReducer } from "@reduxjs/toolkit";

import { User, AppState } from "../../types";

const initialState: User = {
  name: "Egor Bondarevskii",
  age: 25,
  id: "1",
};

export const getUser = (state: AppState) => state.user;
export const getUserId = (state: AppState) => state.user.id;

export const reducer = createReducer(initialState, {});
