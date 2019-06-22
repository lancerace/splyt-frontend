import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        item
        md={12}
        style={{
          border: "1px solid red",
          height: "40vh"
        }}>
        <div style={{ fontFamily: "roboto" }}>
          <h2>
            Build your career. At your own time. Pursue your passion. Get
            Connecting people and services.
          </h2>
        </div>
      </Grid>
      {/*title*/}
      <Grid item md={12} style={{ height: "300px", border: "2px solid green" }}>
        <Grid
          alignContent="flex-end"
          item
          md={2}
          style={{
            border: "0.5px solid purple",
            height: "10vh"
          }}>
          <Grid
            item
            md={2}
            style={{ border: "0.5px solid purple", height: "10vh" }}>
            <Button color="primary" variant="contained">
              Look for Service
            </Button>
            <Button color="primary" variant="contained">
              Sell Service
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
