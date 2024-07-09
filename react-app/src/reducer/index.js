import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ADD_POST,
  REMOVE_POST,
  RECEIVED_POSTS,
  CHANGE_LIKE,
  CHANGE_DISLIKE,
  CHANGE_TAB,
  REQUEST_POSTS,
  POST_USER_DATA,
  RECEIVED_USER_DATA,
} from "../actions";

const initialState = {
  count: 0,
  isBlackTheme: false,
  post: null,
  posts: {
    content: [],
    loading: false,
    loaded: false,
    error: null,
  },
  tab: "all",
  user: {
    content: {},
    loading: false,
    loaded: false,
    errors: {},
  },
};

// const action = {
//   type: "INCREMENT",
// };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_THEME:
      return {
        ...state,
        isBlackTheme: !state.isBlackTheme,
      };
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };
    case REMOVE_POST:
      return {
        ...state,
        post: null,
      };
    case REQUEST_POSTS:
      return {
        ...state,
        // posts: action.payload,
        posts: {
          ...state.posts,
          loading: true,
        },
      };
    case RECEIVED_POSTS:
      return {
        ...state,
        // posts: action.payload,
        posts: {
          ...state.posts,
          content: action.payload,
          loading: false,
          loaded: true,
        },
      };
    case CHANGE_LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.id
            ? { ...post, like: !post.like, dislike: false }
            : post;
        }),
      };
    case CHANGE_DISLIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.id
            ? { ...post, dislike: !post.dislike, like: false }
            : post;
        }),
      };
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case POST_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case RECEIVED_USER_DATA:
      const isError = !action.user.id;

      return {
        ...state,
        // posts: action.payload,
        user: {
          ...state.user,
          content: isError ? {} : action.user,
          loading: false,
          loaded: true,
          errors: isError ? action.user : {},
        },
      };
    default:
      return state;
  }
};
