import { useEffect, useState } from "react";
import "./style.css"
import api, { usersResource } from "../../utils/api";
// import { useParams } from "react-router-dom";
import CardPerfil from "../../components/CardPerfil";



function Perfil() {
//id Setado tem que receber o id do login
    const id = "5ac2ab21-68c2-a313-48c2-8dc283c3a6c2";
    const [users, setUsers] = useState<any[]>([]);
    const [user, setUser] = useState<any>({});



    useEffect(() => {
        mostrarUser()
    }, [])

    async function mostrarUser() {
       
        await api.get(`${usersResource}/${id}`).then((resposta: any) => {
            console.log("teste");
            console.log(resposta.data)
            setUser(resposta.data);
            console.log(user);
            
        })


    }

    return (
        <>
            <section className='emglobador'>
                <div className="box_perfil">  <h2 className="_titulo">Perfil do Usuario </h2>
                    <table className='tabelaPerfil'>
                        <thead className='esquerda'>
                            <tr>
                                <th>Matricula</th>
                                <th>Nome</th>
                                <th>Setor</th>
                                <th>Data de Nascimento</th>
                                <th>Função</th>
                                <th>Sessão</th>
                            </tr>

                        </thead>
                        <tbody className="direita">



                            <CardPerfil
                                id={user.id}
                                matricula={user.matricula}
                                nome={user.nome}
                                setor={user.setor}
                                dataNasc={user.nascimento}
                                funcao={user.funcao}
                                sessao={user.sessao}
                            />
                        </tbody>

                    </table>
                </div>

            </section>
            <section className="status">
                {/* <div >
                    <hr />
                    <br />
                    <p>id verificado</p>
                    <p>sucesso</p>
                </div> */}

            </section>




        </>

    );
} export default Perfil;