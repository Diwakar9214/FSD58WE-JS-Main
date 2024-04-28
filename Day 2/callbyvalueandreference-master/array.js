let fruits=["Apple","Banana","Grapes"]
let number=[1,2,3,4,5]

let mixedArray=[true,"hello",[3,4,5,6],{name:"Ravi",age:20}]

console.log("Fruits:",fruits)
console.log("number",number)
console.log("Mixed Array:",mixedArray)


//Array Constructor
let emptyArray=new Array();
let emptyArray2=Array()
let emptyArray3=new Array(5)


console.log("Empty Array:",emptyArray)
console.log("Empty Array2:",emptyArray2)
console.log("Empty Array3:",emptyArray3)

emptyArray3[2]=100
console.log("Mixed Array:3rd index",emptyArray3[2])
mixedArray[10]=89
console.log("Mixed Array:10 index ",mixedArray[10])

//Properties of Array

console.log("Mixed Array length:",mixedArray.length)

//Add element at end of array
const length=mixedArray.push(100)
console.log(length)
//remove element at end of array
console.log(mixedArray)
mixedArray.pop()
console.log(mixedArray)
//Add element at Beginning of array
mixedArray.unshift(12)
console.log(mixedArray)
//remove element at Beginning of array
mixedArray.shift()
console.log(mixedArray)
//Concat to 2 Array

const concatarray=mixedArray.concat(fruits)
console.log("Concat Array:",concatarray)
console.log("Mixed Array:",mixedArray)
//Slice

let slicedArray=mixedArray.slice(1,-1)
console.log("Sliced Array:",slicedArray)
console.log("Mixed Array :",mixedArray)

//Splice

let SplicedArray=mixedArray.splice(1,1,["Priyanka","Ravi"])
console.log("SplicedArray:",SplicedArray)
console.log("Mixed Array:",mixedArray)