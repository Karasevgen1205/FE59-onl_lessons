import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header";
import { Banner } from "../banner";
import { ToDos } from "../todos";
import { Modal } from "../modal";
import { Blog } from "../blog";
import { PostDetaild } from "../post-details";
import { NotFound } from "../not-found";
import { Game } from "../game/main";
import { MyContext } from "../hooks/context.hook";
import "./styles.scss";

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsBlackTheme((prevStat) => !prevStat);
  };

  // useEffect(() => {
  //   console.log("Запрос на сервер");
  // });

  useEffect(() => {
    // ..что-то что должно выполняться

    return () => {
      //..что-то что должно выполняться когда компонент размонтируется
      // то же что и   componentWillUnmount;
    };
  }, []); // то же что и componentDidMount;

  // useEffect(() => {
  //   // ..что-то что должно выполняться только когда меняется page
  // }, [page]); // то же что и componentDidUpdate с обновлением page;

  useEffect(() => {
    // ..что-то что должно выполняться
  }); // то же что и componentDidUpdate;

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ isBlackTheme }}>
        <Header
          setIsShowModal={setIsShowModal}
          isBlackTheme={isBlackTheme}
          handleChangeTheme={handleChangeTheme}
        />
        <main className={isBlackTheme ? "black-theme" : ""}>
          <Routes>
            <Route
              path="/"
              element={
                <Banner
                  setIsShowModal={setIsShowModal}
                  isBlackTheme={isBlackTheme}
                />
              }
            />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<PostDetaild />} />
            <Route
              path="todos"
              element={<ToDos isBlackTheme={isBlackTheme} />}
            />
            <Route path="game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
      </MyContext.Provider>
    </BrowserRouter>
  );
};
