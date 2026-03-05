import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Search, Globe, MapPin } from 'lucide-react';

const sources = [
  {
    name: 'International Scholarships',
    url: 'https://www.internationalscholarships.com',
    category: 'Internacional',
    tag: 'Bolsas',
    description: 'Ampla variedade de bolsas internacionais para estudantes de todo o mundo.',
  },
  {
    name: 'FastWeb',
    url: 'https://www.fastweb.com/',
    category: 'Internacional',
    tag: 'Bolsas',
    description: 'Plataforma para descobrir bolsas de estudo e oportunidades de ajuda financeira.',
  },
  {
    name: 'Scholars4Devs',
    url: 'https://www.scholars4dev.com',
    category: 'Internacional',
    tag: 'Bolsas',
    description: 'Bolsas de estudo focadas em estudantes de países em desenvolvimento.',
  },
  {
    name: 'Scholarship Portal',
    url: 'https://www.scholarshipportal.com',
    category: 'Internacional',
    tag: 'Portal',
    description: 'Plataforma europeia que lista bolsas para estudantes de diferentes países.',
  },
  {
    name: 'British Council',
    url: 'https://study-uk.britishcouncil.org/scholarships-funding',
    category: 'Internacional',
    tag: 'Reino Unido',
    description: 'Bolsas e financiamento para estudar no Reino Unido.',
  },
  {
    name: 'Br Educations',
    url: 'https://www.br.educations.com/scholarships',
    category: 'Internacional',
    tag: 'Bolsas',
    description: 'Recurso global para bolsas, ajuda financeira e oportunidades educacionais.',
  },
  {
    name: 'EduPortugal',
    url: 'https://eduportugal.eu/',
    category: 'Internacional',
    tag: 'Portugal',
    description: 'Bolsas e informações para estudantes que desejam estudar em Portugal.',
  },
  {
    name: 'Prime Education',
    url: 'https://www.primeducation.co.mz',
    category: 'Nacional',
    tag: 'Educação',
    description: 'Bolsas e oportunidades educacionais para estudantes moçambicanos.',
  },
  {
    name: 'Oportunidades CPLP',
    url: 'https://www.oportunidadescplp.info',
    category: 'Nacional',
    tag: 'CPLP',
    description: 'Oportunidades para países de língua portuguesa — bolsas e empregos.',
  },
  {
    name: 'Emprego MZ',
    url: 'https://www.emprego.co.mz/',
    category: 'Nacional',
    tag: 'Emprego',
    description: 'Oportunidades de emprego em Moçambique.',
  },
];

const CATEGORIES = ['Todas', 'Internacional', 'Nacional'];

