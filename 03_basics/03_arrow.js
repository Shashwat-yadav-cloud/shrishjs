const user = {
    username : "shrish",
    price : 999, // this is used to access current context

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage()

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//  function chai(){
//      let username = "hitesh"
//      console.log(this.username);   // this function ke andar nhi karta kaam hamesha object me he hoga undefined de dega.
//  }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);   // this function ke andar nhi karta kaam hamesha object me he hoga.
}

// const addTwo = (num1, num2) => {
//     return num1+num2
// }



const addTwo = (num1, num2) => (num1+num2) // return kar dega ye num1+num2 ko () esse bracket me hoga to return karega bina return likhe agara curly {} vale bracket h to return karne ke liye return likhna padega.


console.log(addTwo(3,4))

const addThree = (num1, num2) => ({username: "hitesh"})


console.log(addThree(3, 4))