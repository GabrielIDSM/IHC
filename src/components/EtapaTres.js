import { Component } from 'react';
import { Navbar } from './Navbar';

import './external/Timeline.css';

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

                    </div>
                    <div className="EtapaTres-Title-Div Title-Odd">
                        <h5> First Click </h5>
                    </div>
                    <div className="EtapaTres-Content-Div">

                    </div>
                    <div className="EtapaTres-Title-Div Title-Even">
                        <h5> Percurso Cognitivo </h5>
                    </div>
                    <div className="EtapaTres-Content-Div">

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