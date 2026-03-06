import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Termos.css';

const sections = [
  {
    title: '1. Definições',
    content: [
      '"MozScholars", "nós", "nós" refere-se à plataforma MozScholars.',
      '"Plataforma" significa a página web MozScholars e os serviços associados.',
      '"Utilizador" significa qualquer pessoa que aceda ou utilize a Plataforma.',
      '"Bolsa de Estudo" significa qualquer oportunidade de financiamento académico ou de emprego listada na Plataforma.',
      '"Parceiro" significa qualquer organização com a qual a MozScholars tenha estabelecido uma relação de colaboração formal.',
      '"Informação Pessoal" tem o significado previsto na legislação de proteção de dados aplicável.',
    ],
  },
  {
    title: '2. Aceitação dos Termos',
    content: [
      'Ao aceder ou utilizar a Plataforma, o utilizador aceita os presentes Termos e Condições na sua totalidade.',
      'A MozScholars reserva-se o direito de atualizar os presentes Termos a qualquer momento, sendo as alterações comunicadas através da Plataforma.',
    ],
  },
  {
    title: '3. Natureza da Plataforma',
    content: [
      'A MozScholars é uma plataforma informativa que agrega e divulga oportunidades de bolsas de estudo para estudantes.',
      'A MozScholars estabelece parcerias com algumas das organizações listadas. Contudo, a maioria das bolsas são administradas exclusivamente pelas respetivas instituições, sem envolvimento direto da MozScholars nos processos de candidatura.',
      'A MozScholars não é parte integrante de nenhum contracto celebrado entre o utilizador e as instituições fornecedoras de bolsas de estudo.',
      'Os utilizadores são inteiramente responsáveis por verificar os requisitos de elegibilidade e cumprir os procedimentos de candidatura de cada bolsa.',
    ],
  },
  {
    title: '4. Utilização da Plataforma',
    content: [
      'O utilizador compromete-se a usar a Plataforma apenas para fins legais e de acordo com os presentes Termos.',
      'É proibido utilizar a Plataforma para fins fraudulentos, difamatórios, ou que violem direitos de terceiros.',
      'A MozScholars reserva-se o direito de suspender ou encerrar o acesso de qualquer utilizador que viole estes Termos.',
    ],
  },
  {
    title: '5. Propriedade Intelectual',
    content: [
      'Todo o conteúdo da Plataforma, incluindo textos, logótipos, imagens e design, é propriedade da MozScholars ou dos seus parceiros e está protegido por direitos de autor.',
      'É proibida a reprodução, distribuição ou utilização comercial de qualquer conteúdo sem autorização prévia e escrita da MozScholars.',
    ],
  },
  {
    title: '6. Limitação de Responsabilidade',
    content: [
      'A MozScholars não garante a exatidão, completude ou atualidade das informações sobre bolsas publicadas na Plataforma.',
      'A MozScholars não se responsabiliza por perdas ou danos resultantes da utilização das informações disponibilizadas, incluindo candidaturas recusadas ou perdas de prazos.',
      'A MozScholars não se responsabiliza por quaisquer decisões tomadas pelos utilizadores com base nas informações da Plataforma.',
    ],
  },
  {
    title: '7. Privacidade',
    content: [
      'A MozScholars respeita a privacidade dos seus utilizadores. As informações recolhidas são utilizadas exclusivamente para melhorar a experiência na Plataforma.',
      'Não partilhamos dados pessoais dos utilizadores com terceiros sem consentimento, exceto quando exigido por lei.',
    ],
  },
  {
    title: '8. Alterações',
    content: [
      'A MozScholars pode, a qualquer momento e sem aviso prévio, modificar, suspender ou descontinuar qualquer aspeto da Plataforma.',
      'Podemos igualmente terminar ou restringir o acesso de qualquer utilizador por violação destes Termos.',
    ],
  },
  {
    title: '9. Lei Aplicável',
    content: [
      'Qualquer litígio decorrente da utilização da Plataforma será submetido aos tribunais competentes de Moçambique.',
    ],
  },
  {
    title: '10. Contacto',
    content: [
      'Para questões relacionadas com estes Termos e Condições, contacte-nos através de: mozscholars@gmail.com',
    ],
  },
];

function Termos() {
  return (
    <div className="termos-page">
      <Helmet>
        <title>Termos e Condições - MozScholars</title>
        <meta
          name="description"
          content="Termos e Condições de utilização da plataforma MozScholars."
        />
      </Helmet>

      <div className="termos-hero">
        <p className="termos-hero__eyebrow">Documentos Legais</p>
        <h1 className="termos-hero__title">Termos e Condições</h1>
        <p className="termos-hero__meta">
          Entrada em vigor: Março de 2026 &nbsp;·&nbsp; Última atualização: Março de 2026
        </p>
      </div>

      <div className="termos-container">
        <div className="termos-summary">
          <span className="termos-summary__label">Resumo</span>
          <p>
            A MozScholars é uma plataforma informativa que divulga oportunidades de bolsas de estudo
            para estudantes moçambicanos. Ao utilizar a Plataforma, aceita estes Termos. A
            MozScholars não é responsável pelas decisões das instituições fornecedoras de bolsas.
            Cabe ao utilizador verificar os requisitos de cada oportunidade. Em caso de dúvidas,
            contacte-nos em <a href="mailto:mozscholars@gmail.com">mozscholars@gmail.com</a>.
          </p>
        </div>

        {sections.map((s) => (
          <div key={s.title} className="termos-section">
            <h2 className="termos-section__title">{s.title}</h2>
            <ul className="termos-section__list">
              {s.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Termos;
