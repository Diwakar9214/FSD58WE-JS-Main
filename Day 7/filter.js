// Filter
    const lang=["c","java","JS","Mern","Python"]
    const arr=[1,2,3,4,5,,6,undefined,null]

    const newarr=arr.filter((num)=>{
        return num>3
    })
    console.log(newarr);
    console.log(arr);
//2. Scenario
    const newarr1=arr.filter(function(num){
        return num>3
    })
    console.log(newarr);
    console.log(arr);
 //3. Scenario
    const langArr=[
        {name:"Priya",age:20},
        {name:"Ravi",age:24},
        {name:"Hari",age:26},
    ]
    const newarrr=langArr.filter((ele)=>{
        return ele.name=="Ravi"
    })
    console.log(newarrr);
//4. Scenario
const arr1=langArr.filter((ele)=>ele.name=="Ravi" && ele.age>10)
console.log(arr1);
// 5. Scenario
    const array=[1,2,3,4,5,,6,undefined,null]
    const newArray=array.map((ele)=>{
        return ele +100
    })
    console.log(newArray);