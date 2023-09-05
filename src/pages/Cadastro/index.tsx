import { useState } from "react";
import "./style.css"
import api from "../../utils/api";

export default function Cadastro() {


    const [matricula, setMatricula] = useState<string>("")
    const [nome, setNome] = useState<string>("")
    const [setor, setSetor] = useState<string>("")
    const [dataNasc, setDataNasc] = useState<string>("")
    const [funcao, setFuncao] = useState<string>("")
    const [sessao, setSessao] = useState<string>("")




    
    // function mascaraDataNasc(event: any) {
    //     let valorDigitado = event.target.value; 

    //     if (!valorDigitado) return ""; 

    //     valorDigitado = valorDigitado.replace(/\D/g, ''); 
    //     valorDigitado = valorDigitado.replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3'); 
    //     console.log(valorDigitado)
    //     event.target.value = valorDigitado;
    // }

    function cadastrarUsers(event: any) {

        event.preventDefault();

        const formData = new FormData()

        formData.append("matricula", matricula)
        formData.append("nome", nome)
        formData.append("setor", setor)
        formData.append("dataNasc", dataNasc)
        formData.append("funcao", funcao)
        formData.append("sessao", sessao)


        api.post("users", formData).then((response) => {
            console.log(response)
            alert("usuario cadastrado com sucesso!")
            //navegacao para login

        }).catch((error) => {
            console.log(error)
            alert("Deu erro aqui em! "+ error)
        })


    }



    return (

        <main className="_cadastro">
           <center> <h1>Cadastro</h1></center>
            <form onSubmit={cadastrarUsers} className="formulario"  method="POST">
                <div className="forms">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text"
                        id="nome"
                        onChange={(event) => {
                            setNome(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="matricula">Numero da Matricula:</label>
                    <input type="text"
                        id="matricula"
                        onChange={(event) => {
                            setMatricula(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="setor">Setor:</label>
                    <input type="text"
                        id="setor"
                        onChange={(event) => {
                            setSetor(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="sessao">Sessao:</label>
                    <input type="text"
                        id="sessao"
                        onChange={(event) => {
                            setSessao(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="funcao">Funcao:</label>
                    <input type="text"
                        id="funcao"
                        onChange={(event) => {
                            setFuncao(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="dataNasc">Data de Nascimento:</label>
                    <input type="text"
                        id="dataNasc"
                        onChange={(event) => {
                            setDataNasc(event.target.value)
                        }}
                        required
                        // onKeyUp={mascaraDataNasc}
                    />
                </div>
                <button type="submit" className="bt">
                    Salvar
                </button>
            </form>
            <nav className="menu_ss">
                <div className="btn_cadastrar edi ">
                    <a href="../Home/home.html">HOME</a>
                </div>
                <div className="btn_cadastrar hom">
                    <a href="../acoes/Home/acoes.html">ACOES</a>
                </div>
                <div className="btn_cadastrar hom">
                    <a href="../perfil/perfil.html">PERFIL</a>
                </div>
                <div className="btn_cadastrar hom">
                    <a href="../BiometriaSur5/index.html">SAIR</a>
                </div>
            </nav>
        </main>


    )


}