//Function Statement

function a(){
    console.log("Hello-Function Statement")
}
a()
//Function Expression

var b=function()
{
    console.log("B called-Function Expression")
}

//Anonymous Function

(function(){
    console.log("C-Anonymous Function")})

//Named Function Expression

var b=function abc(){
console.log(abc)
console.log("B Called-Named Function Expression")
}
b()
//First Class Function

var c=a(b)
console.log(c)

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
