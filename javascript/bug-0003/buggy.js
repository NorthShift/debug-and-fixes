  var stringify = function(obj) {
  if (typeof obj === 'function') { return undefined;}
  if (typeof obj === 'undefined') { return undefined;}
  if (typeof obj === 'number') { return obj;}
  if (obj === 'null') { return null;}
  if (typeof obj === 'boolean') { return obj;}
  if (typeof obj === 'string') { return '\"' + obj + '\"';}
  if (Array.isArray(obj)) { 
    return obj.map(function (e) {
        return stringify(e);
    });
  } else {
    var keys = Object.keys(obj);
    var container = keys.map(function (k) {
        return k + ': ' + stringify(obj[k]);
    });
    return '{' + container.join(', ') + '}';
  }
};

var stringifyJSON = function(obj) {
    if (typeof stringify(obj) != 'undefined') {
        return "" + stringify(obj) + "";
    }
};
