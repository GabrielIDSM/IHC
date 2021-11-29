import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CompetitiveAnalysis } from './components/CompetitiveAnalysis';
import { EtapaUm } from './components/EtapaUm';
import { DeskResearch } from './components/DeskResearch';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysis/>} />
          <Route path="/etapa-um" element={<EtapaUm/>} />
          <Route path="/desk-research" element={<DeskResearch/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;