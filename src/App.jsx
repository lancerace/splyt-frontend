import React, {Component} from "react"; // { Component} = destructuring syntax
import Grid from "../component/grid";
import Button from "../component/button";
class App extends Component {
  render() {
    console.log("boilerplate testing sourcemap tracking from app.jsx");
    return (
      <Grid>
        <Button text="Testing" />
        <div>testing React Apps Component</div>
      </Grid>
    );
  }
}

export default App;
