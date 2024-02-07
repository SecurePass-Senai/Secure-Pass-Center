import "./style.css"
import Logo from "../../assets/img/Logo.png"
import {Link} from "react-router-dom";

export default function Header() {

  return (


    <>

      <header>
        <div className="container_grid header_texto ">
          <div className="logo">
          <img className="logo_header" src={Logo}/>
          <p>securePass</p>
          </div>

          <div className="menu">
            <nav className="menu_ss">
              <Link to='Cadastro'>Cadastrar</Link>
              
              
              <Link to='logs'>Ações</Link>
              
              
              
             <Link to='perfil/1'>Perfil</Link>
              
              
              
              <Link to='/'>Sair</Link>
              
            </nav> 
          </div>
          <p>biometria facial</p>
        </div>



        <div className="linha_header">
          <div className="linha_baixo_esquerda" />
          <img src={Logo} alt="Logo" />
          <div className="linha_baixo_direita" />
        </div>
      </header>


    </>


  )
}