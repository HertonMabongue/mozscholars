import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PiRocketLaunchDuotone, PiGlobeDuotone } from 'react-icons/pi';
import student from '../assets/student.jpg';
import PartnersStrip from './PartnersStrip';
import FAQ from './FAQ';
import '../styles/Home.css';

const steps = [
  {
    num: '01',
    title: 'Explore as Bolsas',
    desc: 'Navegue pela nossa lista atualizada de bolsas.',
  },
  {
    num: '02',
    title: 'Filtre por Interesse',
    desc: 'Encontre bolsas e oportunidades que correspondam ao seu perfil e objetivos.',
  },
  {
    num: '03',
    title: 'Candidate-se',
    desc: 'Aceda ao site oficial de cada bolsa ou oportunidade e siga as instruções de candidatura.',
  },
  {
    num: '04',
    title: 'Conquiste o Futuro',
    desc: 'Realize o seu percurso académico com o apoio das melhores organizações do mundo.',
  },
];

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Mozscholars - Descubra Oportunidades</title>
        <meta
          name="description"
          content="Encontre as melhores oportunidades para estudantes moçambicanos. A MozScholars oferece informações abrangentes sobre bolsas de estudo, programas de intercâmbio e outras oportunidades."
        />
        <meta
          name="keywords"
          content="scholarships, Mozambican students, education, financial aid, bolsas, IBE, mozscholars, aluno, Mozambique"
        />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${student})` }}
      >
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <span className="home-hero__tag">Plataforma de Oportunidades</span>
          <h1 className="home-hero__title">
            Descubra <span>Oportunidades</span>. 
          </h1>
          <p className="home-hero__sub">
            Aceda a oportunidades educacionais e profissionais nacionais e internacionais, reunidas num só lugar.
          </p>
          <div className="home-hero__actions">
            <Link to="/Bolsas" className="home-hero__btn-primary">
              Ver Bolsas Disponíveis
            </Link>
            <Link to="/Links-Úteis" className="home-hero__btn-secondary">
              Links Úteis
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="home-mv">
        <div className="home-mv__inner">
          <div className="home-mv__card home-mv__card--mission">
            <div className="home-mv__icon"><PiRocketLaunchDuotone /></div>
            <h3 className="home-mv__card-label"> A Nossa Missão</h3>
            <p className="home-mv__card-text">
              Democratizar o acesso à informação sobre bolsas e oportunidades educacionais, capacitando estudantes moçambicanos a construírem futuros mais brilhantes — independentemente da sua origem.
            </p>
          </div>
          <div className="home-mv__divider" />
          <div className="home-mv__card home-mv__card--vision">
            <div className="home-mv__icon"><PiGlobeDuotone /></div>
            <h3 className="home-mv__card-label">Nossa Visão</h3>
            <p className="home-mv__card-text">
              Ser a plataforma de referência para estudantes moçambicanos que aspiram a uma educação de excelência, conectando talentos locais com oportunidades globais.
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="home-how">
        <p className="home-how__label">Como Funciona</p>
        <h2 className="home-how__title">Do interesse à candidatura</h2>
        <p className="home-how__sub">
          Em apenas alguns passos, encontre a bolsa certa e candidate-se com confiança.
        </p>
        <div className="home-how__steps">
          {steps.map((step) => (
            <div key={step.num} className="home-how__step">
              <div className="home-how__step-num">{step.num}</div>
              <h3 className="home-how__step-title">{step.title}</h3>
              <p className="home-how__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partners ── */}
      <PartnersStrip />

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA Banner ── */}
      <section className="home-cta">
        <h2 className="home-cta__title">Pronto para começar?</h2>
        <p className="home-cta__sub">
          Explore centenas de bolsas e oportunidades disponíveis agora mesmo para estudantes moçambicanos.
        </p>
        <Link to="/Bolsas" className="home-cta__btn">
          Explorar Bolsas →
        </Link>
      </section>
    </div>
  );
}

export default Home;
