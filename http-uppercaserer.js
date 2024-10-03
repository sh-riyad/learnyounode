const http = require("http")
const fs = require("fs")
const map = require("through2-map")
const port = process.argv[2]

server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(response)
})

server.listen(port)