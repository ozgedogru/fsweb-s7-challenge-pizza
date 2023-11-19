import React from "react";
import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomaPage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

function PageContent({ siparis, setSiparis }) {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/pizza" exact>
        <OrderPage siparis={siparis} setSiparis={setSiparis} />
      </Route>
      <Route path="/siparis">
        <SuccessPage siparis={siparis} />
      </Route>
      <Route path="*">Page Not Found!</Route>
    </Switch>
  );
}

export default PageContent;
