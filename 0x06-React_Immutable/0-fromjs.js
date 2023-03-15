import Immutable from 'immutable';

function getImmutableObject (object) {
  return Immutable.fromJS(object);
}

module.exports = { getImmutableObject };
