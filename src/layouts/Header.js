import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Teknolojik Yemekler</h1>
      <div className="menu">
        <Link to="/">Ana Sayfa</Link>
        <> - </>
        <Link to="/pizza" id="selected">
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}

export default Header;
