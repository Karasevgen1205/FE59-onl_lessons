import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addPostAction,
  changeLikeAction,
  changeDislikeAction,
} from "../../store/actions";
import { MyContext } from "../hooks/context.hook";
import likeIcon from "./images/like_icon.svg";
import dislikeIcon from "./images/dislike_icon.svg";
import saveIcon from "./images/save_icon.png";
import optionsIcon from "./images/options_icon.png";
import "./styles.scss";

export const Post = ({ post, index, size }) => {
  const ctx = useContext(MyContext);
  const dispatch = useDispatch();

  const handleClickOptions = () => {
    dispatch(addPostAction(post));
  };

  const handleClickLike = () => {
    dispatch(changeLikeAction(post.id));
  };

  const handleClickDislike = () => {
    dispatch(changeDislikeAction(post.id));
  };

  return (
    <div
      className={`post post_${size} ${ctx.isBlackTheme ? "post_dark" : ""}`}
      style={{ gridArea: `post-${index}` }}
    >
      <div className="post__wrapper">
        <div className="post__info">
          <p className="post__date">{post.date}</p>
          <Link to={`${post.id}`} className="post__title">
            {post.title}
          </Link>
          <p className="post__text">{post.description}</p>
        </div>
        <Link to={`${post.id}`} className="post__img">
          <img src={post.image} alt="" />
        </Link>
      </div>
      <div className="post__actions">
        <div className="post__likes">
          <img
            src={likeIcon}
            alt="Like"
            className={`post__icon ${post.like ? "post__icon_active" : ""}`}
            onClick={handleClickLike}
          />
          <img
            src={dislikeIcon}
            alt="Dislike"
            className={`post__icon ${post.dislike ? "post__icon_active" : ""}`}
            onClick={handleClickDislike}
          />
        </div>
        <div className="post__options">
          <img src={saveIcon} alt="Save" className="post__icon" />
          <img
            src={optionsIcon}
            alt="Options"
            className="post__icon"
            onClick={handleClickOptions}
          />
        </div>
      </div>
    </div>
  );
};
