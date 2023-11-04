import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function FormOrder() {
  const ekMalzemeList = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const formInitial = {
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
  };
  const [formData, setFormData] = useState(formInitial);

  function submitHandler(e) {
    e.preventDefault();
  }

  function changeHandler(e) {
    const { name, value, checked } = e.target;

    if (name === "boyut" || name === "hamur") {
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
        <Form.Group id="size-dropdown">
          <Form.Label> Boyut Seç </Form.Label>
          <Form.Check
            type="checkbox"
            name="boyut"
            label="Küçük"
            value="Küçük"
            onChange={changeHandler}
            checked={formData.name}
          ></Form.Check>
          <Form.Check
            type="checkbox"
            name="boyut"
            label="Orta"
            value="Orta"
            onChange={changeHandler}
            checked={formData.name}
          ></Form.Check>
          <Form.Check
            type="checkbox"
            name="boyut"
            label="Büyük"
            value="Büyük"
            onChange={changeHandler}
            checked={formData.name}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label> Hamur Seç </Form.Label>
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
        <Form.Group>
          <Form.Label>Ek Malzemeler</Form.Label>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Sipariş Notu</Form.Label>
          <Form.Control
            id="special-text"
            onChange={changeHandler}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <div>
            <button onClick={arttir}>+</button>
            <div>{adet}</div>
            <button onClick={azalt}>-</button>
          </div>
        </Form.Group>
        <div>
          Sipariş Toplamı
          <div>Seçimler</div>
          <div>Toplam {85.5 + formData.malzemeler.length * 5}</div>
        </div>
        <button id="order-button">SİPARİŞ VER</button>
      </Form>
    </div>
  );
}
export default FormOrder;
