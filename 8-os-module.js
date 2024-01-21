const os= require('os')         // built in modules ka directly name use kro
// info about curretn user
const user= os.userInfo();
// console.log(user)
//method returns the sytem uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)