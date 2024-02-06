import "./style.css"
import { Link } from "react-router-dom"


export default function IdFacialAprovado() {

    return (
        <main>
            <section className="reconhecimento">
                <div className="modulo">
                    <h2>deteccao de rosto</h2>
                    <p>verificacao concluida com sucesso</p>
                </div>
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