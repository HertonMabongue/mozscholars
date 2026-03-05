import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Search, BookOpen, Globe, Users, SlidersHorizontal, X } from 'lucide-react';
import ClipLoader from 'react-spinners/ClipLoader';
import api from '../api';
import '../styles/Scholarships.css';

function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await api.get('/');
        const cleaned = response.data.map((s) => ({
          ...s,
          Name: s.Name.replace(/[\r\n]+/g, ' '),
          Description: s.Description.replace(/[\r\n]+/g, ' '),
          Nationality: s.Nationality.replace(/[\r\n]+/g, ' '),
          Programs: s.Programs.replace(/[\r\n]+/g, ' '),
          Host_countries: s.Host_countries.replace(/[\r\n]+/g, ' '),
          More_info: s.More_info.replace(/[\r\n]+/g, ' '),
        }));
        setScholarships(cleaned);
      } catch (err) {
        console.error('Error fetching scholarships:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchScholarships();
  }, []);

  const allCountries = useMemo(
    () => [...new Set(scholarships.map((s) => s.Host_countries).filter(Boolean))],
    [scholarships]
  );
  const allPrograms = useMemo(
    () => [...new Set(scholarships.flatMap((s) => s.Programs.split(', ')).filter(Boolean))],
    [scholarships]
  );

  const filtered = useMemo(() => {
    return scholarships.filter((s) => {
      const matchesSearch =
        !searchQuery ||
        s.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.Nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.Host_countries.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCountry = !selectedCountry || s.Host_countries === selectedCountry;
      const matchesProgram = !selectedProgram || s.Programs.includes(selectedProgram);
      return matchesSearch && matchesCountry && matchesProgram;
    });
  }, [scholarships, searchQuery, selectedCountry, selectedProgram]);

  const hasActiveFilters = selectedCountry || selectedProgram;

  return (
    <div className="scholarships-page">
      <Helmet>
        <title>Bolsas de Estudo - Mozscholars</title>
        <meta name="description" content="Todas as bolsas de estudo disponíveis para estudantes moçambicanos." />
      </Helmet>

      {/* Hero */}
      <div className="scholarships-hero">
        <img
          src="/scholarship_hero.jpg"
          alt="Bolsas de Estudo"
          className="scholarships-hero__bg"
        />
        <div className="scholarships-hero__overlay" />
        <div className="scholarships-hero__content">
          <h1 className="scholarships-hero__title">
             <span className="scholarships-hero__accent">Bolsas de Estudo</span>
          </h1>
          <p className="scholarships-hero__sub">
            Explore oportunidades.
          </p>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="scholarships-searchbar-wrap">
        <div className="scholarships-searchbar">
          <div className="scholarships-searchbar__row">
            <div className="scholarships-hero__search-wrap">
              <Search className="scholarships-hero__search-icon" size={18} />
              <input
                type="text"
                placeholder="Pesquise por nome, país ou nacionalidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="scholarships-hero__search-input"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`scholarships-filter-btn ${filtersOpen || hasActiveFilters ? 'scholarships-filter-btn--active' : ''}`}
            >
              <SlidersHorizontal size={16} />
              <span className="scholarships-filter-btn__label">Filtros</span>
            </button>
          </div>

          {filtersOpen && (
            <div className="scholarships-filters">
              <div className="scholarships-filters__group">
                <label className="scholarships-filters__label">País Anfitrião</label>
                <div className="scholarships-filters__chips">
                  {allCountries.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCountry(selectedCountry === c ? null : c)}
                      className={`scholarships-chip ${selectedCountry === c ? 'scholarships-chip--active' : ''}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="scholarships-filters__group">
                <label className="scholarships-filters__label">Nível do Programa</label>
                <div className="scholarships-filters__chips">
                  {allPrograms.map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedProgram(selectedProgram === p ? null : p)}
                      className={`scholarships-chip ${selectedProgram === p ? 'scholarships-chip--active' : ''}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              {hasActiveFilters && (
                <button
                  className="scholarships-filters__clear"
                  onClick={() => { setSelectedCountry(null); setSelectedProgram(null); }}
                >
                  <X size={13} /> Limpar filtros
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="scholarships-container">
        {loading ? (
          <div className="scholarships-loader">
            <ClipLoader color="#003366" loading={loading} size={48} aria-label="Loading Spinner" />
            <p>A carregar bolsas...</p>
          </div>
        ) : error ? (
          <div className="scholarships-error">
            <p>Erro ao carregar as bolsas. Por favor, tente mais tarde.</p>
          </div>
        ) : (
          <>
            <p className="scholarships-count">
              A mostrar <strong>{filtered.length}</strong> bolsa{filtered.length !== 1 ? 's' : ''}
            </p>
            {filtered.length === 0 ? (
              <div className="scholarships-empty">
                <p>Nenhuma bolsa encontrada. Tente ajustar a pesquisa ou os filtros.</p>
              </div>
            ) : (
              <div className="scholarships-grid">
                {filtered.map((scholarship) => (
                  <a
                    key={scholarship.id}
                    href={scholarship.More_info}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scholarship-card"
                  >
                    <div className="scholarship-card__img-wrap">
                      <img
                        src="/bolsas_placeholder.jpg"
                        alt={scholarship.Name}
                        className="scholarship-card__img"
                      />
                      <span className="scholarship-card__apply-badge">
                        <ExternalLink size={12} /> Saber mais
                      </span>
                    </div>

                    <div className="scholarship-card__body">
                      <h3 className="scholarship-card__title">{scholarship.Name}</h3>
                      <p className="scholarship-card__desc">{scholarship.Description}</p>

                      <div className="scholarship-card__details">
                        <p>
                          <Users size={13} className="scholarship-card__detail-icon" />
                          <span className="scholarship-card__detail-label">Nacionalidade:</span> {scholarship.Nationality}
                        </p>
                        <p>
                          <Globe size={13} className="scholarship-card__detail-icon" />
                          <span className="scholarship-card__detail-label">País anfitrião:</span> {scholarship.Host_countries}
                        </p>
                        <p>
                          <BookOpen size={13} className="scholarship-card__detail-icon" />
                          <span className="scholarship-card__detail-label">Programas:</span> {scholarship.Programs}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Scholarships;
