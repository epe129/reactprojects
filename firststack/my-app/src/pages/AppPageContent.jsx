import React, { useState, useEffect } from "react";

function Eapp() {
  const [nimi, setNimi] = useState("");
  const [kuvaus, setKuvaus] = useState("");
  const [maara, setMaara] = useState("");
  const [tekija, setTekija] = useState("");
  const [hinta, setHinta] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nimi, kuvaus, maara)
    
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nimi: `${nimi}`, kuvaus: `${kuvaus}`, maara: `${maara}`, tekija: `${tekija}`, hinta: `${hinta}` }),
    });
  };


  return (
    <div className="form-page-container">
      <h1 className="form-title">hei, lisää kirja tietokantaan</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="book-form">
          <label className="form-label">kirjan nimi:</label>
          <input className="form-input" name="kirjaNimi" placeholder="nimi" value={nimi} onChange={e => setNimi(e.target.value)} required />

          <label className="form-label">kirjantekijä:</label>
          <input className="form-input" name="kirjaTekija" placeholder="tekijä" value={tekija} onChange={e => setTekija(e.target.value)} required />

          <label className="form-label">kirjanhinta:</label>
          <input type="number" className="form-input" name="kirjaHinta" placeholder="hinta" value={hinta} onChange={e => setHinta(e.target.value)} required />

          <label className="form-label">kirjakuvaus:</label>
          <textarea className="form-textarea" rows={5} name="kirjanKuvaus" placeholder="kuvaus" value={kuvaus} onChange={e => setKuvaus(e.target.value)} required />

          <label className="form-label">kirjajulkaisupäivä:</label>
          <input className="form-input" type="date" placeholder="päivä" value={maara} onChange={e => setMaara(e.target.value)} required />

          <button className="form-submit-btn" type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}

export default Eapp