import React from "react";
import { sidebarRouter } from "../../../routes/routes";
import style from "./SideBar.module.scss";
const SideBar = () => {
  const sidebarNav = sidebarRouter();
  return (
    <div className={style.sidebar}>
      <div>
        {sidebarNav.map((el) => (
          <>
            <li>
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
