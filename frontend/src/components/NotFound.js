import React from 'react';
import { Link } from 'react-router-dom';
import { PiSmileySadDuotone } from 'react-icons/pi';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__card">
        <PiSmileySadDuotone className="notfound__icon" />
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Página não encontrada</h1>
        <p className="notfound__sub">
          A página que procura não existe ou foi movida.
        </p>
        <Link to="/" className="notfound__btn">
          ← Voltar ao Início
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
