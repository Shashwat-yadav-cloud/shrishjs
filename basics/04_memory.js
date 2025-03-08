// stack(primitive) , heap(non - primitive)

// jab bhi aap primitive use karte h to copy milti hai.
// non - primitive me refrence milta hai orgional chiz ka.

let myname = "shrish"

let anothername = myname

anothername = "chaiaurcode"

console.log(myname); // shrish

console.log(anothername); // chaiaurcode

// isme copy mil rhi hai na ki origional kyoki jab assign kiya to abhi bhi usme vhi value hai change nhi hui. 

userone = {
    email:"user@gmail.com",
    upi:"user@ybl",
}

let usertwo = userone

usertwo.email = "shrish@google.com"

console.log(userone.email);  // shrish@google.com
console.log(usertwo.email);  //shrish@google.com

// ab isme direct memory ka refrence diya tha to origional value change hui na ki phle jese copy thi this is in heap memory.

