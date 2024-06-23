import { useState } from "react";
import styles from "./style.css";

export const Modal = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setIsSignedIn(true);
    console.log("Отправляем все данные в values на сервер: ", {email},{password});
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="modal_wrapper">
    {!isSignedIn ?
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      :
      <div>
        <h1>Success!</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    }
  </div>
  );
};