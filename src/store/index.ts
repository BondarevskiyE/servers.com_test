// ...
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducer from "./reducers";

// const isDev = process.env.NODE_ENV !== 'production';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && isDev
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//         : compose;

const sagaMiddleware = createSagaMiddleware();

// const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat([sagaMiddleware]),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export default store;
