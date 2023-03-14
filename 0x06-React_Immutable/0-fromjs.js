const Immutable = require("immutable");

function getImmutableObject(object) {
  const transform = Immutable.fromJS(object, (key, value) => {
    return value.toMap();
  });

  return transform;
}

console.log(
  getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  })
);

module.exports = { getImmutableObject };
