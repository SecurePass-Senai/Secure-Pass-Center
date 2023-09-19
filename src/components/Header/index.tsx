import "./style.css"
import Logo from "../../assets/img/Logo.png"
import {Link} from "react-router-dom";

export default function Header() {

  return (


    <>

      <header>
        <div className="container_grid header_texto ">
          <p>securePass</p>


          <div className="menu">
            <nav className="menu_ss">
              <Link to='Cadastro' className="btn_cadastrar">Cadastrar</Link>
              
              
              <Link to='Acoes' className="btn_cadastrar">Ações</Link>
              
              
              
              <a className="btn_cadastrar" href="../perfil/perfil.html">Perfil</a>
              
              
              
              <a className="btn_cadastrar" href="../BiometriaSur5/index.html">Sair</a>
              
              
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