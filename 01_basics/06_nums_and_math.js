const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 223.8966

//console.log(otherNumber.toFixed(2))
//console.log(otherNumber.toPrecision(3)) // decimal ke phle ki value ke liye specially

const hundred = 1000000
//console.log(hundred.toLocaleString('en-IN')); //  indian standard he hisab se comaa lagayega 10,00,000

//+++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math.abs(-4)); // to convert any negative value to positive or absolute value

console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // ceiling value dega mtlb agar maan lo 4 se zara sa bhi bda h to 5 de dega

console.log(Math.floor(4.9)) // floor value mtlb point ke baad kitna he ho vo choti value he lega jese isme 4
console.log(Math.max(4,3,5,6)) 
console.log(Math.min(4,1,2,3)) 

console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))  // isme value 10 se 20 ke andar he dega

