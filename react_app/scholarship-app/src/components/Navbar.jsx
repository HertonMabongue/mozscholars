
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const logoStyle = {
  maxWidth: '95px', 
  height: 'auto', // Maintain aspect ratio
};


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0"
     itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
      <div className="container-fluid">
        <header id="main-header" className="absolute top-0 px-20 lg:px-30 w-full z-50 header bg-mono-lightest sticky-header">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" style={logoStyle} />
          </a>
        </header>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="http://mozscholars.co">Início</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sobre">Sobre</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:mozscholars@gmail.com">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="https://www.ibe.gov.mz/?cat=52" target="_blank" rel="noopener noreferrer">Bolsas Oferecidas pelo IBE</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Links-Úteis">Links Úteis</Link>   
            </li>         
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


