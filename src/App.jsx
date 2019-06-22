import React, { Component } from "react"; // { Component} = destructuring syntax
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  } //end constructor(props)

  render() {
    //  const styles = "bgWhite";
    /*  const theme = createMuiTheme({
      spacing: 8
    });*/
    /*
    const theme = {
      spacing: 8
    };
*/
    return (
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    );
  } //end render
} //end class

App.propTypes = {};

App.defaultProps = {};
