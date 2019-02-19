import React, {Component} from "react";
import "bootstrap"; //import plugin individually during production e.g import 'bootstrap/js/dist/button'
class Button extends Component {
  render() {
    return (
      <button type="button" classname={Primary}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  primary: "btn btn-primary"
};

export default Button;
