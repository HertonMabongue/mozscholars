import React from 'react';
import { Helmet } from 'react-helmet';


function Sources()  {
    const sources = [
      {
        name: 'International Scholarships',
        url: 'https://www.internationalscholarships.com',

      },
      {
        name: 'FastWeb',
        url: 'https://www.fastweb.com/',
      },
      {
        name: 'Scholars4Devs',
        url:'https://www.scholars4dev.com',
      },
      {
        name: 'Scholarship Portal',
        url: 'https://www.scholarshipportal.com',
      },
      {
        name: 'British Council',
        url:'https://study-uk.britishcouncil.org/scholarships-funding',
      },
      {
        name: 'Br Educations',
        url:'https://www.br.educations.com/scholarships',
        
      },
      {
        name: ' Prime Education',
        url:'https://www.primeducation.co.mz',
      },
      // Add more sources as needed
    ];
  
    return (
      <div className="container " style={{ marginTop: '200px', paddingTop: '40px', background: 'linear-gradient(135deg, #e6f7ff, #ffffff)', paddingBottom: '40px' }}>
         <Helmet>
        <title>Useful Links - Mozscholars</title>
        <meta name="description" content="Find useful links to scholarship resources for Mozambican students on Mozscholars." />
        <meta name="keywords" content="scholarship links, Mozambican students, education resources" />
      </Helmet>
        <h1 style={{color:'rgb(70, 190, 244)'}}>Links Úteis</h1>
        <ul>
          {sources.map((source, index) => (
            <li key={index}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sources;