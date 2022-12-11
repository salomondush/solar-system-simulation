# Math 2420: Earth and Mars Orbital Motion Final Project
## Salomon Dushimirimana

Credit: Special thanks to Intiser Rajoan Parash for working with me on the technical details of the project.

### Introduction
This project explores the dependence of the orbit on the initial position and velocity by utilizing Euler's method to solve the differential equations of motion through the approximation of the next values for the position and velocity. The program is written in React, a JavaScript library for building user interfaces.

### Euler's Method Implementation
- The implimentation is in the following file 
https://github.com/salomondush/solar-system-simulation/blob/f8a8e42adf07bdeef3c49354f249f972b34c4011/src/functions/functions.js#L16

### prerequisites
According to multiple credible sources, you don't need Node to run a react app. However, I have not tested this. If you are interested in running the program, you will need to install the following:
1. Node/npm 
    - **Stop before the creating simple program section.**
    - Mac OS installation instructions, see https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos
    - Windows installation instructions, see https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-windows 
2. React
### How to run the program

1. Clone the repository
`git clone https://github.com/salomondush/solar-system-simulation.git`
2. Install the dependencies by running `npm install`
3. Run the program by running `npm start`
4. The program should open in your default browser. If not, go the address listed in the terminal. You'll see an interface with space, the sun, earth, mars, and a small panel to control mass of the sun and the speed of the planets. 

**Sample Run**

![PNG image](https://user-images.githubusercontent.com/63796975/206668449-928ed7d7-e01f-4a9b-916b-8847d2e646e1.png)

