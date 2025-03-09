const name = "shrish"
const repocount = 50

console.log(`hello my name is ${name} and my repo is ${repocount}`)

const gameName = new String('shashwat')

// console.log(gameName[0]); // s
// console.log(gameName.__proto__); // {}
// console.log(gameName.length)  //8
// console.log(gameName.charAt(2)); //a
//console.log(gameName.indexOf('t')) //7
//console.log(gameName.toUpperCase()) //SHASHWAT

const newString = gameName.substring(0,4)
console.log(newString)

const anotherstring = gameName.slice(-7,5)
console.log(anotherstring)

// substring me minus nhi chalta tu dega to vo minus ignore karke zero se he chalu karega

console.log(gameName.trim()); // trim is used to remove spaces

const url = "https://shrish.com/shrish%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('shrish')) // true

console.log(url.split('/'));  // ye '/' jaha jaha ye h vha split ho jayega