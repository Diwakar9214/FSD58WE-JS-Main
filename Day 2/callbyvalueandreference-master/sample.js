// call by Value

function changeprimitive(value)
{
  console.log("Value:", value)
  value=200
  console.log("Value:",value)
}
let num=5
changeprimitive(num)

//Call By Reference
 function changeobject(obj)
 {
  console.log("obj:",obj)
  obj.country="India"
  console.log("Obj:",obj)
  obj=600
  console.log("Obj:",obj)

 }
 let person={name:"John",age:20}
 console.log("person:",person)
 changeobject(person)
 console.log("person:",person)