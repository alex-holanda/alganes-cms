import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Navbar } from "./components/Navbar";

const HomeView = React.lazy(() => import("./views/Home.view"));
const ContactView = React.lazy(() => import("./views/Contact.view"));
const NotFoundView = React.lazy(() => import("./views/NotFound"));
const UserView = React.lazy(() => import("./views/User.view"));
const CalcView = React.lazy(() => import("./views/Calc.view"));

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route component={HomeView} path="/" exact />
            <Route component={ContactView} path="/contato" exact />
            <Route component={UserView} path="/usuario/:userId" />
            <Route component={CalcView} path="/calc/:a/:b" />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
