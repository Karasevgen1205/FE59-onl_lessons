import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizationMiddlewareAction } from "../../store/actions";

export const Authorization = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const user = useSelector((state) => state.user);

  const handleChangeText = (event, field) => {
    setValues((prevState) => ({ ...prevState, [field]: event.target.value }));
  };

  const handlePost = () => {
    dispatch(authorizationMiddlewareAction(values));
  };

  return (
    <>
      <h4 className="modal__title">Sing in</h4>
      <label htmlFor="modalEmail">Email</label>
      <input
        type="text"
        className="modal__input"
        id="modalEmail"
        onInput={(event) => handleChangeText(event, "email")}
      />
      {/* {user.errors.email && (
        <p className="modal__error">{user.errors?.email.join(", ")}</p>
      )} */}
      <label htmlFor="modalPass">Password</label>
      <input
        type="password"
        className="modal__input"
        id="modalPass"
        onInput={(event) => handleChangeText(event, "password")}
      />
      {/* {user.errors.password && (
        <p className="modal__error">{user.errors?.password.join(", ")}</p>
      )} */}
      <button type="button">Sign Up</button>
      <div className="modal__actions">
        <button className="modal__save" onClick={handlePost}>
          Post
        </button>
      </div>
    </>
  );
};
