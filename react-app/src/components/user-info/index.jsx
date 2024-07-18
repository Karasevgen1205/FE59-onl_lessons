import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoMiddlewareAction } from "../../store/actions";

export const UserInfoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.content);

  useEffect(() => {
    dispatch(getUserInfoMiddlewareAction(navigate));
  }, []);

  if (!user.username) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="user-info">
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
    </section>
  );
};
