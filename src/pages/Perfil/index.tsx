import { useEffect, useState } from "react";
import "./style.css"
import api, { usersResource } from "../../utils/api";
// import { useParams } from "react-router-dom";
import CardPerfil from "../../components/CardPerfil";



function Perfil() {

    const id = "9d2e179b-7d30-416d-bff9-44c423ef12a8";
    const [users, setUsers] = useState<any[]>([]);
    const [user, setUser] = useState<any>({});



    // const [user, setUser] = useState<any>(
    //     {

    //          img_perfil: "../assets/img/img_perfil.png",
    //          matricula: 1231720,
    //          nome: "Thiago Nascimento",
    //          area: "Chao de Fabrica",
    //          dataNascimento: "28/08/1998",
    //          funcao: "Chefe chao de fabrica",
    //          sessao: 304,
    //          id: 1
    //     }
    // );

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
                    {/* adicionar imagem do usuario aqui */}

                    {/* <span>Administrador</span> */}
                    {/* <hr /> */}
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



                            <CardPerfil
                                id={user.id}
                                matricula={user.matricula}
                                nome={user.nome}
                                setor={user.area}
                                dataNasc={user.dataNascimento}
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