// 1.Arrow Function

var x=()=>{
    console.log("Hello-Arrow Function")
}
x()
// 2.Arrow Function

var x=(num1,num2)=>{
    console.log(num1+num2)
}
x(2,3)
// 3.Arrow Function

var x=num1=>{
    console.log(num1)
}
x(2,3)
// 4.Arrow Function

var x=(num1)=>{
    console.log(num1)

}

var x=()=>{
    console.log("Hello")
}
x()
// 5.Arrow Function

var x=(num1)=>{
    var a=num1*2
    return a
}
var res=x(2,3)
console.log("Res:",res)

// 6.Arrow Function

function a()
{
    b()
    function b()
    {
        console.log("b")
    }
}
a()