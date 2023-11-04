import React from "react";
import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomaPage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";
import Header from "./Header";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Route path="/pizza" exact>
        <Header />
        <OrderPage />
      </Route>
      <Route path="/siparis">
        <SuccessPage />
      </Route>
    </div>
  );
}

export default PageContent;
