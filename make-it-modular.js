const myModule = require("./mymodule.js");

myModule(process.argv[2], process.argv[3], function (error, data) {
    error ? console.log(error) : data.map((x) => console.log(x));
})