export const fetchPosts = (searchValue, order, limit, page) => {
  const offset = (page - 1) * limit;

  const URL = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}${
    searchValue ? `&search=${searchValue}` : ""
  }&ordering=${order}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((response) => response)
    .catch((e) => console.log(e));
};
