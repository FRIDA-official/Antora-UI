'use strict'

module.exports = function () {
  return Array.from(arguments)
    .substring(0, arguments.length - 10);
}
