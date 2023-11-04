import React, { useState } from "react";
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
    "Sucuk",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const [adet, setAdet] = useState(1);

  function arttir() {
    setAdet(adet + 1);
  }

  function azalt() {
    if (adet > 0) {
      setAdet(adet - 1);
    }
  }

  function submitHandler(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label> Boyut Seç </Form.Label>
          <Form.Check type="checkbox" label="Küçük"></Form.Check>
          <Form.Check type="checkbox" label="Orta"></Form.Check>
          <Form.Check type="checkbox" label="Büyük"></Form.Check>
        </Form.Group>
      </Form>
      <Form.Group>
        <Form.Label> Hamur Seç </Form.Label>
        <Form.Select>
          <option>Hamur Kalınlığı</option>
          <option>İnce Kenar</option>
          <option>Klasik Kenar</option>
          <option>Kalın Kenar</option>{" "}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Ek Malzemeler</Form.Label>
        {ekMalzemeList.map((malzeme, index) => (
          <Form.Check
            type="checkbox"
            key={index}
            label={`${malzeme}`}
          ></Form.Check>
        ))}
      </Form.Group>
      <Form.Group>
        <Form.Label>Sipariş Notu</Form.Label>
        <Form.Control placeholder="Siparişine eklemek istediğin bir not var mı?"></Form.Control>
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
        <div>Toplam</div>
      </div>
      <button id="order-button">SİPARİŞ VER</button>
    </div>
  );
}
export default FormOrder;
