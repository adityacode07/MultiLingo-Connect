import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div >
          <button className="sign-out" onClick={signUserOut}> Sign Out</button>
           </div>
      )}
    </div>
  );
};