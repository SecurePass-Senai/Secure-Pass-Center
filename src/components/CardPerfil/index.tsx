
export default function CardPerfil(props: any) {

    // function parseListaUsers(){
    //     if(typeof props.users === "string"){
    //         return JSON.parse(props.users)
    //     }else{
    //         return props.users
    //     }
    // }
    return (
        <div>
            <div className="users">
                <tr>
                    <th>{props.matricula}</th>
                    <th>{props.nome}</th>
                    <th>{props.setor}</th>
                    <th>{props.dataNasc}</th>
                    <th>{props.funcao}</th>
                    <th>{props.sessao}</th>
                </tr>
            </div>
            {/* <div className="techs">
               {
                parseListaUsers().map((dev: string, index: number) =>{
                return <span key={index}>{dev}</span>
                })
              }
             </div> */}
    </div>
    )
}