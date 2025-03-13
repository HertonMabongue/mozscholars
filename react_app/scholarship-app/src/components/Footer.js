import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import '../assets/styles/style.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Branding */}
        <div className="footer-brand">
          <h5>MozScholars</h5>
          <p>
            Oportunidades educacionais e profissionais.
          </p>
          <a href="mailto:mozscholars@gmail.com" className="btn-tertiary">
            Contacto
          </a>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Links-Úteis">Links Úteis</Link></li>
            <li><Link to="/Escolas">Encontre Escolas</Link></li>
            <li><Link to="/Oportunidades-CPLP">Oportunidades CPLP</Link></li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div className="footer-social">
          <h5>Siga-nos</h5>
          <a href="https://www.instagram.com/mozscholars" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 MozScholars. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
