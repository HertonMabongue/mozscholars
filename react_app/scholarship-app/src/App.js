
import Navbar from './components/Navbar';
import About from './components/About';
import Sources from './components/Sources';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Sobre" element={<About />} />
    <Route path="/Links-Úteis" element={<Sources />} />
  </Routes>
</Router>
  );
}

export default App;
