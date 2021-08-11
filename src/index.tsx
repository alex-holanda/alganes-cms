import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./core/imports.css";
import reportWebVitals from "./reportWebVitals";

import { Navbar } from "./app/components/Navbar";

import { HomeView } from "./app/views/Home.view";
import { ContactView } from "./app/views/Contact.view";
import { NotFoundView } from "./app/views/NotFound";
import { UserView } from "./app/views/User.view";
import { CalcView } from "./app/views/Calc.view";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={HomeView} path="/" exact />
          <Route component={ContactView} path="/contato" exact />
          <Route component={UserView} path="/usuario/:userId" />
          <Route component={CalcView} path="/calc/:a/:b" />
          <Route component={NotFoundView} />
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
