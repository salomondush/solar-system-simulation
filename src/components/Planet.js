// Description: Planet component that renders the planet image and its orbit
import React, { useEffect, useImperativeHandle, useState, forwardRef } from 'react';
import { getAcceleration, getAngularAcceleration, getNextValue } from  "../functions/functions";
import { PLANET_DATA, PIXEL_TO_METERS, INTERVAL } from '../constants/constants';
import './Planet.css';

const Planet = forwardRef((props, ref) => {
  const initialValues = {
    distance: PLANET_DATA.distance[props.name],
    velocity: 0,
    angle: 0,
    angularVelocity: PLANET_DATA.angularVelocity[props.name],
    x: 0,
    y: 0,
  };

  const scale = PLANET_DATA.distance.earth / PIXEL_TO_METERS;
  const delta = 3600 * 24 * props.speed / 10;
  const planetElement = document.getElementById(props.name);

  const [distance, setDistance] = useState(initialValues.distance);
  const [velocity, setVelocity] = useState(initialValues.velocity);
  const [angle, setAngle] = useState(initialValues.angle);
  const [angularVelocity, setAngularVelocity] = useState(initialValues.angularVelocity);
  let [x, setX] = useState(initialValues.x);
  let [y, setY] = useState(initialValues.y);

  useImperativeHandle(ref, () => ({
    resetSettings() {
      setDistance(initialValues.distance);
      setVelocity(initialValues.velocity);
      setAngle(initialValues.angle);
      setAngularVelocity(initialValues.angularVelocity);
      setX(initialValues.x);
      setY(initialValues.y);
    },
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {

      // get next values for distance, velocity, angle, angularVelocity
      const acceleration = getAcceleration(distance, angularVelocity, props.sunMassMultiplier);
      const nVelocity = getNextValue(velocity, delta, acceleration);
      const nDistance = getNextValue(distance, delta, nVelocity);
      setVelocity(nVelocity);
      setDistance(nDistance);

      const angularAcceleration = getAngularAcceleration(distance, velocity, angularVelocity);
      const nAngularVelocity = getNextValue(angularVelocity, delta, angularAcceleration);
      const nAngle = getNextValue(angle, delta, nAngularVelocity);
      setAngularVelocity(nAngularVelocity);
      setAngle(nAngle);

      setX(nDistance * Math.cos(nAngle) / scale);
      setY(nDistance * Math.sin(nAngle) / scale);

      if (planetElement) {
        planetElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    }, INTERVAL);
    return () => clearInterval(intervalId);
  }, [distance, velocity, angle, angularVelocity, x, y, props.sunMassMultiplier, delta, scale, planetElement]);

  return (
      <img id={props.name} className="planet" src={`./img/${props.name}.png`} alt={props.name} />
  );
});

export default Planet;