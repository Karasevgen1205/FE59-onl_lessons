import React, { FC, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getBlackTheme} from '../../store/selectors';
import { Header } from "../header";
import { MainPage } from "../../pages/main-page";
import { ToDos } from "../../pages/todos";
import { Modal } from "../modal";
import { BlogPage } from "../../pages/blog";
import { PostDetaild } from "../../pages/post-details";
import { NotFound } from "../../pages/not-found";
import { Game } from "../../pages/game/main";
import { ActivationEmailPage } from "../../pages/activation-email";
import { MyContext } from "../hooks/context.hook";
import { UserInfoPage } from "../user-info";
import { Authorization } from "../../pages/authorization-page";
import { CreatePost } from "../../pages/create-post";
import { fetchUserInfo } from "../../api/user";
import { addUserDataAction } from "../../store/actions";
import "./styles.scss";

export const App: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchUserInfo().then((response) => {
    //   localStorage.setItem("isAuth", !!response.id);
    //   if (response?.id) {
    //     dispatch(addUserDataAction(response));
    //   }
    // });
  }, []);

  const handleChangeShowModal = (value: boolean) => {
    setIsShowModal(value);
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ isBlackTheme }}>
        <Header setIsShowModal={handleChangeShowModal} />
        <main className={isBlackTheme ? "black-theme" : ""}>
          <Routes>
            <Route
              path="/"
              element={<MainPage setIsShowModal={handleChangeShowModal} />}
            />
            <Route path="/blog/:category" element={<BlogPage />} />
            <Route path="/blog/:category/:postId" element={<PostDetaild />} />
            <Route path="todos" element={<ToDos />} />
            <Route path="favorites" element={<ToDos />} />
            <Route
              path="/activate/:uid/:token"
              element={<ActivationEmailPage />}
            />
            <Route path="game" element={<Game />} />
            <Route path="login" element={<Authorization />} />
            <Route path="user-info" element={<UserInfoPage />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {isShowModal && <Modal setIsShowModal={handleChangeShowModal} />}
      </MyContext.Provider>
    </BrowserRouter>
  );
};
