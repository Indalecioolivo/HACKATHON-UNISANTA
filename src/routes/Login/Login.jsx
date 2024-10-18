import "./Login.css";
import ImageLogin from "../../assets/img_login.png";
import LogoGoogle from "../../assets/logo-google.png";
import { Link } from "react-router-dom";
import VisibilityImg from "../../assets/visibility.png"

export default function Login() {
  return( 
    <div className="login-container">
      <img src={ImageLogin} alt="" />
      <section className="to-login">
        <h1>Entre no Orange Portfólio</h1>
        <div className="login-google">
          <img src={LogoGoogle} alt="" />
          <p>Entrar com Google</p>
        </div>
        <div className="login-email">
          <h3>Faça Login com email</h3>
          <fieldset>
            <legend>
              Email adress
            </legend>
            <input type="text" />
          </fieldset>
          <fieldset>
            <legend>
              Password
            </legend>
            <input type="text" />
            <img src={VisibilityImg} alt="" className="visibility-pass" />
          </fieldset>
          <button>
            ENTRAR
          </button>
          <p className="to-signup">Cadastre-se</p>
        </div>
      </section>
    </div>  
)}
