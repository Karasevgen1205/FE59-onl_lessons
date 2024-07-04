import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { ModeButton } from "../mode-button";
import icon from "./images/icon.svg";
import "./styles.scss";

export const Header = ({ setIsShowModal }) => {
  const header = useRef(null); // не null, а {current: null};
  const isBlackTheme = useSelector((state) => state.isBlackTheme);

  return (
    <header
      className={`header ${isBlackTheme ? "header_black" : ""}`}
      ref={header}
    >
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__log">
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
                <Button
                  title="Contact Us"
                  isPinkBackgroud={true}
                  setIsShowModal={setIsShowModal}
                />
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
