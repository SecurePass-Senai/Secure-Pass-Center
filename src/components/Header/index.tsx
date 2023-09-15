import "./style.css"
import Logo from "../../assets/img/Logo.png"

export default function Header() {

  return (


    <>

      <header>
        <div className="container_grid header_texto ">
          <p>securePass</p>


          <div className="menu">
            <nav className="menu_ss">
              <a className="btn_cadastrar" href="../cadastro/cadastro.html">CADASTRAR</a>
              
              
              <a className="btn_cadastrar" href="../acoes/Home/acoes.html">ACOES</a>
              
              
              
              <a className="btn_cadastrar" href="../perfil/perfil.html">PERFIL</a>
              
              
              
              <a className="btn_cadastrar" href="../BiometriaSur5/index.html">SAIR</a>
              
              
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