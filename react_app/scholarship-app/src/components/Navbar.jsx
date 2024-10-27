
import logo from '../assets/logo.png';
import { Link} from 'react-router-dom';
import React, {  useState } from 'react'; 




const logoStyle = {
  maxWidth: '95px', 
  height: 'auto', // Maintain aspect ratio
};

const copyrightStyle = {
  fontSize: '12px', 
  color: '#6c757d', // Muted gray color
  marginTop: '-39px',
  whiteSpace: 'nowrap', // Prevents wrapping


};


const Navbar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true); // Initial state: not collapsed

  const handleLinkClick = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapsed state on click
  };

  const myDivClassName = isCollapsed
    ? 'collapse navbar-collapse' // Collapsed state
    : 'navbar-collapse collapse show'; // Expanded state




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0"
     itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
      <div className="container-fluid">
        <header id="main-header" className="absolute top-0 px-20 lg:px-30 w-full z-50 header bg-mono-lightest sticky-header">
        <a className="navbar-brand " href="/">
            <img src={logo} alt="Logo" className="logo" style={logoStyle} />
            {/* Copyright Info */}
            <p style={copyrightStyle}>&copy; 2024 MozScholars</p>

          </a>
        </header>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          onClick={handleLinkClick} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={myDivClassName} id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item" >
              <a className="nav-link"  href="/" >Início</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sobre" onClick={handleLinkClick}>Sobre</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:mozscholars@gmail.com" onClick={handleLinkClick}>Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.ibe.gov.mz/?cat=52" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Bolsas IBE</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Links-Úteis" onClick={handleLinkClick}>Links Úteis</Link>   
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"

                id="parceirosDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Parceiros
              </a>
              <ul className="dropdown-menu" aria-labelledby="parceirosDropdown">
                <li><Link className="dropdown-item" to="/Oportunidades-CPLP" onClick={handleLinkClick}>Oportunidades CPLP</Link></li>
              </ul>
            </li>  
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


