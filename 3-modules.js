// modules- encapsulated code (only share minimum)
//nodejs uses commonJS under the hood, in commonJS every file is module by default
// const secret='SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`hello there ${name}`)
// }
// import person from './6-alternative-flavor'  doesnt work since es6
const names= require('./4-names')       // either destructure this or the method of accessing objects ke andar ki chize used below
const sayHi= require('./5-utils')
const data= require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
// console.log(person.name)