'use strict'

const plugin = {
  register: function (server, options, next) {
    const routes = [
      {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          const headers = request.headers

          server.log('info', headers)

          reply(headers)
        }
      }
    ]

    // add defined routes to hapi
    server.route(routes)

    next()
  }
}

plugin.register.attributes = {
  name: 'request-headers',
  version: '1.0.0'
}

module.exports = plugin