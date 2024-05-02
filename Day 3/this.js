// This, calling function with object
function hello()
{
    console.log(this)
}
var abc=100
var hi=
{
    name:"Ravi",
    hello
}
var you={
    name:"Hari",
    hello
}

hi.hello()
you.hello()

// 2. Example calling function with object
function hello()
{
    console.log(`I am ${this.name}`)
}
var abc=100
var hi={
    name:"Ravi",
    hello
}
var you={
    name:"Dinesh",
    hello
}
hello()
// 3. Example calling function with object

function hello()
{
    console.log(`I am ${this.name}`)
}
var abc=100
var hi={
    name:"Ravi",
    hello
}
var you={
    name:"Dinesh",
    hello
}

var mehello=hello.bind(hi)
hello.call(hi)
mehello()
//4. Example calling function with object

    function hello(age,city){
        console.log(`I am ${this.name},${age},${city}`)

    }
    var hi={
        name:"Ravi",
        hello
    }
    var you={
        name:"Sharma",
        hello
    }
    var mehello=hello.bind(hi)
    hello.call(hi,9,"bug")
    hello.apply(hi,[9,"bug"])

