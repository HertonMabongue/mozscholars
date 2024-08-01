import React from 'react';
import { Helmet } from 'react-helmet';


function About() {
  return (
    <div className="container " style={{ marginTop: '200px', paddingTop: '40px', background: 'linear-gradient(135deg, #e6f7ff, #ffffff)', paddingBottom: '40px' }}>
      <Helmet>
        <title>About Mozscholars - Scholarships for Mozambican Students</title>
        <meta name="description" content="Learn more about Mozscholars, our mission." />
        <meta name="keywords" content="about Mozscholars, scholarships, Mozambican students, education" />
      </Helmet>
      <h1 style={{color:'rgb(70, 190, 244)'}}><strong>Sobre Nós</strong></h1>
      <h2>MozScholars</h2>
      <p>
      Na Mozscholars, entendemos a ambição de buscar a educação superior sem barreiras financeiras. 
      Nossa missão é conectar estudantes aspirantes a uma seleção de bolsas de estudo internacionais e recursos valiosos. 
      Todos sonham em frequentar a universidade gratuitamente, e a Mozscholars se esforça para tornar esse sonho mais acessível, 
      fornecendo acesso a diversas oportunidades de bolsas de estudo e sites úteis.
      </p>
      <p>
      <strong>Aviso Legal:</strong> É importante notar que a MozScholars não tem qualquer afiliação, parceria ou associação com as organizações que fornecem as bolsas de estudo listadas em nosso site.
       As bolsas de estudo são administradas e concedidas exclusivamente pelas respectivas organizações e, como tal, não temos qualquer controle sobre os processos de inscrição, critérios de seleção 
       ou decisões finais relacionadas às bolsas de estudo. A MozScholars não se responsabiliza por quaisquer falhas na inscrição, perda de oportunidades ou quaisquer outros problemas que possam surgir
       do uso das informações disponibilizadas em nosso site. Os usuários são responsáveis por garantir que atendem a todos os requisitos de elegibilidade e por seguir corretamente todos os procedimentos
       de inscrição estipulados pelas organizações fornecedoras das bolsas de estudo.

      </p>
    </div>
  );
}

export default About;