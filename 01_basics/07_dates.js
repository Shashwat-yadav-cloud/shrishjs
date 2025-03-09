let myDate = new Date()

console.log(myDate.toString()); //Sun Mar 09 2025 04:17:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Mar 09 2025
console.log(myDate.toLocaleString()); //3/9/2025, 4:17:01 AM

// type of date is object 

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString()); //Mon Jan 23 2023

myCreateDate = new Date("2023-01-24");
console.log(myCreateDate.toDateString()); //Tue Jan 24 2023

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(myCreateDate.getMonth());
console.log(myCreateDate.getDay());
console.log(Math.floor(Date.now()/1000))


newDate.toLocaleString('default',{
     weekday: "long"
})