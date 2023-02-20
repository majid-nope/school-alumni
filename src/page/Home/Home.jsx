import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/layouts/NavBar/NavBar";
import SideBar from "../../components/layouts/SideBar/SideBar";
import style from "./Home.module.scss";
import { useMediaQuery } from "@mantine/hooks";
const Home = () => {
  const onMedia = useMediaQuery('(min-width: 831px)');

  return (
    <div className={style.home} style={{ display: !onMedia ? "block" : "grid" }}>
      <NavBar />
      {onMedia && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Home;
