import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CompetitiveAnalysis } from './components/CompetitiveAnalysis';
import { EtapaUm } from './components/EtapaUm';
import { EtapaDois } from './components/EtapaDois';
import { EtapaTres } from './components/EtapaTres';
import { DeskResearch } from './components/DeskResearch';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysis/>} />
          <Route path="/etapa-um" element={<EtapaUm/>} />
          <Route path="/etapa-dois" element={<EtapaDois/>} />
          <Route path="/etapa-tres" element={<EtapaTres/>} />
          <Route path="/desk-research" element={<DeskResearch/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;