// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbol ko key ka tarah use karna h to esse karenge square bracket karke.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// hitesh@google.com
// console.log(JsUser["email"]) // hitesh@google.com
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // isse object freeze ho jayega aage jese ye microsoft vala change h ye nhi dikhega
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo());// it will give Hello JS user, Hitesh

// always use dot par kuch kuch case me [] bhi karna padta h.