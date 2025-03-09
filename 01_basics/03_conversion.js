let score = "33abc"
let value = Number(score)
console.log(typeof value)  //Number 
console.log(value)  // NaN
 
score = null

value = Number(score)
console.log(value)  // 0


score = undefined

value = Number(score)
console.log(value)  // NaN

// NaN mtlb non a number
// true = 1
// null = 0
// undefined = NaN
let abc = ""
let boolean = Boolean(abc)
console.log(typeof value)  //boolean
console.log(value)  // 0 agar koi word h to true aayega
 


let str1 = "hello"

let str2 = " shrish"

let str3 = str1 + str2

console.log(str3)

console.log("1" + 2); //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

console.log(+true);  //1

//pre and post increament hai js me

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0); // true because the reason is that an equality check ==  and comparisions > <>= <= work diffrently comparisions convert null to a number , treating it as 0. that's why (3) null >=0 is true and (1) null>0 is false.

//undefined tino condition me false dega

// ===
console.log("2" == 2) // isme true dega kyoki barabr hai usne datatype compare nhi kiya.


console.log("2" == 2) // isme false dega kyoki barabr nhi hai usne datatype compare kiya hai.

// primitive data types

// 7 types: string, number , boolean , null , undefined , symbol , BigInt  these all are call by value

// refrence (non primitive)

// array , objects , functions 


let myobj = {
    name : "shrish",
    age: 22,
}

const heros = ["shaktiman","naagraj","doga"];

const myfunction = function(){
    console.log("hello world");
}