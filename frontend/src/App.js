import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Sources from './components/Sources';
import Home from './components/Home';
import Scholarships from './components/Scholarships';
import OportunidadesCPLP from './components/OportunidadesCPLP';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Termos from './components/Termos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        {/* Known routes — with Navbar + Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/Bolsas"
          element={
            <>
              <Navbar />
              <Scholarships />
              <Footer />
            </>
          }
        />
        <Route
          path="/Sobre"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/Links-Úteis"
          element={
            <>
              <Navbar />
              <Sources />
              <Footer />
            </>
          }
        />
        <Route
          path="/Oportunidades-CPLP"
          element={
            <>
              <Navbar />
              <OportunidadesCPLP />
              <Footer />
            </>
          }
        />
        <Route
          path="/termos"
          element={
            <>
              <Navbar />
              <Termos />
              <Footer />
            </>
          }
        />

        {/* 404 — no Navbar or Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
