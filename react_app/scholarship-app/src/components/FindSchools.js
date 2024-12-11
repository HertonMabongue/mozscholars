import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // for proper map rendering
import { Helmet } from 'react-helmet';
import L from 'leaflet';


const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


function FindSchools() {
  const [schools, setSchools] = useState([]);
  const [searchType, setSearchType] = useState("provincia");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return alert("Insira texto!");

    setLoading(true);
    try {
      const response = await fetch(
        `https://moz-schools-api.vercel.app/api/mz/schools/${searchType}/${query}`
      );
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        paddingTop: "40px",
        background: "linear-gradient(135deg, #e6f7ff, #ffffff)",
        paddingBottom: "40px",
      }}
    >
        <Helmet>
        <title>Encontre Escolas</title>
        <meta name="description" content="Escolas" />
        <meta name="keywords" content="Mozscholars, scholarships, Mozambican students, 
        education, Partners, parceiros, bolsas, mozscholars, escolas, secundaria, schools" />
      </Helmet>
      <h1 style={{ color: "rgb(70, 190, 244)" }}>
        <strong>Encontre Escolas</strong>
      </h1>
      <div className="mb-3">
        <label htmlFor="searchType" className="form-label">
          Filtrar por:
        </label>
        <select
          id="searchType"
          className="form-select"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="provincia">Província</option>
          <option value="distrito">Distrito</option>
          <option value="localidade">Localidade</option>
          <option value="posto">Posto Distrital</option>
        </select>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Escreva..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Procurando..." : "Pesquisar"}
      </button>

      {schools.length > 0 && (
        <div className="mt-5">
          <h2>Resultados: {schools.length}</h2>
          <ul className="list-group">
            {schools.map((school) => (
              <li
                key={school.codigo}
                className="list-group-item"
                style={{
                  minHeight: "200px", 
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <h5>{school.nome}</h5>
                <p>
                  <strong>Provincia:</strong> {school.provincia} |{" "}
                  <strong>Distrito:</strong> {school.distrito}
                </p>
                <p>
                  <strong>Posto:</strong> {school.posto} |{" "}
                  <strong>Localidade:</strong> {school.localidade}
                </p>
                {/*if latitude and longitude exist */}
                {school.latitude && school.longitude && (
                  <div
                    className="map-container"
                    style={{
                      height: "200px",
                      width: "100%", 
                      maxWidth: "400px", 
                    }}
                  >
                    <MapContainer
                      center={[school.latitude, school.longitude]}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: "100%", width: "100%" }}
                      dragging={false} // Disabling dragging(weird bug?)
                      touchZoom={true} 
                      doubleClickZoom={true} 
                    >
                      <TileLayer
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[school.latitude, school.longitude]} icon={customIcon}>
                        <Popup>
                          {school.nome}
                          <br />
                          {school.provincia}
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FindSchools;
