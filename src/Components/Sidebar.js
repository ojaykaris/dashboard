import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className={val.active ? "row active" : "row"}
              onclick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div>
        <button className="logout-btn"> Log out</button>
      </div>
    </div>
  );
}
export default Sidebar;
