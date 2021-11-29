import { Component } from 'react';
import { Navbar } from './Navbar';
import Zoom from 'react-medium-image-zoom'

import desk from '../images/desk.png'

class DeskResearch extends Component {
    render() {
        return (
            <div className="text-center">
                <Navbar active="" />
                <div className="content-dr d-flex h-100 p-3 mx-auto flex-column">
                    <div className="DR-Image-Div"> 
                        <Zoom> <img className="DR-Image" src={desk} alt="screenshot" /> </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export { DeskResearch }