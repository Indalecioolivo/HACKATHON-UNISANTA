import "./LoginModule.css";
import VisibilityImg from "../../assets/visibility.png";
import LogoGoogle from "../../assets/logo-google.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function LoginModule() {
  const { setModule } = useContext(HomeContext);

  return (
    <section className="to-login">
      <h1>Entre no Orange Portfólio</h1>
      <div className="login-google">
        <img src={LogoGoogle} alt="" />
        <p>Entrar com Google</p>
      </div>
      <div className="login-email">
        <h3>Faça Login com email</h3>
        <fieldset>
          <legend>Email adress</legend>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" />
          <img src={VisibilityImg} alt="" className="visibility-pass" />
        </fieldset>
        <Link to="/myprojects">
          <button>ENTRAR</button>
        </Link>
        <p className="to-signup" onClick={() => setModule()}>
          Cadastre-se
        </p>
      </div>
    </section>
  );
}
