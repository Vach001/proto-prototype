/* Airplane TASK:
Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false 
*/

const airPlane = {
  isFlying: false,
};

Object.defineProperties(airPlane, {
  init: {
    value: () => {
      return (airPlane.name = "Antonov An-124 Ruslan");
    },
  },
  takeOff: {
    value: () => {
      return (airPlane.isFlying = true);
    },
  },
  land: {
    value: () => {
      return (airPlane.isFlying = false);
    },
  },
});

console.log(airPlane.init());
console.log(airPlane.takeOff());
//console.log(airPlane.land());
