import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootswatch/dist/pulse/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css/animate.min.css';
import "./index.css";

import Navbar from "./Components/Navbar/Navbar";
import ProfessionalList from "./Components/Professionals/ProfessionalList";
import ProfessionalForm from "./Components/Professionals/ProfessionalForm";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path={["/", "/professional"]} component={ProfessionalList} />
          <Route path="/new-professional" component={ProfessionalForm} />
          <Route path="/update/:id" component={ProfessionalForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();