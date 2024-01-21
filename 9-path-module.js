const path = require('path')

console.log(path.sep)
const filePath=path.join('/content','subfolder','test.txt') // adding ".." results in going to parent directory then further calculations
console.log(filePath)

const base= path.basename(filePath) // return the last dir/file in a given path 
console.log(base)

const absolute= path.resolve(__dirname,"content","subfolder","text")
console.log(absolute)

// const a=path.join("a",__dirname);
// console.log(a);          a\d:\node+express
// const b=path.resolve("a",__dirname);     d:\node+express
// console.log(b);
// __dirname is treated as the starting point,, if not mentioned then same as path.join