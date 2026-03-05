import { useEffect, useRef, useState } from 'react';
import '../styles/PartnersStrip.css';
import OportunidadesCPLPlogo from '../assets/partners/OportunidadesCPLPlogo.png';



const partners = [
  { name: 'Oportunidades CPLP', initials: 'OCPLP',  url: 'https://www.oportunidadescplp.info/',                   logo: OportunidadesCPLPlogo },
  
];

function PartnerLogo({ name, initials, url, logo }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo"
      title={name}
    >
      <div className="partner-logo__badge">
        {logo
          ? <img src={logo} alt={name} className="partner-logo__img" />
          : <span className="partner-logo__initials">{initials}</span>
        }
      </div>
      <span className="partner-logo__name">{name}</span>
    </a>
  );
}

function PartnersStrip() {
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = isHovered ? 'paused' : 'running';
    }
  }, [isHovered]);

  const allPartners = [...partners, ...partners];

  return (
    <section className="partners-strip">
      <div className="partners-strip__header">
        <p className="partners-strip__label">Parceiros</p>
        <h2 className="partners-strip__title">Trabalhamos com organizações mundiais</h2>
      </div>

      <div
        className="partners-strip__track-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="partners-strip__fade-left" />
        <div className="partners-strip__fade-right" />
        <div className="partners-strip__track" ref={trackRef}>
          {allPartners.map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} {...partner} />
          ))}
        </div>
      </div>

      <div className="partners-strip__divider" />
    </section>
  );
}

export default PartnersStrip;
