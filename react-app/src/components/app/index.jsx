import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchResults } from "../searchresults"; 
import { Header } from "../header";
import { Banner } from "../banner";
import { ToDos } from "../todos";
import { Modal } from "../modal";
import { Posts } from "../posts";
import "./styles.scss";
import { SignIn } from "../sign-in";
import { Success } from "../sign-in";
import { Tryagain } from "../sign-in";
import { SignUp } from "../sign-up";
import { Confirmation } from "../sign-up";
import { MyContext } from "../hooks/context-hook";
import { SearchPage } from "../searchpage";

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [page, setPage] = useState("home");
  const [isBlackTheme, setIsBlackTheme] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleChangeTheme = () => {
    setIsBlackTheme((prevStat) => !prevStat);
  };

  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    // ..что-то что должно выполняться

    return () => {
      //..что-то что должно выполняться когда компонент размонтируется
      // то же что и   componentWillUnmount;
    };
  }, []); // то же что и componentDidMount;

  useEffect(() => {
    // ..что-то что должно выполняться только когда меняется page
  }, [page]); // то же что и componentDidUpdate с обновлением page;

  useEffect(() => {
    // ..что-то что должно выполняться
  }); // то же что и componentDidUpdate;

  return (
    <Router>
    <MyContext.Provider value={isBlackTheme}>
      <Header
        setIsShowModal={setIsShowModal}
        setPage={setPage}
        isBlackTheme={isBlackTheme}
        handleChangeTheme={handleChangeTheme}
        setSearchQuery={setSearchQuery} 
      />
          <section className={isBlackTheme ? "black-theme" : ""}>
            {page === "home" && (
              <Banner setIsShowModal={setIsShowModal} isBlackTheme={isBlackTheme} />
            )}
             {page === "blog" && <Posts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {page === "todos" && <ToDos />}
            {page === "Signin" && <SignIn setPage={setPage} />}
            {page === 'Success' && <Success setPage={setPage} />}
            {page === 'Tryagain' && <Tryagain setPage={setPage} />}
            {page === "SignUp" && <SignUp setPage={setPage} />}
            {page === "Confirmation" && <Confirmation setPage={setPage} />}
          </section>
    
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
    </MyContext.Provider>
  </Router>
);
};
