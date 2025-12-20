import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";

function Eapp() {
  const [message, setMessage] = useState("");
  const [nimi, setNimi] = useState("");
  const [kuvaus, setKuvaus] = useState("");
  const [maara, setMaara] = useState("");
  const [tekija, setTekija] = useState("");
  const [hinta, setHinta] = useState("");
  
  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  }, []);

  console.log(message)

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
    <>
      <h1>hei, lisää kirja tietokantaan</h1>

      <div style={{display: "flex", margin: "0 auto", position: "absolute", left: "50%", right: "50%"}}>
        <form onSubmit={handleSubmit} style={{ width: "180px"}}>
          <label style={{ float: "left"}}>
            kirjanimi: 
          </label>
          <input style={{ float: "left"}} name="kirjaNimi" placeholder="nimi" value={nimi} onChange={e => setNimi(e.target.value)} />
          
          <label style={{ float: "left"}}>
            kirjantekijä: 
          </label>
          <input style={{ float: "left"}} name="kirjaTekija" placeholder="tekijä" value={tekija} onChange={e => setTekija(e.target.value)} />

          <label style={{ float: "left"}}>
            kirjanhinta: 
          </label>
          <input type="number" style={{ float: "left"}} name="kirjaHinta" placeholder="hinta" value={hinta} onChange={e => setHinta(e.target.value)} />

          <label style={{ float: "left"}}>
            kirjakuvaus: 
          </label>
          <textarea style={{ float: "left"}} rows={10} cols={50} name="kirjanKuvaus" placeholder="kuvaus"  value={kuvaus} onChange={e => setKuvaus(e.target.value)}  />
          
          <label style={{ float: "left"}}>
            kirjajulkaisupäivä: 
          </label>
          <input style={{ float: "left", marginBottom: "20px"}} type="date" placeholder="päivä"  value={maara} onChange={e => setMaara(e.target.value)} />
          
          <button style={{ float: "left", border: "none", backgroundColor: "#00bedbff", fontSize: "1rem", borderRadius: "5px", cursor: "pointer"}} type="submit">Submit form</button>
        </form>
      </div>

    </>
  )
}

export default Eapp