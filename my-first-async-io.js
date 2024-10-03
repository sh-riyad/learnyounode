const fs = require('fs')

fs.readFile(process.argv[2], "utf8", (error, data) => {
    if (error) {
        console.log("Some Errors");
        return;
    }
    console.log(data.split('\n').length-1)

})
