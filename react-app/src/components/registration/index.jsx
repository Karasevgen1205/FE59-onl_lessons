import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupList } from "./country-list.js";
import { signUpMiddlewareAction } from "../../store/actions/index.js";
import "./styles.scss";

export const Registration = ({ setIsShowModal, setIsRegistration }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const inputNameRef = useRef(null);
  const inputConfirmPassRef = useRef(null);
  const user = useSelector((state) => state.user);

  const handleChangeText = (event, field) => {
    setValues((prevState) => ({ ...prevState, [field]: event.target.value }));
  };

  const handleSave = () => {
    dispatch(signUpMiddlewareAction(values));
  };

  const handleClick = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <h4 className="modal__title">Sing up</h4>
      <label htmlFor="modalName">Name</label>
      <input
        type="text"
        className="modal__input"
        id="modalName"
        onInput={(event) => handleChangeText(event, "name")}
        ref={inputNameRef}
      />
      {user.errors.username && (
        <p className="modal__error">{user.errors.username.join(", ")}</p>
      )}
      <label htmlFor="modalEmail">Email</label>
      <input
        type="text"
        className="modal__input"
        id="modalEmail"
        onInput={(event) => handleChangeText(event, "email")}
      />
      {user.errors.email && (
        <p className="modal__error">{user.errors.email.join(", ")}</p>
      )}
      <label htmlFor="modalPass">Password</label>
      <input
        type="password"
        className="modal__input"
        id="modalPass"
        onInput={(event) => handleChangeText(event, "pass")}
      />
      {user.errors.password && (
        <p className="modal__error">{user.errors.password.join(", ")}</p>
      )}
      <label htmlFor="modalCountry">Choose your course group:</label>
      <select
        className="modal__input"
        id="modalCountry"
        onChange={(event) => handleChangeText(event, "group")}
      >
        {groupList.map((item, index) => {
          return (
            <option value={item} key={`${item}_${index}}`}>
              {item}
            </option>
          );
        })}
      </select>
      <button type="button" onClick={() => setIsRegistration(false)}>
        Sign Up
      </button>
      <div className="modal__actions">
        <button className="modal__cancel" onClick={handleClick}>
          Cancel
        </button>
        <button className="modal__save" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};
