import { useState, useEffect } from "react";

const DED = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [detailsList, setDetailsList] = useState([]);
  
    useEffect(() => {
      loadLanguages();
    }, []);
  
    const loadLanguages = async () => {
      try {
        setLoading(true);
        setError("");
  
        const response = await fetch(`https://www.dnd5eapi.co/api/languages`);
        const data = await response.json();
  
        const detailsPromises = data.results.map(async (lang) => {
          const res = await fetch(`https://www.dnd5eapi.co${lang.url}`);
          const detail = await res.json();
          return detail;
        });
  
        const details = await Promise.all(detailsPromises);
  
        setDetailsList(details);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <section className="Main-container">
        <div>
          <h2>Languages of Dungeons & Dragons</h2>
          {loading && <p>Loading data...</p>}
          {error && <p className="Error-txt">{error}</p>}
        </div>
  
        <div className="Card-ded">
          {detailsList.map((lang) => (
            <div key={lang.index} className="Card-dedInfo">
              <p><strong>Name:</strong> {lang.name}</p>
              <p><strong>Type:</strong> {lang.type}</p>
              <p><strong>Speakers:</strong> {lang.typical_speakers || "No info"}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default DED;