import { Component } from 'react';
import { Navbar } from './Navbar';
import Zoom from 'react-medium-image-zoom';
import './external/Timeline.css';

import inicial_new from '../images/inicial-new.png'
import inicial_new2 from '../images/inicial-new-2.png'
import servico_new from '../images/servico-new.png'
import task_1 from '../images/gabriel-task-1.png'
import task_2 from '../images/gabriel-task-2.png'
import task_3 from '../images/galves-task-1.png'
import task_4 from '../images/galves-task-2.png'
import task_5 from '../images/rafa-task-1.png'
import task_6 from '../images/rafa-task-2.png'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

let data = [
    {
        labels: [
            'Visibilidade do Estado do Sistema',
            'Correspondência Entre o Sistema e o Mundo Real',
            'Controle e Liberdade do Usuário',
            'Consistência e Padronização',
            'Reconhecimento em Vez de Memorização',
            'Flexibilidade e Eficiência de Uso',
            'Projeto Estético e Minimalista',
            'Prevenção de Erros',
            'Ajude os Usuários a Reconhecerem, Diagnosticarem e se Recuperarem de Erros',
            'Ajuda e Documentação'
        ],
        datasets: [
            {
                label: 'Cosmética',
                data: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                backgroundColor: 'rgba(0, 224, 0, 0.5)',
                borderColor: 'rgba(0, 224, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'Pequena',
                data: [0, 0, 1, 0, 0, 1, 1, 0, 0, 2],
                backgroundColor: 'rgba(224, 224, 0, 0.5)',
                borderColor: 'rgba(224, 224, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'Grave',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                backgroundColor: 'rgba(224, 0, 0, 0.5)',
                borderColor: 'rgba(224, 0, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'Crítica',
                data: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }
        ],
    }
]

let options = [{
    plugins: {
        title: {
            display: true,
            text: 'Violações Heurísticas'
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true
        }
    }
}]

