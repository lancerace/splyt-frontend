import React, { Component } from "react";
/*
CSS module convention with composition concepts
documentation:https://css-tricks.com/css-modules-part-3-react/
*/
import styles from "./styles.css"; //convention of css-loader modularity object naming = styles
class GridWrapper extends Component {
  render() {
    //console.log({style.wrapper}.toString());
    return <div className={styles.wrapper} />;
  }
}

export default GridWrapper;
