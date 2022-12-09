import React from "react";
import Planet from "./Planet";
import "./SolarSystem.css";
import { FormGroup, Stack, FormLabel, FormControlLabel, Switch, Slider, IconButton } from "@mui/material";

import RestartAltIcon from '@mui/icons-material/RestartAlt';


import { PLANETS } from "../constants/constants";

const SolarSystem = () => {
  const [settings, setSettings] = React.useState({
    earth: true,
    mars: true,
    sunMassMultiplier: 1,
    speed: 1,
    trueDistance: true,
  });

  const handleSliderChange = (event, newValue) => {
    setSettings({ ...settings, [event.target.name]: newValue });
  };

  const planetRefs = PLANETS.reduce((acc, planet) => {
    acc[planet] = React.createRef();
    return acc;
  }, {});

  return (
    <div className="body">
      <h1 className="header">Math 2420: Earth & Mars Orbital Motion (Euler's application)</h1>
      <div className="sidePanel">
        <br />
        <Stack sx={{ height: 200 }} spacing={1} direction="row">
            <FormLabel>Mass of the Sun</FormLabel>
            <Slider
              aria-label="Small steps"
              name="sunMassMultiplier"
              className="slider"
              orientation="vertical"
              valueLabelDisplay="auto"
              value={settings.sunMassMultiplier}
              step={0.1}
              min={0}
              max={2}
              marks
              onChange={handleSliderChange}
            />
            <FormLabel aria-orientation="vertical">Speed of Planets</FormLabel>
            <Slider
              aria-label="Small steps"
              name="speed"
              className="slider"
              orientation="vertical"
              valueLabelDisplay="auto"
              value={settings.speed}
              step={0.1}
              min={.01}
              max={2}
              marks
              onChange={handleSliderChange}
            />
        </Stack>
        <IconButton className="restartButton"  onClick={() => {
           // reset each planet's settings
          PLANETS.forEach((planet) => {
            planetRefs[planet].current.resetSettings();
          });

          setSettings({
            ...settings,
            sunMassMultiplier: 1,
            speed: 1,
          });
        }}>
          <RestartAltIcon style={{width: "100%", height: "100%"}} />
        </IconButton>
      </div>
      <img className="sun" src="./img/sun.png" alt="sun" />
      {PLANETS.map((planet) => (
        <Planet
          ref={planetRefs[planet]}
          name={planet.toLowerCase()}
          sunMassMultiplier={settings.sunMassMultiplier}
          speed={settings.speed}
          trueDistance={settings.trueDistance}
        />
      ))}
    </div>
  );
};

export default SolarSystem;
