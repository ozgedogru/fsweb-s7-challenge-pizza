import React from "react";
import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomaPage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pizza" exact>
          <OrderPage />
        </Route>
        <Route path="/siparis">
          <SuccessPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
