// For each loop
    const long=["c","java","JS","Mern","Python"]

    long.forEach(function(item){
        console.log(item);
    })
    //  2 method-Arrow funtion
    long.forEach((item)=>{
        console.log(item);

    })
    // 3.method
    function printME(item){
        console.log(item);
    }
    long.forEach(printME)
    // 4 scenario
    const langArr=[
        {name:"Priya",age:20},
        {name:"Ravi",age:24},
        {name:"Hari",age:26},
    ]
    const retvalue=langArr.forEach((item)=>{
        console.log(item.name)
    })
    console.log(retvalue);
    // In order find entry in object
    const obj=
        {name:"Priya",age:20}
        console.log(Object.entries(obj));
    // In object find the index  
    Object.values(obj).forEach((item,index)=>
    {
        console.log((item),index);
    })