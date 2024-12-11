import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaInstagram } from 'react-icons/fa'; // Importing Instagram icon


const logoStyle = {
  maxWidth: '95px',
  height: 'auto', // Maintain aspect ratio
}
const instagramIconStyle = {
  position: 'absolute',
  height: 'auto',
  right:'90px',
  fontSize: '24px',
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
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0"
      itemscope="itemscope"
      itemtype="https://schema.org/SiteNavigationElement"
    >
      <div className="container-fluid">
      <Helmet>
        <title>Mozscholars - Descubra Oportunidades</title>
        <meta name="description" content="Encontre as melhores oportunidades para estudantes moçambicanos. 
                                          A MozScholars oferece informações abrangentes sobre bolsas de estudo,
                                           programas de intercâmbio e outras oportunidades de desenvolvimento educacional e profissional." />
        <meta name="keywords" content="scholarships, Mozambican students, education, financial aid, bolsas, IBE, mozscholars, aluno, Mozambique" />
      </Helmet>
        <header
          id="main-header"
          className="absolute top-0 px-20 lg:px-30 w-full z-50 header bg-mono-lightest sticky-header"
        >
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" style={logoStyle} />
            {/* Copyright Info */}
            <p style={copyrightStyle}>&copy; 2024 MozScholars</p>
          </Link>
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
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sobre" onClick={handleLinkClick}>
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:mozscholars@gmail.com"
                onClick={handleLinkClick}
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.ibe.gov.mz/?cat=52"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Bolsas IBE
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Escolas" onClick={handleLinkClick}>
              Escolas 🔍
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Links-Úteis" onClick={handleLinkClick}>
                Links Úteis
              </Link>
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
                <li>
                  <Link
                    className="dropdown-item"
                    to="/Oportunidades-CPLP"
                    onClick={handleLinkClick}
                  >
                    Oportunidades CPLP
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Instagram Icon Link */}
        <a
          href="https://www.instagram.com/mozscholars"
          target="_blank"
          rel="noopener noreferrer"
          style={instagramIconStyle}
        >
          <FaInstagram /> {/* Instagram Icon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
