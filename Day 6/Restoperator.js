// Rest operator

function sum(...num)
{
    console.log(num)
    let add=0
    for(const i of num)
        {
            add+=i
        }
        return add
}
console.log(sum('b',1,2,3,4,'a'))

// 2 Scenario
function person(name,age,...args)
{
    return{
        name,age,skills:args,
    }

}
const p1=person("Priya",30,"JS","HTML","Java","CSS")
console.log(p1)
// 3 Scenario
function person(name="Suriya",age=34,...args)
{
    return{
        name,age,skills:args,
    }

}
const p2=person("Priya",42)
console.log(p2)
// 4 Scenario

const a1=[1,2,3,4,5]
const[num1,num2,...rest]=a1
console.log(num1,num2,rest)

// 5 Scenario

function ex()
{
    return [1,2]
}
const arr=ex()
const [num3,num4,...rest1]=arr
console.log(num1,num2,rest1)