import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { HomeView } from "./views/Home.view";
import { ContactView } from "./views/Contact.view";
import { NotFoundView } from "./views/NotFound";
import { UserView } from "./views/User.view";

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
          <Route component={HomeView} path="/" exact />
          <Route component={ContactView} path="/contato" exact />
          <Route component={UserView} path="/usuario/:userId" />
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
