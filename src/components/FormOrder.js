import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./FormOrder.css";

function FormOrder() {
  const ekMalzemeList = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
  ];

  const formInitial = {
    isim: "Position Absolute Acı Pizza",
    boyut: "",
    hamur: "",
    malzemeler: [],
    ozel: "",
  };
  const [formData, setFormData] = useState(formInitial);

  function submitHandler(e) {
    e.preventDefault();
  }

  function changeHandler(e) {
    const { name, value, checked } = e.target;

    if (name === "boyut" || name === "hamur" || name === "ozel") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "malzemeler") {
      if (checked) {
        setFormData({
          ...formData,
          malzemeler: [...formData.malzemeler, value],
        });
      } else {
        setFormData({
          ...formData,
          malzemeler: formData.malzemeler.filter((m) => m !== value),
        });
      }
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [adet, setAdet] = useState(1);

  function arttir() {
    setAdet(adet + 1);
  }

  function azalt() {
    if (adet > 0) {
      setAdet(adet - 1);
    }
  }

  return (
    <div>
      <Form id="pizza-form" onSubmit={submitHandler}>
        <div className="boyut-hamur">
          <div className="boyut">
            <Form.Group id="size-dropdown">
              <Form.Label>
                {" "}
                Boyut Seç <span>*</span>
              </Form.Label>
              <Form.Check
                type="radio"
                name="boyut"
                label="Küçük"
                value="Küçük"
                onChange={changeHandler}
                checked={formData.name}
              ></Form.Check>
              <Form.Check
                type="radio"
                name="boyut"
                label="Orta"
                value="Orta"
                onChange={changeHandler}
                checked={formData.name}
              ></Form.Check>
              <Form.Check
                type="radio"
                name="boyut"
                label="Büyük"
                value="Büyük"
                onChange={changeHandler}
                checked={formData.name}
              ></Form.Check>
            </Form.Group>
          </div>
          <div className="hamur">
            <Form.Group id="dough-check">
              <Form.Label>
                {" "}
                Hamur Seç <span>*</span>{" "}
              </Form.Label>
              <Form.Select
                name="hamur"
                value={formData.hamur}
                onChange={changeHandler}
              >
                <option value={""} default disabled>
                  Hamur Kalınlığı
                </option>
                <option value="İnce Kenar">İnce Kenar</option>
                <option value="Klasik Kenar">Klasik Kenar</option>
                <option value="Kalın Kenar">Kalın Kenar</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>
        <div className="malzeme">
          <Form.Group className="malzeme">
            <Form.Label>Ek Malzemeler</Form.Label>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ek-malzeme">
              {ekMalzemeList.map((malzeme, index) => (
                <Form.Check
                  type="checkbox"
                  name="malzemeler"
                  key={index}
                  label={malzeme}
                  value={malzeme}
                  onChange={changeHandler}
                ></Form.Check>
              ))}
            </div>
          </Form.Group>
        </div>
        <div className="siparis-notu">
          <Form.Group>
            <Form.Label>Sipariş Notu</Form.Label>
            <Form.Control
              id="special-text"
              name="ozel"
              onChange={changeHandler}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text"
              value={formData.ozel}
            ></Form.Control>
          </Form.Group>
          <hr id="cizgi" />
        </div>
        <div className="fiyat">
          <div className="adet-buton">
            <button id="azalt" onClick={azalt}>
              -
            </button>
            <div>{adet}</div>
            <button id="arttir" onClick={arttir}>
              +
            </button>
          </div>
          <div className="siparis">
            <div className="sip-content">
              <div id="baslik">Sipariş Toplamı</div>
              <div id="secim">
                <div>Seçimler</div>
                <div>{formData.malzemeler.length * 5}</div>
              </div>
              <div id="toplam">
                <div>Toplam</div>
                <div>{adet * (85.5 + formData.malzemeler.length * 5)}</div>
              </div>
            </div>
            <Link id="order-button" to="/siparis">
              SİPARİŞ VER
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default FormOrder;
