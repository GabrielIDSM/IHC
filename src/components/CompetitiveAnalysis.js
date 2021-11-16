import { Component } from 'react';
import { Navbar } from './Navbar';

class CompetitiveAnalysis extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div>
                <Navbar active="/competitive-analysis"/>
            </div>
        )
    }
}

export { CompetitiveAnalysis }