import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const values = [
  {
    icon: Heart,
    title: 'Profissionalismo',
    description:
      'Construído com cuidado pela comunidade e crença de que cada estudante merece uma oportunidade.',
  },
  {
    icon: Users,
    title: 'Por Estudantes',
    description: 'Criado e mantido por estudantes que compreendem os desafios.',
  },
  {
    icon: Lightbulb,
    title: 'Acessibilidade',
    description: 'Tornando a informação acessível num único lugar.',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Conectando estudantes a oportunidades em África e ao redor do mundo.',
  },
];

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>Sobre a Mozscholars</title>
        <meta
          name="description"
          content="Saiba mais sobre a missão da Mozscholars em conectar estudantes moçambicanos a bolsas de estudo internacionais e recursos educacionais."
        />
        <meta
          name="keywords"
          content="sobre Mozscholars, bolsas de estudo, estudantes moçambicanos, educação, oportunidades"
        />
      </Helmet>

      {/* Hero */}
      <div className="about-hero">
        <img src="/about_hero.jpg" alt="Sobre a Mozscholars" className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            <span className="about-hero__accent">Sobre Nós.</span>
          </h1>
          <p className="about-hero__sub">Por estudantes, para estudantes.</p>
        </div>
      </div>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-mission__text">
          <p className="about-section__eyebrow">A Nossa Missão</p>
          <h2 className="about-section__title">A ponte entre o talento e a oportunidade</h2>
          <p className="about-section__body">
            Na <strong>Mozscholars</strong>, acreditamos que a educação não deve ter barreiras
            financeiras. A nossa missão é clara: conectar estudantes aspirantes a uma variedade de
            oportunidades de bolsas a nível global.
          </p>
          <p className="about-section__body">
            Estamos empenhados em ser a ponte entre o talento moçambicano e as instituições de
            ensino de excelência ao redor do mundo, capacitando uma nova geração de líderes e
            inovadores.
          </p>
        </div>
        <div className="about-mission__img-wrap">
          <img src="/about_hero.jpg" alt="Missão" className="about-mission__img" />
          <div className="about-mission__img-deco about-mission__img-deco--br" />
          <div className="about-mission__img-deco about-mission__img-deco--tl" />
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <div className="about-vision__inner">
          <p className="about-section__eyebrow about-section__eyebrow--light">A Nossa Visão</p>
          <p className="about-vision__body">
            Imaginamos um Moçambique onde nenhum indivíduo talentoso perde uma oportunidade por
            falta de informação. A nossa visão é ser a plataforma de referência que conecta
            estudantes moçambicanos a oportunidades de bolsas de estudo a nível nacional e
            internacional, acessível e sempre atualizada.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__inner">
          <h2 className="about-values__heading">Os Nossos Valores</h2>
          <div className="about-values__grid">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="about-value-card">
                <div className="about-value-card__icon">
                  <Icon size={22} />
                </div>
                <h3 className="about-value-card__title">{title}</h3>
                <p className="about-value-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="about-disclaimer-section">
        <div className="about-disclaimer-inner">
          <div className="disclaimer-box">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-warning"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Aviso Legal Importante
            </h3>
            <p>
              A <strong>MozScholars</strong> estabelece parcerias com algumas das organizações
              listadas na plataforma. No entanto, a maioria das bolsas de estudo apresentadas é
              administrada e concedida exclusivamente pelas respetivas instituições ou fundações,
              sem qualquer envolvimento direto da MozScholars nos seus processos de candidatura,
              critérios de seleção ou decisões finais.
            </p>
            <p>
              A <strong>MozScholars</strong> não se responsabiliza por falhas na candidatura, perda
              de oportunidades ou outros problemas decorrentes do uso das informações
              disponibilizadas. É da responsabilidade do utilizador verificar os requisitos de
              elegibilidade e seguir corretamente os procedimentos definidos pelas organizações
              fornecedoras das bolsas de estudo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2 className="about-cta__title">
          Pronto para descobrir o seu <span className="about-cta__accent">potencial?</span>
        </h2>
        <p className="about-cta__sub">
          Explore oportunidades disponíveis para estudantes moçambicanos.
        </p>
        <Link to="/Bolsas" className="about-cta__btn">
          Ver Bolsas <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default About;
