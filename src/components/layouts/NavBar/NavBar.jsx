import React from "react";
import style from "./NavBar.module.scss";
import img from '../../../assets/images/logo.png'
const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.brand}>
        <img src={img} alt="logo" />
        <span>GMUP School, Chirayil Chunkam
        </span>
      </div>

    </div>
  );
};

export default NavBar;
