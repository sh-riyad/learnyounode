// const fs = require('fs')
// filePath = process.argv[2]
// fileContent = fs.readFileSync(filePath).toString()
// substrings = fileContent.split('\n');
// console.log(substrings.length-1)

console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1);
