import "./style.css"
import FaceID from "../../assets/img/teste-4.gif"

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
    <a href="" className="botao_principal">
      Face ID
    </a>
  </div>
</div>


    </>
)


}