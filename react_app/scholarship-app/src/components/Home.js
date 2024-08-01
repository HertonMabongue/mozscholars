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
        const response = await api.get('/');
        setScholarships(response.data); // Update scholarships state with fetched data
        setLoading(false)
      };
    

      fetchScolarships(); 
  }, []); 

  return (
    <div className="bg-white w-full overflow-hidden pt-30">
      <Helmet>
        <title>Mozscholars - Discover Scholarships for Mozambican Students</title>
        <meta name="description" content="Find the best scholarships for Mozambican students. Mozscholars provides comprehensive scholarship information." />
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