const net = require('net')
const strftime = require("strftime")
const port = process.argv[2]

function fill(x) {
    if (x >= 10) {
        return x
    }
    else {
        return "0" + x
    }
}
const server = net.createServer(function (socket) {
    var date = new Date()
    data = date.getFullYear() + "-" + fill(date.getMonth() + 1) + "-" + fill(date.getDate()) + " " + date.getHours() + ":" + date.getMinutes()

    //console.log(socket)
    socket.write(data + '\n')
    socket.end()
})
server.listen(port)