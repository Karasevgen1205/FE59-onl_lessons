import React, { useState, useEffect } from "react";
import { SignUp } from "../sign-up";
import  "./styles.scss";


export const SignIn = ({ setPage }) =>{
    const [values, setValues] = useState({});


    const handleChangeEmail = (event) => {
      setValues((prevState) => ({ ...prevState, email: event.target.value }));
    };
  
    const handleChangePass = (event) => {
      setValues((prevState) => ({ ...prevState, pass: event.target.value }));
    };

    console.log(values);

    const handleSuccess = () => {
      console.log('Login successful!');
      setPage('Success');
  };

  const handleTryAgain = () => {
      console.log('Please try again.');
      setPage('Tryagain');
  };

  const handleLoginInfo = () => {
      if (values.email && values.pass) {
          handleSuccess();
      } else {
          handleTryAgain();
      }
  };

    return(
      <React.Fragment>
        <section className="Signin"> 
        <div className="container_signin">
            <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
                Back to Home
            </button>
            <h2 className="signin__title">Sign In</h2>
            <div className="signin__wrapper">
            <label htmlFor="signin__email">Email</label>
        <input
          type="text"
          className="signin__input"
          id="signin__email"
           placeholder="Email"
          onInput={handleChangeEmail}
        />
        <label htmlFor="signin__pass">Password</label>
        <input
          type="text"
          className="signin__input"
          id="signinPass"
          placeholder="Password"
          onInput={handleChangePass}
        />
        <button href="#" className="signin__forgotpass">Forgot Password?</button>

        <button href="#" onClick={handleLoginInfo} className="signin__signin">Sign In!</button>
        <div className="signup">Dont have an account? <button href="#" className="signup__button" onClick={SignUp}>Sign up!</button>
        </div>
            </div>
        </div>
        </section>  
        </React.Fragment>
    )
}

export const Success =({ setPage }) =>{
  return(
  <section className="Success">
  <div className="container_signin">
            <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
                Back to Home
            </button>
            <h2 className="signin__title">Success</h2>
            <div className="signin__wrapper">
              <div className="success_title"> Your Sign Up is complete. 
                Have fun!</div>
            <button href="#" onClick={() => setPage('home')} className="go_to_home">
                Go to Home
            </button>
            </div>
            </div>
    </section> )
}

export const Tryagain =({ setPage }) =>{
  return(
  <section className="Tryagain">
  <div className="container_signin">
            <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
                Back to Home
            </button>
            <h2 className="signin__title">Error!</h2>
            <div className="signin__wrapper">
              <div className="success_title"> Sign Up is not complete. Please, try again.</div>
            <button href="#" onClick={() => setPage('Signin')} className="go_to_home">
                Try Again?
            </button>
            </div>
            </div>
    </section> 
   )
}