// Get a universally unique identifier
'use strict';

module.exports = (function () {
  var count = 0;
  return function () {
    return 'react-tabs-' + count++;
  };
})();