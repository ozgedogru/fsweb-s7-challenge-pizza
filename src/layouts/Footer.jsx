import React from "react";
import "./Footer.css";
import ins1 from "../assets/adv-aseets/insta/li-0.png";
import ins2 from "../assets/adv-aseets/insta/li-1.png";
import ins3 from "../assets/adv-aseets/insta/li-2.png";
import ins4 from "../assets/adv-aseets/insta/li-3.png";
import ins5 from "../assets/adv-aseets/insta/li-4.png";
import ins6 from "../assets/adv-aseets/insta/li-5.png";
import icon1 from "../assets/adv-aseets/icons/icon-1.png";
import icon2 from "../assets/adv-aseets/icons/icon-2.png";
import icon3 from "../assets/adv-aseets/icons/icon-3.png";

function Footer() {
  return (
    <div className="footer">
      <div className="iletisim">
        <h2>
          Teknolojik <br /> Yemekler
        </h2>
        <div>
          <img src={icon1} alt="icon1"></img>
          <p>341 Londonderry Road, Istanbul Türkiye</p>
        </div>
        <div>
          <img src={icon2} alt="icon2"></img>
          <p>aciktim@teknolojikyemekler.com</p>
        </div>
        <div>
          <img src={icon3} alt="icon3"></img>
          <p>+90 216 123 45 67</p>
        </div>
      </div>
      <div className="menu-icerik">
        <h3>Sıccacık Menuler</h3>
        <p>Terminal Pizza</p>
        <p>5 Kişilik Hackathlon Pizza</p>
        <p>useEffect Tavuklu Pizza</p>
        <p>Beyaz Console Frosty</p>
        <p>Testler Geçti Mutlu Burger</p>
        <p>Position Absolute Acı Burger</p>
      </div>
      <div className="instagram">
        <h3>Instagram</h3>
        <img src={ins1} alt="insta1"></img>
        <img src={ins2} alt="insta2"></img>
        <img src={ins3} alt="insta3"></img>
        <img src={ins4} alt="insta4"></img>
        <img src={ins5} alt="insta5"></img>
        <img src={ins6} alt="insta6"></img>
      </div>
    </div>
  );
}
export default Footer;
