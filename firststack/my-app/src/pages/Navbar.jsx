import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css"

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.div}>
        <nav className={style.nav}>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link className={style.link} to="/">Lisää kirja</Link>
            </li>
            <li className={style.li}>
              <Link className={style.link} to="/First">Katso kirjoja</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;