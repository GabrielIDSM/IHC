import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="text-center Navbar">
                <div className="cover-container-navbar d-flex h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand"> <img className="Logo" src={logo} alt="logo"/> </h3>
                            <nav className="nav nav-masthead justify-content-center">
                                <Link className={ this.props.active === "/" ? "nav-link active" : "nav-link" } to="/"><i className="fas fa-home"></i> Início </Link>
                                <Link className={ this.props.active === "/etapa-um" ? "nav-link active" : "nav-link" } to="/etapa-um"> Etapa 1 </Link>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export { Navbar }