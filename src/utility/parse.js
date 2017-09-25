export const PARSE_BASE_URL = 'https://tiny-lasagna-server-new.herokuapp.com/api';
export const PARSE_HEADERS = {
  "X-Parse-Application-Id": "tiygvl",
  "X-Parse-REST-API-Key": "slumber"
}

// parseClass is the class you want to associate the record with (e.g. _User if you want to point the record to a specific user)
// objectId is the specific record in the parseClass you want to associate the record with
export const setPointer = (parseClass, objectId) => {

  let pointerObject = {
    '__type': 'Pointer',
    'className': parseClass,
    'objectId': objectId
  };

  return pointerObject;
}

// e.g. parseURL('chef', _User, objectId)
export const parseWhere = (field, parseClass, objectId) => {
  let object = {};

  object[field] = {
    '__type': 'Pointer',
    'field': field,
    'className': parseClass,
    'objectId': objectId,
  }

  let whereClause = `?where=${JSON.stringify(object)}`
  console.log('where', whereClause);
  return whereClause;
}
