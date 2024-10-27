import React, { useEffect, useState } from 'react'; 
import { Helmet } from 'react-helmet';
import OportunidadesCPLPlogo from '../assets/OportunidadesCPLPlogo.png';
import Papa from 'papaparse';
import ClipLoader from "react-spinners/ClipLoader";


function OportunidadesCPLP() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const csvUrl = 'https://docs.google.com/spreadsheets/d/11QKlhLr2JOk3BJN7wQYBbi510cknIa_hR794rr1Zvt4/export?format=csv';

      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setOpportunities(result.data);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching and parsing CSV data:", error);
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="container" style={{ marginTop: '100px', paddingTop: '40px', background: 'linear-gradient(135deg, #e6f7ff, #ffffff)', paddingBottom: '40px' }}>
      <Helmet>
        <title>Parcerias da Mozscholars</title>
        <meta name="description" content="Os nossos parceiros." />
        <meta name="keywords" content="Mozscholars, scholarships, Mozambican students, education, Partners, parceiros, bolsas, mozscholars" />
      </Helmet>

      {/* Oportunidades CPLP Section */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <img src={OportunidadesCPLPlogo} alt="Oportunidades CPLP Logo" style={{ maxWidth: '200px', height: 'auto', marginBottom: '10px' }} />
        <h1 style={{ fontSize: '2.5rem' }}>
          <span style={{ color: 'rgb(255, 215, 0)' }}>Oportunidades</span> 
          <span style={{ color: 'black' }}> CPLP</span>
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Oportunidades CPLP é a maior plataforma de descoberta de oportunidades que oferece acesso igual, livre e fácil à oportunidades ilimitadas para cidadãos de países de língua portuguesa.
        </p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.linkedin.com/company/opportunitiescplp/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            LinkedIn
          </a>
          {' | '}
          <a href="https://www.oportunidadescplp.info/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            Website
          </a>
          {' | '}
          <a href="https://www.facebook.com/cplpoportunidades/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            Facebook
          </a>
          {' | '}
          <a href="https://x.com/cplp_op" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            Twitter
          </a>
          {' | '}
          <a href="https://www.instagram.com/oportunidades_cplp/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            Instagram
          </a>
        </div>
      </div>
      
      {/* Opportunities List */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Oportunidades Postadas</h3>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="blue" loading={loading} size={50} />
          </div>
        ) : (
          <ul>
            {opportunities.map((opportunity, index) => (
              <li key={index}>
                <a href={opportunity.Link} target="_blank" rel="noopener noreferrer" className="text-primary-500 group-hover:underline">
                  <h3 className="font-bold text-lg group-hover:text-primary-500" style={{ color: 'blue' }}>
                    {opportunity.Name}
                  </h3>
                </a>
                <p><strong>Descrição:</strong> {opportunity.Description}</p>
                <p><strong>Prazo:</strong> {opportunity.Deadline}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OportunidadesCPLP;
