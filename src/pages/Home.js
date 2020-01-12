import React, { useEffect, useRef, createRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import jsonp from "jsonp";
import fetchJsonp from "fetch-jsonp";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function Home() {
  const map = useRef();
  const [value, setValue] = React.useState(20);

  var splytOffice = { lat: 51.5049375, lng: -0.0964509 };
  global.initMap = () => {
    var mapGoogle = new window.google.maps.Map(map.current, {
      zoom: 4,
      center: splytOffice
    });
  };

  const handleSliderChange = (e, newValue) => {
    setValue(newValue);
    console.log(value);

    fetchJsonp(
      `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${value}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json", json);
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
    /*
    axios({
      method: "get",
      crossdomain: true,
      withCredentials: false,
      headers: {
        "content-type": "application/json"
      },
      proxy: { host: "https://qa-interview-test.qa.splytech.io" },
      url: `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${value}`
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      */
  };

  useEffect(() => {
    //console.log(mapGoogle);

    console.log("componentDidMount");
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAeOBSC7JmahF07Y_qUDCWK__vbswuPYo&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
    console.log("home component");
    console.log(map.current);
  }, []);

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
      <Grid
        style={{ height: "100vh", border: "1px solid red" }}
        container
        item
        md={6}
        justify="center">
        <Grid item md={8}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
            max={50}
            onChange={handleSliderChange}
            value={value}
          />
        </Grid>
        <div ref={map} style={{ height: "500px", width: "100vh" }}></div>
      </Grid>
    </Grid>
  );
}
