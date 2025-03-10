// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // immediate execute hone ke liye aur kayi bar global ke pollution se problem hoti h kai bar pollution hatane ke liye iffi ka use kiya.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// browser ke andar this ki value window object atti hai.

//javascript execution context

//globl execution context shuru me jab programm banta h to ye bhi banta he hai aur isse refer kar diya jata hai this ko . this me iss global EC ko rakh diya jaata hai.
//global execution context
//function execution context

//memory creation phase 
//execution phase

// let val1 = 10
// let val2 = 5

// function addNum(num1,num2){
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10,2)



// ab iss programm ke liye execution 
// sabse phle global execution hoga aur usko this ko de diya jayega
// ab memory phase
// val1 - undefined
// val2 - undefined
// addNum - defination
// result1 - undefined
// result2 - undefined

// now execution phase 

// val1 - 10
// val2 - 5

// addNum - ab sike andar _______________________
//                        |new variable          |
//                        |environment           |
//                        |    +                 |
//                        |     execution thread |
//                        |                      |
//                        |______________________|

// ab addNum ke liye naya memory phase 
// val1 - undefined
// val2 - undefined
// total - undefined

// execution phase
// num1 - 10
// num2 - 5
// total - 15
// ye total global execution ko de dega aur ye thread delete ho jayegi


// ab ussi add num function ke baad result1 =15
// result2 ke liye phir se vhi process 

// b addNum ke liye naya memory phase 
// val1 - undefined
// val2 - undefined
// total - undefined

// execution phase
// num1 - 10
// num2 - 2
// total - 12

// ab iska total bhi vapis global execution context me jayega.


//call stack hai stack jesa    |          |
                            // |          |
                            // |          |
                            // |__________|
                            // | global   |
                            // | execution|
                            // |__________|

//global execution to rahega he usme jo method call hoti jayega aur jati jayegi.