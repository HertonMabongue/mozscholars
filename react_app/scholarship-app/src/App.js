
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Sources from './components/Sources';
import Home from './components/Home';
import OportunidadesCPLP from './components/OportunidadesCPLP';
import FindSchools from './components/FindSchools';
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
        <Route path="/Escolas" element={<FindSchools />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
