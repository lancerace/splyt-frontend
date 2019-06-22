import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <Grid
      container
      justify="center"
      item
      md={12}
      style={{
        border: "0px solid red",
        height: "40vh"
      }}>
      <div>
        <h2>Request the service you need, match with provider. Fast done.</h2>
        Platform for connecting people and services.
      </div>

      {/*title*/}
      <Grid item md={12} style={{ height: "300px", border: "1px solid green" }}>
        <Grid
          item
          md={2}
          style={{
            border: "0.5px solid purple"
          }}>
          <Grid item md style={{ border: "0px solid purple" }}>
            <Button color="primary" variant="contained">
              Look
            </Button>
            <Button color="primary" variant="contained">
              Sell
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
