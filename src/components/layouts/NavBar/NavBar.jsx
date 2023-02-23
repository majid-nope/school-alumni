import React from "react";
import style from "./NavBar.module.scss";
import img from '../../../assets/images/logo.png'
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/authReducer";
import { useMediaQuery } from "@mantine/hooks";
const NavBar = () => {
  const dispatch = useDispatch()
  const onMedia = useMediaQuery('(min-width: 831px)');
  return (
    <div className={style.navbar}>
      <div className={style.brand}>
        <img src={img} alt="logo" />
        <span>GMUP School Chirayil
        </span>
      </div>
      {onMedia && <Button  onClick={() => dispatch(logout())}>Logout</Button>}

    </div>
  );
};

export default NavBar;