class EtapaTres extends Component {
    render() {
        return (
            <div className="EtapaTres">
                <Navbar active="/etapa-tres" />
                <div className="EtapaTres-Content-Main">
                    <div className="EtapaTres-Title-Div Title-Even">
                        <h5> Avaliação Heurística </h5>
                    </div>
                    <div className="EtapaTres-Content-Div">
                        <p>
                            A Avaliação Heurística é uma técnica de inspeção que tem como objetivo identificar problemas de usabilidade em uma interface.
                            Essa técnica é realizada por um especialista, chamado de avaliador, que visa encontrar situações em que uma ou mais heurística é violada.
                        </p>
                        <p>
                            Essa avaliação foi realizada em duas partes: <b>análise individual e análise em grupo</b>.
                            Na análise individual, cada membro do grupo avaliou a interface individualmente e fez um relatório das violações encontradas.
                            Na análise em grupo, houve uma reunião onde consolidamos os resultados individuais.
                            O relatório consolidado pode ser encontrado no link a seguir.
                        </p>
                        <a className="EtapaTres-Link Link-Even" href="https://drive.google.com/file/d/1Q8n4MgWhB-IopTxNM72NKGofXHfNCm-m/view?usp=sharing"> Avaliação Heurística Consolidada <i class="fas fa-external-link-square-alt"></i> </a>
                        <div className="EtapaTres-Sub-Title-Div Title-Even">
                            <h6> Resultado </h6>
                        </div>
                        <Bar data={data[0]} options={options[0]}/>
                        <div className="EtapaTres-Sub-Title-Div Title-Even">
                            <h6> Violações Heurísticas </h6>
                        </div>
                        <div className="div-table-eu">
                            <table className="table-eu EtapaTres-Table">
                                <tr className="service-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p>
                                            <b className="Text-Even">Descrição:</b> O acesso ao gráfico de um serviço só é disponível após sua seleção <br/>
                                            <b className="Text-Even">Heurística(s) Violada(s):</b> Flexibilidade e Eficiência de Uso <br/>
                                            <b className="Text-Even">Gravidade:</b> Violação cosmética <br/>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p>
                                            <b className="Text-Even">Descrição:</b> Os botões da barra de navegação possui funcionalidades específicas e pouco usadas <br/>
                                            <b className="Text-Even">Heurística(s) Violada(s):</b> Estética e Design Minimalista <br/>
                                            <b className="Text-Even">Gravidade:</b> Violação pequena <br/>
                                        </p>
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p>
                                            <b className="Text-Even">Descrição:</b> A página inicial não fornece nenhum tipo de informação sobre a ferramenta <br/>
                                            <b className="Text-Even">Heurística(s) Violada(s):</b> Ajuda e Documentação <br/>
                                            <b className="Text-Even">Gravidade:</b> Violação grave <br/>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p>
                                            <b className="Text-Even">Descrição:</b> Só existe uma opção de visualização dos dados <br/>
                                            <b className="Text-Even">Heurística(s) Violada(s):</b> Flexibilidade e Eficiência de Uso <br/>
                                            <b className="Text-Even">Gravidade:</b> Violação crítica <br/>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="EtapaTres-Sub-Title-Div Title-Even">
                            <h6> Sugestões de Redesign </h6>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={inicial_new} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div">
                                <h5> Página Inicial </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    Descrições do objetivo da solução e como utilizar foram adicionadas.
                                    É possível obter um gráfico do comportamento do serviço na última hora.
                                    A barra de navegação contém apenas uma referência para a página inicial.
                                    Foi adicionado um <i>Footer</i> com um link para a tela "Para Empresas".
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={servico_new} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div">
                                <h5> Serviço </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    Mudanças nas informações sobre nossa ferramenta de notificação.
                                    Mais opções de visualização dos dados dos serviços.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaTres-Title-Div Title-Odd">
                        <h5> First Click </h5>
                    </div>
                    <div className="EtapaTres-Content-Div">
                        <p>
                            O teste de primeiro clique (First Click) consiste em saber qual seria o primeiro clique do usuário para realização de uma tarefa.
                            Nosso teste de First Click foi realizado entre os próprios integrantes desse trabalho por meio da ferramenta <b>Optimal Workshop</b>.
                        </p>
                        <div className="EtapaTres-Sub-Title-Div Title-Odd">
                            <h6> Resultado </h6>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_1} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 1 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para obter mais informações de um serviço ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 100% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_2} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 2 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para receber notificações sobre o Facebook ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 100% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_3} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 3 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para retornar à tela do serviço sem concluir o formulário ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 67% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_4} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 4 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para retornar à tela inicial sem concluir o formulário ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 100% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_5} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 5 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para pesquisar por um serviço ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 100% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={task_6} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div-Even">
                                <h5> Tarefa 6 </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    <b className="Text-Odd">Objetivo:</b> "Onde o você iria clicar para obter mais informações do serviço ?" <br/>
                                    <b className="Text-Odd">Taxa de acerto:</b> 100% <br/>
                                </p>
                            </div>
                        </div>
                        <div className="EtapaTres-Sub-Title-Div Title-Odd">
                            <h6> Sugestões de Redesign </h6>
                        </div>
                        <p>
                            Nenhuma sugestão de redesign foi encontrada para essa avaliação.
                        </p>
                    </div>
                    <div className="EtapaTres-Title-Div Title-Even">
                        <h5> Percurso Cognitivo </h5>
                    </div>
                    <div className="EtapaTres-Content-Div">
                        <p>
                            O Percurso Cognitivo é uma método de avaliação por inspeção.
                            Nós definimos uma tarefa e utilizamos como base o perfil do nosso usuário não corporativo.
                        </p>
                        <div className="EtapaTres-Sub-Title-Div Title-Even">
                            <h6> Tarefa 1 </h6>
                        </div>
                        <p>
                            <b className="Text-Even">Nome:</b> Monitorar o serviço Discord <br/>
                            <b className="Text-Even">Etapas:</b> 4 <br/>
                            <b className="Text-Even">Perfil de usuário:</b> Usuário não corporativo <br/>
                        </p>
                        <div className="div-table-eu">
                            <table className="table-eu EtapaTres-Table">
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even"> Buscar pelo serviço </b> </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even"> Selecionar o serviço </b> </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário tentaria atingir o efeito correto, ou seja, a formulação da interação do usuário seria a esperada pelo designer do sistema ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário tentaria atingir o efeito correto, ou seja, a formulação da interação do usuário seria a esperada pelo designer do sistema ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim</b>. A solução possui uma caixa de busca na barra de navegação com o dizer "Procure por um serviço".
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Não</b>. A solução não exibe informações suficientes para que o usuário entenda o que fazer.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário perceberia que a ação correta está disponível ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário perceberia que a ação correta está disponível ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> A opção possui destaque suficiente.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> O serviço seria a única opção disponível.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário conseguiria associar a ação correta com o efeito que está tentando atingir ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário conseguiria associar a ação correta com o efeito que está tentando atingir ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim</b>. O serviço que o usuário procura estará disponível na tela.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Não.</b> O usuário teria que passar por mais uma tela para ter a opção disponível.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> Se a ação correta for realizada, o usuário perceberia que está progredindo para concluir a tarefa ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> Se a ação correta for realizada, o usuário perceberia que está progredindo para concluir a tarefa ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim</b>. O resultado da ação será exibir o serviço que o usuário procurou.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> O usuário seria redirecionado para a tela de serviço.
                                        </p> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="div-table-eu">
                            <table className="table-eu EtapaTres-Table">
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even"> Selecionar a opção de notificação </b> </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even"> Preencher o formulário </b> </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário tentaria atingir o efeito correto, ou seja, a formulação da interação do usuário seria a esperada pelo designer do sistema ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário tentaria atingir o efeito correto, ou seja, a formulação da interação do usuário seria a esperada pelo designer do sistema ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p>
                                            <b>Sim.</b> A opção está disponível.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> O usuário iria preencher o formulário.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário perceberia que a ação correta está disponível ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário perceberia que a ação correta está disponível ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Não</b>. A opção não possui destaque suficiente.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> O formulário é o único item da tela.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário conseguiria associar a ação correta com o efeito que está tentando atingir ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> O usuário conseguiria associar a ação correta com o efeito que está tentando atingir ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Não.</b> A opção não indica com clareza o que será feito.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> A tela é intuitiva o suficiente.
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> Se a ação correta for realizada, o usuário perceberia que está progredindo para concluir a tarefa ? </b>
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b> Se a ação correta for realizada, o usuário perceberia que está progredindo para concluir a tarefa ? </b>
                                        </p> 
                                    </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Sim.</b> Ele será redirecionado para o formulário.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            <b>Não.</b> O usuário não recebe nenhum feedback após concluir o formulário.
                                        </p> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="EtapaTres-Sub-Title-Div Title-Even">
                            <h6> Sugestões de Redesign </h6>
                        </div>
                        <div className="EtapaTres-Tela-Image-Div">
                            <Zoom> <img className="EtapaTres-Tela-Image" src={inicial_new2} alt="screenshot" /> </Zoom>
                        </div>
                        <div className="EtapaTres-Tela-Content-Div">
                            <div className="EtapaTres-Tela-Content-Title-Div">
                                <h5> Página Inicial </h5>
                            </div>
                            <div className="EtapaTres-Tela-Content-Desc-Div">
                                <p>
                                    Cada serviço possui um ícone que leva o usuário direto a tela de inscrição.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="EtapaTres-Title-Div Title-Odd">
                        <h5> Questões </h5>
                    </div>
                    <div className="EtapaTres-Content-Div"></div>
                    <div className="EtapaTres-Pergunta-Title-Div">
                        <h6> 
                            <b className="Text-Even">1)</b> Retome as suas metas de design e diga se os métodos de avaliação utilizados conseguiram avaliar tais metas. 
                            Se não conseguiram dê detalhes de como estas metas poderiam ser avaliadas. 
                        </h6>
                    </div>
                    <div className="EtapaTres-Pergunta-Content-Div">
                        <p>
                            De acordo com as etapas anteriores e as revisões feitas, definimos duas metas de design para nossa solução: <b className="Text-Even">Eficiência</b> e <b className="Text-Even">Usabilidade</b>.
                        </p>
                        <p>
                            <b className="Text-Even">Meta:</b> Eficiência <br/>
                            <b className="Text-Even">Objetivo:</b> A solução precisa disponibilizar opções para a apresentação dos dados coletados. É essencial para o perfil de usuário corporativo. <br/>
                            <b className="Text-Even">Resultados:</b> A Análise Heurística constatou que o design das telas não foi desenvolvido para atender essa meta. Existe apenas uma forma de visualização gráfica dos serviços. <br/>
                        </p>
                        <p>
                            <b className="Text-Even">Meta:</b> Usabilidade <br/>
                            <b className="Text-Even">Objetivo:</b> O usuário precisa ter facilidade para encontrar um serviço e obter a informação do seu estado. <br/>
                            <b className="Text-Even">Resultados:</b> O First Click e Percurso Cognitivo comprovaram que essa meta foi atendida. <br/>
                        </p>
                    </div>
                    <div className="EtapaTres-Pergunta-Title-Div">
                        <h6> <b className="Text-Even">2)</b> Qual método deu melhor resultado e por que? </h6>
                    </div>
                    <div className="EtapaTres-Pergunta-Content-Div">
                        <p>
                            <b className="Text-Even">Avaliação Heurística</b>. O resultado da prototipação das telas foi muito simples.
                            Assim, as avaliações de First Click e Percurso Cognitivo não encontraram muitos erros na interface, pela baixa quantidade de opções disponíveis nas telas.
                            Contudo, o resultado muito simples da prototipação trouxe uma grande quantidade de erros encontrados na análise heurística.
                        </p>
                    </div>
                    <div className="EtapaTres-Pergunta-Title-Div">
                        <h6> <b className="Text-Even">3)</b> Por que é interessante utilizarmos mais de um método de avaliação? </h6>
                    </div>
                    <div className="EtapaTres-Pergunta-Content-Div">
                        <div className="div-table-eu">
                            <table className="table-eu EtapaTres-Table">
                                <tr className="service-tr-eu">
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even">Análise por diferentes perspectivas</b> </h5> </td>
                                    <td className="td-eu align-center-eu"> <h5> <b className="Text-Even">Os métodos de avaliação são complementares</b> </h5> </td>
                                </tr>
                                <tr className="description-tr-eu">
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            Uma solução deve ser avaliada por quem <b className="Text-Even">concebe, desenvolve e a utiliza</b>. 
                                            Do ponto de vista de quem desenvolve, esse deve estar atento aos requisitos técnicos e a especificações da solução.
                                            Para quem concebe e utiliza, deve ser verificado se solução permite aos usuários atingirem seus objetivos.
                                            Com o uso de mais de um método de avaliação, é possível <b className="Text-Even">usar o(s) método(s) mais adequado(s) a cada perspectiva</b> a fim de obter melhores resultados.
                                        </p>
                                    </td>
                                    <td className="td-eu Myth-Text"> 
                                        <p> 
                                            Os métodos de avaliação diferem entre si por quatro principais aspectos: 
                                            Etapa do ciclo de design em que são aplicados, técnica de coleta de dados, tipo de dados coletados e o tipo de análise dos dados.
                                            Assim, utilizar mais de um método de avaliação permite a <b className="Text-Even">obtenção de resultados de diferentes fontes, tipos e análises</b>.
                                        </p> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="EtapaTres-Pergunta-Title-Div">
                        <h6>
                            <b className="Text-Even">4)</b> Considerando um teste de usabilidade (por exemplo como o realizado com first click) qual seria um número adequado de participantes? Por que?
                        </h6>
                    </div>
                    <div className="EtapaTres-Pergunta-Content-Div">
                        <p>
                            <b className="Text-Even">Entre 10 e 20 participantes</b>. Segundo Jakob Nielsen, o número ideal de participantes é de 5 a 10 por perfil de usuário.
                            Nas etapas anteriores, foram definidas duas personas, logo, o número ideal será entre 10 e 20 participantes.
                        </p>
                    </div>
                    <div className="EtapaTres-Pergunta-Title-Div">
                        <h6>
                            <b className="Text-Even">5)</b> Apresente o road map de todo o processo de design utilizado neste projeto.
                            Relacione todos os métodos utilizados ao longo do processo.
                        </h6>
                    </div>
                    <div class="timeline-1">
                        <div class="container-1 left">
                            <div class="content content-border-1">
                                <h3>Início da Etapa 1 - Análise da situação atual</h3>
                            </div>
                        </div>
                        <div class="container-1 left">
                            <div class="content content-border-1">
                                <h3>Desafio de design</h3>
                            </div>
                        </div>
                        <div class="container-1 right">
                            <div class="content content-border-1">
                                <h3>Pesquisa desk</h3>
                            </div>
                        </div>
                        <div class="container-1 left">
                            <div class="content content-border-1">
                                <h3>Análise competitiva</h3>
                            </div>
                        </div>
                        <div class="container-1 right">
                            <div class="content content-border-1">
                                <h3>Questionário</h3>
                            </div>
                        </div>
                        <div class="container-1 left">
                            <div class="content content-border-1">
                                <h3>Metas de design</h3>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-2">
                        <div class="container-2 right">
                            <div class="content content-border-2">
                                <h3>Início da Etapa 2 - Síntese e Prototipação</h3>
                            </div>
                        </div>
                        <div class="container-2 right">
                            <div class="content content-border-2">
                                <h3>Personas e Cenários</h3>
                            </div>
                        </div>
                        <div class="container-2 left">
                            <div class="content content-border-2">
                                <h3>Modelo de tarefas</h3>
                            </div>
                        </div>
                        <div class="container-2 right">
                            <div class="content content-border-2">
                                <h3>Prototipação</h3>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-3">
                        <div class="container-3 left">
                            <div class="content content-border-3">
                                <h3>Etapa 3 - Avaliação da interação</h3>
                            </div>
                        </div>
                        <div class="container-3 left">
                            <div class="content content-border-3">
                                <h3>Avaliação Heurística</h3>
                            </div>
                        </div>
                        <div class="container-3 right">
                            <div class="content content-border-3">
                                <h3>First Click</h3>
                            </div>
                        </div>
                        <div class="container-3 left">
                            <div class="content content-border-3">
                                <h3>Percurso Cognitivo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EtapaTres }