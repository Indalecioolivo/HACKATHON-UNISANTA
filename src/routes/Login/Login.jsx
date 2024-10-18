import "./Login.css";
import ImageLogin from "../../assets/img_login.png";
import ImageSignUp from "../../assets/img_cadastro.png";
import LoginModule from "../../modules/LoginModule/LoginModule";
import SignUpModule from "../../modules/SignUpModule/SignUpModule";
import { useContext, useState } from "react";
import { HomeContext } from "../../context/HomeContext";

export default function Login() {
  const { toggleModule, setModule } = useContext(HomeContext);

  return (
    <div className="login-container">
      <img src={toggleModule ? ImageLogin : ImageSignUp} alt="" />
      {toggleModule ? <LoginModule /> : <SignUpModule />}
    </div>
  );
}
