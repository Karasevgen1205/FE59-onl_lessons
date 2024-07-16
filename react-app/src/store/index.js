import { createStore, applyMiddleware, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";

// const rootReducer = combineReducers({reducer}); // объединение многих мелких редьюсеров в один общий большой редьюсер

const store = createStore(reducer, applyMiddleware(thunk)); // рабочий но утсаревшийметод
// const store = configureStore({ reducer });

export default store;
