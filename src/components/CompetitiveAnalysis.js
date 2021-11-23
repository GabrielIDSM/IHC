import { Component } from 'react';
import { Navbar } from './Navbar';
import Zoom from 'react-medium-image-zoom'

import downdetector_logo from '../images/downdetector-logo.png'
import down_for_everyone_logo from '../images/down-for-everyone-logo.png'
import uptime_robot_logo from '../images/uptime-robot-logo.png'

import downdetector_screenshot from '../images/downdetector-screenshot.png'
import down_for_everyone_screenshot from '../images/down-for-everyone-screenshot.png'
import uptime_robot_screenshot from '../images/uptime-robot-screenshot.png'

class CompetitiveAnalysis extends Component {
    render() {
        return (
            <div className="text-center">
                <Navbar active="/competitive-analysis" />
                <div className="content-ca d-flex h-100 p-3 mx-auto flex-column">
                    <table className="table-ca">
                        <tr className="logo-tr-ca">
                            <td> </td>
                            <td> <img className="logo-ca" src={downdetector_logo} alt="logo" /> </td>
                            <td> <img className="logo-ca" src={down_for_everyone_logo} alt="logo" /> </td>
                            <td> <img className="logo-ca" src={uptime_robot_logo} alt="logo" /> </td>
                        </tr>
                        <tr className="service-tr-ca">
                            <td className="td-ca"> <h3> Serviço </h3> </td>
                            <td className="td-ca"> <h5> Downdetector </h5> </td>
                            <td className="td-ca"> <h5> Down For Everyone Or Just Me? </h5> </td>
                            <td className="td-ca"> <h5> UptimeRobot </h5> </td>
                        </tr>
                        <tr className="description-tr-ca">
                            <td className="td-ca"> <h3> Descrição </h3> </td>
                            <td className="td-ca"> <h6> O Downdetector oferece informações em tempo real sobre a situação e interrupções de diversos serviços. </h6> </td>
                            <td className="td-ca"> <h6> 'Down For Everyone Or Just Me?' é uma ferramenta capaz de verificar se um determinado serviço responde ou não a uma requisição HTTP. </h6> </td>
                            <td className="td-ca"> <h6> O UptimeRobot monitora e notifica qualquer problema nos serviços escolhidos pelo usuário. </h6> </td>
                        </tr>
                        <tr className="use-tr-ca">
                            <td className="td-ca"> <h3> Como usar </h3> </td>
                            <td className="td-ca"> 
                                <h6> O Downdetector tem duas formas de uso: Interface Web e API. Na interface web o usuário acessa o site e tem acesso a informações de vários serviços e gráficos de seu comportamento nas últimas 24h. Usando sua API, é possível fazer uma integração com qualquer sistema que o usuário desejar. </h6>
                                <h6> O Downdetector possui uma interface web simples de ser usada, onde sua página inicial é um catálogo de serviços ordenados pelos serviços com maior instabilidade nas últimas 24h, logo é fácil saber se um determinado serviço está com problemas. </h6>
                                <h6> Porém, se o usuário quiser ser notificado sempre que um serviço apresenta algum problema, isso não será possível. Isso obriga o usuário a desenvolver seu próprio serviço de notificação baseado em requisições a API. </h6> 
                                <h6> A falta do serviço de notificação é problemática em aplicações corporativas, onde o impacto de instabilidades em serviços pode causar prejuízos. Além disso, não é possível monitorar um serviço que não esteja no catálogo. </h6>
                            </td>
                            <td className="td-ca"> 
                                <h6> 'Down For Everyone Or Just Me?' é uma ferramenta com funções bem limitadas. Essencialmente, é possível apenas verificar se algum serviço é acessível no momento em que é feita a requisição. </h6>
                                <h6> Para o usuário comum, essa verificação é suficiente. Porém, não há uma API para realizar integração e nem monitoramento dos serviços. Isso impossibilita seu uso em qualquer aplicação corporativa. </h6>
                            </td>
                            <td className="td-ca"> 
                                <h6> O UptimeRobot é um serviço de monitoramento robusto desenvolvido como plataforma de apoio para aplicações corporativas. Ele possui funcionalidades como notificação personalizada via E-mail, SMS, Telegram e outros meios, monitoramento de serviços personalizados e relatórios sobre os serviços monitorados. </h6>
                                <h6> Contudo, para o usuário comum não é uma ferramenta muito atrativa. O UptimeRobot não possui uma ferramenta pública de monitoramento dos principais serviços da internet. Assim, uma simples checagem exige um cadastro e uma série de configurações. </h6>
                            </td>
                        </tr>
                        <tr className="screenshot-tr-ca">
                            <td className="td-ca"> <h3> Interface </h3> </td>
                            <td className="td-ca">  <Zoom> <img className="interface-ca" src={downdetector_screenshot} alt="screenshot" />  </Zoom> </td>
                            <td className="td-ca">  <Zoom> <img className="interface-ca" src={down_for_everyone_screenshot} alt="screenshot" /> </Zoom> </td>
                            <td className="td-ca">  <Zoom> <img className="interface-ca" src={uptime_robot_screenshot} alt="screenshot" /> </Zoom> </td>
                        </tr>
                        <tr className="strengths-weaknesses-tr-ca">
                            <td className="td-ca"> <h3> Pontos fortes </h3> <h3> e fracos </h3> </td>
                            <td className="td-ca">
                                <h6><i className="fas fa-chevron-up text-success"></i> Interface simples e intuitiva </h6>
                                <h6><i className="fas fa-chevron-up text-success"></i> Uso de gráficos </h6>
                                <h6><i className="fas fa-chevron-up text-success"></i> Monitoramento das últimas 24 horas </h6>
                                <br/>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Não é possivel cadastrar um novo serviço para monitoramento </h6>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Atualização com 15 minutos de delay </h6>
                            </td>
                            <td className="td-ca">
                                <h6><i className="fas fa-chevron-up text-success"></i> Verificação instantânea </h6>
                                <br/>
                                <br/>
                                <br/>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Inexistência de monitoramento </h6>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Interface limitada </h6>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Ausência de um serviço de notificação </h6>
                            </td>
                            <td className="td-ca">
                                <h6><i className="fas fa-chevron-up text-success"></i> Monitoramento personalizado </h6>
                                <h6><i className="fas fa-chevron-up text-success"></i> Serviço de notificação </h6>
                                <h6><i className="fas fa-chevron-up text-success"></i> Atualização com 5 minutos de delay </h6>
                                <br/>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Interface complexa </h6>
                                <h6><i className="fas fa-chevron-down text-danger"></i> Não monitora reclamações </h6>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export { CompetitiveAnalysis }