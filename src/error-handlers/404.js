'use strict';

function error404(request, response, next) {
  response.status(404).send('NOT-FOUND');
}

module.exports = error404;
