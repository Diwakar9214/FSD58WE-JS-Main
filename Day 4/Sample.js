let a=10
var b=100
console.log(a)
//let &  const is phase 1, it is in temporal dead zone in js and value is unavailable
var e=12
var e=14
const c ="Priyanka"
let f=100
console.log(f);
console.log(c);
console.log(e);
//Block statement is used to run mulitple statement in block and it is call back
{
//compound statement

var num=10
let num1=10
const num2=100
console.log(num)
console.log(num1);
console.log(num2);
}
// console.log(num)
// console.log(num1);
// console.log(num2);
//2 scenario function statement and block statement are different
var num=70

function abc() {
    var num=10
    let num1=10
    const num2=100
    console.log(num)
    console.log(num1)
    console.log(num2)
}
abc()
console.log(num)
//3 scenario
console.log("3 Scenario")
let bb=200
if(true)
    {
        var aa=10 //Global
        let bb=10
        const cc=100
        console.log(aa);
        console.log(bb);
        console.log(cc);
    }
    console.log(aa)
    console.log(bb)
//4 Scenario
console.log("//4 Scenario");
let bbb=200
if(true)
{
    let bbb=10
    function abc()
    {
        let bbb=600
    console.log(bbb);
    }
    abc()
    console.log(bbb);

}
console.log(bbb)