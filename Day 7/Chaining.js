//    Chaning Function
   const langArr=[
        {name:"Priya",age:20},
        {name:"Ravi",age:24},
        {name:"Hari",age:26},
    ]
    const newarr=langArr.filter((ele)=>{
        return ele.age>9
    }).map((ele)=>{
        return ele.age==12
    })
    console.log(newarr);
    // 2. Scenario
    const arr=[1,2,3,4,5,,6,undefined,null]
    const newarray=arr.map((ele)=>{
        return ele+12
    }).map((ele)=>{
        return ele-5
    })
    console.log(newarray);