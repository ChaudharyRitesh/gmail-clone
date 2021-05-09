import React from "react";
import "../styles/SidebarOption.css";

function SidebarOption({ Icon, number, title, selected }) {
  return (
    <div className={`SidebarOption ${selected && "SidebarOption--active"} `}>
      <Icon />
      <h3> {title} </h3>
      <p> {number} </p>
    </div>
  );
}

export default SidebarOption;
