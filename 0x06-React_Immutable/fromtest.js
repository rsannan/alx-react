const lib = require("./0-fromjs");

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};
console.log(lib.getImmutableObject(obj));
