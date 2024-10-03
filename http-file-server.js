const http = require("http")
const fs = require("fs")
const port = process.argv[2]
const path = process.argv[3]

server = http.createServer(function (request, response) {
    reader = fs.createReadStream(path);
    reader.pipe(response)

})
server.listen(port)

