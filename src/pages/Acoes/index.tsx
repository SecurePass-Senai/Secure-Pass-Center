// import { useEffect, useState } from "react";
// import CardLogs from "../../components/CardLogs"
import "./style.css"
// import api from "../../utils/api";


export default function Acoes() {

//   const [users, setUsers] = useState<any[]>([]);
  
//   useEffect( () => {
//     document.title = "LOGS - SecurePass"

//     listarLogs()
// }, [] )

//   function listarLogs() {

//     api.get("users").then( (response: any) => {
//         console.log(response.data)
//         setUsers(response.data)
//     } )

// }
    return (

        <main>
  <section>
    <h2>Tabela de Logs</h2>
    <table>
      <caption>Tabela de Logs</caption>
      <thead>
        <tr>
          <th>Nome do Funcionario</th>
          <th>Função</th>
          <th>Sessão</th>
          <th>Data de Acesso</th>
        </tr>

        {/* Testando o CardLogs para ver se está recebendo o codigo do componente corretamente... */}
        
        {/* {
          users.map((users: any, index: number) => {
            return <th key={index}>
                  <CardLogs
                  nome={users.nome}
                  
                   />
            </th>
        })
        } */}
        

        {/* Codigo para trazer caso não encontre nenhum log feito... */}
        {/* <tr className="linha-mensagem">
            <td colSpan={4}>Nenhum usuario cadastrado 😭 </td>
        </tr> */}
        
      </thead>
      <tbody id="corpo-tabela"></tbody>
    </table>
    
  </section>
</main>



    )


}