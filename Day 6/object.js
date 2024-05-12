// Object literal
const person={
    name:"Priyanka",
    age:30,
}
console.log("Person:",person)
// Object.create

const superman = Object.create(person)
console.log("SUperman:",superman);
// 2 Scenario
const person1={
    name:"Priyanka",
    greet:function()
    {
        console.log("Hello , I'm a",this.name);
    },}
    console.log("person1:",person1);

const superman1={
    name:"Ravi",
    greet:function()
    {
        console.log("Hello I am a ",this.name)

    }
}
console.log("SUperman1:",superman1)