import { Component } from 'react';
import { Navbar } from './Navbar';

import './external/PostIt.css';

class DeskResearch extends Component {
    render() {
        return (
            <div className="dr">
                <Navbar active="" />
                <div className="content-dr text-center">
                    <div className="dr-Title yellow-bg">
                        <h3> Certezas </h3>
                    </div>
                    <div className="dr-Element">
                        <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <ul class="notes">
                                    <li>
                                        <div class="rotate-1 yellow-bg">
                                            <h4> Usuários reclamam em redes sociais quando tem algum problema. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-2 yellow-bg">
                                            <h4> Usuários utilizam o Twitter para fazer reclamações. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-3 yellow-bg">
                                            <h4> Reclamações em redes sociais são mais eficientes que reclamações feitas no Procon. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-1 yellow-bg">
                                            <h4> O Twitter possui uma API com a função de pesquisar por tweets. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-2 yellow-bg">
                                            <h4> Empresas são dependentes de serviços da internet. </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dr-Title red-bg">
                        <h3> Suposições </h3>
                    </div>
                    <div className="dr-Element">
                    <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <ul class="notes">
                                    <li>
                                        <div class="rotate-1 red-bg">
                                            <h4> O usuário não corporativo deseja obter informações com poucos ou nenhum clique. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-2 red-bg">
                                            <h4> O usuário corporativo deseja monitorar os serviços que mais utiliza. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-3 red-bg">
                                            <h4> O usuário corporativo deseja ser notificado quando um serviço cair. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-1 red-bg">
                                            <h4> É necessário manter histórico do comportamento dos serviços. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-2 red-bg">
                                            <h4> Empresas desejam integrar nosso serviço com suas próprias plataformas. </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-3 red-bg">
                                            <h4> Empresas desejam monitorar seus próprios serviços. </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dr-Title lazur-bg">
                        <h3> Dúvidas </h3>
                    </div>
                    <div className="dr-Element">
                    <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <ul class="notes">
                                    <li>
                                        <div class="rotate-1 lazur-bg">
                                            <h4> Usuários não corporativos tem o interesse de monitorar os serviços que mais utiliza? </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-2 lazur-bg">
                                            <h4> Serviços destinados a empresas recebem reclamações em redes sociais? </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="rotate-3 lazur-bg">
                                            <h4> Quais as classes de serviço mais críticas para nosso usuário corporativo? </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { DeskResearch }