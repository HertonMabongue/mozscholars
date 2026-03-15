import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parceirosOpen, setParceirosOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setParceirosOpen(false);
  };

  const isActive = (path) => decodeURIComponent(location.pathname) === decodeURIComponent(path);

  const linkStyle = (path) => ({
    ...s.link,
    ...(isActive(path) ? s.linkActive : {}),
  });

  return (
    <>
      <Helmet>
        <title>Mozscholars - Descubra Oportunidades</title>
        <meta
          name="description"
          content="Encontre as melhores oportunidades para estudantes moçambicanos."
        />
        <meta
          name="keywords"
          content="scholarships, Mozambican students, education, financial aid, bolsas, IBE, mozscholars, aluno, Mozambique"
        />
      </Helmet>

      <nav style={s.nav} itemScope itemType="https://schema.org/SiteNavigationElement">
        <div style={s.inner}>
          {/* Logo */}
          <Link to="/" style={s.brand} onClick={closeAll}>
            <img src={logo} alt="MozScholars Logo" style={s.logo} />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <ul style={s.desktopLinks}>
              <li>
                <Link to="/" style={linkStyle('/')}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/Sobre" style={linkStyle('/Sobre')}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/Bolsas" style={linkStyle('/Bolsas')}>
                  Bolsas
                </Link>
              </li>
              <li>
                <Link to="/Universidades" style={linkStyle('/Universidades')}>
                  Universidades
                </Link>
              </li>
              <li>
                <Link to="/Links-Úteis" style={linkStyle('/Links-Úteis')}>
                  Links Úteis
                </Link>
              </li>
              <li>
                <a
                  href="https://www.ibe.gov.mz/?cat=52"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={s.link}
                >
                  Bolsas IBE
                </a>
              </li>

              {/* Parceiros dropdown */}
              <li style={{ position: 'relative' }}>
                <button
                  style={s.dropBtn}
                  onClick={() => setParceirosOpen((o) => !o)}
                  aria-expanded={parceirosOpen}
                >
                  Parceiros{' '}
                  <ChevronDown
                    size={14}
                    style={{
                      marginLeft: 4,
                      transition: 'transform 0.2s',
                      transform: parceirosOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {parceirosOpen && (
                  <ul style={s.dropdown}>
                    <li>
                      <Link
                        to="/Oportunidades-CPLP"
                        style={s.dropItem}
                        onClick={closeAll}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f4ff')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        Oportunidades CPLP
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="mailto:mozscholars@gmail.com" style={s.ctaBtn}>
                  Contacto
                </a>
              </li>
            </ul>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              style={s.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul style={s.mobileMenu}>
            <li>
              <Link to="/" style={s.mobileLink} onClick={closeAll}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/Sobre" style={s.mobileLink} onClick={closeAll}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/Bolsas" style={s.mobileLink} onClick={closeAll}>
                Bolsas
              </Link>
            </li>
            <li>
              <Link to="/Universidades" style={s.mobileLink} onClick={closeAll}>
                Universidades
              </Link>
            </li>
            <li>
              <Link to="/Links-Úteis" style={s.mobileLink} onClick={closeAll}>
                Links Úteis
              </Link>
            </li>
            <li>
              <a
                href="https://www.ibe.gov.mz/?cat=52"
                target="_blank"
                rel="noopener noreferrer"
                style={s.mobileLink}
                onClick={closeAll}
              >
                Bolsas IBE
              </a>
            </li>
            <li>
              <button style={s.mobileDropBtn} onClick={() => setParceirosOpen((o) => !o)}>
                Parceiros <ChevronDown size={13} style={{ marginLeft: 4 }} />
              </button>
              {parceirosOpen && (
                <Link
                  to="/Oportunidades-CPLP"
                  style={{ ...s.mobileLink, paddingLeft: 24 }}
                  onClick={closeAll}
                >
                  Oportunidades CPLP
                </Link>
              )}
            </li>
            <li>
              <a href="mailto:mozscholars@gmail.com" style={s.mobileCta} onClick={closeAll}>
                Contacto
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

const s = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    fontFamily: 'Arial, sans-serif',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  },
  logo: {
    height: 120,
    width: 'auto',
  },
  brandName: {
    display: 'none',
  },
  desktopLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    display: 'inline-block',
    padding: '8px 14px',
    fontSize: 16,
    fontWeight: 500,
    color: '#333',
    textDecoration: 'none',
    borderRadius: 6,
    transition: 'color 0.2s, background 0.2s',
  },
  linkActive: {
    color: '#0056b3',
    fontWeight: 700,
  },
  dropBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 14px',
    fontSize: 16,
    fontWeight: 500,
    color: '#333',
    background: 'none',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    left: 0,
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    listStyle: 'none',
    padding: '6px 0',
    minWidth: 200,
    zIndex: 100,
  },
  dropItem: {
    display: 'block',
    padding: '10px 16px',
    fontSize: 14,
    color: '#003366',
    textDecoration: 'none',
    borderRadius: 4,
    transition: 'background 0.15s',
  },
  ctaBtn: {
    display: 'inline-block',
    marginLeft: 8,
    padding: '9px 22px',
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#003366',
    borderRadius: 20,
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  hamburger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#003366',
    padding: 6,
  },
  mobileMenu: {
    listStyle: 'none',
    margin: 0,
    padding: '12px 24px 20px',
    borderTop: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    backgroundColor: '#fff',
  },
  mobileLink: {
    display: 'block',
    padding: '10px 0',
    fontSize: 15,
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #f3f3f3',
  },
  mobileDropBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 0',
    fontSize: 15,
    color: '#333',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #f3f3f3',
    width: '100%',
    cursor: 'pointer',
  },
  mobileCta: {
    display: 'inline-block',
    marginTop: 8,
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#003366',
    borderRadius: 20,
    textDecoration: 'none',
  },
};

export default Navbar;
