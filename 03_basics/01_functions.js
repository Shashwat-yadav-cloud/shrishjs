
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2); // agar arguement nhi dete hai to vo NaN de dega call krne pe. 
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1  // this ...num1 will give you the whole array that has been sent by when you called.
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // [500 ,2000]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // username is hitesh and price is undefined. undefined kyoki usme mene prices likha h aur isme price.
handleObject({
    username: "sam",
    price: 399
})  // username is sam and price is 399.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 500, 1000])); //400