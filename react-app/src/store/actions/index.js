import { postsData } from "../../components/blog/mock-data";

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
export const RECEIVED_TOKEN = "RECEIVED_TOKEN";

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
export const addTokenAction = (payload) => ({ type: RECEIVED_TOKEN, payload });

export const getPostsMiddlewareAction = () => {
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

export const getPostMiddlewareAction = (id) => {
  return (dispatch) => {
    dispatch(REQUEST_POSTS_ACTION);

    const URL = `https://studapi.teachmeskills.by/blog/posts/${id}`;

    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(addPostAction(postsData));
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

    const data = {
      username: name,
      email,
      password: pass,
      course_group: group,
    };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(addUserDataAction(json)));
  };
};

export const activationEmailMiddlewareAction = (uid, token) => {
  return (dispatch) => {
    // dispatch(POST_USER_DATA_ACTION);

    const URL = "https://studapi.teachmeskills.by/auth/users/activation/";
    const data = { uid, token };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // dispatch(addUserDataAction(json))
      });
  };
};

export const authorizationMiddlewareAction = (values) => {
  return (dispatch) => {
    const URL = "https://studapi.teachmeskills.by/auth/jwt/create/";

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(addTokenAction(json));
      });
  };
};

export const getUserInfoMiddlewareAction = (token) => {
  return (dispatch) => {
    const URL = "https://studapi.teachmeskills.by/auth/users/me/";

    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(addUserDataAction(json));
      });
  };
};
