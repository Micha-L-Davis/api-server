'use strict';

function logRoute(request, response, next) {
  console.log(request.path);
  next();
}

module.exports = logRoute;
