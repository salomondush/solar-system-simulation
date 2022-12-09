const PLANET_DATA = {
    // gravitational constant
    G: 6.67408 * Math.pow(10, -11),
    // mass of the sun
    M: 1.989 * Math.pow(10, 30),

    // plaents distance from the sun
    distance: {
        earth: 1.496 * Math.pow(10, 11),
        mars: 2.279 * Math.pow(10, 11),
    },

    // angular velocity of the planets
    angularVelocity: {
        earth: 2 * Math.PI / (365 * 86400),
        mars: 2 * Math.PI / (687 * 86400),
    },
};

const PLANETS = ["earth", "mars"];

const INTERVAL = 0.00001; // ms
const PIXEL_TO_METERS = 180; // 180 pixels = 1 meter


export { PLANET_DATA, PLANETS, INTERVAL, PIXEL_TO_METERS };