import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { setNewUserInfo } from "../../api";
import * as actions from "../actions";

import { User } from "../../types";

function* changeUser(action: PayloadAction<{ userInfo: User }>) {
  const { userInfo } = action.payload;
  try {
    yield call(setNewUserInfo, userInfo);

    yield put({
      type: actions.CHANGE_USER_INFO,
      payload: userInfo,
    });
  } catch (e) {
    yield put({
      type: actions.LOG_ERROR,
      error: e,
    });
  }
}

export default changeUser;
