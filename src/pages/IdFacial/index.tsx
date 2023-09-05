import "./style.css"

export default function IdFacial(){
    return(<>
        <main>
  <section className="banner">
    <div className="banner_conteudo"></div>
  </section>
  <section className="conteudo">
    <div className="Detecção">
      <h2>Detecção De Rosto</h2>
      <br />
      <p>
        Alinhe seu rosto no <br /> do circulo
      </p>
    </div>
    <img className="valid" src="Img/Validacao.png" alt="Validacao" />
  </section>
  <div className="botoes_footer customer_btn">
    <a className="" href="../id_aprovado/face_id/index.html">
      Aprovado
    </a>
  </div>
</main>


</>)


}