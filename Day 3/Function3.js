//3 use case Function
function add(num0,num1,num2)
{
var a=num1+num2+num0
if(a==typeof(Number))
{
return a
}
console.log(a)
}
var res=add()
var res1=add(2,3,"a")
add(45,null)
add(78,undefined)
 console.log("Res:",res)
 console.log("Res1:",res1)
