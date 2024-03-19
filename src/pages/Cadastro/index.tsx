import { useEffect, useState } from "react";
import "./style.css"
import api, { typesUserResource, usersResource } from "../../utils/api";
import Stepper from "awesome-react-stepper";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function Cadastro() {
    /*
     * Como um pré-requisito de qualquer cadastro, deverá ser chamado um email e senha para poder salvar (pelo menos no JSON server!)
     * para ver se está funcionando corretamente foi acrescentado 2 (dois) campos no formulário de cadastro que podem ou não sofrer 
     * algum tipo de alteração futura!.
     * 
     * att. Murilo Ferreira
    */

    function notify() {
        toast('😁 Cadastrado com Sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const [listTypes, setListTypes] = useState<any>([])
    const [matricula, setMatricula] = useState<string>("")
    const [nome, setNome] = useState<string>("")
    const [setor, setSetor] = useState<string>("")
    const [nascimento, setNascimento] = useState<string>("")
    const [funcao, setFuncao] = useState<string>("")
    const [sessao, setSessao] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [typeUser, setTypeUser] = useState<string>("")
    const [arquivo, setArquivo] = useState<any>([])

    function mascaraDataNasc(event: any) {
        let valorDigitado = event.target.value;

        if (!valorDigitado) return "";

        valorDigitado = valorDigitado.replace(/\D/g, '');
        valorDigitado = valorDigitado.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        // event.target.value = valorDigitado;
    }

    // Função para lidar com a mudança de seleção
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        // Mapear os valores das opções para os IDs correspondentes
        const idMap: { [key: string]: string } = {
            Administrador: "a87b7093-dce7-497a-9a1d-703c3efee558",
            Funcionario: "ac2d3b05-62c8-4ee9-ba32-c3caa4c3442b"
            // Adicione mais opções e IDs conforme necessário
        };
        // Definir o estado typeUser com o ID correspondente
        setTypeUser(idMap[selectedValue]);
    };

    const selectTypes = () =>{
        api.get(typesUserResource, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then( response => {
            setListTypes(response.data)
        })
    }

    useEffect(() => {
        selectTypes()
    }, [])

    async function cadastrarUsers(event: any) {
        //event.preventDefault();
        const formData = new FormData()

        formData.append("matricula", matricula)
        formData.append("nome", nome)
        formData.append("setor", setor)
        formData.append("nascimento", nascimento)
        formData.append("funcao", funcao)
        formData.append("sessao", sessao)
        formData.append("email", email)
        formData.append("typeUser", typeUser)
        formData.append("image", arquivo)
        formData.append("face", arquivo)

        api.post(`${usersResource}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        ).then((resposta: any) => {
            alert("Usuario criado com sucesso")
            console.log(resposta.data);
        })
    }

    return (
        <main className="_cadastro">
            <ToastContainer />
            <Stepper
                strokeColor="#00FFFF"//linha :)
                fillStroke="#00FFFF"
                activeColor="#00CED1"
                activeProgressBorder="2px solid #00CED1"
                submitBtn={<Link to={"/"}><button type="submit" className="btn_multi" onClick={notify}>Salvar</button></Link>}
                continueBtn={<button className="btn_multi">Proximo</button>}
                backBtn={<button className="btn_multi">Voltar</button>}
                onSubmit={cadastrarUsers}
            >
                <form onSubmit={cadastrarUsers} className="formulario bkg_login" method="POST">
                    <div className="alinhamento">
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
                    </div>

                </form>


                <form onSubmit={cadastrarUsers} className="formulario bkg_login" method="POST">
                    <div className="alinhamento">
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
                                maxLength={10}
                                onChange={(event) => {
                                    setNascimento(event.target.value)
                                }}
                                required
                                onKeyUp={mascaraDataNasc}
                            />
                        </div>

                    </div>
                </form>
                <form onSubmit={cadastrarUsers} className="formulario bkg_login" method="POST">
                    <div className="alinhamento">
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
                            <label htmlFor="typeUser" />Tipo de Usuario:
                            <select
                                id="typeUser"
                                onChange={ e => setTypeUser(e.target.value) }
                                required
                            >
                                <option hidden>Escolha o Tipo do Usuario</option>
                                {/* <option value="Administrador">Administrador</option>
                                <option value="Funcionario">Funcionario</option> */}
                                {
                                    listTypes.map( (item : any) => {
                                        return <option key={item.id} value={item.id}>{item.tipo}</option>
                                    })
                                }
                            </select>
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
                    </div>
                </form>

            </Stepper>

        </main>
    )
}