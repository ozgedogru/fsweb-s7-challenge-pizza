import React from "react";
import { Link } from "react-router-dom/";
import "./HomePage.css";
import svg1 from "../assets/adv-aseets/icons/1.svg";
import svg2 from "../assets/adv-aseets/icons/2.svg";
import svg3 from "../assets/adv-aseets/icons/3.svg";
import svg4 from "../assets/adv-aseets/icons/4.svg";
import svg5 from "../assets/adv-aseets/icons/5.svg";
import svg6 from "../assets/adv-aseets/icons/6.svg";
import food1 from "../assets/adv-aseets/food-1.png";
import food2 from "../assets/adv-aseets/food-2.png";
import food3 from "../assets/adv-aseets/food-3.png";
import Footer from "../layouts/Footer";

function HomePage() {
  return (
    <div className="hpage">
      <div className="hcontent">
        <div className="background-main">
          <div className="section-content">
            <h1>Teknolojik Yemekler</h1>
            <h3>fırsatı kaçırma</h3>
            <h2>
              KOD ACIKTIRIR <br /> PIZZA, DOYURUR
            </h2>
            <div id="order-button-homepage">
              <Link id="order-pizza" to="/pizza">
                ACIKTIM
              </Link>
            </div>
          </div>
        </div>
        <div className="homepagemenu">
          <ul>
            <li>
              <img src={svg1} alt="kore"></img>
              <p>YENİ! Kore</p>
            </li>
            <li>
              <img src={svg2} alt="pizza"></img>
              <p>Pizza</p>
            </li>
            <li>
              <img src={svg3} alt="burger"></img>
              <p>Burger</p>
            </li>
            <li>
              <img src={svg4} alt="fries"></img>
              <p>Kızartmalar</p>
            </li>
            <li>
              <img src={svg5} alt="fast-food"></img>
              <p>Fast food</p>
            </li>
            <li>
              <img src={svg6} alt="drink"></img>
              <p>Gazlı İçecek</p>
            </li>
          </ul>
        </div>
        <div className="ustsection">
          <div id="temp">
            <div className="lezzetus">
              <div>
                <h2>Özel Lezzetus</h2>
                <p>Position:Absolute Acı Burger</p>
                <button>SİPARİŞ VER</button>
              </div>
            </div>
            <div>
              <div className="hackathlon">
                <div>
                  <h3>Hackathlon Burger Menü</h3>
                  <button>SİPARİŞ VER</button>
                </div>
              </div>
              <div className="npm">
                <div>
                  <h3>
                    <span>Çoooook</span> hızlı <br />
                    npm gibi kurye
                  </h3>
                  <button>SİPARİŞ VER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="altsection">
          <div>
            <h3>en çok paketlenen menüler</h3>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
            <div className="paketler">
              <button>
                <img src={svg1} alt="ramen"></img>
                <p>Ramen</p>
              </button>
              <button>
                <img src={svg2} alt="pizza"></img>
                <p>Pizza</p>
              </button>
              <button>
                <img src={svg3} alt="burger"></img>
                <p>Burger</p>
              </button>
              <button>
                <img src={svg4} alt="f-fries"></img>
                <p>French fries</p>
              </button>
              <button>
                <img src={svg5} alt="fast-food"></img>
                <p>Fast food</p>
              </button>
              <button>
                <img src={svg6} alt="soft-drinks"></img>
                <p>Soft drinks</p>
              </button>
            </div>
            <div className="ucpizza">
              <div>
                <img src={food1} alt="food1"></img>
                <p>Terminal Pizza</p>
                <div>
                  <p>4.9</p>
                  <p>(200)</p>
                  <span>60₺</span>
                </div>
              </div>
              <div>
                <img src={food2} alt="food2"></img>
                <p>Position Absolute Acı Pizza</p>
                <div>
                  <p>4.9</p>
                  <p>(928)</p>
                  <span>85₺</span>
                </div>
              </div>
              <div>
                <img src={food3} alt="food3"></img>
                <p>useEffect Tavuklu Burger</p>
                <div>
                  <p>4.9</p>
                  <p>(462)</p>
                  <span>75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
