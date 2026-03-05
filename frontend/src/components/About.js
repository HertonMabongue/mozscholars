
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page-container">
      <Helmet>
        <title>Sobre a Mozscholars</title>
        <meta name="description" content="Saiba mais sobre a missão da Mozscholars em conectar estudantes moçambicanos a bolsas de estudo internacionais e recursos educacionais." />
        <meta name="keywords" content="sobre Mozscholars, bolsas de estudo, estudantes moçambicanos, educação, oportunidades" />
      </Helmet>

      <div className="content-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <h1>
            Sobre <span>Nós</span>
          </h1>
          <p className="tagline">Conectando sonhos à educação.</p>
          <div className="divider-line"></div>
        </div>

        {/* Content Section */}
        <div className="main-content-card">
          <p>
            Na <strong>Mozscholars</strong>, acreditamos que a educação superior não deve ter barreiras financeiras. A  missão é clara:
            conectar estudantes aspirantes a uma variedade de oportunidades.
          </p>

          <p>
            Estamos empenhados em ser a ponte entre o talento moçambicano e as instituições de ensino de excelência ao redor do mundo,
            capacitando uma nova geração de líderes e inovadores.
          </p>

          {/* Disclaimer Section */}
          <div className="disclaimer-box">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Aviso Legal Importante
            </h3>
            <p>
              É fundamental salientar que a <strong>MozScholars</strong> não possui qualquer afiliação, parceria ou associação direta com as organizações que oferecem as bolsas de estudo listadas em nosso site.
              As bolsas são administradas e concedidas exclusivamente pelas respectivas instituições ou fundações, e, portanto, não temos controle sobre seus processos de inscrição, critérios de seleção
              ou decisões finais.
            </p>
            <p>
              A <strong>MozScholars</strong> não se responsabiliza por quaisquer falhas na candidatura, perda de oportunidades ou quaisquer outros problemas que possam surgir
              do uso das informações disponibilizadas. É responsabilidade do usuário garantir que todos os requisitos de elegibilidade sejam atendidos e que os procedimentos
              de inscrição sejam seguidos corretamente conforme estipulado pelas organizações fornecedoras das bolsas de estudo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;