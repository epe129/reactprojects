'use client'

import styles from "./page.module.css";
import { useState } from 'react';

const todos = []

export default function Home() {
  const [tehtava, setTehtava] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    
    let onko = todos.includes(tehtava);
 
    if (onko === false) {
      todos.push(tehtava)    
    } else if  (onko === true) {
      return null;
    } 
    
    for (let i = 0; i < todos.length; i++) {
      var li = document.createElement("LI");
      var teh = document.createTextNode(todos[i]);
        
      var button = document.createElement("BUTTON");
      var buttonName = document.createTextNode("delete");
      button.setAttribute("id", `${tehtava}`);
        
      li.appendChild(teh);
      button.appendChild(buttonName);
    
    }
      
    try {
      document.getElementById("todo").appendChild(li);
      document.getElementById("todo").appendChild(button);
    } catch (error) {
      console.log("moi")
    }


    const b = document.querySelector(`#${tehtava}`);

    b.addEventListener("click", (event) => {

      let index = todos.findIndex(item => item === b.id)

      todos.splice(index, index+1);

      const list = document.getElementById("todo");
      
      if (list.hasChildNodes()) {
        list.removeChild(list.children[index * 2]);
        list.removeChild(list.children[index * 2]);
      }     

    });

  };
  

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Todo app</h1>
      <div className={styles.todoDiv}>
        <form className={styles.form} onSubmit={handleSubmit}>
          Todo: <input className={styles.input} value={tehtava} onChange={e => setTehtava(e.target.value)}/>
        </form>
        <ul id="todo">
        </ul>
      </div>
    </div>
  );
}
