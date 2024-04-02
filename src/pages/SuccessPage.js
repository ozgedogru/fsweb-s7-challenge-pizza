import React, { useEffect } from "react";
import "./SuccessPage.css";

function SuccessPage({ siparis }) {
  useEffect(() => {
    console.log("siparis > ", siparis);
  }, []);

  if (!siparis) {
    return <div className="error-message">Sipariş bilgisi bulunamadı.</div>;
  }

  return (
    <div className="spage">
      <div className="scontent">
        <div className="teknolojik-yemekler">
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div className="onay">
          <div>
            <h3>lezzetin yolda</h3>
            <h2>SİPARİŞ ALINDI</h2>
            <hr />
          </div>
        </div>
        <div className="onay-detay">
          <div>
            <h4>Position Absolute Acı Pizza</h4>
            <div className="siparis-bilgi">
              <div>Boyut: {siparis.boyut}</div>
              <div>Hamur: {siparis.hamur}</div>
              <div>Ek Malzemeler: {siparis.malzemeler}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessPage;
