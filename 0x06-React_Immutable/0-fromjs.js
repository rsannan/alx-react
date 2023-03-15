const Immutable = require("immutable");

function getImmutableObject(object) {
  const transform = Immutable.fromJS(object, (key, value) => {
    return value.toMap();
  });

  return transform;
}

module.exports = { getImmutableObject };
