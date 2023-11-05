import React from "react";
import { Link } from "react-router-dom/";
import "./HomePage.css";
import img from "../assets/banner.png";

function HomePage() {
  return (
    <div className="section">
      <div className="content">
        <h1>Teknolojik Yemekler</h1>
        <h2>
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </h2>
        <div id="order-button">
          <Link id="order-pizza" to="/pizza">
            ACIKTIM
          </Link>
        </div>
      </div>
      <img src={img}></img>
    </div>
  );
}
export default HomePage;
