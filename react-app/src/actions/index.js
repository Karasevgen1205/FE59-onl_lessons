import { postsData } from "../components/blog/mock-data";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVED_POSTS = "RECEIVED_POSTS";
export const CHANGE_LIKE = "CHANGE_LIKE";
export const CHANGE_DISLIKE = "CHANGE_DISLIKE";
export const CHANGE_TAB = "CHANGE_TAB";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const POST_USER_DATA = "POST_USER_DATA";
export const RECEIVED_USER_DATA = "RECEIVED_USER_DATA";

export const INCREMENT_ACTION = { type: INCREMENT };
export const DECREMENT_ACTION = { type: DECREMENT };
export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_POST_ACTION = { type: REMOVE_POST };
export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS };
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };

export const addPostAction = (post) => ({ type: ADD_POST, payload: post });
export const addPostsAction = (posts) => ({
  type: RECEIVED_POSTS,
  payload: posts,
});
export const changeLikeAction = (id) => ({ type: CHANGE_LIKE, id });
export const changeDislikeAction = (id) => ({ type: CHANGE_DISLIKE, id });
export const changeTabAction = (tab) => ({ type: CHANGE_TAB, tab });
export const addUserDataAction = (user) => ({ type: RECEIVED_USER_DATA, user });

export const addPostsMiddlewareAction = (string, number) => {
  return (dispatch) => {
    dispatch(REQUEST_POSTS_ACTION);

    const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=11";

    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(addPostsAction(postsData));
        // dispatch(addPostsAction(results));
      })
      .catch((e) => {
        console.log(e);
        // dispatch(ERROR_POSTS_ACTION);
      });
  };
};

export const signUpMiddlewareAction = ({ name, email, pass, group }) => {
  return (dispatch) => {
    dispatch(POST_USER_DATA_ACTION);

    const URL = "https://studapi.teachmeskills.by/auth/users/";

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        username: name,
        email,
        password: pass,
        course_group: group,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(addUserDataAction(json)));
  };
};
