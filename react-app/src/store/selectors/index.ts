import {AppStore} from '..'

export const getPost = (state: AppStore) => state.post;
export const getPosts = (state: AppStore) => state.posts;
export const getTab = (state: AppStore) => state.tab;
export const getBlackTheme = (state: AppStore) => state.isBlackTheme;
export const getUser = (state: AppStore) => state.user;
export const getUserInfo = (state: AppStore) => state.user.content;
