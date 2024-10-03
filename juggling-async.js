const http = require("http")
const bl = require("bl")

count= 0
results = []

for (let i = 0; i < 3; i++){
    http.get(process.argv[2 + i], (response) => {
        response.pipe(bl(function (error, data) {
            if (error) {
                console.log(error)
            }
            // results.push(data.toString())
            results[i] = data.toString()
            count += 1
            
            if (count == 3) {
                results.map((x) => console.log(x))
            }
        }))
    })
}

