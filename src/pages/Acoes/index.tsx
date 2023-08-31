import "./style.css"

export default function Acoes() {


    return (

        <main>
            {/* numeros com as informações dos usuários */}
            <section className="teste">
                <div>
                    <p>Sessão</p>
                    <p className="num">040506</p>
                </div>
                <div>
                    <p>Número Matricula</p>
                    <p className="num">1234567</p>
                </div>
            </section>
            {/* Tabela com os horários dos usuarios */}
            <section className="calendario">
                <p>Mês de Maio</p>
                <h2>Horário de login</h2>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>Domingo</th>
                            <th>Segunda </th>
                            <th>Terça-feira</th>
                            <th>Quarta</th>
                            <th>Quinta-feira</th>
                            <th>Sexta-feira</th>
                            <th>Sábado</th>
                        </tr>
                        <tr>
                            <td>06h - 15h</td>
                            <td>06h - 15h</td>
                            <td>06h - 15h</td>
                            <td>06h - 15h</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>06h - 15h</td>
                            <td>06h - 15h</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {/* botões para interatividade com as outras paginas */}
            <section className="botao">
                <div className="btn btn-0 btn-sep">
                    <a href="../../Home/home.html">Home</a>
                </div>
                <div className="btn btn-1 btn-sep">
                    <a href="../../cadastro/cadastro.html">Cadastrar</a>
                </div>
                <div className="btn btn-2 btn-sep">
                    <a href="../../perfil/perfil.html">Perfil</a>
                </div>
                <div className="btn btn-3 btn-sep">
                    <a href="../../BiometriaSur5/index.html">Sair</a>
                </div>
            </section>
        </main>


    )


}