
import Navbar from './components/Navbar';
import About from './components/About';
import Sources from './components/Sources';
import Home from './components/Home';
import OportunidadesCPLP from './components/OportunidadesCPLP';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Links-Úteis" element={<Sources />} />
        <Route path="/Oportunidades-CPLP" element={<OportunidadesCPLP />} />
      </Routes>
    </Router>
  );
}

export default App;
