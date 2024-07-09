import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryList, groupList } from "./country-list.js";
import { signUpMiddlewareAction } from "../../actions";
import "./styles.scss";

export const Modal = ({ setIsShowModal }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  // const [response, setResponse] = useState(null);
  const inputNameRef = useRef(null); // {current: null}
  const inputConfirmPassRef = useRef(null); // {current: null}
  const user = useSelector((state) => state.user);
  // console.log(values, errors, inputNameRef);
  console.log(user);
  // useEffect(() => {
  //   inputNameRef.current.focus();
  // }, []);
  const store = useSelector((state) => state);
  console.log("store", store);
  const handleChangeText = (event, field) => {
    setValues((prevState) => ({ ...prevState, [field]: event.target.value }));
  };

  // более сложное но произвоительное решение
  // const handleChangeText = (field) => (event) =>
  //   setValues((prevState) => ({ ...prevState, [field]: event.target.value }));

  const handleSave = () => {
    dispatch(signUpMiddlewareAction(values));
    // if (values.pass === values.confirmPass) {
    //   // все хорошо, парорли совпали
    //   if (errors.confirmPass) {
    //     setErrors({});
    //   }
    //   // console.log("Отправляем все данные в values на сервер: ", values);
    // } else {
    //   setErrors({ confirmPass: "Пароли не совпадают!" });
    //   inputConfirmPassRef.current.focus();
    // }
  };

  const handleClick = () => {
    setIsShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        {user.content.id ? (
          <>
            <h4 className="modal__title">
              Registration Confirmation: {user.content.username}
            </h4>
            <h5>Ваш email: {user.content.email} сохранен</h5>
            <div className="modal__actions">
              <button className="modal__cancel" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className="modal__title">Sing up now</h4>
            <label htmlFor="modalName">Name</label>
            <input
              type="text"
              className="modal__input"
              id="modalName"
              // onInput={handleChangeName}
              onInput={(event) => handleChangeText(event, "name")}
              ref={inputNameRef}
              // onInput={handleChangeText("name")}
            />
            {user.errors.username && (
              <p className="modal__error">{user.errors.username.join(", ")}</p>
            )}
            <label htmlFor="modalEmail">Email</label>
            <input
              type="text"
              className="modal__input"
              id="modalEmail"
              // onInput={handleChangeEmail}
              onInput={(event) => handleChangeText(event, "email")}
              // onInput={handleChangeText("email")}
            />
            {user.errors.email && (
              <p className="modal__error">{user.errors.email.join(", ")}</p>
            )}
            <label htmlFor="modalPass">Password</label>
            <input
              type="password"
              className="modal__input"
              id="modalPass"
              // onInput={handleChangePass}
              onInput={(event) => handleChangeText(event, "pass")}
              // onInput={handleChangeText("pass")}
            />
            {user.errors.password && (
              <p className="modal__error">{user.errors.password.join(", ")}</p>
            )}
            {/* <label htmlFor="modalConfirmPass">Confirm Password</label>
            <input
              type="password"
              className="modal__input"
              id="modalConfirmPass"
              // onInput={handleChangeConfPass}
              onInput={(event) => handleChangeText(event, "confirmPass")}
              // onInput={handleChangeText("confirmPass")}
              ref={inputConfirmPassRef}
            /> */}
            {/* <label htmlFor="modalCountry">Choose your country:</label> */}
            <label htmlFor="modalCountry">Choose your course group:</label>
            <select
              className="modal__input"
              id="modalCountry"
              // onChange={handleChangeCountry}
              onChange={(event) => handleChangeText(event, "group")}
              // onChange={handleChangeText("country")}
            >
              {groupList.map((item, index) => {
                return (
                  <option value={item} key={`${item}_${index}}`}>
                    {item}
                  </option>
                );
              })}
              {/* <option value="Беларусь">Беларусь</option>
          <option value="Россия">Россия</option>
          <option value="Украина">Украина</option>
          <option value="Казахстан">Казахстан</option>
          <option value="США">США</option>
          <option value="Канада">Канада</option>
          <option value="Польша">Польша</option> */}
            </select>
            <div className="modal__actions">
              <button className="modal__cancel" onClick={handleClick}>
                Cancel
              </button>
              <button className="modal__save" onClick={handleSave}>
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
