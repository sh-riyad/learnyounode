const fs = require("fs");
const filteredData = []
module.exports = function (path, filter, callback) {
    fs.readdir(path, function (error, data) {
        error ? callback(error) : data.map((x) => {
            x.includes("." + filter) ? filteredData.push(x) : null
        })
        return callback(error, filteredData)
    })
};