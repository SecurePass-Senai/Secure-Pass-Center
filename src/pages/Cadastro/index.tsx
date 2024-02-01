import { useRef, useState } from "react";
import "./style.css"
import api, { PhotoResource, usersResource } from "../../utils/api";
import Stepper from "awesome-react-stepper";

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
    const [nascimento, setNascimento] = useState<string>("")
    const [funcao, setFuncao] = useState<string>("")
    const [sessao, setSessao] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [arquivo, setArquivo] = useState<any>([])




    function mascaraDataNasc(event: any) {
        let valorDigitado = event.target.value;

        if (!valorDigitado) return "";

        valorDigitado = valorDigitado.replace(/\D/g, '');
        valorDigitado = valorDigitado.replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3');
        // console.log(valorDigitado)
        event.target.value = valorDigitado;
    }


    async function cadastrarUsers(event: any) {

        //event.preventDefault();

        const formData = new FormData()

        const id = ("eab2240a-617d-4b04-a2f3-b0012af2af5e")
        formData.append("id_tipousuario", id)
        formData.append("matricula", matricula)
        formData.append("nome", nome)
        formData.append("setor", setor)
        formData.append("nascimento", "2000-12-12")
        formData.append("funcao", funcao)
        formData.append("sessao", sessao)
        formData.append("email", email)
        formData.append("image", arquivo)




        console.log("hereee");
        console.log(formData)


         api.post(`${usersResource}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        ).then((resposta: any) => {
            console.log("teste");
            console.log(resposta.data);
        })

    }

    return (

        <main className="_cadastro">

            <Stepper
                strokeColor="#00FFFF"//linha :)
                fillStroke="#00FFFF"
                activeColor="#00CED1"
                activeProgressBorder="2px solid #00CED1"
                submitBtn={<button type="submit" className="onSubmit">Salvar</button>}
                continueBtn={<button className="continueBtn">Proximo</button>}
                backBtn={<button className="stepperBtn">Voltar</button>}
                onSubmit={cadastrarUsers}
            >
                <form onSubmit={cadastrarUsers} className="formulario bkg_login" method="POST">
                    <div className="forms">
                        <label htmlFor="nome" />Nome:
                        <input type="text"
                            placeholder="Nome"
                            id="nome"
                            onChange={(event) => {
                                setNome(event.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="forms">
                        <label htmlFor="matricula" />Matricula:
                        <input type="text"
                            placeholder="Matricula"
                            id="matricula"
                            onChange={(event) => {
                                setMatricula(event.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="forms">
                        <label htmlFor="setor" />Setor:
                        <input type="text"
                            placeholder="Setor"
                            id="setor"
                            onChange={(event) => {
                                setSetor(event.target.value)
                            }}
                            required
                        />
                    </div>
                </form>
                <form onSubmit={cadastrarUsers} className="formulario" method="POST">
                    <div className="forms">
                        <label htmlFor="sessao" />Sessao:
                        <input type="text"
                            placeholder="Sessao"
                            id="sessao"
                            onChange={(event) => {
                                setSessao(event.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="forms">
                        <label htmlFor="funcao" />Função:
                        <input type="text"
                            placeholder="Função"
                            id="funcao"
                            onChange={(event) => {
                                setFuncao(event.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="forms">
                        <label htmlFor="dataNasc" />Data de Nascimento:
                        <input type="text"
                            placeholder="data de Nascimento"
                            id="dataNasc"
                            onChange={(event) => {
                                setNascimento(event.target.value)
                            }}
                            required
                            onKeyUp={mascaraDataNasc}
                        />
                    </div>
                </form>
                <form onSubmit={cadastrarUsers} className="formulario" method="POST">
                    <div className="forms">
                        <label htmlFor="email" />E-Mail:
                        <input type="email"
                            placeholder="E-Mail"
                            id="email"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            required
                        />
                    </div>


                    <div className="forms">
                        <label htmlFor="file" />Arquivo:
                        <input type="file"
                            id="file"
                            onChange={event => {
                                setArquivo(event.target.files[0])
                            }}
                            required
                        />
                    </div>

                </form>

            </Stepper>

        </main>


    )


}