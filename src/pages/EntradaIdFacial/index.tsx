import "./style.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import face from "../../assets/img/Volkswagen_logo_2019.svg"

export default function EntradaIdFacial (){


  useEffect(() => {
    document.title = "SecurePass - Login"
    
  }, [])


return(
    <>
    <div className="content">
  <div className="rosto-leitura">
    <img className="image" src={face} alt="face"/>
  </div>
  <div className="btn">
    <Link to='idfacial' className="botao_principal">Face ID</Link>
  </div>
</div>
    </>
)


}