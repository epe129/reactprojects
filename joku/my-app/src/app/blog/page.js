"use client"

import style from "./blog.module.css";
import { useEffect, useState } from "react";

export default function blogs() {
  const [message, setMessage] = useState("");
  const naytetaan = []

  useEffect(() => {
    fetch('/api/two')
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    })
  }, [])
  
  for (let i = 0; i < message.length; i++) {
    var li = document.createElement("LI");
    var teksti = document.createTextNode(`Title: ${message[i]["title"]}`);
    naytetaan.push(`${message[i]["title"]}`)
      
    var lineBreak = document.createElement('br'); 
      
    var viiva = document.createElement('hr'); 
    var teksti2 = document.createTextNode(`Blogi: ${message[i]["blogi"]}`);
      
    var button = document.createElement('BUTTON'); 
    var buttonText = document.createTextNode("delete");
    button.setAttribute("id", `${message[i]["title"]}${i}`);
    
    button.appendChild(buttonText);

    li.appendChild(viiva);
    li.appendChild(teksti);
    li.appendChild(lineBreak);
    li.appendChild(teksti2);  

    document.getElementById("myList").appendChild(li);
    document.getElementById("myList").appendChild(button);
    
  }

  for (let x = 0; x < message.length; x++) {
    const b = document.querySelector(`#${message[x]["title"]}${x}`);
    
    b.addEventListener("click", (event) => {
      console.log(b.id)
      fetch('/api/two', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ poista: `${b.id}`}),
      })
      location.reload();
    });
  }
  
  return (
    <main>
        <div className={style.div} >
          <h1 className={style.h1} >Blogi</h1>
          <ul className={style.ul} id="myList">
          </ul>
        </div>
    </main>
  )
}
