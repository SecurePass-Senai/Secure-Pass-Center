import "./style.css"
import Validacao from "../../assets/img/Validacao.png"

export default function IdFacial(){
    return(
      <main>
        <div className="elementos">
      <section className="reconhecimento">
        <div className="modulo">
          <h2>deteccao de rosto</h2>
          <p>verificacao concluida com sucesso</p>
        </div>
        <img src={Validacao} alt="" />
      </section>
      <section className="botoes_footer">
        <a className="customer_btn" href="../../Home/home.html">
          home
        </a>
        <a className="customer_btn" href="../../Home/home.html">
          sistema
        </a>
      </section>
      </div>
    </main>
    


)


}