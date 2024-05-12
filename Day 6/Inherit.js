// Inherit
// old way
const human={
    greet:function()
    {
        console.log("Hello,I am a human")
    }
}
const superman={
    name:"Priyanka",
    __prototype__:human,
}
// console
// superman.__prototype__.greet()
// superman.name
// human.name
// human.greet()

// New way
const human1={
    name:"hari",
    greet:function()
    {
        console.log("Hello,I am a human")
    }
}
const supermann={}
Object.setPrototypeOf(supermann,human1)
console.log(supermann)

// changing prototype of object in base template
// COnsole
// Object.prototype.greet=function()
// {
//     console.log("Hello")
// }
// human1.greet()
// supermann.greet()