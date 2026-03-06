import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/FAQ.css';

const faqs = [
  {
    question: 'Quem pode candidatar-se às bolsas?',
    answer:
      'A maioria das bolsas listadas está disponível para estudantes moçambicanos. Cada bolsa tem os seus próprios requisitos de elegibilidade, verifique a descrição de cada oportunidade para mais detalhes.',
  },
  {
    question: 'Como faço para me candidatar a uma bolsa?',
    answer:
      'Clique na bolsa que lhe interessa. Será redirecionado para o site oficial da organização responsável, onde encontrará as instruções completas de candidatura.',
  },
  {
    question: 'Com que frequência a lista de bolsas é actualizada?',
    answer:
      'A lista é actualizada regularmente à medida que novas oportunidades surgem. Recomendamos que visite o site com frequência para não perder nenhuma oportunidade.',
  },
  {
    question: 'Posso submeter uma bolsa que não está listada?',
    answer:
      'Sim! Se conhece uma oportunidade que não está na nossa lista, pode entrar em contacto connosco através do email mozscholars@gmail.com e iremos avaliar a sua inclusão.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq">
      <div className="faq__header">
        <p className="faq__label">FAQ</p>
        <h2 className="faq__title">Perguntas Frequentes</h2>
        <p className="faq__sub">
          Tem dúvidas? Reunimos as perguntas mais comuns dos nossos utilizadores.
        </p>
      </div>

      <div className="faq__list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}>
            <button
              className="faq__question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`faq__chevron${openIndex === i ? ' faq__chevron--rotated' : ''}`}
              />
            </button>
            <div className="faq__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
