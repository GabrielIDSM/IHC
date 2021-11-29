import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.css';
import './index.css';
import './components/Home.css';
import './components/Navbar.css';
import './components/CompetitiveAnalysis.css';
import './components/EtapaUm.css';
import './components/DeskResearch.css';
import 'react-medium-image-zoom/dist/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);