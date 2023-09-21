import "./style.css"
import validacao from "../../assets/img/Validacao.png"
import { Link } from "react-router-dom"


export default function IdFacial() {

    return (
        <main>
            {/* <h1> Pagina do usuario</h1> */}
            <section className="banner">
                <div className="banner_conteudo">
                    {/* <img src="../img/Backgronud.png" alt=""> */}
                </div>
            </section>
            <section className="conteudo">
                <div className="Detecção">
                    <h2>Detecção De Rosto</h2>
                    <br />
                    <p>
                        Alinhe seu rosto no <br /> do circulo
                    </p>
                </div>
                <img className="valid" src={validacao} alt="Validacao" />
            </section>
            <div className="botoes_footer customer_btn">
                <Link to='/idfacialaprovado' className="">
                    Aprovado
                </Link>
            </div>
        </main>

    )


}