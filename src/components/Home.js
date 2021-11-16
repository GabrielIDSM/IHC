import { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg'

const services = [
    "O Facebook", "O Youtube", "O Instagram",
    "A Twitch", "O TikTok", "O Spotify",
    "O Zoom", "O Snapchat", "O Whatsapp"
]

const problems = [
    "é meu celular", "é minha internet", "é meu notebook",
    "é meu tablet"
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serviceNameIndex: 0,
            problemNameIndex: 0
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.serviceNameIndex;
            this.setState({ serviceNameIndex: currentIdx + 1 });
            currentIdx = this.state.problemNameIndex;
            this.setState({ problemNameIndex: currentIdx + 1 });
        }, 3500);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let serviceName = services[this.state.serviceNameIndex % services.length];
        let problemName = problems[this.state.problemNameIndex % problems.length];

        return (
            <div className="text-center Home">
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand"> <img className="Logo" src={logo} alt="logo" /> </h3>
                            <nav className="nav nav-masthead justify-content-center">
                                <Link className="nav-link active" to="/"><i className="fas fa-home"></i> Início </Link>
                                <Link className="nav-link" to="/competitive-analysis"><i className="fas fa-times"></i> Análise Competitiva </Link>
                            </nav>
                        </div>
                    </header>

                    <main role="main" className="inner cover">
                        <h1 className="cover-heading"><b>{serviceName}</b> caiu ou <b>{problemName}</b> ?</h1>
                        <h5>Pensando em responder essas e outras perguntas, o 'Is Down ?' tem o objetivo de monitorar os principais serviços da internet.</h5>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="container">
                            <span className="text-light">Desenvolvido por <b>Gabriel Inácio</b>, <b>Rafael Lins</b> e <b>Filipe Galves</b> <br />Universidade Federal Fluminense</span>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export { Home }