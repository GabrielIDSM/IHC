import { Component } from 'react';
import { Navbar } from './Navbar';

class EtapaTres extends Component {
    render() {
        return (
            <div className="EtapaTres">
                <Navbar active="/etapa-tres" />
                <div className="EtapaTres-Content-Main">

                </div>
            </div>
        )
    }
}

export { EtapaTres }