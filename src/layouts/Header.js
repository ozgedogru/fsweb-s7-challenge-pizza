import React from "react";
import { Navbar, NavLink } from "reactstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar className="header">
      <h1>Teknolojik Yemekler</h1>
      <NavLink>Ana Sayfa</NavLink>
      <NavLink>Secenekler</NavLink>
      <NavLink>Siparis Olustur</NavLink>
    </Navbar>
  );
}

export default Header;
