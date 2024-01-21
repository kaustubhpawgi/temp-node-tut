// npm - global command, comes with node
// npm --version

// local dependency, use it only in this particular project
// npm i <packageName>

// global dependency - use it any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file(stores important info about package/project)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everythin default)

const _ = require('lodash')
const items= [1,[2,[3,[4]]]]
const newitems= _.flattenDeep(items)
console.log(newitems)