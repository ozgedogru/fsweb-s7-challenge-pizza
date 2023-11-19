import React, { useState } from "react";
import PageContent from "./layouts/PageContent";

const App = () => {
  const [siparis, setSiparis] = useState();

  // const takeOrder = (sip) =>
  //   axios
  //     .post("https://reqres.in/api/pizza/s7", sip)
  //     .then((response) => {
  //       console.log("Siparisiniz alindi!", response.data);

  //       setSiparis(response.data);
  //       //history.push("/siparis");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <>
      <PageContent siparis={siparis} setSiparis={setSiparis} />
    </>
  );
};
export default App;
