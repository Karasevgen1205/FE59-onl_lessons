import { refreshToken } from "./auth";

export const fetchUserInfo = (navigate) => {
  const URL = "https://studapi.teachmeskills.by/auth/users/me/";
  const token = localStorage.getItem("accessToken");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(URL, options)
    .then((response) => {
      if (response.status === 401) {
        return refreshToken(URL, options, navigate);
      }

      return response.json();
    })
    .catch((e) => console.log(e));
};
