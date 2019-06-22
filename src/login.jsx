import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider, shadows } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Divider, Message, Input, Label } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";
//import "semantic-ui-css/semantic.min.css";
// Box documentation:  https://material-ui.com/system/basics/#all-inclusive
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  } //end constructor(props)
  //const classes = useStyles();

  render() {
    //BEM JSS
    //  const theme = useTheme();
    /* createMuiTheme({
      //migration to typography v2
      typography: {
        useNextVariants: true
      }
    });*/
    //theme.spacing(2);
    return (
      <Grid container justify="center">
        <Box p={2} boxShadow={2} clone>
          <Paper>
            <Input placeholder="Username" />
            <Label basic color="red" pointing>
              Please enter a value
            </Label>
            <Input placeholder="Password" />
            <Label pointing>Please enter a value</Label>
          </Paper>
        </Box>
        <Divider horizontal>OR</Divider>
      </Grid>
    );
  } //rendee
}
