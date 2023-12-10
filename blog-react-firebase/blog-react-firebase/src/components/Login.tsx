import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsAuth }: Props) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>Login</p>
      <button onClick={loginInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
