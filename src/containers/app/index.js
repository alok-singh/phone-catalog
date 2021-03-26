import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListingPage from "../listing";
import DetailsPage from "../details";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { config } from "../../data/config";

import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header list={config.header} />
      <Switch>
        <Route key="path-1" exact={true} path="/phones">
          <ListingPage />
        </Route>
        <Route key="path-2" exact={true} path="/phones/:id">
          <DetailsPage />
        </Route>
        <Redirect key="path-6" from="*" to="/phones" />
      </Switch>
      <Footer {...config.footer} />
    </BrowserRouter>
  );
};

export default App;
