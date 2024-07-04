import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_POST_ACTION } from "../../actions";
import likeIcon from "../post/images/like_icon.png";
import dislikeIcon from "../post/images/dislike_icon.png";
import saveIcon from "../post/images/save_icon.png";
import optionsIcon from "../post/images/options_icon.png";
import "./styles.scss";

export const PostPreview = ({ post }) => {
  const dispatch = useDispatch();
  //   const [values, setValues] = useState({});
  //   const [errors, setErrors] = useState({});
  //   const inputNameRef = useRef(null); // {current: null}
  //   const inputConfirmPassRef = useRef(null); // {current: null}
  // console.log(values, errors, inputNameRef);

  //   useEffect(() => {
  //     inputNameRef.current.focus();
  //   }, []);

  //   const handleChangeText = (event, field) => {
  //     setValues((prevState) => ({ ...prevState, [field]: event.target.value }));
  //   };

  // более сложное но произвоительное решение
  // const handleChangeText = (field) => (event) =>
  //   setValues((prevState) => ({ ...prevState, [field]: event.target.value }));

  //   const handleSave = () => {
  //     if (values.pass === values.confirmPass) {
  //       // все хорошо, парорли совпали
  //       if (errors.confirmPass) {
  //         setErrors({});
  //       }

  //       console.log("Отправляем все данные в values на сервер: ", values);
  //     } else {
  //       setErrors({ confirmPass: "Пароли не совпадают!" });
  //       inputConfirmPassRef.current.focus();
  //     }
  //   };

  const handleCancel = () => {
    // setIsShowModal(false);
    dispatch(REMOVE_POST_ACTION);
  };

  return (
    <div className="post-preview">
      <div className="post-preview__wrapper">
        <h4 className="post-preview__title">Post</h4>
        <div className="post-preview__info">
          <p className="post-preview__date">{post.date}</p>
          <a href="#" className="post-preview__title">
            {post.title}
          </a>
          <p className="post-preview__text">{post.text}</p>
        </div>
        <a href="#" className="post-preview__img">
          <img src={post.image} alt="" />
        </a>
        <div className="post-preview__actions">
          <div className="post-preview__likes">
            <img src={likeIcon} alt="Like" className="post-preview__icon" />
            <img
              src={dislikeIcon}
              alt="Dislike"
              className="post-preview__icon"
            />
          </div>
          <div className="post-preview__options">
            <img src={saveIcon} alt="Save" className="post-preview__icon" />
            <img
              src={optionsIcon}
              alt="Options"
              className="post-preview__icon"
            />
          </div>
        </div>
        <div className="post-preview__actions">
          <button className="post-preview__cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
