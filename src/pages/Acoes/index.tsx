import CardLogs from "../../components/CardLogs"
import "./style.css"


export default function Acoes() {


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
        <CardLogs />

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