import "./ModalDesejaExcluir.css";

export default function ModalDesejaExcluir(){
    return(
   
    <section className="dsjExcluir-modal">
        <div className="modal">
            <h1> Deseja Excluir?</h1>
            <p> Se você prosseguir irá excluir o projeto do seu portfólio.</p>
            <div className="btn"> 
                <button className="excluir">Excluir</button>
                <button className="cancelar">Cancelar</button>
            </div>
        </div>
    </section>
    )
}