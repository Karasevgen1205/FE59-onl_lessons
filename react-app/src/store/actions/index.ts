import {NavigateFunction} from 'react-router-dom';
import { fetchToken, fetchActivation } from "../../api/auth";
import { fetchPosts } from "../../api/posts";
import { fetchUserInfo } from "../../api/user";
import { postsData } from "../../pages/blog/mock-data";
import {IRegistrationValues} from '../../components/registration';
import {AppDispatch, AppStore} from '..';
import {IPostQuery} from '../../typings/posts';
import {IAuth} from '../../typings/auth';

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
// export const CHANGE_PAGE = "CHANGE_PAGE";

export const INCREMENT_ACTION = { type: INCREMENT };
export const DECREMENT_ACTION = { type: DECREMENT };
export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_POST_ACTION = { type: REMOVE_POST };
export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS };
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };

export const addPostAction = (post: unknown) => ({ type: ADD_POST, payload: post });
export const addPostsAction = (response: unknown) => ({
  type: RECEIVED_POSTS,
  payload: response,
});
export const changeLikeAction = (id: number) => ({ type: CHANGE_LIKE, id });
export const changeDislikeAction = (id: number) => ({ type: CHANGE_DISLIKE, id });
export const changeTabAction = (tab: unknown) => ({ type: CHANGE_TAB, tab });
export const addUserDataAction = (user: unknown) => ({ type: RECEIVED_USER_DATA, user });
export const addTokenAction = (payload: unknown) => ({ type: RECEIVED_TOKEN, payload });

export const getPostsMiddlewareAction = () => {
  return (dispatch: AppDispatch) => {
    dispatch(REQUEST_POSTS_ACTION);

    const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=12";

    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => {
        // dispatch(addPostsAction(postsData));
        dispatch(addPostsAction(results));
      })
      .catch((e) => {
        console.log(e);
        // dispatch(ERROR_POSTS_ACTION);
      });
  };
};

export const getPostMiddlewareAction = (id: number) => {
  return (dispatch: AppDispatch) => {
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

export const signUpMiddlewareAction = ({ name, email, pass, group }: IRegistrationValues) => {
  return (dispatch: AppDispatch) => {
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

export const activationEmailMiddlewareAction = (uid: string, token: string) => {
  return (dispatch: AppDispatch) => {
    fetchActivation(uid, token);
  };
};

export const authorizationMiddlewareAction = (values: IAuth, navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    fetchToken(values).then(() => {
      fetchUserInfo(navigate).then((response) => {
        // console.log(response);
        dispatch(addUserDataAction(response));
      });
    });
  };
};

export const getUserInfoMiddlewareAction = (navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    fetchUserInfo(navigate).then((response) => {
      // console.log(response);
      dispatch(addUserDataAction(response));
    });
  };
};

export const getPostsAction = ({ searchValue, order, limit, page }: IPostQuery) => {
  return (dispatch: AppDispatch, getState: () => AppStore) => {
    dispatch(REQUEST_POSTS_ACTION);

    fetchPosts(searchValue, order, limit, page).then((response) => {
      // const state = getState();

      // const newPost = [...state.posts.content, response.results];

      dispatch(addPostsAction(response));
    });
  };
};
