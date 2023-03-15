const Immutable = require("immutable");

export function getImmutableObject(object) {
  const transform = Immutable.fromJS(object, (key, value) => {
    return value.toMap();
  });

  return transform;
}
