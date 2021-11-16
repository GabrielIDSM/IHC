import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CompetitiveAnalysis } from './components/CompetitiveAnalysis';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysis/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;