import "./style.css"
import FaceID from "../../assets/img/rostogifavaivaivai.gif"
import { Link } from "react-router-dom"

export default function EntradaIdFacial (){


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
    <Link to='idfacial' className="botao_principal">
      Face ID
    </Link>
  </div>
</div>


    </>
)


}