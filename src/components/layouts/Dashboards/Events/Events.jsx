import React from "react";
import style from "./Events.module.scss";

const Events = () => {
  return (
    <div className={style.events}>
      <div className={style.header}>
        <h3>Directory</h3>
        <input type="text" />
      </div>
      <div className={style.body}></div>
    </div>
  );
};

export default Events;
