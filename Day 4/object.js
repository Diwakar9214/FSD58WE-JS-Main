const obj={
    name:"Priyanka",
    age:20,
    score:[20,30,40],
    subject:{
        math:20,
        eng:"Teacher",
    },
        "first name":"hello",
        2:90

    
    }

// // console:
//  obj.name
//  obj."name" is not allowed
//  obj.2 is not allowed
//  obj["2"]
// obj.score.push(20)
// obj["last name"]="world"
obj.greeting=function()
{
    console.log("hi")
}
// obj.greeting

// 2. Sceranio
const obj2={
    name:"Ravi",
    age:20,
    score:[20,30,40],
    subject:{
        math:20,
        eng:"Teacher",
    },
        "first name":"hello",
        2:90,    
    }
    // console: obj.greeting.bind(obj2)
    // obj.name===obj2.name
    // Object.freeze(obj)-Never change new property but add values
// 3. Sceranio

const obj3={obj,obj2}
console.log(obj3)

// 4. Sceranio

const obj4={...obj,...obj2}
console.log(obj4)

// 5. Sceranio
console.log("5");
Object.assign(obj,obj2)
console.log(obj)

// 6. Sceranio
console.log("6");
const target=Object.assign({},obj,obj2)
console.log(target)

// 7. Sceranio
console.log("7");

const {subject:subs}=obj2
console.log(subs.math)
// 8. Sceranio
console.log("8");

const {subject:{math:Ma}}=obj2
console.log(Ma)

// 9. Sceranio
console.log("9");

const {subject:{math:Mas},score:scr}=obj2
console.log(Mas,scr)
// 10. Scenario

const{
["first name"]:first,subject:{math:Mas1},score:scr1
}=obj2
console.log(first,Mas1,scr1);


// 11. Scenario
const arr=[1,2,3,4,5]
    const [a1,b1,,c2]=arr
    console.log(a1,b1,c2);
