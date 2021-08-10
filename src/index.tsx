import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Home } from "./views/Home.view";
import { Contact } from "./views/Contact.view";
import { NotFound } from "./views/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Contact} path="/contato" exact />
          <Route component={NotFound} />
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
