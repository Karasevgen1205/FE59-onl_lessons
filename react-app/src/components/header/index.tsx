import React, { FC, useRef } from "react";
import {getBlackTheme, getUserInfo} from '../../store/selectors';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { ModeButton } from "../mode-button";
import icon from "./images/icon.svg";
import person from "./images/person.svg";
import "./styles.scss";

interface IHeader {
  setIsShowModal: (value: boolean) => void;
}

export const Header: FC<IHeader> = ({ setIsShowModal }) => {
  const header = useRef(null);
  const isBlackTheme = useSelector(getBlackTheme);
  const user = useSelector(getUserInfo);
  const isAuth = localStorage.getItem("isAuth");

  const navigate = useNavigate();

  const goUserPage = () => {
    navigate("user-info");
  };

  return (
    <header
      className={`header ${isBlackTheme ? "header_black" : ""}`}
      ref={header}
    >
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={icon} alt="" />
          </Link>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/" className="header__link">
                  Home
                </Link>
              </li>
              <li className="header__item">
                <Link to="blog/all" className="header__link">
                  Blog
                </Link>
              </li>
              <li className="header__item">
                <Link to="todos" className="header__link">
                  ToDos
                </Link>
              </li>
              <li className="header__item">
                <Link to="game" className="header__link">
                  Game
                </Link>
              </li>
              <li className="header__item">
                <Link to="create-post" className="header__link">
                  Create post
                </Link>
              </li>
              <li className="header__item">
                {isAuth ? (
                  <div className="header__logo" onClick={goUserPage}>
                    <img src={person} alt="" />
                  </div>
                ) : (
                  <Button
                    title="Sign In"
                    isPinkBackgroud={true}
                    setIsShowModal={setIsShowModal}
                  />
                )}
              </li>
              <li className="header__item">
                <ModeButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
