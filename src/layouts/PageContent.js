import React from "react";
import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomaPage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/pizza" exact>
        <OrderPage />
      </Route>
      <Route path="/siparis" exact>
        <SuccessPage />
      </Route>
      <Route path="*">Page Not Found!</Route>
    </Switch>
  );
}

export default PageContent;
