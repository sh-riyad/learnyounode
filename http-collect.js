const http = require("http")
const bl = require('bl')

http.get(process.argv[2], (response) => {
    response.pipe(bl(function (error, data) {
        if (error) {
            console.log(error)
        }
        else {
            data = data.toString()
            console.log(data.length)
            console.log(data)
        }
    }))
})