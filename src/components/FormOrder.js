import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
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
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    ozel: "",
  };
  const [formData, setFormData] = useState(formInitial);
  const [formErrors, setFormErrors] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: "",
    ozel: "",
  });
  const [formValid, setFormValid] = useState(true);
  const history = useHistory();

  const formSchema = Yup.object().shape({
    isim: Yup.string()
      .required("İsim giriniz.")
      .min(2, "İsim en az 2 karakter olmalıdır."),
    boyut: Yup.string().required("Seçiniz."),
    hamur: Yup.string().required("Seçiniz."),
    malzemeler: Yup.array()
      .min(4, "En az 4 malzeme ekleyin.")
      .max(10, "En fazla 10 malzeme ekleyebilirsiniz."),
    ozel: Yup.string(),
  });

  function submitHandler(e) {
    e.preventDefault();

    for (let key in formData) {
      checkValidationFor(key, formData[key]);
    }

    if (formValid) {
      axios
        .post("https://reqres.in/api/pizza/s7", formData)
        .then((response) => {
          console.log("Siparisiniz alindi!", response.data);
          history.push("/siparis");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function changeHandler(e) {
    const { name, value, checked } = e.target;

    if (name !== "malzemeler") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "malzemeler") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData.malzemeler, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData.malzemeler.filter((m) => m !== value),
        });
      }
    }
    checkValidationFor(
      name,
      name === "malzemeler" ? formData.malzemeler : value
    );
  }

  const checkValidationFor = (field, value) => {
    Yup.reach(formSchema, field)
      .validate(field === "malzemeler" ? formData.malzemeler : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [field]: "" });
      })
      .catch((err) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [field]: err.errors[0],
        }));
      });
  };

  const [adet, setAdet] = useState(1);
  function arttir() {
    setAdet(adet + 1);
  }
  function azalt() {
    if (adet > 0) {
      setAdet(adet - 1);
    }
  }

  const [fiyat, setFiyat] = useState(85.5);
  useEffect(() => {
    if (formData.boyut === "Küçük") {
      setFiyat(adet * (80 + formData.malzemeler.length * 5));
    } else if (formData.boyut === "Orta") {
      setFiyat(adet * (85.5 + formData.malzemeler.length * 5));
    } else if (formData.boyut === "Büyük") {
      setFiyat(adet * (90 + formData.malzemeler.length * 5));
    }
  }, [formData, adet]);

  const [secim, setSecim] = useState();
  useEffect(() => {
    setSecim(formData.malzemeler.length * 5);
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setFormValid(valid);
      console.log("Form data >", formData);
    });
  }, [formData]);

  useEffect(() => {
    console.log("Form error > ", formErrors);
  }, [formErrors]);

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
                checked={formData.boyut === "Küçük"}
                isInvalid={!!formErrors.boyut}
              ></Form.Check>
              <Form.Check
                type="radio"
                name="boyut"
                label="Orta"
                value="Orta"
                onChange={changeHandler}
                checked={formData.boyut === "Orta"}
                isInvalid={!!formErrors.boyut}
              ></Form.Check>
              <Form.Check
                type="radio"
                name="boyut"
                label="Büyük"
                value="Büyük"
                onChange={changeHandler}
                checked={formData.boyut === "Büyük"}
                isInvalid={!!formErrors.boyut}
              ></Form.Check>
              <Form.Control.Feedback type="invalid">
                {formErrors.boyut}
              </Form.Control.Feedback>
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
                isInvalid={!!formErrors.hamur}
              >
                <option value={""} default disabled>
                  Hamur Kalınlığı
                </option>
                <option value="İnce Kenar">İnce Kenar</option>
                <option value="Klasik Kenar">Klasik Kenar</option>
                <option value="Kalın Kenar">Kalın Kenar</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formErrors.hamur}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <div className="malzeme">
          <Form.Group className="malzemeler-checkbox">
            <Form.Label>Ek Malzemeler</Form.Label>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ek-malzeme">
              {ekMalzemeList.map((malzeme, index) => (
                <Form.Check
                  type="checkbox"
                  name="malzemeler"
                  key={index}
                  label={malzeme}
                  value={malzeme}
                  onChange={changeHandler}
                  isInvalid={!!formErrors.malzemeler}
                  disabled={
                    formData.malzemeler.length >= 10 &&
                    !formData.malzemeler.includes(malzeme)
                  }
                ></Form.Check>
              ))}
            </div>
            <Form.Control.Feedback type="invalid">
              {formErrors.malzemeler}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="isim">
          <Form.Group>
            <Form.Label>İsim</Form.Label>
            <Form.Control
              id="isim-input"
              name="isim"
              onChange={changeHandler}
              placeholder="İsim"
              type="text"
              value={formData.name}
              isInvalid={!!formErrors.isim}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {formErrors.isim}
            </Form.Control.Feedback>
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
              value={formData.name}
            ></Form.Control>
          </Form.Group>
          <hr id="cizgi" />
        </div>
        <div className="fiyat">
          <div className="adet-buton">
            <button id="azalt" type="button" onClick={azalt}>
              -
            </button>
            <div>{adet}</div>
            <button id="arttir" type="button" onClick={arttir}>
              +
            </button>
          </div>
          <div className="siparis">
            <div className="sip-content">
              <div id="baslik">Sipariş Toplamı</div>
              <div id="secim">
                <div>Seçimler</div>
                <div>{secim}</div>
              </div>
              <div id="toplam">
                <div>Toplam</div>
                <div>{fiyat}</div>
              </div>
            </div>
            <button id="order-button" type="submit">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default FormOrder;
