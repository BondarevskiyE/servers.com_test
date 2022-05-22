// ...
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { reducer } from "./reducers";

export * from "./reducers";
export * from "./actions";

// const isDev = process.env.NODE_ENV !== 'production';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && isDev
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//         : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat([sagaMiddleware]),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
