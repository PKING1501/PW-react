import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <React.Fragment>
        <>
  <ul className="navbartext">
    <li>
      <NavLink style={{ color: "white", fontSize: "3.658536585365854vh" }} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white", fontSize: "3.658536585365854vh" }} to="/education">
        Education
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white", fontSize: "3.658536585365854vh" }} to="/achievements">
        Achievements
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white", fontSize: "3.658536585365854vh" }} to="/hobbies">
        Hobbies
      </NavLink>
    </li>
    <li>
      <NavLink style={{ color: "white", fontSize: "3.658536585365854vh" }} to="/contacts">
        Contacts
      </NavLink>
    </li>
    <li>
      <NavLink
        className="adviseform"
        style={{ color: "#ffffff" }}
        to="/advise"
      >
        Advise
      </NavLink>
    </li>
  </ul>
  <pre>
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"        "}
    <hr className="line" style={{ color: "white" }} />
    {"\n"}
    {"    "}
  </pre>
</>

        </React.Fragment>
    )
}