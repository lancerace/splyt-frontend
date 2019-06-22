import React from "react";
import Grid from "@material-ui/core/Grid";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Pricing from "./Pricing";
import NavBar from "../component/NavBar/NavBar";
import PaypalGateWay from "./PaypalGateWay";
import Home from "./Home";

export default function Main({ path }) {
  const styles = "bgWhite";

  return (
    <Grid container>
      <NavBar styles={styles}>
        <Grid item md container>
          <Grid item lg={3} md={3}>
            <NavBar.Item to="/Home">Home</NavBar.Item>
          </Grid>
          <Grid item lg={3} md={3}>
            <NavBar.Item to="/Pricing">Pricing</NavBar.Item>
          </Grid>
        </Grid>

        <Grid item md={6} lg={6} />

        <Grid md item container>
          <Grid item md={3} lg={6}>
            <NavBar.Item to="/Login">Login</NavBar.Item>
          </Grid>
          <Grid item md={3} lg={6}>
            <NavBar.Item>Sign Up</NavBar.Item>
          </Grid>
        </Grid>
      </NavBar>
      {/*here onward are content page. do SPA*/}

      <Route path="/Home" component={Home} />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/Paypal" component={PaypalGateWay} />
    </Grid>
  );
}

Main.propTypes = {
  path: PropTypes.string
};
Main.defaultProps = { path: "" };
