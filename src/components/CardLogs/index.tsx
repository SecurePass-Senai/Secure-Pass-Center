import "./style.css"
// import { Link } from "react-router-dom"

export default function CardLogs(props : any) {

    /* trazer as informações da api aqui e mandar para a pagina de logs! (proxima implementação) 
     * - deverá ser criado uma outra tabela para trazer apenas os logs quando o funcionário se logar (quando o reconhecimento facial estiver funcional).
     * - deverá ser replicado a parte do laço para trazer todos os logs que tem cadastrados para a tabela de logs na pagina de ações.
     * - será implementado ainda um banco, para testes estamos trazendo o log de quando o usuário se cadastrou no sistema (no geral o codigo será o mesmo, trocando apenas a forma de chamar as informações).
     * 
     * att. Murilo Ferreira
    */
    function dadosConvertidos() {

      return JSON.parse(props.nome)

    }

    return(
        //teste para saber se o CardLog está sendo exibido na pagina de ações...
        <tr className="linha-mensagem">
          {
                   dadosConvertidos().map((nome: string, index: number) => {
                        return <th key={index}>{nome}</th>
                    })
                }
          
          <th>Montador</th>
          <th>405</th>
          <th>06/09/2023 - 11:46:08</th>
        </tr>

    )


}