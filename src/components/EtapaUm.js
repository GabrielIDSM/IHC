import React, { Component } from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';

import downdetector_logo from '../images/downdetector-logo.png'
import down_for_everyone_logo from '../images/down-for-everyone-logo.png'
import uptime_robot_logo from '../images/uptime-robot-logo.png'

import desk_img_1 from '../images/desk-img-1.png'
import desk_img_2 from '../images/desk-img-2.png'
import desk_img_3 from '../images/desk-img-3.png'
import desk_img_4 from '../images/desk-img-4.png'

class EtapaUm extends Component {
    render() {
        return (
            <div className="EtapaUm">
                <Navbar active="/etapa-um" />
                <div className="EtapaUm-Content-Main">
                    <div className="EtapaUm-Title-Div Title-Even">
                        <h5> Desafio de Design </h5>
                    </div>
                    <div className="EtapaUm-Content-Div">
                        <p className="EtapaUm-Quotes"> “Como podemos monitorar a qualidade de serviços da internet por meio da opinião de usuários ?” </p>
                    </div>
                    <div className="EtapaUm-Title-Div Title-Odd">
                        <h5> Análise Competitiva </h5>
                    </div>
                    <div className="EtapaUm-Content-Div">
                        <p> 
                            O objetivo da análise competitiva é entender o funcionamento das soluções semelhantes presentes no mercado. 
                            Essa etapa é muito importante para entender quais os pontos fracos e fortes dos concorrentes, e com isso desenvolver uma solução mais completa que as existentes. 
                        </p>
                        <p> 
                            Para nossa análise competitiva escolhemos três serviços: 
                        </p>
                        <div className="div-table-eu">
                            <table className="table-eu">
                                <tr className="logo-tr-eu">
                                    <td className="align-center-eu"> <img className="logo-eu" src={downdetector_logo} alt="logo" /> </td>
                                    <td className="align-center-eu"> <img className="logo-eu" src={down_for_everyone_logo} alt="logo" /> </td>
                                    <td className="align-center-eu"> <img className="logo-eu" src={uptime_robot_logo} alt="logo" /> </td>
                                </tr>
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> Downdetector </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> Down For Everyone Or Just Me? </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> UptimeRobot </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu"> <p> O Downdetector foi escolhido para a análise por ser a maior e mais popular ferramenta de monitoramento de serviços da internet. </p> </td>
                                    <td className="td-eu"> <p> 'Down For Everyone Or Just Me?' foi escolhido pela velocidade da verificação e por poder verificar qualquer servidor. </p> </td>
                                    <td className="td-eu"> <p> O UptimeRobot foi escolhido por ser uma ferramenta popular no meio corporativo. </p> </td>
                                </tr>
                            </table>
                        </div>
                        <Link className="EtapaUm-Link Link-Odd" to="/competitive-analysis"> Análise Competitiva <i class="fas fa-external-link-square-alt"></i> </Link>
                    </div>
                    <div className="EtapaUm-Title-Div Title-Even">
                        <h5> Questionário </h5>
                    </div>
                    <div className="EtapaUm-Content-Div">
                        <p> 
                            O questionário é uma ferramenta muito importante para conseguir entender especificidades do público-alvo. No nosso caso, desejamos atender dois diferentes públicos. 
                            O primeiro público é composto por usuários que estão passando por algum problema nos serviços que utiliza, como uma rede social.
                            O segundo público são os clientes corporativos — ou seja, empresas — que tem o interesse de monitorar serviços fundamentais para seu modelo de negócio e/ou seus próprios serviços e plataformas.
                        </p>
                        <p>
                            Pensando nisso, o questionário foi desenvolvido para obter informações sobre os dois públicos. O formulário é dividido em quatro seções.
                            A primeira seção é responsável por colher dados demográficos do usuário.
                            A segunda seção determina qual tipo de usuário está respondendo ao questionário. 
                            Caso o usuário não seja corporativo, ele será redirecionado para a seção três. Caso contrário, será redirecionado para a seção 4.
                        </p>
                        <a className="EtapaUm-Link Link-Even" href="https://docs.google.com/forms/d/1NwrWRu9GWduImfpt7Xx3gRofpwu6jxNHdh_QHEw4cMk"> Questionário <i class="fas fa-external-link-square-alt"></i> </a>
                    </div>
                    <div className="EtapaUm-Title-Div Title-Odd">
                        <h5> Pesquisa Desk </h5>
                    </div>
                    <div className="EtapaUm-Content-Div">
                        <p> 
                            A Pesquisa Desk é um método de pesquisa que consiste em reunir informações de documentos e pesquisas já existentes para adquirir conhecimento em um assunto específico.
                            Em nossa pesquisa desk, conseguimos obter informações úteis para determinar o comportamento do público-alvo e ferramentas que podem ser utilizadas no desenvolvimento da aplicação.
                        </p>
                        <div className="EtapaUm-Images-Div">
                            <div className="EtapaUm-Image-Div"> 
                                <Zoom> <img className="EtapaUm-Image" src={desk_img_1} alt="screenshot" /> </Zoom>
                                <p className="EtapaUm-Image-Comment"> Uma pesquisa realizada na Folha de S.Paulo constatou que uma reclamação feita no Twitter é respondida em até 2 horas e resolvida em até 24 horas. Já no Procon, a resposta pode levar até 1 mês e não há prazo de resolução.</p>
                            </div>
                            <div className="EtapaUm-Image-Div"> 
                                <Zoom> <img className="EtapaUm-Image" src={desk_img_2} alt="screenshot" /> </Zoom>
                                <p className="EtapaUm-Image-Comment"> Muitos negócios são dependentes de serviços da internet. De acordo com o Sebrae, apenas 23% dos empresários têm sites próprios de venda. Na hora de vender pela internet, 84% preferem o WhatsApp.</p>
                            </div>
                        </div>
                        <div className="EtapaUm-Images-Div">
                            <div className="EtapaUm-Image-Div"> 
                                <Zoom> <img className="EtapaUm-Image" src={desk_img_3} alt="screenshot" /> </Zoom>
                                <p className="EtapaUm-Image-Comment"> 
                                    O Twitter possui uma API de uso gratuito para fins acadêmicos e possui uma funcionalidade de pesquisar por tweets utilizando vocabulário controlado.
                                    É possível obter tweets publicados segundos antes do momento da consulta.
                                </p>
                            </div>
                            <div className="EtapaUm-Image-Div"> 
                                <Zoom> <img className="EtapaUm-Image" src={desk_img_4} alt="screenshot" /> </Zoom>
                                <p className="EtapaUm-Image-Comment"> 
                                    Com a pandemia de COVID-19, muitas empresas passaram a depender ainda mais de serviços da internet.
                                    Assim, é muito importante escolher os aplicativos mais seguros e estáveis.
                                </p>
                            </div>
                        </div>
                        <Link className="EtapaUm-Link Link-Odd" to="/desk-research"> Pesquisa Desk <i class="fas fa-external-link-square-alt"></i> </Link>
                    </div>
                    <div className="EtapaUm-Title-Div Title-Even">
                        <h5> Metas de Design </h5>
                    </div>
                    <div className="EtapaUm-Content-Div">
                        <p>
                            Ao mesmo tempo que a solução deve informar para um tipo de usuário que uma rede social está fora do ar com poucos ou até nenhum clique, ela deve ser capaz de gerar um relatório semanal com o comportamento de 50 serviços para outro usuário.
                            A necessidade de atender funções simples e complexas na mesma solução nos levou a definir os seguintes itens: 
                        </p>
                        <ul className="EtapaUm-Ul">
                            <li>Interface simples e intuitiva</li>
                            <li>Confiabilidade de dados</li>
                            <li>Serviço de notificação</li>
                            <li>Monitoramento personalizado</li>
                            <li>Suporte a operações corporativas</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export { EtapaUm }