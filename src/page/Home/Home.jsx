import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/layouts/NavBar/NavBar";
import SideBar from "../../components/layouts/SideBar/SideBar";
import style from "./Home.module.scss";
const Home = ({ children }) => {
  return (
    <div className={style.home}>
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Home;
