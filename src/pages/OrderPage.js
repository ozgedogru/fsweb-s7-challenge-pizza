import React from "react";
import FormOrder from "../components/FormOrder.js";
import Header from "../layouts/Header.js";
import "./OrderPage.css";

function OrderPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h3 id="name-input">Position Absolute Acı Pizza</h3>
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
          <FormOrder />
        </div>
      </div>
    </div>
  );
}
export default OrderPage;
