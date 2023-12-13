import "./style.css"
import FaceID from "../../assets/img/rostogifavaivaivai.gif"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function EntradaIdFacial (){


  useEffect(() => {
    document.title = "SecurePass - Login"
    
  }, [])


return(
    <>
    
    <div className="content">
  <div className="rosto-leitura">
    <img
      src={FaceID}
      alt="Imagem da Biometria"
      className="circle-image"
    />
  </div>
  <div className="btn">
    <Link to='idfacial' className="botao_principal">Face ID</Link>
  </div>
</div>


    </>
)


}