import "./ModalAdcProjeto.css"
import GridProjeto from "../GridProjeto/GridProjeto";

export default function ModalAdcProjeto(){
    return (
        <section className="container-modal">
            <div className="modal">
                <h2>Adicionar projeto</h2>

                <div className="configuracoes">
                    <div className="selecionar">
                        <p>
                            Selecione o conteúdo que você deseja fazer upload
                        </p>

                        <GridProjeto/>
                    </div>

                    <form action="" className="caixas-textos">
                        <input type="text" placeholder="Título"/>
                        <input type="text" placeholder="Tags"/>
                        <input type="text" placeholder="Link"/>
                        <textarea name="descricao" id="descricao" placeholder="Descrição"></textarea>
                    </form>
                </div>


                <section className="button-container">
                    <p className="visualizar"> Visualizar publicação</p>
                    
                    <div className="botoes">
                        <button class ="salvar"> Salvar </button>
                        <button className="cancelar"> Cancelar </button>
                    </div>
                </section>
            </div>
        </section>  
    )
}