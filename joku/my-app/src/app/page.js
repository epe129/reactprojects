"use client"

import { useState } from "react";
import style from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  const [blogi, setBlogi] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // this exports the data to python
    fetch('/api/home', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogi: `${blogi}`, title: `${title}`}),
    })

    location.reload();
    
  }

    
  return (
    <main>
        <div className={style.div}>
          <h1 className={style.h1}>Write your blog</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.titletext}>Title: </label><input value={title} onChange={event => setTitle(event.target.value)} className={style.title}></input>
            <br></br>
            <textarea rows="4" cols="50" value={blogi} onChange={event => setBlogi(event.target.value)} autoComplete="off"></textarea>
            <br></br>
            <button className={style.submit} type="submit">submit</button>
          </form>
          <Link href="/blog" className={style.link} >Blogs</Link>
        </div>
    </main>
  )
}
