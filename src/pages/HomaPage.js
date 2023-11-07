import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import img from "../assets/banner.png";

function HomePage() {
  return (
    <div className="hpage">
      <div className="content">
        <div className="section-content">
          <h1>Teknolojik Yemekler</h1>
          <h2>
            KOD ACIKTIRIR <br /> PIZZA, DOYURUR
          </h2>
          <div id="order-button-homepage">
            <Link id="order-pizza" to="/pizza">
              ACIKTIM
            </Link>
          </div>
        </div>
        <div className="section-img">
          <img src={img}></img>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
