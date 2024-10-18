import "./SignUpModule.css";
import VisibilityImg from "../../assets/visibility.png";

export default function SignUpModule() {
  return (
    <section className="to-signup">
      <h1>Cadastre-se</h1>
      <div className="signup-form">
        <div className="user-name-lastname">
          <fieldset className="input-name">
            <legend>Nome*</legend>
            <input type="text" />
          </fieldset>
          <fieldset className="input-name">
            <legend>-</legend>
            <input type="text" placeholder="Sobrenome" />
          </fieldset>
        </div>
        <fieldset>
          <legend>Email adress</legend>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" />
          <img src={VisibilityImg} alt="" className="visibility-pass" />
        </fieldset>
        <button>CADASTRAR</button>
      </div>
    </section>
  );
}
