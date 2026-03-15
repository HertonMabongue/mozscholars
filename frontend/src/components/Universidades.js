import { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../styles/Universidades.css';

const ITEMS_PER_PAGE = 18;

function Universidades() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const countryTranslator = useMemo(() => new Intl.DisplayNames(['pt'], { type: 'region' }), []);

  const getCountryNamePt = useCallback(
    (countryName, alphaTwoCode) => {
      if (alphaTwoCode) {
        const translated = countryTranslator.of(alphaTwoCode.toUpperCase());
        if (translated) {
          return translated;
        }
      }
      return countryName || 'Desconhecido';
    },
    [countryTranslator]
  );

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('/data/universities.json');
        if (!response.ok) {
          throw new Error('Falha ao carregar universidades');
        }
        const data = await response.json();
        setUniversities(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Erro ao carregar universidades:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  const countries = useMemo(() => {
    const countryMap = new Map();

    universities.forEach((u) => {
      if (!u.country) {
        return;
      }

      const labelPt = getCountryNamePt(u.country, u.alpha_two_code);
      if (!countryMap.has(u.country)) {
        countryMap.set(u.country, labelPt);
      }
    });

    return [...countryMap.entries()]
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [universities, getCountryNamePt]);

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return universities.filter((u) => {
      const name = (u.name || '').toLowerCase();
      const country = (u.country || '').toLowerCase();
      const province = (u['state-province'] || '').toLowerCase();
      const countryPt = getCountryNamePt(u.country, u.alpha_two_code).toLowerCase();

      const matchesSearch =
        !query ||
        name.includes(query) ||
        country.includes(query) ||
        countryPt.includes(query) ||
        province.includes(query);
      const matchesCountry = !selectedCountry || u.country === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [universities, searchQuery, selectedCountry, getCountryNamePt]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCountry]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const paginationNumbers = useMemo(() => {
    const maxVisible = 5;
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    const adjustedStart = Math.max(1, end - maxVisible + 1);

    const pages = [];
    for (let i = adjustedStart; i <= end; i += 1) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="universidades-page">
      <Helmet>
        <title>Universidades - Mozscholars</title>
        <meta
          name="description"
          content="Pesquise universidades por país com dados globais para apoiar a sua jornada académica."
        />
      </Helmet>

      <header className="universidades-hero">
        <img src="/universidades_hero.jpg" alt="Universidades" className="universidades-hero__bg" />
        <div className="universidades-hero__overlay" />
        <div className="universidades-hero__pattern" />
        <div className="universidades-hero__content">
          <h1 className="universidades-hero__title">Universidades</h1>
          <p className="universidades-hero__subtitle">
            Explore instituições de ensino superior em todo o mundo. Pesquise por nome e filtre por
            país para encontrar rapidamente as melhores opções.
          </p>
        </div>
      </header>

      <section className="universidades-controls-wrap">
        <div className="universidades-controls">
          <div className="universidades-search">
            <Search size={18} className="universidades-search__icon" />
            <input
              type="text"
              placeholder="Pesquisar universidade, país ou província..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="universidades-search__input"
            />
          </div>

          <select
            className="universidades-country-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Todos os países</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <main className="universidades-container">
        {loading ? (
          <div className="universidades-loader">
            <ClipLoader color="#003366" loading={loading} size={48} aria-label="A carregar" />
            <p>A carregar universidades...</p>
          </div>
        ) : error ? (
          <div className="universidades-empty">
            <p>Não foi possível carregar as universidades. Tente novamente mais tarde.</p>
          </div>
        ) : (
          <>
            <p className="universidades-count">
              A mostrar <strong>{filtered.length}</strong> universidade
              {filtered.length !== 1 ? 's' : ''}
            </p>

            {currentItems.length === 0 ? (
              <div className="universidades-empty">
                <p>Nenhuma universidade encontrada para os filtros selecionados.</p>
              </div>
            ) : (
              <>
                <section className="universidades-grid">
                  {currentItems.map((university, index) => {
                    const key = `${university.name}-${university.alpha_two_code || ''}-${index}`;
                    const website = university.web_pages?.[0];

                    return (
                      <article key={key} className="universidade-card">
                        <div className="universidade-card__media">
                          <img
                            src="/universidades_hero.jpg"
                            alt={university.name}
                            className="universidade-card__image"
                            loading="lazy"
                          />
                        </div>

                        <div className="universidade-card__header">
                          <span className="universidade-card__country">
                            {getCountryNamePt(university.country, university.alpha_two_code)}
                          </span>
                          {university.alpha_two_code && (
                            <span className="universidade-card__code">
                              {university.alpha_two_code}
                            </span>
                          )}
                        </div>

                        <h2 className="universidade-card__title">{university.name}</h2>

                        <p className="universidade-card__meta">
                          {university['state-province'] || 'Província'}
                        </p>

                        {website && (
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="universidade-card__link"
                          >
                            Visitar website
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </article>
                    );
                  })}
                </section>

                <nav className="universidades-pagination" aria-label="Paginação">
                  <button
                    type="button"
                    className="universidades-page-btn"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>

                  <div className="universidades-page-numbers">
                    {paginationNumbers.map((page) => (
                      <button
                        key={page}
                        type="button"
                        className={`universidades-page-number ${page === currentPage ? 'universidades-page-number--active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                        aria-current={page === currentPage ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="universidades-page-btn"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Próxima
                    <ChevronRight size={16} />
                  </button>
                </nav>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Universidades;
