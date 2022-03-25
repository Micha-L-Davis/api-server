'use strict';

function error500(request, response, next) {
  response.status(500).send('SERVER ERROR');
}

module.exports = error500;
