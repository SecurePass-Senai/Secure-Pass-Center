import { useState } from "react";
import "./style.css"
import api from "../../utils/api";

export default function Cadastro() {
/*
 * Como um pré-requisito de qualquer cadastro, deverá ser chamado um email e senha para poder salvar (pelo menos no JSON server!)
 * para ver se está funcionando corretamente foi acrescentado 2 (dois) campos no formulário de cadastro que podem ou não sofrer 
 * algum tipo de alteração futura!.
 * 
 * att. Murilo Ferreira
*/

    const [matricula, setMatricula] = useState<string>("")
    const [nome, setNome] = useState<string>("")
    const [setor, setSetor] = useState<string>("")
    const [dataNasc, setDataNasc] = useState<string>("")
    const [funcao, setFuncao] = useState<string>("")
    const [sessao, setSessao] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")







    
    function mascaraDataNasc(event: any) {
        let valorDigitado = event.target.value; 

        if (!valorDigitado) return ""; 

        valorDigitado = valorDigitado.replace(/\D/g, ''); 
        valorDigitado = valorDigitado.replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3'); 
        console.log(valorDigitado)
        event.target.value = valorDigitado;
    }

  
    function cadastrarUsers(event: any) {

        event.preventDefault();
        
        const formData = new FormData()

        formData.append("matricula", matricula)
        formData.append("nome", nome)
        formData.append("setor", setor)
        formData.append("dataNasc", dataNasc)
        formData.append("funcao", funcao)
        formData.append("sessao", sessao)
        formData.append("email", email)
        formData.append("password", password)
       

        

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
           {/* <center> <h2>Cadastro</h2></center> */}
            <form onSubmit={cadastrarUsers} className="formulario"  method="POST">
                <div className="forms">
                    <label htmlFor="nome"/>
                    <input type="text" placeholder="Nome"
                        id="nome"
                        onChange={(event) => {
                            setNome(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="matricula"/>
                    <input type="text" placeholder="Numero da Matricula"
                        id="matricula"
                        onChange={(event) => {
                            setMatricula(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="setor"/>
                    <input type="text" placeholder="Setor"
                        id="setor"
                        onChange={(event) => {
                            setSetor(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="sessao"/>
                    <input type="text" placeholder="Sessao"
                        id="sessao"
                        onChange={(event) => {
                            setSessao(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="funcao"/>
                    <input type="text" placeholder="Funcao"
                        id="funcao"
                        onChange={(event) => {
                            setFuncao(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="dataNasc"/>
                    <input type="text" placeholder="Data de Nascimento"
                        id="dataNasc"
                        onChange={(event) => {
                            setDataNasc(event.target.value)
                        }}
                        required
                        onKeyUp={mascaraDataNasc}
                    />
                </div>
                <div className="forms">
                    <label htmlFor="email"/>
                    <input type="email" placeholder="E-Mail"
                        id="email"
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="forms">
                    <label htmlFor="password"/>
                    <input type="password" placeholder="Senha"
                        id="password"
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                        required
                    />
                </div>
                <button type="submit" className="bt">
                    Salvar
                </button>
            </form>
            <nav>
                
            </nav>
        </main>


    )


}