function Sources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filtered = sources.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeCategory === 'Todas' || s.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const grouped = ['Internacional', 'Nacional'].reduce((acc, cat) => {
    acc[cat] = filtered.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <div style={p.page}>
      <Helmet>
        <title>Links Úteis - Mozscholars</title>
        <meta name="description" content="Links úteis para bolsas de estudo e oportunidades para estudantes moçambicanos." />
        <meta name="keywords" content="Mozambique, bolsas, portugal, brazil, estudantes, scholarship links, mozscholars" />
      </Helmet>

      {/* Hero */}
      <div style={p.hero}>
        <h1 style={p.heroTitle}>Links Úteis</h1>
        <p style={p.heroSub}>
          Recursos cuidadosamente selecionados para bolsas, emprego e oportunidades educacionais.
        </p>

        {/* Search */}
        <div style={p.searchWrap}>
          <Search size={18} style={p.searchIcon} />
          <input
            type="text"
            placeholder="Pesquise por nome ou descrição..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={p.searchInput}
          />
        </div>

        {/* Category filter pills */}
        <div style={p.pills}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...p.pill,
                ...(activeCategory === cat ? p.pillActive : {}),
              }}
            >
              {cat === 'Internacional' && <Globe size={13} style={{ marginRight: 5 }} />}
              {cat === 'Nacional' && <MapPin size={13} style={{ marginRight: 5 }} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div style={p.resultsMeta}>
        <span style={p.resultsCount}>{filtered.length} recurso{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Cards by section */}
      <div style={p.sections}>
        {['Internacional', 'Nacional'].map((cat) => {
          if (grouped[cat].length === 0) return null;
          return (
            <div key={cat} style={p.section}>
              <div style={p.sectionHeader}>
                {cat === 'Internacional' ? <Globe size={18} style={{ color: '#003366' }} /> : <MapPin size={18} style={{ color: '#003366' }} />}
                <h2 style={p.sectionTitle}>{cat}</h2>
                <span style={p.sectionBadge}>{grouped[cat].length}</span>
              </div>

              <div style={p.grid}>
                {grouped[cat].map((source, i) => {
                  const key = `${cat}-${i}`;
                  const isHovered = hoveredIndex === key;
                  return (
                    <a
                      key={key}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...p.card,
                        ...(isHovered ? p.cardHover : {}),
                      }}
                      onMouseEnter={() => setHoveredIndex(key)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div style={p.cardTop}>
                        <span style={p.tag}>{source.tag}</span>
                        <ExternalLink size={14} style={{ color: '#aaa' }} />
                      </div>
                      <h3 style={p.cardTitle}>{source.name}</h3>
                      <p style={p.cardDesc}>{source.description}</p>
                      <span style={p.cardLink}>Visitar →</span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={p.empty}>
            <p>Nenhum recurso encontrado para "<strong>{searchQuery}</strong>".</p>
          </div>
        )}
      </div>
    </div>
  );
}

const p = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'Arial, sans-serif',
    paddingBottom: 60,
  },
  hero: {
    background: 'linear-gradient(135deg, #003366 0%, #0056b3 100%)',
    padding: '100px 24px 48px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 800,
    color: '#fff',
    margin: '0 0 12px',
    letterSpacing: '-0.5px',
  },
  heroSub: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 520,
    margin: '0 auto 28px',
    lineHeight: 1.6,
  },
  searchWrap: {
    position: 'relative',
    maxWidth: 520,
    margin: '0 auto 20px',
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
  },
  searchInput: {
    width: '100%',
    padding: '13px 16px 13px 42px',
    fontSize: 15,
    border: 'none',
    borderRadius: 30,
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  },
  pills: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '7px 18px',
    fontSize: 13,
    fontWeight: 600,
    borderRadius: 20,
    border: '2px solid rgba(255,255,255,0.4)',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  pillActive: {
    background: '#fff',
    color: '#003366',
    border: '2px solid #fff',
  },
  resultsMeta: {
    maxWidth: 1100,
    margin: '24px auto 0',
    padding: '0 24px',
  },
  resultsCount: {
    fontSize: 13,
    color: '#888',
  },
  sections: {
    maxWidth: 1100,
    margin: '12px auto 0',
    padding: '0 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  section: {},
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#003366',
    margin: 0,
  },
  sectionBadge: {
    backgroundColor: '#e8f0fe',
    color: '#003366',
    fontSize: 12,
    fontWeight: 700,
    padding: '2px 9px',
    borderRadius: 20,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '1px solid #e8edf2',
    borderRadius: 12,
    padding: '20px 22px',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 28px rgba(0,51,102,0.12)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    fontSize: 11,
    fontWeight: 700,
    color: '#0056b3',
    backgroundColor: '#e8f0fe',
    padding: '3px 10px',
    borderRadius: 20,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 8px',
  },
  cardDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 1.6,
    flex: 1,
    margin: '0 0 16px',
  },
  cardLink: {
    fontSize: 13,
    fontWeight: 600,
    color: '#0056b3',
  },
  empty: {
    textAlign: 'center',
    padding: '60px 24px',
    color: '#666',
    fontSize: 15,
  },
};

export default Sources;
