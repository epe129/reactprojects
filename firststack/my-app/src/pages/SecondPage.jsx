import React, { useState, useEffect } from "react";
import styles from "./SecondPage.module.css";

function First() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data));
  }, [])

  const renderedItems = [];
  for (let i = 0; i < message.length; i++) {
    renderedItems.push(
      <div className={styles.bookCard} key={i}>
        <div className={styles.bookField}><strong>Kirjan nimi:</strong> {message[i][0]}</div>
        <div className={styles.bookField}><strong>kirjantekijä:</strong> {message[i][1]}</div>
        <div className={styles.bookField}><strong>kuvaus:</strong> {message[i][2]}</div>
        <div className={styles.bookField}><strong>päivämäärä:</strong> {message[i][3]}</div>
        <div className={styles.bookField}><strong>kirjanhinta:</strong> {message[i][4]}€</div>
      </div>
    );
  }
  
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>hei, katso kirjoja tietokannasta</h1>
      <div className={styles.booksList}>
        {renderedItems}
      </div>
    </div>
  );
}

export default First
