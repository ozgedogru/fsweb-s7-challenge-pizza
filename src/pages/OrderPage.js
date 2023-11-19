import React from "react";
import { Link } from "react-router-dom";
import FormOrder from "../components/FormOrder.js";
import Footer from "../layouts/Footer.jsx";
import Header from "../layouts/Header.js";
import "./OrderPage.css";
import advbanner from "../assets/adv-aseets/adv-form-banner.png";

function OrderPage({ siparis, setSiparis }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <img src={advbanner} alt="banner"></img>
          <div className="menu">
            <Link to="/">Ana Sayfa</Link>
            <> - </>
            <Link to="/pizza" id="selected">
              Sipariş Oluştur
            </Link>
          </div>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="fiyat-sabit">
            <h4>85.50₺</h4>
            <span>4.9</span>
            <span>(200)</span>
          </div>

          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <FormOrder siparis={siparis} setSiparis={setSiparis} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OrderPage;
