const fs = require("fs")

const path = process.argv[2]
const filter = process.argv[3]

fs.readdir(path, (error, data) => {
    if (error) {
        console.log(error)
        return;
    }
    data.map((x) => {
        if (x.includes("." + filter)) {
            console.log(x);
        }
        
    })

})

