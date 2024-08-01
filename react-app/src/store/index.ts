import { createStore, applyMiddleware, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";

// const rootReducer = combineReducers({reducer}); // объединение многих мелких редьюсеров в один общий большой редьюсер

// TODO: пофиксить после типизации стора
// @ts-expect-error
const store = createStore(reducer, applyMiddleware(thunk)); // рабочий но утсаревшийметод
// const store = configureStore({ reducer });

export default store;

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;