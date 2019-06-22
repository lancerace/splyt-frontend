/**
 * @datecreated 20/12/2018
 * @author LancerAce
 * E.g import { export1 , export2 } from "module-name";
 * Note that <AppContainer> should only wrap a single React component. Mount code inside module.hot.accept() function.
 * documentation: https://github.com/gaearon/react-hot-loader
 * If we want to handle the dynamic request,use BrowserRouter. Otherwise
 * HashRouter to serve static request
 **/
import React from "react"; //sets the name Component to the default export of the 'react' package
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import "../dist/assets/styles.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    document.getElementById("reactApps")
  );
};

//HMR react hot loader by gaearon. method of hot import.
render();
if (module.hot)
  /**
   * module.hot.accept()
   * Accept updates for the given dependencies and fire a callback to react to those updates.
   * @param dependencies
   * @param callback
   */
  module.hot.accept("./App", () => {
    render();
  });
