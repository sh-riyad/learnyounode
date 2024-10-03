const http = require("http")

http.get(process.argv[2], (response) => {
    response = response.setEncoding("utf8")
    response.on('data', function (data) {
        console.log(data)
    })
})


// const server = http.createServer((request, response) => {
//     response.setHeader(200, { "Content_Type": "text/plain" })
// })