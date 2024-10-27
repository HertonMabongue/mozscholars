import React, { useEffect, useState } from 'react'; 
import styles from "../styles";
import api from '../api'; 
import student from '../assets/student.jpg';
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from 'react-helmet';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };
    
function Home() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScolarships = async () => {
      try {
        const response = await api.get('/');

        const cleanedData = response.data.map((scholarship) => ({
          ...scholarship,
          Name: scholarship.Name.replace(/[\r\n]+/g, ' '),
          Description: scholarship.Description.replace(/[\r\n]+/g, ' '),
          Nationality: scholarship.Nationality.replace(/[\r\n]+/g, ' '),
          Programs: scholarship.Programs.replace(/[\r\n]+/g, ' '),
          Host_countries: scholarship.Host_countries.replace(/[\r\n]+/g, ' '),
          More_info: scholarship.More_info.replace(/[\r\n]+/g, ' ')
        }));
  
        setScholarships(cleanedData); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setLoading(false);
      }
    };
    

      fetchScolarships(); 
  }, []); 

  return (
    <div className="bg-white w-full overflow-hidden pt-30">
      <Helmet>
        <title>Mozscholars - Descubra Oportunidades</title>
        <meta name="description" content="Encontre as melhores oportunidades para estudantes moçambicanos. 
                                          A MozScholars oferece informações abrangentes sobre bolsas de estudo,
                                           programas de intercâmbio e outras oportunidades de desenvolvimento educacional e profissional." />
        <meta name="keywords" content="scholarships, Mozambican students, education, financial aid, bolsas, IBE, mozscholars, aluno, Mozambique" />
      </Helmet>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${student}) no-repeat center`,
          backgroundSize: 'cover',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="flex items-center justify-center text-center relative text-white font-bold text-2xl md:text-3xl"
      >
        <h1 className="pb-4">Descubra Bolsas de Estudo!</h1>
      </div>
      <h2 className="text-2xl font-bold text-center mt-0 mb-1">Lista de Bolsas</h2>
      <div className="container mt-5 bg-white">
      {loading ? (
          <div className="flex justify-center items-center ">
            <ClipLoader color="blue" loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner"  
            data-testid="loader"/>
          </div>
        ) : (
        <ul>
          {scholarships.map((scholarship) => (
            <li key={scholarship.id}>
              <a href={scholarship.More_info} target="_blank" rel="noopener noreferrer" className="text-primary-500 group-hover:underline">
                <h3 className="font-bold text-lg group-hover:text-primary-500" style={{ color: 'blue' }}>
                  {scholarship.Name}
                </h3>
              </a>
              <p><strong>Descrição:</strong> {scholarship.Description}</p>
              <p><strong>Nacionalidade:</strong> {scholarship.Nationality}</p>
              <p><strong>Cursos:</strong> {scholarship.Programs}</p>
              <p><strong>Países anfitriões:</strong> {scholarship.Host_countries}</p>
             
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default Home;