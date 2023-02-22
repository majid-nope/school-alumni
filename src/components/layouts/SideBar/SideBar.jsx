import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../../redux/reducers/authReducer";
import { sidebarRouter } from "../../../routes/routes";
import style from "./SideBar.module.scss";
const SideBar = () => {
  const sidebarNav = sidebarRouter();
  const dispatch = useDispatch();
 

  const onClick = (path) => {
    console.log(path);
    if (path === "/login") {
      dispatch(logout());
      window.location.href = "/login"
    }
  };
  return (
    <div className={style.sidebar}>
      <div>
        {sidebarNav.map((el) => (
          <>
            <li onClick={()=>onClick(el.path)}>
              <span>{el.icon}</span>
              {el.title}
            </li>
          </>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
