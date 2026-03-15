import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import '../assets/styles/style.css';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1 - Branding */}
        <div style={styles.column}>
          <img src={logo} alt="MozScholars" style={styles.brandLogo} />
          <p style={styles.brandDesc}>
            Plataforma dedicada a oportunidades educacionais e profissionais para moçambicanos.
          </p>
          <a href="mailto:mozscholars@gmail.com" style={styles.contactBtn}>
            <Mail size={15} style={{ marginRight: 6 }} />
            mozscholars@gmail.com
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <MapPin size={15} style={{ color: '#4dabf7' }} />
            <span style={styles.meta}>Moçambique</span>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.sectionTitle}>Links Rápidos</h3>
          <ul style={styles.linkList}>
            <li>
              <Link to="/" style={styles.link}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/Sobre" style={styles.link}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/Bolsas" style={styles.link}>
                Bolsas
              </Link>
            </li>
            <li>
              <Link to="/Universidades" style={styles.link}>
                Universidades
              </Link>
            </li>
            <li>
              <Link to="/Links-Úteis" style={styles.link}>
                Links Úteis
              </Link>
            </li>
            <li>
              <Link to="/Oportunidades-CPLP" style={styles.link}>
                Oportunidades CPLP
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social */}
        <div style={styles.column}>
          <h3 style={styles.sectionTitle}>Siga-nos</h3>
          <div style={styles.socialRow}>
            <a
              href="https://www.instagram.com/mozscholars"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4dabf7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          &copy; {new Date().getFullYear()} MozScholars. Todos os direitos reservados.
          {' · '}
          <Link to="/termos" style={{ color: '#4dabf7', textDecoration: 'none' }}>
            Termos &amp; Condições
          </Link>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#003366',
    color: '#ffffff',
    padding: '48px 20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 1100,
    margin: '0 auto',
    gap: 32,
    paddingBottom: 32,
  },
  column: {
    flex: '1 1 220px',
    minWidth: 200,
  },
  brandLogo: {
    height: 150,
    width: 'auto',
    marginTop: -50,
    marginBottom: -40,
    objectFit: 'contain',
  },
  brandDesc: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#cce0f5',
    marginBottom: 14,
  },
  contactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 13,
    color: '#4dabf7',
    textDecoration: 'none',
  },
  meta: {
    fontSize: 13,
    color: '#cce0f5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 14,
    color: '#ffffff',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  link: {
    color: '#cce0f5',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s',
  },
  socialRow: {
    display: 'flex',
    gap: 16,
    marginTop: 4,
  },
  socialIcon: {
    color: '#ffffff',
    transition: 'color 0.2s',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.15)',
    textAlign: 'center',
    padding: '16px 0',
    marginTop: 8,
  },
  bottomText: {
    fontSize: 12,
    color: '#a0bdd8',
    margin: 0,
  },
};

export default Footer;
