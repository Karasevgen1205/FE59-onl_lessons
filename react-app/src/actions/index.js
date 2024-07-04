export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export const INCREMENT_ACTION = { type: INCREMENT };
export const DECREMENT_ACTION = { type: DECREMENT };
export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const ADD_POST_ACTION = (post) => ({ type: ADD_POST, payload: post });
export const REMOVE_POST_ACTION = { type: REMOVE_POST };
