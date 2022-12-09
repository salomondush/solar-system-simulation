// Description: This file contains all the functions used in the simulation
// including an application of Euler's method to calculate the next value
// of a variable given the current value, the time interval, and the derivative


import { PLANET_DATA } from "../constants/constants";

export const getAcceleration = (distance, angularVelocity, sunMassMultiplier = 1) => {
    return distance * Math.pow(angularVelocity, 2) - PLANET_DATA.G * PLANET_DATA.M * sunMassMultiplier / Math.pow(distance, 2);
}

export const getAngularAcceleration = (distance, velocity, angularVelocity) => {
    return -2 * velocity * angularVelocity / distance;
}

export const getNextValue = (currValue, deltaTime, derivative) => {
    return currValue + deltaTime * derivative;
}