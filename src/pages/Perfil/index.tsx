import { useEffect, useState } from "react";
import "./style.css"
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import CardPerfil from "../../components/CardPerfil";



function Perfil() {

    const { id } = useParams();

    const [user, setUser] = useState<any>(
        {

            // img_perfil: "../assets/img/img_perfil.png",
            // matricula: 1231720,
            // nome: "Thiago Nascimento",
            // area: "Chao de Fabrica",
            // dataNascimento: "28/08/1998",
            // funcao: "Chefe chao de fabrica",
            // sessao: 304,
            // id: 1
        }
    );

    useEffect(() => {
        mostrarUser()
    }, [])

    function mostrarUser() {
        api.get(`users/${id}`).then((resposta: any) => {
            console.log(resposta.data)
            setUser(resposta.data);
        })

    }

    return (
        <>
            <section className='emglobador'>
                        <h2 className="_titulo">Perfil</h2>
                        {/* adicionar imagem do usuario aqui */}
                        
                        <span>#administrador</span>
                        <hr />
                        <table className='tabelaPerfil'>
                            <thead className='esquerda'>
                                <tr>
                                    <th>Matricula</th>
                                    <th>Nome</th>
                                    <th>Área</th>
                                    <th>Data de Nascimento</th>
                                    <th>Função</th>
                                    <th>Sessão</th>
                                </tr>
                                
                            </thead>
                            <tbody className="direita">
                                {/* Necessário verificar o login do usuário para as informações serem puxadas adequadamente  */}

                                <CardPerfil
                                    id={user.id}
                                    matricula={user.matricula}
                                    nome={user.nome}
                                    setor={user.setor}
                                    dataNasc={user.dataNasc}
                                    funcao={user.funcao}
                                    sessao={user.sessao}

                                />

                            </tbody>

                        </table>
                        
                         </section>
                        <section className="status">
                        <div >
                            <hr />
                            <br />
                            <p>id verificado</p>
                            <p>sucesso</p>
                        </div>
                       
             </section>
                
                   


        </>

    );
} export default Perfil;