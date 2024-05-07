function x()
{    var a=7
    function y()
    {
        console.log(a)
    }
    y()
}
x()
// A combination  of function in which bundled together . eg: y with x and has reference with surrounding
// Lexical environment -chaining to its environment
// A combination of function in which bundled together in lexical environment

// 2 scenario
console.log("// 2 scenario");

function sample()
{
var b=7
function sam()
{
    console.log(b);
}
return sam
}
sample()()
//2 method let xyz=sample()
// xyz()

// 3 scenario
console.log("// 3 scenario");

function sample1(num)
{
var c=7
function sam()
{
    console.log(c+num);
}
return sam
}
var abc=sample1(2)
var xyz=sample1(3)
abc()
xyz()
// 4 scenario
console.log("// 4 scenario");
function sample1(num)
{
var c=7
function sam()
{
    console.log(c+num);
}
return sam
}
var abc=sample1(2)
var xyz=sample1(3)
abc()
xyz()
// 5 scenario
console.log("// 5 scenario");
function sample1()
{
var c=7
function sam(num)
{
    console.log(c+num);
}
return sam
}
var abc=sample1()
var xyz=sample1()
abc(2)
xyz(3)
abc(5)
xyz(100)
// 6 scenario
console.log("// 6 scenario");
function sample1()
{
    var d=0
var c=7
function sam(num)
{
    d+=num
    console.log(d);
}
return sam
}
var abc=sample1()
var xyz=sample1()
abc(2)
xyz(3)
abc(5)
xyz(100)