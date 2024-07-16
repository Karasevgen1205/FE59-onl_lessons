import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../log-in";
import { Registration } from "../registration";
import { signUpMiddlewareAction } from "../../store/actions";
import "./styles.scss";

export const Modal = ({ setIsShowModal }) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    setIsShowModal(false);
  };
  // 123HHJK456$%^&
  return (
    <div className="modal">
      <div className="modal__wrapper">
        {/* {user.content.id ? (
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
        ) : ( */}
        {/* // <LogIn setIsShowModal={setIsShowModal} /> */}
        {isRegistration ? (
          <Registration
            setIsShowModal={setIsShowModal}
            setIsRegistration={setIsRegistration}
          />
        ) : (
          <LogIn
            setIsShowModal={setIsShowModal}
            setIsRegistration={setIsRegistration}
          />
        )}

        {/* )} */}
      </div>
    </div>
  );
};
