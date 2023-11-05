import React from "react";
import { Navbar, NavLink } from "reactstrap";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar>
        <h1>Teknolojik Yemekler</h1>
        <div className="menu">
          <NavLink>Ana Sayfa</NavLink>
          <> - </>
          <NavLink id="selected">Sipariş Oluştur</NavLink>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
