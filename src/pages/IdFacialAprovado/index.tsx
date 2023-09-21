import "./style.css"
import validacao from "../../assets/img/Validacao.png"
import { Link } from "react-router-dom"


export default function IdFacialAprovado() {

    return (
        <main>
            <section className="reconhecimento">
                <div className="modulo">
                    <h2>deteccao de rosto</h2>
                    <p>verificacao concluida com sucesso</p>
                </div>
                <img src={validacao} alt="" />
            </section>
            <section className="botoes_footer customer_btn">
                <Link to='/' className="">
                    home
                </Link>
                <a className="" href="">
                    sistema
                </a>
            </section>
        </main>

    )


}