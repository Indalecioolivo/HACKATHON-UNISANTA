import "./Login.css";
import ImageLogin from "../../assets/img_login.png";
import ImageSignUp from "../../assets/img_cadastro.png";
import LoginModule from "../../modules/LoginModule/LoginModule";
import SignUpModule from "../../modules/SignUpModule/SignUpModule";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";
import api from "../../services/api";

export default function Login() {
  const { toggleModule, setModule } = useContext(HomeContext);
  async function loadUser() {
    try {
      const response = await api.get("/users");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="login-container">
      <img src={toggleModule ? ImageLogin : ImageSignUp} alt="" />
      {toggleModule ? <LoginModule /> : <SignUpModule />}
    </div>
  );
}
