import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <Grid
      container
      justify="center"
      item
      md={12}
      style={{
        border: "0px solid red"
      }}>
      <h1>
        <b>Choose your plan</b>
      </h1>

      <Grid
        container
        spacing={2}
        justify="center"
        style={{ border: "0px solid blue" }}>
        <Grid item md={3}>
          <Paper>
            <CardHeader title="Basic" />
            <CardContent>asfasfafs</CardContent>
            <CardActions>
              <Link to="/Paypal">
                <Button variant="outlined" color="primary">
                  Get Started
                </Button>
              </Link>
            </CardActions>
          </Paper>
        </Grid>

        <Grid item md={3}>
          <Paper>
            <Card>
              <CardHeader title="Premium" />
              <CardContent>asfasfafs</CardContent>
              <CardActions>
                <Link to="/Paypal">
                  <Button variant="outlined" color="primary">
                    Get Started
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Paper>
        </Grid>

        <Grid item md={3}>
          <Paper>
            <Card>
              <CardHeader title="Business" />
              <CardContent>asfasfafs</CardContent>
              <CardActions>
                <Link to="/Paypal">
                  <Button variant="outlined" color="primary">
                    Get Started
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
