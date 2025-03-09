const myArr = [0,1,2,3,4,5]

const arrrr = [0,1,2,3,4,5,"abc"]

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // 9 ko array ke start me add akr dega
// myArr.shift()  // shift se vapis normal array pe aa jayenge

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // -1 jo hai he nhi usme -1 de dega

// const newArr = myArr.join()

// console.log(myArr); // [0,1,2,3,4,5]
// console.log( newArr); // 0,1,2,3,4,5


// slice, splice

console.log("A ", myArr); // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) 

console.log(myn1); // [1,2]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr); //[0,4,5]
console.log(myn2); //[1.2,3] splice array ko manipulate karta h jo range de rakhi usko array me se bhi cut kar dega slice manipulate nhi karta 