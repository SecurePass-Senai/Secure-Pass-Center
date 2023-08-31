import "./style.css"
import Logo from "../../assets/img/Logo.png"

export default function Header (){

    return(
         
        
       <>

<header>
  <div className="container_grid header_texto">
    <p>securePass</p>
    <p>biometria facial</p>
  </div>
  <div className="linha_header">
    <div className="linha_baixo_esquerda" />
    <img src={ Logo } alt="Logo" />
    <div className="linha_baixo_direita" />
  </div>
</header>
       
       </>


    )
}