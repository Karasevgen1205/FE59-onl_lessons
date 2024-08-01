import { FC, useRef, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {UnknownAction} from 'react-router-dom';
import {getUser} from '../../store/selectors';
import { groupList } from "./country-list.js";
import { signUpMiddlewareAction } from "../../store/actions/index.js";
import "./styles.scss";

interface IRegistration {
  setIsShowModal: (value: boolean) => void;
  setIsRegistration: (value: boolean) => void;
}

export interface IRegistrationValues {
  name: string;
  email: string;
  pass: string;
  group: string;
}

export const Registration: FC<IRegistration> = ({ setIsShowModal, setIsRegistration }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const user = useSelector(getUser);

  const handleChangeText = (field: string) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setValues((prevState) => ({ ...prevState, [field]: event.target.value }));
    }
  };

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    setValues((prevState) => ({ ...prevState, group: event.target.value }));
  }

  const handleSave = () => {
    //TODO: пофиксить после типизации стора
    // @ts-expect-error
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
        onInput={handleChangeText("name")}
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
        onInput={handleChangeText("email")}
      />
      {user.errors.email && (
        <p className="modal__error">{user.errors.email.join(", ")}</p>
      )}
      <label htmlFor="modalPass">Password</label>
      <input
        type="password"
        className="modal__input"
        id="modalPass"
        onInput={handleChangeText("pass")}
      />
      {user.errors.password && (
        <p className="modal__error">{user.errors.password.join(", ")}</p>
      )}
      <label htmlFor="modalCountry">Choose your course group:</label>
      <select
        className="modal__input"
        id="modalCountry"
        onChange={handleChangeCountry}
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
