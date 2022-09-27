import React from "react";
import css from "./item.module.css";

function Item({ name, socialReason, nit, phone, code }) {
  return (
    <div className={css.container}>
      <span>{name} </span>
    </div>
  );
}
export default Item;
