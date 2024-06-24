import React, { useState, useEffect } from "react";
import  "./styles.scss";
import {Tryagain} from "../sign-in"



export const SignUp = ({ setPage }) =>{
    const [values, setValues] = useState({});

    const handleChangeName = (event) => {
        setValues((prevState) => ({ ...prevState, name: event.target.value }));
      };

    const handleChangeEmail = (event) => {
      setValues((prevState) => ({ ...prevState, email: event.target.value }));
    };
  
    const handleChangePass = (event) => {
      setValues((prevState) => ({ ...prevState, pass: event.target.value }));
    };
    
    const handleConfirmPass = (event) => {
        setValues((prevState) => ({ ...prevState, confirmpass: event.target.value }));
      };

    console.log(values);

    const handleSuccess = () => {
      console.log('signup successful!');
      setPage('Confirmation');
  };

  const handleTryAgain = () => {
      console.log('Please try again.');
      setPage('Tryagain');
  };

  const handleLoginInfo = () => {
      if (values.name && values.email && values.pass && values.confirmpass) {
          handleSuccess();
      } else {
          handleTryAgain();
      }
  };

    return(
      <React.Fragment>
        <section className="SignUp"> 
        <div className="container_signin">
            <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
                Back to Home
            </button>
            <h2 className="signin__title">Sign Up</h2>
            <div className="signin__wrapper">
            <label htmlFor="signin__name">Name</label>
        <input 
          type="text"
          className="signin__input"
          id="signin__name"
           placeholder="Name"
          onInput={handleChangeName}
        />
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
            <label htmlFor="signin__pass"> Confirm Password</label>
        <input
          type="text"
          className="signin__input"
          id="signinPass"
          placeholder="Password"
          onInput={handleConfirmPass}
        />
        {/* <button href="#" className="signin__forgotpass">Forgot Password?</button> */}

        <button href="#" onClick={handleLoginInfo} className="signin__signin">Sign Up!</button>
        <div className="signup">Already have an account? <button href="#" className="signup__button" onClick={() => setPage('Signin')}>Sign in!</button>
        </div>
            </div>
        </div>
        </section>  
        </React.Fragment>
    )
}

export const Confirmation =({ setPage }) =>{
  return(
  <section className="Confirmation">
  <div className="container_signin">
            <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
                Back to Home
            </button>
            <h2 className="signin__title">Confirm your email!</h2>
            <div className="signin__wrapper">
              <div className="success_title"> Confirmation message was sent to your email. Please, check your mailbox.</div>
            <button href="#" onClick={() => setPage('home')} className="go_to_home">
                Go to Home
            </button>
            </div>
            </div>
    </section> )
}

// export const Tryagain =({ setPage }) =>{
//   return(
//   <section className="Tryagain">
//   <div className="container_signin">
//             <button href="#" onClick={() => setPage('home')} className="signin__back_to_home">
//                 Back to Home
//             </button>
//             <h2 className="signin__title">Error!</h2>
//             <div className="signin__wrapper">
//               <div className="success_title"> Sign Up is not complete. Please, try again.</div>
//             <button href="#" onClick={() => setPage('Signin')} className="go_to_home">
//                 Try Again?
//             </button>
//             </div>
//             </div>
//     </section> 
//    )
// }