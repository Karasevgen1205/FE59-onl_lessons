import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ADD_POST,
  REMOVE_POST,
} from "../actions";

const initialState = {
  count: 0,
  isBlackTheme: false,
  post: null,
};

// const action = {
//   type: "INCREMENT",
// };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    // ...сделаем то-то
    // console.log(state);

    console.log({
      ...state,
      count: state.count + 1,
    });
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === DECREMENT) {
    // ...сделаем что-то другое
    console.log({
      ...state,
      count: state.count - 1,
    });
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === CHANGE_THEME) {
    // ...сделаем что-то третье
    console.log({
      ...state,
      isBlackTheme: !state.isBlackTheme,
    });
    return {
      ...state,
      isBlackTheme: !state.isBlackTheme,
    };
  }

  if (action.type === ADD_POST) {
    //   ...сделаем что-то третье
    console.log({
      ...state,
      post: action.payload,
    });
    return {
      ...state,
      post: action.payload,
    };
  }

  if (action.type === REMOVE_POST) {
    //   ...сделаем что-то третье
    console.log({
      ...state,
      post: null,
    });
    return {
      ...state,
      post: null,
    };
  }

  console.log(state);
  return state;
};
