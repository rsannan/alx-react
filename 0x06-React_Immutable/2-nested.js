import Immutable from "immutable";

export default function accessImmutableObject(object, array) {
  return Immutable.getIn(object, array);
}
