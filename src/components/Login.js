import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <div>
      <p>Login</p>
      <button onClick={loginInWithGoogle}>Login with Google</button>
    </div>
  );
}

export default Login;
