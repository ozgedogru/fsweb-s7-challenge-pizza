import React from "react";
import FormOrder from "../components/FormOrder.js";
import Header from "../layouts/Header.js";

function OrderPage() {
  return (
    <div>
      <Header />
      <h3 id="name-input">Position Absolute Acı Pizza</h3>
      <p>85.50₺</p>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <FormOrder />
    </div>
  );
}
export default OrderPage;
