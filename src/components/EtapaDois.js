import { Component } from 'react';
import { Navbar } from './Navbar';
import Zoom from 'react-medium-image-zoom';

import empresas    from '../images/empresas.png'
import inicial     from '../images/inicial.png'
import monitorar   from '../images/monitorar.png'
import pesquisa    from '../images/pesquisa.png'
import servico     from '../images/servico.png'
import solicitar   from '../images/solicitar.png'
import fitts       from '../images/fitts.png'
import formulario  from '../images/formulario.png'
import memoria     from '../images/memoria.png'
import signos_meta from '../images/signos-meta.png'

class EtapaDois extends Component {
    render() {
        return (
            <div className="EtapaDois">
                <Navbar active="/etapa-dois" />
                <div className="EtapaDois-Content-Main">
                    <div className="EtapaDois-Title-Div Title-Even">
                        <h5> Prototipação </h5>
                    </div>
                    <div className="EtapaDois-Content-Div">
                        <p>
                            Nesta etapa do projeto usamos a ferramenta <b>Mockplus</b> para prototipar as principais telas de nossa solução. 
                            A seguir, é possível encontrar os avanços feitos nessa etapa, as decisões tomadas e suas justificativas.
                        </p>
                    </div>
                    <a className="EtapaDois-Link Link-Even" href="https://app.mockplus.com/s/Wmvkalo4S3X"> Projeto Mockplus <i class="fas fa-external-link-square-alt"></i> </a>
                    <div className="EtapaDois-Title-Div Title-Odd">
                        <h5> Telas </h5>
                    </div>
                    <div className="EtapaDois-Content-Div">
                        <p>
                            Ao total, foram desenvolvidas <b>seis telas</b> para a solução. A barra de navegação é um elemento usado em todas as telas.
                        </p>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={inicial} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Página Inicial </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    A tela "Página Inicial" contém os serviços monitorados pela solução.
                                    Os serviços são listados de acordo com seu estado: do mais crítico ao menos critico. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={pesquisa} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Resultado da Pesquisa </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    Após o usuário escrever o nome de um serviço na barra de pesquisa, ele é redirecionado de maneira dinâmica para a tela "Resultado de Pesquisa".
                                    Essa tela exibe os serviços monitorados pela solução que, de alguma forma, tem relação com a pesquisa do usuário.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={servico} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Serviço </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    Após o usuário escolher um serviço, ele é redirecionado para essa tela. A tela "Serviço" apresenta a logo, o nome e uma breve descrição do serviço.
                                    Além disso, o usuário tem acesso a um gráfico de reclamações por intervalo de tempo.
                                    Por fim, o usuário tem a opção de monitorar o serviço que está sendo exibido.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={monitorar} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Monitorar Serviço </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    Caso o usuário escolha a opção "Monitorar Serviço" na tela "Serviço" ele é redirecionado para essa tela.
                                    Essa tela possui, assim como a tela "Serviço", a logo, o nome e uma breve descrição do serviço.
                                    Abaixo, o usuário tem a opção de preencher um formulário para receber informações do serviço nos meios informados.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={solicitar} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Solicitar Serviço </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    Caso o usuário queira incluir um serviço que não é monitorado pela solução, ele pode escolher a opção "Solicitar Serviço" na barra de pesquisa.
                                    Após isso, ele será redirecionado para essa tela, que contém um formulário.
                                    O formulário contém dois campos obrigatórios: "E-mail" e "Nome do serviço".
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Tela-Div">
                        <div className="EtapaDois-Tela-Image-Div">
                            <Zoom> <img className="EtapaDois-Tela-Image" src={empresas} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaDois-Tela-Content-Div">
                            <div className="EtapaDois-Tela-Content-Title-Div">
                                <h5> Para Empresas </h5>
                            </div>
                            <div className="EtapaDois-Tela-Content-Desc-Div">
                                <p>
                                    Caso o usuário possua necessidades específicas destinadas a empresas, ele poderá selecionar a opção "Para Empresas" na barra de pesquisa.
                                    Após isso, ele será redirecionado para essa tela, que contém uma breve descrição das possibilidades ofertadas pelo "Is Down ?" e um formulário.
                                    O formulário contém três campos obrigatórios: "E-mail", "Nome da empresa" e "Descrição".
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaDois-Title-Div Title-Even">
                        <h5> Perguntas </h5>
                    </div>
                    <div className="EtapaDois-Content-Div">
                        <p>
                            Para explicar as decisões tomadas no design das telas, vamos utilizar as perguntas definidas.
                        </p>
                    </div>
                    <div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>1)</b> Você está aplicando alguma das evidências de design discutidos nos UXMyths em sua solução? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <div className="div-table-eu">
                            <table className="table-eu EtapaDois-Table">
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b>Myth #12</b> <br/> "More choices and features result in higher satisfaction" </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b>Myth #13</b> <br/> "Icons enhance usability"</h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b>Myth #28</b> <br/> "White space is wasted space" </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            O design da nossa solução utiliza o espaço em branco pra manter o foco do usuário no que importa: <b>a informação</b>. 
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            O único ícone usado na solução é o <b>ícone de lupa</b>, presente na barra de navegação.
                                            Demais informações, como estado dos serviços monitorados, são representadas por meio de cores.
                                        </p> 
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            O público-alvo da nossa solução tem interesse, na maioria dos casos, saber se um serviço está fora do ar ou não.
                                            Portanto, oferecer muitas opções na interface iria complicar algo que deve ser simples. 
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div><div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>2)</b> Você aplicou Lei de Fitts em alguma parte do seu design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <p>
                            Sim. A Lei de Fitts foi usada para definir o tamanho ideal para a faixa de conteúdo das telas, definida em 1120px de um total de 1920px.
                            Além disso, foi fundamental para medir a eficiência da Página Inicial.
                        </p>
                        <div className="EtapaDois-Fitts-Image-Div">
                            <Zoom> <img className="EtapaDois-Fitts-Image" src={fitts} alt="screenshot" /> </Zoom>
                        </div>
                    </div><div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>3)</b> Você aplicou Lei de Hick-Hyman em alguma parte do seu design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <p>
                            Sim. A Lei de Hick-Hyman foi usada para definir o design da Página Inicial da solução. 
                            A ordenação por estado do serviço e a opção de buscar por um serviço na barra de navegação foram desenvolvidas para otimizar o tempo de escolha do usuário.
                        </p>
                    </div>
                    <div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>4)</b> Você usou outras leis ou princípios de design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <p>
                            Sim. Utilizamos a <b>Lei de Jakob</b> na construção do nosso design. 
                            Essa lei parte do princípio que usuários passam mais tempo em outros sites, logo nossa solução deve funcionar de maneira semelhante.
                        </p>
                    </div><div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>5)</b> Você aplicou algum principio de Gestalt no seu design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <p>
                            Sim. Foram aplicados três princípios: Proximidade, Similaridade e Simetria.
                        </p>
                    </div><div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>6)</b> Quais outros recursos (artefatos interativos) você prototipou para alcançar suas metas de design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <ul className="EtapaDois-Ul">
                            <li>O estado de um serviço é indicado por cores</li>
                            <li>Os serviços monitorados estão ordenados de acordo com seu estado na Página Inicial</li>
                            <li>A cor do gráfico de um serviço depende do seu estado</li>
                        </ul>
                    </div>
                    <div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>7)</b> Sua(s) persona(s) e cenário(s) estão sendo atendidos com a prototipagem das tarefas desenvolvidas? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <p>
                            Sim. A persona <b>Vincent Dixon</b>, que representa nosso usuário não corporativo, poderá receber notificações dos serviços que mais utiliza.
                            A persona <b>Heather Bailey</b> poderá entrar em contato com a equipe responsável pela solução e definir quais funções serão necessárias para suas necessidades.
                        </p>
                    </div><div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>8)</b> Como o grupo aplicou os conceitos da Engenharia Cognitiva no seu design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <div className="div-table-eu">
                            <table className="table-eu EtapaDois-Table">
                                <tr>
                                    <td>
                                        <div className="EtapaDois-Table-Image-Div">
                                            <Zoom> <img className="EtapaDois-Table-Image" src={formulario} alt="screenshot" /> </Zoom>
                                        </div>
                                    </td>
                                    <td className="EtapaDois-Color-td">
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-1 ETD-Color-1">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-2 ETD-Color-2">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-3 ETD-Color-3">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-4 ETD-Color-4">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-5 ETD-Color-5">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                        <div className="EtapaDois-Color-Div ETD-BG-Color-6 ETD-Color-6">
                                            <div className="EtapaDois-Color-Text-Div">
                                                <h5> Texto </h5>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b>Formulários</b> </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b>Cores</b> </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            Os formulários foram projetados utilizando alinhamento e proporção adequada.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            A paleta de cores usada na solução tem possui o contraste adequado em relação ao fundo e outros elementos.
                                        </p> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <div className="div-table-eu">
                            <table className="table-eu EtapaDois-Table">
                                <tr>
                                    <td>
                                        <div className="EtapaDois-Table-Image-Div">
                                            <Zoom> <img className="EtapaDois-Table-Image" src={memoria} alt="screenshot" /> </Zoom>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b>Memória</b> </h5> </td>
                                    <td className="td-eu align-center-eu"> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            Algumas telas foram desenvolvidas com o objetivo de manter informações da tela anterior para o usuário.
                                            Na imagem acima, podemos ter como exemplo a tela <b>"Monitorar Serviço"</b>, que exibe o serviço que será monitorado após o preenchimento do formulário.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            
                                        </p> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="EtapaDois-Pergunta-Title-Div">
                        <h6> <b>9)</b> Como o grupo aplicou os conceitos da Engenharia Semiótica no seu design? </h6>
                    </div>
                    <div className="EtapaDois-Pergunta-Content-Div">
                        <div className="div-table-eu">
                            <table className="table-eu EtapaDois-Table">
                                <tr>
                                    <td>
                                        <div className="EtapaDois-Table-Image-Div">
                                            <Zoom> <img className="EtapaDois-Table-Image" src={signos_meta} alt="screenshot" /> </Zoom>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b>Signos Metalinguísticos</b> </h5> </td>
                                    <td className="td-eu align-center-eu"></td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            Nos formulários, utilizamos o asterisco para informar ao usuário quais campo são obrigatórios.
                                            Além disso, usamos um signo metalinguístico para explicitar essa informação.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EtapaDois }