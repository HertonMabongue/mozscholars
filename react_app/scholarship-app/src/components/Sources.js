import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Sample data with categories and descriptions for each source
const sources = [
  {
    name: 'International Scholarships',
    url: 'https://www.internationalscholarships.com',
    category: 'Internacional',
    description: 'Encontre uma ampla variedade de bolsas de estudo internacionais para estudantes de todo o mundo.'
  },
  {
    name: 'FastWeb',
    url: 'https://www.fastweb.com/',
    category: 'Internacional',
    description: 'Uma plataforma para descobrir bolsas de estudo e oportunidades de ajuda financeira.'
  },
  {
    name: 'Scholars4Devs',
    url: 'https://www.scholars4dev.com',
    category: 'Internacional',
    description: 'Bolsas de estudo para estudantes.'
  },
  {
    name: 'Scholarship Portal',
    url: 'https://www.scholarshipportal.com',
    category: 'Internacional',
    description: 'Uma plataforma europeia que lista bolsas de estudo para estudantes de diferentes países.'
  },
  {
    name: 'British Council',
    url: 'https://study-uk.britishcouncil.org/scholarships-funding',
    category: 'Internacional',
    description: 'Explore bolsas de estudo e oportunidades de financiamento para estudar no Reino Unido.'
  },
  {
    name: 'Br Educations',
    url: 'https://www.br.educations.com/scholarships',
    category: 'Internacional',
    description: 'Um recurso global para encontrar bolsas de estudo, ajuda financeira e oportunidades.'
  },
  {
    name: 'Prime Education',
    url: 'https://www.primeducation.co.mz',
    category: 'Nacional',
    description: 'Bolsas de estudo e oportunidades educacionais especificamente para estudantes moçambicanos.'
  },
  {
    name: 'Oportunidades CPLP',
    url: 'https://www.oportunidadescplp.info',
    category: 'Nacional',
    description: 'Oportunidades para estudantes de países de língua portuguesa, incluindo bolsas de estudo e empregos.'
  },
  {
    name: 'EduPortugal',
    url: 'https://eduportugal.eu/',
    category: 'Internacional',
    description: 'Informações sobre bolsas de estudo para estudantes que desejam estudar em Portugal.'
  },
  {
    name: 'Emprego MZ',
    url: 'https://www.emprego.co.mz/',
    category: 'Nacional',
    description: 'Oportunidades de emprego em Moçambique.'
  },
];

function Sources() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtro 
  const filteredSources = sources.filter((source) =>
    source.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ marginTop: '100px', paddingTop: '40px', background: 'linear-gradient(135deg, #e6f7ff, #ffffff)', paddingBottom: '40px' }}>
      <Helmet>
        <title>Links Úteis - Mozscholars</title>
        <meta name="description" content="Links Úteis para bolsas de estudo." />
        <meta name="keywords" content="Mozambique,bolsas,moz, portugal, brazil, estudantes, scholarship links, Mozambican students, education resources, Moz scholars, mozscholars, Bolsas, mozscholars.co" />
      </Helmet>

      <h1 style={{ color: 'rgb(70, 190, 244)', textAlign: 'center' }}>Links Úteis</h1>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Pesquise Oportunidades..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Display filtered sources */}
      <div className="source-categories">
        {['Internacional', 'Nacional'].map((category) => (
          <div key={category}>
            <h3 style={{ color: 'rgb(70, 190, 244)', textAlign: 'center' }}>{category}</h3>
            <div className="source-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {filteredSources
                .filter((source) => source.category === category)
                .map((source, index) => (
                  <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#70b8f9' }}>
                        {source.name}
                      </a>
                    </h4>
                    <p style={{ fontSize: '14px', color: '#555' }}>{source.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sources;
