import { getIn, Map } from 'immutable';

export default function accessImmutableObject (object, array) {
  return getIn(object, array, Map(object));
}
