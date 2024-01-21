const {readFileSync,writeFileSync}= require('fs')
// const fs= require('fs')
console.log('start')
const first= readFileSync('./content/first.txt','utf-8')        // path, encoding
const second= readFileSync('./content/second.txt','utf-8')

console.log(first,second)           // prints the content of both the files

// fileName(if doesnt exist node will creat one), value that we wanna pass, type of operation         flag:'a' means append
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'}) // executing this appended the argument in that file however the new file wont get console lgo rather the part that was appended
console.log('done with first task')
console.log('starting second task')