import "./EsqueletoProjeto.css";
import IconEdit from "../../assets/icon_edit.png";
import { useContext, useState } from "react";
import { HomeContext } from "../../context/HomeContext";

export default function EsqueletoProjeto() {
  const { handleModalAddProduct, handleWantDelete } = useContext(HomeContext);
  const [showMenu, setShowMenu] = useState(false);
  function handleClick() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <section className="esqueletoProjeto-container">
      <div className="img">
        <img src={IconEdit} alt="" onClick={() => handleClick()} />
        {showMenu ? (
          <div className="menu">
            <button className="btn" onClick={() => handleModalAddProduct()}>
              Editar
            </button>
            <button className="btn" onClick={() => handleWantDelete()}>
              Excluir
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
