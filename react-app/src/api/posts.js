import { refreshToken } from "./auth";

export const getQueryParams = (searchValue, order, limit, offset) => {
  return `?limit=${limit}&offset=${offset}${
    searchValue ? `&search=${searchValue}` : ""
  }&ordering=${order}`;
};

export const fetchPosts = (searchValue, order, limit, page) => {
  const offset = (page - 1) * limit;

  const URL = `https://studapi.teachmeskills.by/blog/posts/${getQueryParams(
    searchValue,
    order,
    limit,
    offset
  )}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((response) => response)
    .catch((e) => console.log(e));
};

export const createPost = (formData) => {
  const URL = "https://studapi.teachmeskills.by/blog/posts/";
  const token = localStorage.getItem("accessToken");
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(URL, options).then((response) => {
    if (response.status === 401) {
      return refreshToken(URL, options);
    }

    return response.json();
  });
};
